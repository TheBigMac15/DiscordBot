module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D098FA')
        .setTitle('Rules')
        .setDescription('This is an embed')
        .addFields(
            {name: 'Rule 1', value: 'dont spam or be toxic'}, 
            {name: 'Rule 2', value: 'Listen to staff, if you have a complaint with the mods, go to an admin or the owner or DM the ModMail Bot'},
            {name: 'Rule 3', value: 'No racism or UNREASONABLE hate speech. No sexualizing others if they are not comfortable with it.'},
            {name: 'Rule 4', value: 'No Gore and no NSFW'}

        )
        .setFooter('Make sure to check out rules');

        message.channel.send(newEmbed);
    }

    
}