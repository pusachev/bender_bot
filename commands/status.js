var process = require('process');

String.prototype.toHHMMSS = function () {

    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {
        hours   = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0"+seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds;

    return time;
};

function getUptime() {
    return "Uptime: "+ (process.uptime() + "").toHHMMSS();
};

module.exports = function (bot) {

    bot.onText(/\/status/, function (msg) {
        bot.sendMessage(msg.chat.id, getUptime())
    });

    bot.onText(/\/статус/, function (msg) {
        bot.sendMessage(msg.chat.id, getUptime())
    });

    console.log("Command /status init");
};