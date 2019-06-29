const db = require("quick.db")
exports.run = async function (client, msg, args) {
//db.add(`usingCommand_${msg.author.id}`,1)
const serverQueue = client.queue.get(msg.member.guild.id);
		if(!serverQueue) return msg.channel.createMessage('❌ | Im not playing anything right now');
		if(!msg.member.voiceState.channelID) return msg.channel.createMessage('❌ | You must join voice channel to loop/unloop queue');
		serverQueue.loop = !serverQueue.loop;
		return msg.channel.createMessage(`✅ | ${serverQueue.loop ? 'loop' : 'unloop' } current queue`);
}