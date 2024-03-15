'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proyect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      proyect.belongsToMany(models.area, {through: 'proyectsAreas'})
      proyect.belongsToMany(models.tech, {through: 'proyectech'})
      

    }
  }
  proyect.init({
    tittle: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    },
      
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'proyect',
    timestamps: false
  });
  return proyect;
};