/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

module.exports = function (bot) {
    bot.onText(/\/start/, function (msg) {
        bot.sendMessage(msg.chat.id, "The bot is starting")
    });

    console.log("Command /start init");
};