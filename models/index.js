// Import classes
const User = require('./User');
const Bike = require('./Bike');

// Establish relationships
User.hasMany(Bike, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bike.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bike };