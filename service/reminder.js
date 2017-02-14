/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

"use strict";

var Reminder = function (bot) {
    this.bot = bot;
    this.model = require("../models/reminder");
    this.debug = require("debug")("reminder");

    this.debug("Service reminder successfully created");

    setInterval(this.checkReminders.bind(this, this), 1000);
};

Reminder.prototype.add = function(userId, msg, time) {

    var self = this;

    self.model.create({
        uid: userId,
        time: time,
        message: msg
    }, function (err, reminder) {
        if (err) {
            self.bot.sendMessage(userId, "Something went wrong with your request");
            self.debug(err);
            return;
        }
        self.bot.sendMessage(reminder.uid, "Ok, I will remind you in  " + reminder.time);
    });
};

Reminder.prototype.delete = function (id) {
    var self = this;

    self.model.remove({_id: id}, function (err) {
        if (err) {
            self.debug(err);
            return;
        }
        self.debug("Remind " + id + " was successfully deleted");
    });
};

Reminder.prototype.checkReminders = function (self) {
    var timeNow = new Date();

    self.debug(Math.floor(timeNow.getTime()));

    self.model.find({"time": { $lt: Math.floor(timeNow.getTime())}}, function(err, reminders) {
        if (err) {
            self.debug(err);
            return;
        }

        if (reminders.length == 0) {
            self.debug("no messages to be sent");
            return;
        }

        reminders.forEach(function(reminder) {
            self.bot.sendMessage(reminder.uid, reminder.message);
            self.delete(reminder._id);
        });
    });
};

module.exports = Reminder;
