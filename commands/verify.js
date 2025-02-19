module.exports = {
    name: 'verify',
    description: "this is to verify yourself and give access to the server!",
    execute(message, args){

        if(message.member.roles.cache.has('813112223027036160')){
            message.channel.send('You are already verified');
        } else {
            message.channel.send('You are not verified yet, let me change that');
            message.member.roles.add('813112223027036160').catch(console.error); 
        }
    }
}    