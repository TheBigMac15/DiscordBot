module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send(` Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
    }
} 