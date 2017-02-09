/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

"use strict";

var mongoose = require("mongoose");
var config = require("config");

mongoose.connect(config.mongoose.uri, config.mongoose.options);

module.exports = mongoose;