console.log("STARTED");
const Discord = require('discord.js');
console.log("LOAD DOTENV");
//require('dotenv').config();
console.log("LOADED DOTENV");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on('ready', () => console.log('The Bot is ready!'));
let keyfs = Math.ceil(Math.random()*100000000);
console.log(keyfs);

client.on('messageCreate', async (msg) => {
  if(!msg.author.bot) {
    client.channels.cache.get(`953071803444629514`).send("Received: "+msg.author.username+" : "+msg.content)
    console.log("Receive: "+msg.content)
    let message = msg.content.toLowerCase();
    var args = msg.content.split(" ");
    var command = args[0].toLowerCase();
      if (command === '!test') {
       msg.channel.send(`testing, active`);
       console.log("Sent: testing, active");
       client.channels.cache.get(`953071803444629514`).send("Sent: testing, active")
      };
      if (command === '!crash_'+keyfs) {
        msg.channel.send(`Crashing`);
        console.log("Sent: Crashing");
        client.channels.cache.get(`953071803444629514`).send("Sent: crash")
        client.channels.cache.get(`953071803444629514`).send("Sent: code crashed")
        lol
      };
      if (command === '!game') {
        msg.channel.send(`***Game***
        **Game:** *https://www.roblox.com/games/8927096857*
        *Remmember to join the group*
        **Group:** *https://www.roblox.com/groups/8517669*`);
        console.log("Sent: GameUrls");
        client.channels.cache.get(`953071803444629514`).send("Sent: GameUrls")
       };
       /*
       if (command === "!purge") {
        let allowedRole = msg.guild.roles.find("name", "BotAdmin");
    if (msg.member.roles.has(allowedRole.id)) {
        console.log("purge: "+args[1])
        client.channels.cache.get(`953071803444629514`).send("Sent: Purged "+args[1])
        var amount = parseInt(args[1])
        if (!amount) return msg.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 100 || amount < 1) return msg.channel.send("Please select a number *between* 100 and 1")
        msg.delete()
        msg.channel.bulkDelete(amount).catch(err => {
              msg.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

        let delmessage = msg.channel.send(`Deleted \`${amount}\` ***messages*** *(You may delete this message)*`)
         Checking needed
        setTimeout(() => {
          delmessage.delete()
        }, 2000)
        
      }
       }*/
       
       if (command === 'hello') {
        msg.channel.send(`Hello, How are you?`);
        msg.react('😄');
        msg.react('🙁');
        console.log("Sent: hello");
        client.channels.cache.get(`953071803444629514`).send("Sent: hello")
       }
       if (command === '!ping') {  
        msg.channel.send(`🏓reaction is ${Date.now() - message.createdTimestamp}ms. API is ${Math.round(client.ws.ping)}ms. 🏓`);
      }
       if (command === '!help') {
        msg.channel.send({
          embeds: [{
            title: 'help',
            description: 'help commands'+`
            !help - all commands
            !game - shows game url
            !test - checks bot servers
            !ping - current ping`,
            image: {url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F46%2FQuestion_mark_%2528black%2529.svg%2F1200px-Question_mark_%2528black%2529.svg.png&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fquestion_mark&tbnid=YCWjl8F6gBqD0M&vet=12ahUKEwiPjd7jhcT2AhUP_hoKHZW7CGMQMygAegUIARDUAQ..i&docid=knXL1q1XHbToQM&w=1200&h=1200&q=questionmark%20image&ved=2ahUKEwiPjd7jhcT2AhUP_hoKHZW7CGMQMygAegUIARDUAQ'}
          }]
        })
        client.channels.cache.get(`953071803444629514`).send("Sent: help message")
       }
       /*
       if (command === '!nuke') {
        msg.channel.send(`Loading nukes`)
        setTimeout(() => {
          msg.channel.send(`Sending nukes. oh and one cherry on top`)
          let i = 0;
          while (i < 6) {
          client.channels.cache.get(`953083494999932949`).send("https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831")
          i++
          }
          setTimeout(() => {
            let e = 0;
            while (e < 6) {
              client.channels.cache.get(`953083494999932949`).send("https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831")
              e++
              }
              setTimeout(() => {
                client.channels.cache.get(`953083494999932949`).send("https://tenor.com/view/imagen-de-jesus-fish-gif-13105421")
              }, 2000)
          }, 1000)
        }, 2000)
      }else{
        console.log(command)
      }
      */
      }
  });
client.login(/*process.env.BOT_TOKEN*/`OTQ3MzE5MzM5MDE3NzI4MDQw.Yhrh4g.wbqd1jqgjQTgyI2_p2ZBilAkzcM`);