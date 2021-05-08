const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const upload = async (req, res, next) => {
    return new Promise( (resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (error) reject (error);
            else resolve( result );
        });

        streamifier.createReadStream(req.file.buffer).pipe(stream);
        next();
    })
};

module.exports = upload;