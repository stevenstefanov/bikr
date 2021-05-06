const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bike extends Model {}

Bike.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5],
              },
        }
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
