const router = require('express').Router();
const { Bike } = require('../../models');
const withAuth = require('../../utils/auth');

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
