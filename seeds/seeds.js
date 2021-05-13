const sequelize = require('../config/connection');
const { User, Bike } = require('../models');

const userData = require('./userData.json');
const bikeData = require('./bikeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const bike of bikeData) {
    await Bike.create({
      ...bike,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();