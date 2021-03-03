const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '%';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(File => File.endsWith('.js'));
for(const File of commandFiles){
    const command = require(`./commands/${File}`);
    client.commands.set(command.name , command);
}

client.once('ready',() => {
    console.log('Pinguin is online!');
});

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }
    else if(command === 'say'){
        client.commands.get('say').execute(message,args);
    }
    else if(command === 'punish'){
        client.commands.get('punish').execute(message,args);
    }
    else if(command === 'punishall'){
        client.commands.get('punishall').execute(message,args);
    }

});

//End of file.
client.login('ODE2NDM1MDY0MjY2MDMxMTM0.YD66Zw.qOSNvt5DPcExGIy7zMKoiVF8NSg');