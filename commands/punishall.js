module.exports = {
    name: 'punishall',
    description: 'Pinguin does what pinguins do.',
    execute(message, args){
        if(message.member.hasPermission("ADMINISTRATOR")){
            message.delete();
            message.channel.send('@everyone').then(msg => msg.delete({timeout: 1}));
        }else{
            message.channel.send("You don't have permission to use that command.").then(msg => msg.delete({timeout: 5000}));
        }
    }
}