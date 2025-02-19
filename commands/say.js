module.exports = {
    name: 'say',
    description: "this is a say command!",
    execute(message, args) {

        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) 
        { return message.channel.send('nice try'); }
          message.delete();

          message.channel.send(message)

      
    }
} 