 //const { GOOGLE_KEY } = process.env;
const GOOGLE_KEY = process.env.B; 
const PREFIX = process.env.PREFIX
const Eris = require('eris');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
require('./server.js')
require('./dilancarkan.js') 
const client = new Eris(process.env.TOKEN);
const youtube = new YouTube("AIzaSyCY3Cuwh6UxLKNCJwf-6Yd7F5g3w3cQ2YQ");
client.queue = new Eris.Collection();
client.ErisEmber = require('./EmbedBuilder.js')
client.util = require("./util.js")
const queue = client.queue
const DBL = require('dblapi.js') 
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ODE3NDg4MTA4MzIyODE5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTU1ODc0MDAxfQ.eNugEyHrH4V8yrzFt4cYKX9m8IEZPNNZ3BkWvf4by60", client) 
const db = require("quick.db")

dbl.on('posted', () => {
  
  console.log('Server Count Posted!')
})


dbl.on('error', e => {
  
  console.log(`Oops ${e}`)
  
})

// Fetching by quick.db

//client.db = require("quick.db")





client.on('ready', async () => {
  console.log(`Masha Music Is Ready !`)
 // client.user.setActivirt
  client.editStatus('online', {
    name : "YouTube || mm/ || Masha Music || Rangga#4704 || Hans[0]#7343 || ChalistaAnin#9204",
    type : 1,
    url : "https://twitch.tv/hanspro64"
  })
  
  //client.editAFK("AFK BOSSQ")
  
})

client.on('messageCreate', async msg => {
	if(!msg.channel.guild || msg.author.bot) return;
	if(!msg.content.startsWith(PREFIX)) return;
	const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

  
  
  // messages
  
 //  db.add(`pesanServer_${msg.channel.guild.id}_${msg.author.id}`,1)
 // db.add(`pesanGlobal_${msg.author.id}`,1)
  
  
  
  	try {
		let commandFile = require(`./cmds/${command}.js`);
		commandFile.run(client, msg, args);
	} catch (e) {
		console.log(e.message)
  //  client.getChannel("574095334234652683").createMessage(e.message)
	} finally {
		console.log(`${msg.author.username} using command ${command}`)
  client.getChannel("574095334234652683").createMessage(`**${msg.author.username + "#" + msg.author.discriminator}** using command **${command}** in **${msg.channel.guild.name}** Server`)
//  db.add(`usingCommand_${msg.author.id}`, 1)
  }
});




client.connect();
