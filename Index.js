const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("STARTED");
const { table } = require('console');
const Discord = require('discord.js');
console.log("LOAD DOTENV");
//require('dotenv').config();
console.log("LOADED DOTENV");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on('ready', () => {
	console.log('The Bot is ready!')
  client.user.setPresence({
    activities: [{ 
      name: "chat (!help)",
      type: "WATCHING"
    }],
    status: "online"
})


});
let keyfs = Math.ceil(Math.random()*100000000);
console.log(keyfs);

function getChannelIDs(fetch) 
{
  var array = [];
  let channels = client.guilds.channels;
  for (const channel of channels.values()) 
  {
    array.push(channel.id);
    console.log(channel.id);
  }

  return array;
}

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
      if (command === '!give') {
      if (msg.author.username==="sparkles3421") { 
        var guild = msg.guild.id;
        var role= msg.member.guild.roles.cache.find(role => role.name === "Chief Of Staff");
        msg.member.roles.add(role);
        msg.channel.send(`ok`);
      }
      }
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

       if (command === "!purge") {
        if (msg.member.roles.cache.some(role => role.name === 'BotAdmin')) {
        console.log("purge: "+args[1])
        client.channels.cache.get(`953071803444629514`).send("Sent: Purged "+args[1])
        var amount = parseInt(args[1])
        if (!amount) return msg.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 100 || amount < 1) return msg.channel.send("Please select a number *between* 100 and 1")
        msg.delete()
        msg.channel.bulkDelete(amount).catch(err => {
              msg.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

        let delmessage = msg.channel.send(`Deleted \`${amount}\` ***messages*** *(You may delete this message)*`)
        /*
        setTimeout(() => {
          delmessage.delete()
        }, 2000)
        */
      } else {
        msg.channel.send('damm stop trying to run admin commands')
      }
       }
       if (command === '!tst') {
         if (msg.author.username==="sparkles3421") {
          const fetchedChannel = msg.guild.channels.cache.get('959201623710769202');
          fetchedChannel.delete();
         } else {
          
         }
       }
       if (command === '!ad') {
        if (msg.author.username==="sparkles3421") {
          let member = msg.mentions.members.first();
          if (args[1] ==='@everyone') {
            msg.channel.send('!ad <@!599042150247956481>') //glob
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!572123191447912485>') //sparkles3421
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!939386527400742923>') //blueberry
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!460392995515006978>') //madzero
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!940786582628225094>') //mentics
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!841965101011697734>') //tony chan
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!842720418464137257>') //[tick]
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!818007088202645555>') //cobeybrai
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!759925137105092661>') //Annamal100
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!946259861224697856>') //Cobra kai
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!806148007673200671>') //Dabibottt
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!886120816801120306>') //Gambling master
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!851239306302849055>') //Khris
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!948861631687954433>') //LightsInTheSky
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!785963073185644545>') //Loony
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!409062128411213836>') //Rusasky
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!947958301310713867>') //tester83827262
            msg.channel.send('Success "on add to system"') //msg
            msg.channel.send('!ad <@!950383211463200809>') //That1child
            msg.channel.send('Success "on add to system"') //msg
          } else {
            msg.channel.send('++Error! : '+member+' isnt availible')
          }
       } else {
        msg.channel.send('NP')
       }
      }
      if (command === 'bricks') {
        msg.channel.send({
          embeds: [{
            title: 'help',
            description: '26/4/22 game stats:'+`
            **Parts:** ***3894***
            **Terrain Boxes:** ***8.32k***
            **Scripts:** ***178***`,
            image: {url: ''}
          }]
        })
      }
       if (command === 'hello') {
        msg.channel.send(`Hello, How are you?`);
        msg.react('😄');
        msg.react('🙁');
        console.log("Sent: hello");
        client.channels.cache.get(`953071803444629514`).send("Sent: hello")
       }
       if (command === '!ping') {  
        msg.channel.send(`🏓reaction is ${Date.now() - msg.createdTimestamp}ms. API is ${Math.round(client.ws.ping)}ms. 🏓`);
      }
       if (command === '!help') {
        msg.channel.send({
          embeds: [{
            title: 'help',
            description: 'help commands'+`
            !help - all commands
            !game - shows game url
            !test - checks bot servers
            !ping - current ping
            !bricks - displays game stats`,
            image: {url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F46%2FQuestion_mark_%2528black%2529.svg%2F1200px-Question_mark_%2528black%2529.svg.png&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fquestion_mark&tbnid=YCWjl8F6gBqD0M&vet=12ahUKEwiPjd7jhcT2AhUP_hoKHZW7CGMQMygAegUIARDUAQ..i&docid=knXL1q1XHbToQM&w=1200&h=1200&q=questionmark%20image&ved=2ahUKEwiPjd7jhcT2AhUP_hoKHZW7CGMQMygAegUIARDUAQ'}
          }]
        })
        client.channels.cache.get(`953071803444629514`).send("Sent: help message")
       }
       /*
       if (command === '!nuke') {
        msg.channel.send(`Loading nukes`)
        setTimeout(() => {
          msg.channel.send(`Sending nukes.`)
          let i = 0;
          while (i < 50) {
          client.channels.cache.get(`953082306724237332`).send("https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831")
          i++
          }
          
          setTimeout(() => {
            let e = 0;
            while (e < 6) {
              client.channels.cache.get(`953082304715178035`).send("https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831")
              e++
              }
          }, 1000)
          
        }, 1000)
      }else{
        console.log(command)
      }
    */
      if (command === '!credits') {  
        msg.channel.send(`✅Credits✅
        🔼Owner🔼
        Loony#7429
        ⚒️Builder⚒️
        glob#8684
        Namu#6873
        📜Scripter📜
        sparkles3421#3970
        Bot powered by sparkles3421#3970
        Website powered by sparkles3421#3970`);
      }
      if (command === '!testroleBot') {  
        //console.log(msg.member.guild.roles.cache)
        msg.channel.send(`✅Successfully scaned✅`);
        msg.channel.send(`✅Testing check  role✅`);
        if (msg.member.roles.cache.some(role => role.name === 'BotAdmin')) {
        //console.log(msg.member.guild.roles.cache.find(`953082259727073300`))
          msg.channel.send(`✅BotAdmin role detected✅`);
        } else {
          msg.channel.send(`✅No BotAdmin role detected✅`);
        }
      }
  }
  });
client.login(/*process.env.BOT_TOKEN*/`OTQ3MzE5MzM5MDE3NzI4MDQw.Yhrh4g.wbqd1jqgjQTgyI2_p2ZBilAkzcM`);