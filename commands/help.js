module.exports = {
    name: 'help',
    description: "help message",
    execute(message, args){
        message.channel.send('Our current commands are: cows, ping, pong, website and youtube. Make sure to use - before commands because that is the prefix');
    }
}
