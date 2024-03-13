'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class techno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
   

    }
  }
  techno.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'techno',
    timestamps: false
  });
  return techno;
};