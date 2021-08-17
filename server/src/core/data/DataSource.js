/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import User from '../domain/UserModel.js';
import DataRepo from './DataRepo.js';

/**
@class DataSource
* */
class DataSource {
  /**
   *
   * @param {DataRepo} dataRepo;
   */
  constructor(dataRepo) {
    this.datarepo = dataRepo;
  }

  /**
   * @param {User} user Input parameter
   * @return createUser{@link User}
   */
  async createUser(user) {
    if (user instanceof User) {
      await this.datarepo.createUser(user);
    }
  }

  async checkUserWithEmailAndPassWord(email, password) {
    
  }
}

export default DataSource;
