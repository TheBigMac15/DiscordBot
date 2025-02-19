module.exports = {
    name: 'email',
    description: "gives email address!",
    execute(message, args){

        //let role = message.guild.roles.cache.find(r => r.name === "Mod");

        //if(message.member.permissions.has("BAN_MEMBERS")){
          //  message.channel.send('you have the permission to ban members');
        //} else {
          //  message.channel.send('you dont have the permission to ban members');
        //}

         // if(message.member.roles.cache.some('r => r.name === "Mod')){
            message.channel.send('thebigmacstrikesback@gmail.com');
            

        /*} else {
            message.channel.send('gonna give you the perms real quick');
            message.member.roles.add('role').catch(console.error);

        } */
    }
}