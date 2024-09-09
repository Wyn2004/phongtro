'use strict';
const {
    Model    
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // them moi quan he voi bang Image
      Post.belongsTo(models.Image, {
        foreignKey: 'imageID',
        targetKey: 'id',
        as: 'images'
      }),
      Post.belongsTo(models.Attribute, {
        foreignKey: 'attributesID',
        targetKey: 'id',
        as: 'attributes'
      }),
      Post.belongsTo(models.User, {
        foreignKey: 'userID',
        targetKey: 'id',
        as: 'user'
      })
    }
    }
    Post.init({
    title: DataTypes.STRING,
    star: DataTypes.STRING,
    labelCode: DataTypes.STRING,
    address: DataTypes.STRING,
    attributesID: DataTypes.STRING,
    categoryCode: DataTypes.STRING,
    description: DataTypes.TEXT,
    userID: DataTypes.STRING,
    overviewID: DataTypes.STRING,
    imageID: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'Post',
    });
    return Post;
};