"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CyclicDb = require("@cyclic.sh/dynamodb");
const db = CyclicDb("smiling-dog-kitCyclicDB");
module.exports = {
    // Create or Update an item
    updateItem(col, key, item) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(item);
            console.log(`from collection: ${col} create key: ${key} with params ${JSON.stringify({ col, key })}`);
            const response = yield db.collection(col).set(key, item, {});
            console.log(JSON.stringify(response, null, 2));
            return response;
        });
    },
    //
    deleteItem(col, key) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`from collection: ${col} delete key: ${key} with params ${JSON.stringify({ col, key })}`);
            const response = yield db.collection(col).delete(key, {}, {});
            console.log(JSON.stringify(response, null, 2));
            return response;
        });
    },
    //
    getItem(col, key) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`from collection: ${col} get key: ${key} with params ${JSON.stringify({ col, key })}`);
            const response = yield db.collection(col).get(key);
            console.log(JSON.stringify(response, null, 2));
            return response;
        });
    },
    //
    getAllItems(col) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`list collection: ${col} with params: ${JSON.stringify({ col })}`);
            const response = yield db.collection(col).list();
            console.log(JSON.stringify(response, null, 2));
            return response;
        });
    },
};
