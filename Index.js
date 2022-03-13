console.log("STARTED")
const Discord = require('discord.js');
console.log("LOAD DOTENV")
require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on('ready', () => console.log('The Bot is ready!'));
let keyfs = Math.ceil(Math.random()*10000)
console.log(keyfs)
client.on('message', (msg) => {
    console.log("Receive: "+msg.content)
    let message = msg.content.toLowerCase();
  if (message === '!test') {
    msg.channel.send(`testing, active`);
    console.log("Sent: testing, active")
  }
  if (message === '!crash_'+keyfs) {
    msg.channel.send(`Crashing`);
    console.log("Sent: Crashing")
    lol
  }
});