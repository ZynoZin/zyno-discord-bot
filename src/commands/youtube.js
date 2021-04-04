module.exports = {
    name: 'youtube',
    description: 'sends the youtube link',
    execute(message, args) {
        if (message.member.roles.cache.has('828059550313742336')) {
            message.channel.send('https://www.youtube.com/channel/UCGkZYs1xr9WiqC6DOnu0qBQ')

        } else {
            message.channel.send("I see you don't have the correct perms");
            message.member.roles.add('828059550313742336').catch(console.error);

        }

        if (message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send("You have the permission to kick members");
        }

    }
}