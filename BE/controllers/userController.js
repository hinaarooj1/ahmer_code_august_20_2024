let User = require("../models/user");
let Slot = require("../models/Slot");
let landing = require("../models/landing");
const path = require('path');
const singleUpload = require('../middlewares/multer.js');
const { upload_file } = require("../utils/cloudinary.js");

// Usedto handle error
const { writeFile, unlink } = require("fs/promises");
const errorHandler = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");


const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const jwtToken = require("../utils/jwtToken");
const jwt = require("jsonwebtoken");


const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';

const fs = require('fs').promises;


const dirPath = path.join('./public/temp');

async function ensureDirectoryExists(dir) {

  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
    throw err;
  }
}
// 
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

  const { email, password } = req.body;
  console.log('req.body: ', email);
  if (typeof email !== 'string' || typeof password !== 'string') {
    return next(new errorHandler("Email and password must be string", 400));
  }


  const user = await User.findOne({ email: email });
  if (!user) {
    return next(
      new errorHandler(
        "Invalid Email or password"
      )
    );
  }

  // Compare the provided password with the stored hashed password
  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // if (!isPasswordValid) {
  //   return NextResponse.json(
  //     { error: "Invalid email or password" },
  //     { status: 401 }
  //   );
  // }
  if (password !== user.password) {
    return next(
      new errorHandler(
        "Invalid Email or password"
      )
    );
  }

  // Generate a JWT

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' } // Token expires in 1 hour
  );

  res.status(200).send({
    token,

  });

})
exports.RegisterUser = catchAsyncErrors(async (req, res, next) => {

  const data = req.body;
  console.log('data: ', data);
  const email = data.get("email");
  const password = data.get("password");
  if (typeof email !== 'string' || typeof password !== 'string') {
    return next(new errorHandler("Email and password must be string", 400));
  }



  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    return next(
      new errorHandler(
        "Email already in use"
      )
    );
  }

  // Compare the provided password with the stored hashed password
  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // if (!isPasswordValid) {
  //   return NextResponse.json(
  //     { error: "Invalid email or password" },
  //     { status: 401 }
  //   );
  // }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user instance
  const newUser = new User({
    email: email,
    password: hashedPassword,
  });

  // Save the user to the database
  await newUser.save();
  // Generate a JWT


  res.status(200).send({
    message: "User created"

  });

})
// 

exports.deleteFile = catchAsyncErrors(async (req, res, next) => {

  let id = req.params.id
  console.log(id, "dddddddddd");
  //@ts-ignore
  await Slot.findByIdAndDelete(id)
  res.status(200).send({
    message: "Item deleted successfully"
  });

})
exports.getLanding = catchAsyncErrors(async (req, res, next) => {
  console.log("dat");
  const allData = await landing.find();

  res.status(200).send({
    message: "All Datas", allData
  });

})



exports.landingData = catchAsyncErrors(async (req, res, next) => {
  // Use the multer middleware to handle file upload
  singleUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "File upload failed" });
    }

    // Extract files from the request
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const fileUrls = [];
    for (const file of files) {
      if (file) {
        const buffer = file.buffer;
        const mime = file.mimetype;
        const encoding = "base64";
        const base64Data = Buffer.from(buffer).toString("base64");
        const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

        // Save the file to the local directory (optional)
        const path = `./public/temp/${file.originalname}`;
        await writeFile(path, buffer);

        // Upload the file to Cloudinary or any storage provider
        const fileUrl = await upload_file(fileUri, "slot");
        fileUrls.push(fileUrl.url);

        // Remove the temporary file after upload
        await unlink(path);
      }
    }

    // Save the uploaded file URLs to your database
    const newSlot = new landing({
      file1: fileUrls[0],
      file3: fileUrls[1],
      file5: fileUrls[2],
    });
    await newSlot.save();
    res.status(200).send({
      message: "uploaded"
    });
  });
});


exports.textCheck = catchAsyncErrors(async (req, res, next) => {


  const slug = req.body.text;
  console.log('slug: ', req.body.text);
  const exist = await Slot.find({ Slug: slug });



  if (exist.length > 0) {
    const resp = true;
    res.status(200).send({
      resp,
      message: "uploaded"
    });
  }
  const
    resp = false;
  res.status(200).send({
    message: "uploaded", resp
  });

});

exports.updateSlot = catchAsyncErrors(async (req, res, next) => {

  const { _id } = req.body;
  const files = req.files; // Assuming you're using multer for file uploads


  if (!files || files.length === 0 || !_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  await ensureDirectoryExists(dirPath);
  const fileUrls = [];
  for (const file of files) {
    const buffer = file.buffer; // Access the buffer
    const mime = file.mimetype;

    // Convert buffer to base64
    const base64Data = buffer.toString('base64');
    const fileUri = `data:${mime};base64,${base64Data}`;

    console.log('fileUrls: ');
    // Save file temporarily
    const path = `./public/temp/${file.originalname}`;

    await writeFile(path, buffer);

    let fileUrl;
    if (fileUri) {
      fileUrl = await upload_file(fileUri, 'slot');
      fileUrls.push(fileUrl.url);
    }

    await unlink(path);
  }
  const concatenatedFileUrls = fileUrls.join(',');

  // Update database
  let slot = await Slot.findByIdAndUpdate(_id, { file: concatenatedFileUrls });
  console.log('Updated Slot:', slot);
  console.log("done");

  return res.status(200).send({ message: "Image updated successfully" });

})


exports.updateText = catchAsyncErrors(async (req, res, next) => {

  const { _id, editedText } = req.body;
  const getText = await Slot.findById(_id);

  if (getText.text1) {
    await Slot.findByIdAndUpdate(_id, {
      text1: editedText,
    });
  } else {
    await Slot.findByIdAndUpdate(_id, {
      text2: editedText,
    });
  }

  return res.status(200).send({ message: "Text updated successfully" });

})





exports.newText = catchAsyncErrors(async (req, res, next) => {
  const text = req.body.inputValue;
  const wordSlot = req.body.wordSlot;
  console.log("re", req.body);
  const wordSlotValue = parseInt(wordSlot, 10);

  if (wordSlotValue === 1) {
    console.log("first");
    const newSlot = new Slot({
      text1: text,
      // Slug: slug, // Uncomment and define `slug` if needed
    });
    await newSlot.save();
  } else {
    // console.log("2222");
    const newSlot = new Slot({
      text2: text,
      // Slug: slug, // Uncomment and define `slug` if needed
    });
    await newSlot.save();
  }

  return res.status(200).send({ message: "Text uploaded successfully" });

})


exports.mainAdmin = catchAsyncErrors(async (req, res, next) => {

  const files = req.files; // multer adds files to req.files
  console.log('files: ', files);
  const fileUrls = [];

  const latestSlot = await Slot.findOne().sort({ Slug: -1 }).exec();
  console.log('latestSlot: ', latestSlot);
  let newSlugNumber = latestSlot ? parseInt(latestSlot.Slug, 10) + 1 : 1;
  console.log('newSlugNumber: ', newSlugNumber);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileUri = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    const fileUrl = await upload_file(fileUri, 'slot');

    try {
      const newSlug = newSlugNumber.toString().padStart(3, '0');
      const newSlot = new Slot({
        file: fileUrl.url,
        Slug: newSlug,
      });
      await newSlot.save();
      fileUrls.push(fileUrl.url);

      newSlugNumber++;
    } catch (error) {
      console.error('Error saving slot:', error);
      return res.status(500).send({ error: 'Internal Server Error' });
    }
  }

  return res.status(200).send({ message: 'Images uploaded successfully', fileUrls });

})


exports.getImage = catchAsyncErrors(async (req, res, next) => {

  // const pipeline = [
  //   {
  //     $project: {
  //       _id: 1,
  //       file: 1,
  //       Slug: 1
  //     }
  //   },
  //   {
  //     $match: {
  //       $or: [
  //         { file: { $ne: null } },
  //       ]
  //     }
  //   }
  // ];

  // const allData = await Slot.aggregate(pipeline).exec();
  const allData = await Slot.find();




  return res.status(200).send({
    message: "All Data",
    allData
  });

})
exports.updateText = catchAsyncErrors(async (req, res, next) => {

  const bodyData = req.body;
  console.log('req.body: ', req.body);
  const { _id, editedText } = bodyData;

  const getText = await Slot.findById(_id);


  if (getText.text1) {
    await Slot.findByIdAndUpdate(_id, {
      text1: editedText,
    });
    return res.status(200).send({
      message: "Text updated successfully 1"
    });
  } else {
    await Slot.findByIdAndUpdate(_id, {
      text2: editedText,
    });
    return res.status(200).send({
      message: "Text updated successfully 2"
    });
  }
  return res.status(200).send({
    message: "Text updated successfully",
    allData
  });

})
