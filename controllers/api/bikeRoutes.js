const router = require('express').Router();
const { Bike } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const fileUpload = multer();

router.patch('/uploadImage', fileUpload.single('image'), async (req, res) => {
  console.log(req.body);
  try {
    // const upload = req => {
    //   return new Promise( (resolve, reject) => {
    //   console.log("inside")
    //     const stream = cloudinary.uploader.upload_stream((error, result) => {
    //         if (error) {
    //           console.log("ERROR ERROR ERRRO")
    //           reject (error);
    //         }
    //         else {
    //           console.log("resolved")
    //           resolve( result );
    //         }
    //     });
    //     streamifier.createReadStream(req.file.buffer).pipe(stream);
    //   });
    // }
    // let result = await upload(req);
    // console.log( "this is the " + result );
    const updatedBike = await Bike.update({
      image: req.body.image
    },
    {
      where: { user_id : req.session.user_id }
    });
    res.json(updatedBike);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
} )

module.exports = router;
