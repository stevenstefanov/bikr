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

router.post('/', withAuth, async (req, res) => {
  try {
    const newBike = await Bike.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBike);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.patch('/uploadImage/:id', async (req, res) => {
  console.log(req.body);
  const id = req.params.id
  const imgurl = req.body.image
  console.log(id, imgurl, '==============================================')

  try {

    const updatedBike = await Bike.update({
      image: imgurl
    },
      {
        where: { id: req.params.id }
      });

    res.json(updatedBike);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }

})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bikeData = await Bike.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bikeData) {
      res.status(404).json({ message: 'No bike found with this ID!' });
      return;
    }

    res.status(200).json(bikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;