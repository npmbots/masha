const Eris = require("eris") 
const snek = require("snekfetch") 
const util = require("../util.js") //const db = require("quick.db")
const express = require("express")
const app = express(); 
exports.run = async (client, msg, args) => { 
var stotal = client.guilds.size; 
var ctotal = client.guilds.map(ngentod => ngentod.channels.size).reduce((a, b) => a + b);
var utotal = client.users.size; // db.add(`usingCommand_${msg.author.id}`, 1)
var message = msg 
var bot = client 
if (message.author.id !== '481266381031997450' && message.author.id !=='539541219651485696' && message.author.id !== "426712723108134923") return message.channel.createMessage("Are you want using my Eval ? Janc0kk !!") 
try { 
let codein = args.join(" ");
let code = eval(codein); 
if (codein.includes(`token`)) {
code = 'gabole >:('; 
} else { 
code = eval(code)
}
if (typeof code !== 'string')
code = require('util').inspect(code, { depth: 0 }); 
let embed = new client.ErisEmber()
.setAuthor('Evaluate') //.setColor('#0000FF') 
.addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
.addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
message.channel.createMessage({embed}) 
} catch(e) { 
message.channel.createMessage(`\`\`\`js\n${e}\n\`\`\``); //client.getChannel("574095334234652683").createMessage(`\`\`\`js\n${e}\n\`\`\``) 
} 
}
