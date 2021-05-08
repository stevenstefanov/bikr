const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bike extends Model {}

Bike.init(
    {
        // Listing ID
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        date_created: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        // Title of the bike posting
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        // Bike type (mountain bike, race bike, city bike, etc)
        type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        // brand of the bike
        brand: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // Seller's description of the bike
        description: {
            type: DataTypes.STRING,
        },
        // Frame size
        frame_size: {
            type: DataTypes.INTEGER,
        },
         // Wheel size
         wheel_size: {
            type: DataTypes.INTEGER,
        },
        // Color of the bike
        color: {
            type: DataTypes.STRING,
        },
        // New, like new, used, for parts
        condition: {
            type: DataTypes.STRING,
        },
        // Selling price
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
        //Location of bike for sale
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5],
              },
        },
<<<<<<< HEAD
        image: {
          type: DataTypes.STRING,
          allowNull: true
        }
=======
>>>>>>> main
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bike',
      }
    );
    
    module.exports = Bike;
