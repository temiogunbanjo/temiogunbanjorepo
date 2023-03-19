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
const { dataSource, 
// sendErrorResponse,
sendSuccessResponse } = require('./imports');
module.exports = {
    // Create or Update an item
    createUpdateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const col = 'animals';
            const key = req.body.name;
            const item = yield dataSource.updateItem(col, key, req.body);
            console.log(JSON.stringify(item, null, 2));
            return sendSuccessResponse(res, 200, item);
        });
    },
    //
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const col = req.params.col;
            const key = req.params.key;
            const item = yield dataSource.deleteItem(col, key);
            console.log(JSON.stringify(item, null, 2));
            return sendSuccessResponse(res, 200, item);
        });
    },
    //
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const col = req.params.col;
            const key = req.params.key;
            const item = yield dataSource.getItem(col, key);
            console.log(JSON.stringify(item, null, 2));
            return sendSuccessResponse(res, 200, item);
        });
    },
    //
    getAllItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const col = req.params.col;
            const items = yield dataSource.getAllItems(col);
            console.log(JSON.stringify(items, null, 2));
            return sendSuccessResponse(res, 200, items);
        });
    },
};
