/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

"use strict";

var mongoose = require("../lib/mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
    uid: {
        type: Number,
        unique: true,
        required: true
    },
    time: {
        type: Date,
        unique: false,
        required: true
    },
    message: {
        type: String,
        unique: false,
        required: false
    }
});

module.exports = mongoose.model("Reminder", schema);
