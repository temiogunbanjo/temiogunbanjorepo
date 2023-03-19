import { ObjectSchemaDTO } from "../../types";
const CyclicDb = require("@cyclic.sh/dynamodb");
const db = CyclicDb("smiling-dog-kitCyclicDB");

module.exports = {
  // Create or Update an item
  async updateItem(col: string, key: string, item: ObjectSchemaDTO) {
    console.log(item);

    console.log(
      `from collection: ${col} create key: ${key} with params ${JSON.stringify(
        { col, key }
      )}`
    );
    const response = await db.collection(col).set(key, item, {});
    console.log(JSON.stringify(response, null, 2));
    return response;
  },
  //
  async deleteItem(col: string, key: string) {
    console.log(
      `from collection: ${col} delete key: ${key} with params ${JSON.stringify(
        { col, key }
      )}`
    );
    const response = await db.collection(col).delete(key, {}, {});
    console.log(JSON.stringify(response, null, 2));
    return response;
  },
  //
  async getItem(col: string, key: string) {
    console.log(
      `from collection: ${col} get key: ${key} with params ${JSON.stringify(
        { col, key }
      )}`
    );
    const response = await db.collection(col).get(key);
    console.log(JSON.stringify(response, null, 2));
    return response;
  },
  //
  async getAllItems(col: string) {
    console.log(
      `list collection: ${col} with params: ${JSON.stringify({ col })}`
    );
    const response = await db.collection(col).list();
    console.log(JSON.stringify(response, null, 2));
    return response;
  },
};
