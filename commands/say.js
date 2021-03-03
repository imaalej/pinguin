module.exports = {
    name: 'say',
    description: 'Makes the bot say something',
    execute(message, args){
        //Credits to https://stackoverflow.com/questions/45395255/discord-js-delete-single-message
        message.delete()
        message.channel.send(message.content.slice(5, message.content.length));
    }
}