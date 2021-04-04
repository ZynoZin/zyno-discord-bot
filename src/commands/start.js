const startTime =

    module.exports = {
        name: 'start',
        description: 'starts the timer',
        startTime() {
            var currentdate = new Date();
            var startTime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            return startTime;
        },
        getCurrentDate() {
            var currentdate = new Date();
            return currentdate;
        },
        execute(message, args, Discord) {
            message.reply('');
            let newEmbed = new Discord.MessageEmbed()
                .setColor("#7deb3d")
                .setDescription('Make sure to start it only during Work Times!')
                .setAuthor(`${message.author.tag} started the Timer.`)
                .addFields(
                    { name: 'Started at:', value: `${this.startTime()}` }
                )
                .setFooter("Don't forget to type '-stop' once finished.");

            message.reply(newEmbed)
        }

    }