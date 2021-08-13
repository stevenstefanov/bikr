// Declare dependencies
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bikeRoutes = require('./bikeRoutes');

// Routes
router.use('/users', userRoutes);
router.use('/bicycles', bikeRoutes);

module.exports = router;