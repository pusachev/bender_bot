/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

module.exports = {
    bot: null,
    notes: [],
    init: function (bot) {
        this.bot = bot;
        setInterval(this.checkReminders, 1000);
    },
    add: function (userId,msg, time) {
        this.notes.push({'uid': userId, 'time':time, 'message':msg});
    },
    update: function (index, time) {
        this.notes[index].time = time;
    },
    delete: function (index) {
        this.notes.splice(index, 1);
    },
    checkReminders: function () {
        for (var i = 0; i < this.notes.length; i++){
            var curDate = new Date().getHours() + ':' + new Date().getMinutes();
            if ( this.notes[i]['time'] == curDate ) {
                this.bot.sendMessage(this.notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
                this.delete(i);
            }
        }
    }
};
