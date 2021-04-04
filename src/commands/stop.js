
module.exports = {
    name: 'stop',
    description: 'stops the timer',
    formatDate(date) {
        var time = date.getDate() + "/"
            + (date.getMonth() + 1) + "/"
            + date.getFullYear() + " @ "
            + date.getHours() + ":"
            + date.getMinutes() + ":"
            + date.getSeconds();
        return time;
    },
    stopTime() {
        var currentdate = new Date();
        var stopTime = this.formatDate(currentdate);
        return stopTime;
    },
    getCurrentDate() {
        var currentdate = new Date();
        return currentdate;
    },
    execute(message, args, Discord, arrayOfTimes) {
        message.reply('');
        for (time of arrayOfTimes) {
            if (time.name == message.author) {
                let diffMs = this.getCurrentDate() - time.timeStarted;
                let secondsSpent = Math.round(diffMs / 1000);
                let minutesSpent = Math.round(((diffMs % 86400000) % 3600000) / 60000);
                let hoursSpent = Math.floor((diffMs % 86400000) / 3600000);
                let newEmbed = new Discord.MessageEmbed()
                    .setColor("#fc0339")
                    .setDescription('You stopped your event, see you in the next one ;)')
                    .setAuthor(`${message.author.tag} stopped the Timer.`)
                    .addFields(
                        { name: 'Started at:', value: `${this.formatDate(time.timeStarted)}` },
                        { name: 'Finished at: ', value: `${this.stopTime()}` },
                        { name: 'Time Spent:', value: `${hoursSpent} hours, ${minutesSpent} minutes and ${secondsSpent} seconds ` }
                    )

                message.reply(newEmbed);
            }
        }

    }

}