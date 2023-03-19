import { Response } from "express";
import { ObjectSchemaDTO } from "../types";

type PayloadData = ObjectSchemaDTO | string | number | unknown[]
/**
 * @param {res} res
 * @param {code} code
 * @param {errorMessage} errorMessage description of error
 * @return response object {@link res}
 */
module.exports = {
  sendErrorResponse: (res: Response, code: number, errorMessage: string) => res.status(code).send({
    status: 'error',
    responsecode: code,
    responsemessage: errorMessage,
  }),
  sendSuccessResponse: (res: Response, code: number, data: PayloadData) => res.status(code).send({
    status: 'success',
    responsecode: code,
    data,
  })
};
