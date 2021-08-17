/**
 *
 * Description. (This module handles input validation globaly in the app)
 *
 * @file   validatorMiddleWare
 * @author Ayooluwa Olosunde.
 * @since  24.05.2021
 */

import DbValidator from '../../core/data/dbValidator';
const { body, validationResult } = require('express-validator');

/**
 * @class
 * @name ValidatorMiddleWare
 */
class ValidatorMiddleWare {


     static validateSignUp = [
        body('firstName').not().isEmpty().isLength({ min: 2 }),
        body('surName').not().isEmpty().isLength({ min: 2 }),
        body('password').not().isEmpty().isLength({ min: 8 }),
        body('role', 'invalid user role'),
        body('specialization'),
        body('phone').not().isEmpty().isLength({ min: 8 })
          .isNumeric()
          .custom((phone) => DbValidator.numberIsTaken(phone)
            .then((numberIsTaken) => {
              if (numberIsTaken) {
                return Promise.reject(Error('Phone already in use'));
              }
            })),
        body('email').isEmail()
        .custom((email) => DbValidator.emailIsTaken(email)
            .then((emailIsTaken) => {
              if (emailIsTaken) {
                return Promise.reject(Error('E-mail already in use'));
              }
            }))
      ];
      
      static login = [
        body('email', 'please enter a valid email').normalizeEmail().isEmail(),
        body('password').trim().escape().isLength({ min: 6 })
      ];

      /**
       * 
       * @param {Request} req
       * @param {Response} res 
       * @param {import('express').NextFunction} next
       * @returns Any
       */
     static validateRequest (req, res, next) {
        const errors = validationResult(req);
        return errors.isEmpty()
          ? next() : sendErrorResponse(res, 422, errors.array()[0]);
      };
}

export default validationResult;
