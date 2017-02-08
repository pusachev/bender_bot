/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

var reminder = require("../service/reminder");

module.exports = function (bot) {

    var reminder.init(bot);

    bot.onText(/\/reminde (.+) in (.+)/, function (msg, match) {
        var userId = msg.from.id;
        var text = match[1];
        var time = match[2];

        reminder.add(userId, text, time);
    });

    bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
        var userId = msg.from.id;
        var text = match[1];
        var time = match[2];

        reminder.add(userId, text, time);
    });
};