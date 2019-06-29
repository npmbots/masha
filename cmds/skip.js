exports.run = async function (client, msg, args) {
//var db = require("quick.db")
//db.add(`usingCommand_${msg.author.id}`,1)
const serverQueue = client.queue.get(msg.member.guild.id);
		if(!serverQueue) return msg.channel.createMessage('❌ | Im not playing anything right now');
		if(!msg.member.voiceState.channelID) return msg.channel.createMessage('❌ | You must join voice channel to skip song');
		msg.channel.createMessage('✅ | Song skipped');
		return client.voiceConnections.get(msg.member.guild.id).stopPlaying();
}