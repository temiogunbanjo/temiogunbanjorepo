'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  /**
   * @class
   */
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    /**
     * @param {Models} models
     */
    static associate(models) {
      // define association here
    }
  }

  User.init({
    uuid: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
