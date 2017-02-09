/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

var Reminder = require("../models/reminder");
var debug = require("debug")("reminder");

module.exports = {
    bot: null,
    notes: [],
    init: function (bot) {
        this.bot = bot;
        setInterval(this.checkReminders, 1000);
    },
    add: function (userId, msg, time) {
        Reminder.create({
            uid: userId,
            time: time,
            message: msg
        }, function (err, reminder) {
            if (err) {
                bot.sendMessage(userId, "Something went wrong with your request");
                debug(err);
            }
            this.bot.sendMessage(userId, "Ok, I reminde you in " + time);
        });
    },
    update: function (index, time) {
        this.notes[index].time = time;
    },
    delete: function (index) {
        this.notes.splice(index, 1);
    },
    checkReminders: function () {
        var timeNow = new Date();
        debug(Math.floor(timeNow.getTime()));

        Reminder.find({"time": {$lt: Math.floor(timeNow.getTime())}}, function(err, reminders) {
            if (err) {
                debug(err);
                return;
            }

            if(reminders.length == 0) {
                debug("no messages to be sent");
                return;
            }

            reminders.forEach(function(reminder) {
                this.bot.sendMessage(reminder.uid, reminder.message);

                Reminder.remove({_id: reminder._id}, function(err) {
                    debug(err)
                });
            });
        });
    }
};
