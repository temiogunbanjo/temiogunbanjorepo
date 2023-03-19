import { ObjectSchemaDTO } from "../types";
const DynamoDB = require('./DynamoDBRepo');

module.exports = {
  // Create or Update an item
  async updateItem(col: string, key: string, item: ObjectSchemaDTO) {
    return DynamoDB.updateItem(col, key, item);
  },
  async deleteItem(col: string, key: string) {
    return DynamoDB.deleteItem(col, key);
  },
  //
  async getItem(col: string, key: string) {
    return DynamoDB.getItem(col, key);
  },
  //
  async getAllItems(col: string) {
    return DynamoDB.getAllItems(col);
  },
};
