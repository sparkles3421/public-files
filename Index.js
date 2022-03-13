console.log("STARTED");
const Discord = require('discord.js');
console.log("LOAD DOTENV");
//require('dotenv').config();
console.log("LOADED DOTENV");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on('ready', () => console.log('The Bot is ready!'));
let keyfs = Math.ceil(Math.random()*10000);
console.log(keyfs);
client.on('message', (msg) => {
    console.log("Receive: "+msg.content)
    let message = msg.content.toLowerCase();
      if (message === '!test') {
       msg.channel.send(`testing, active`);
       console.log("Sent: testing, active");
      };
      if (message === '!crash_'+keyfs) {
        msg.channel.send(`Crashing`);
        console.log("Sent: Crashing");
      };
      if (message === '!game') {
        msg.channel.send(`***Game***
        **Game:** *https://www.roblox.com/games/8927096857*
        *Remmember to join the group*
        **Group:** *https://www.roblox.com/groups/8517669*`);
        console.log("Sent: GameUrls");
       };
       let messaget = message.substring(16);
       let args = message.split(" ")
       if (messaget === "!purge") {

        var amount = parseInt(args[0])

        if (!amount) return message.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 100 || amount < 1) return message.channel.send("Please select a number *between* 100 and 1")

        message.channel.bulkDelete(amount).catch(err => {
              message.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

        let msg = await message.channel.send(`Deleted \`${amount}\` messages`)
        setTimeout(() => {
            msg.delete()
        }, 2000)

       }
});
client.login(process.env.BOT_TOKEN);

/*
SC:
y2ivK1kvSyK-UTOLPQxEJoP4-yRGAsCn
TT
OTE1MzUwMzEwMzcxODcyODYw.YaaUaA.gfM3tlRc3Hc4JhiSpkQukzwj5Ec

*/