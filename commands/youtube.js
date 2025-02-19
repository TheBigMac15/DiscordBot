module.exports = {
    name: 'youtube',
    description: "sends the youtube channel!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCUzwfZOB6wB26fW3jikdCHg');
    }
}