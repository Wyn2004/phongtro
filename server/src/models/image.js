'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tao moi quan he 1 1 tthi dung hasOne
      Image.hasOne(models.Post, {
        foreignKey: 'imageID',
        as: 'images'
      });
    }
  }
  Image.init(
    {
      image: DataTypes.STRING,
      // ALTER TABLE `Images` MODIFY COLUMN `image` LONGTEXT;
      // doi data trong sql de lu dc nhieu data hon
      allowNull: false
    },
    {
      sequelize,
      modelName: 'Image'
    }
  );
  return Image;
};
