/* eslint-disable class-methods-use-this */
// import db into this repo

import { User } from '../../../models';

/**
 * @class
 */
class DataRepo {
  /**
   *
   * @param {UserModel} AUser
   * @returns UserModel
   */
  async createUser(AUser) {
    return User.create(AUser);
  }
}

export default DataRepo;
