const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
    cloud_name: 'dzkk7ubqq',
    api_key: '889131577884438',
    api_secret: 'AVh8qLZkL5EFPlkHdmc78YqGNmI',
    secure: true,
});

// Function to upload a file to Cloudinary
const upload_file = (file, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            file,
            {
                resource_type: 'auto',
                folder: folder || '', // Optional folder, use if provided
            },
            (error, result) => {
                if (error) {
                    console.error('Error uploading file:', error);
                    return reject(error);
                }
                resolve({
                    public_id: result.public_id,
                    url: result.secure_url,
                });
            }
        );
    });
};

// Export the function
module.exports = { upload_file };
