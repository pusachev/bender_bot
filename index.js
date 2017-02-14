//

var config = require("config");
var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(config.bot.token, { polling: true });

require("./commands/status")(bot);
require("./commands/reminde")(bot);
require("./commands/start")(bot);

console.log("Bot is running");