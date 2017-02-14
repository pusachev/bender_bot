/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

var Reminder = require("../service/reminder");

module.exports = function (bot) {

    var reminder = new Reminder(bot);

    function process (msg, match) {
        var userId = msg.from.id;
        var text = match[1];
        var time = match[2];

        reminder.add(userId, text, time);
    };

    bot.onText(/\/reminde (.+) in (.+)/, process);

    bot.onText(/\/напомни (.+) в (.+)/, process);

    console.log("Command /reminder init");
};
