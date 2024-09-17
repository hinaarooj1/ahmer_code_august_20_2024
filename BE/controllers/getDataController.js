let Slot = require("../models/Slot");
let SlugModel = require("../models/slug");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const express = require('express');
const RollCount = require('../models/rollCount');
// Use multer to handle form data

exports.getData = catchAsyncErrors(async (req, res, next) => {

  const allData = await Slot.find();

  res.status(200).send({
    message: "All Datas", allData
  });

})




exports.rollCount = catchAsyncErrors(async (req, res, next) => {

  const data = req.body;  // req.body for form data
  const address = data.address;
  const rollInput = data.roll;
  const freeSpinInput = data.freeSpin;

  const roll = rollInput ? parseInt(rollInput, 10) : null;
  const freeSpin = freeSpinInput ? parseInt(freeSpinInput, 10) : null;

  let updateFields = {};

  if (roll !== null && !isNaN(roll)) {
    updateFields.roll = roll;
  }

  if (freeSpin !== null && !isNaN(freeSpin)) {
    updateFields.freeSpin = freeSpin;
  }

  if (roll !== null && freeSpin !== null && roll <= freeSpin) {
    updateFields.roll = roll;
    updateFields.freeSpin = roll;
  }

  if (Object.keys(updateFields).length > 0) {
    const updateData = await RollCount.findOneAndUpdate(
      { address },
      updateFields,
      { new: true }
    );
    console.log('Updated Document:', updateData);
  }

  const allRoll = await RollCount.findOne({ address }).select(
    '-createdAt -updatedAt'
  );

  return res.status(200).send({
    message: 'Successfully credited roll to your account',
    allRoll,
  });

});



exports.getSlotData = catchAsyncErrors(async (req, res, next) => {

  // Using the aggregation framework
  const allData = await Slot.find()

  return res.status(200).send({
    message: "All Data",
    allData
  });
  // Sending response


}
)

exports.Slug = catchAsyncErrors(async (req, res, next) => {
  const { allSlug, ip } = req.body;
  console.log('data: ', req.body);

  // Find or create the slug document
  let slugDoc = await SlugModel.findOne({ slug: allSlug });

  if (!slugDoc) {
    // If slug doesn't exist, create a new document
    slugDoc = new SlugModel({ slug: allSlug });
  }

  // Check if IP is already in the Ips array
  if (!slugDoc.Ips.includes(ip)) {
    // Add IP to the Ips array if it's unique
    slugDoc.Ips.push(ip);
  }

  // Save the updated document
  await slugDoc.save();

  // Get the length of the Ips array
  const ipCount = slugDoc.Ips.length;

  return res.status(200).send({
    ipCount
  });

})