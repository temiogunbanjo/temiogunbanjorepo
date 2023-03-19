import { Request, Response } from "express";
const {
  dataSource,
  // sendErrorResponse,
  sendSuccessResponse
} = require('./imports');

module.exports = {
  // Create or Update an item
  async createUpdateItem(req: Request, res: Response) {
    console.log(req.body);

    const col = 'animals';
    const key = req.body.name;
    
    const item = await dataSource.updateItem(col, key, req.body);
    console.log(JSON.stringify(item, null, 2));

    return sendSuccessResponse(res, 200, item);
  },
  //
  async deleteItem(req: Request, res: Response) {
    const col = req.params.col;
    const key = req.params.key;
    
    const item = await dataSource.deleteItem(col, key);
    console.log(JSON.stringify(item, null, 2));

    return sendSuccessResponse(res, 200, item);
  },
  //
  async getItem(req: Request, res: Response) {
    const col = req.params.col;
    const key = req.params.key;
    
    const item = await dataSource.getItem(col, key);
    console.log(JSON.stringify(item, null, 2));

    return sendSuccessResponse(res, 200, item);
  },
  //
  async getAllItems(req: Request, res: Response) {
    const col = req.params.col;
    
    const items = await dataSource.getAllItems(col);
    console.log(JSON.stringify(items, null, 2));

    return sendSuccessResponse(res, 200, items);
  },
};
