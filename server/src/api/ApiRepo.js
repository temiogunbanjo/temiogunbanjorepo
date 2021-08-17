/* eslint-disable valid-jsdoc */
/* eslint-disable class-methods-use-this */

/**
@module ApiRepo
* */

import DataRepo from '../core/data/DataRepo';
import DataSource from '../core/data/DataSource';
import User from '../core/domain/UserModel';
import { sendSuccessResponse } from '../utils/sendResponses';

/**
@class
* */
class ApiRepo {
  /**
   * @constructor
   */
  constructor() {
    this.dataRepo = new DataRepo();
    this.dataSource = new DataSource(this.dataRepo);
    this.datasource = this.dataSource;
    // this.createUser.bind(this);
  }

  /**
   *
   * @method
   * @param {Request} req
   * @param {Response} res
   * @param {import('express').NextFunction} next
   * @returns Response
   */
  async healthCheck(req, res, next) {
    try {
      const user = new User(
        req.body.email,
        req.body.firstName,
        req.body.lastName,
        req.body.phone,
      );
      const repo = new ApiRepo();
      await repo.datasource.createUser(user);
      return sendSuccessResponse(res, 200, 'Created Successfully');
    } catch (error) {
      return next(error);
    }
  }
}

export default ApiRepo;
