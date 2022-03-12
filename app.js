var http = require('http')

http.createServer(function(request, response) {
response.writeHead(200,{"Content-Type": "text/plain"})
response.end("hello World\n")
}).listen(process.env.PORT)


const Discord = require('discord.js');
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