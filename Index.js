console.log("STARTED");
const Discord = require('discord.js');
console.log("LOAD DOTENV");
//require('dotenv').config();
console.log("LOADED DOTENV");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on('ready', () => console.log('The Bot is ready!'));
let keyfs = Math.ceil(Math.random()*10000);
console.log(keyfs);
client.on('messageCreate', (msg) => {
  if(!msg.author.bot) {
    console.log("Receive: "+msg.content)
    let message = msg.content.toLowerCase();
    var args = msg.content.split(" ");
    var command = args[0].toLowerCase();
      if (command === '!test') {
       msg.channel.send(`testing, active`);
       console.log("Sent: testing, active");
      };
      if (command === '!crash_'+keyfs) {
        msg.channel.send(`Crashing`);
        console.log("Sent: Crashing");
      };
      if (command === '!game') {
        msg.channel.send(`***Game***
        **Game:** *https://www.roblox.com/games/8927096857*
        *Remmember to join the group*
        **Group:** *https://www.roblox.com/groups/8517669*`);
        console.log("Sent: GameUrls");
       };
       if (command === "!purge") {

        var amount = parseInt(args[1])

        if (!amount) return msg.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 100 || amount < 1) return msg.channel.send("Please select a number *between* 100 and 1")
        msg.delete()
        msg.channel.bulkDelete(amount).catch(err => {
              msg.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

        let delmessage = msg.channel.send(`Deleted \`${amount}\` ***messages*** *(You may delete this message)*`)
        /* Checking needed
        setTimeout(() => {
          delmessage.delete()
        }, 2000)
        */
       }
      }
});
client.login(/*process.env.BOT_TOKEN*/"OTQ3MzE5MzM5MDE3NzI4MDQw.Yhrh4g.wbqd1jqgjQTgyI2_p2ZBilAkzcM");

/*
SC:
y2ivK1kvSyK-UTOLPQxEJoP4-yRGAsCn
TT
OTE1MzUwMzEwMzcxODcyODYw.YaaUaA.gfM3tlRc3Hc4JhiSpkQukzwj5Ec

*/