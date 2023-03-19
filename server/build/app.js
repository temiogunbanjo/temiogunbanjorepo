"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app_ = express();
const indexRouter = require('./routes');
const { sendErrorResponse } = require('./utils/sendResponses');
app_.use(express.json());
app_.use(express.urlencoded({ extended: true }));
// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
//   index: ['index.html'],
//   maxAge: '1m',
//   redirect: false
// }
// app_.use(express.static('public', options))
// #############################################################################
app_.use('/v1', indexRouter);
// Catch all handler for all other request.
app_.use('*', (req, res) => {
    return sendErrorResponse(res, 404, 'no route handler found');
});
module.exports = app_;
