require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
let arrayOfTimes = [];
let user = { name: '', timeStarted: '' };
const fs = require('fs');
client.login(process.env.BOT_TOKEN);
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};


client.once('ready', () => {
    console.log(`${client.user.tag} is online`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'start') {
        client.commands.get(command).execute(message, args, Discord);
        user.name = message.author;
        user.timeStarted = client.commands.get(command).getCurrentDate();
        arrayOfTimes.push(user);
    }
    if (command === 'stop') {
        client.commands.get(command).execute(message, args, Discord, arrayOfTimes);
    } else if (client.commands.get(command) != null) {
        client.commands.get(command).execute(message, args);
    }
});



