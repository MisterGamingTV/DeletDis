// Require the necessary discord.js classes
const { Client, Intents, Message } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code
client.on('ready', () => {
	console.log(`[LOG] Logged in as ${client.user.tag}!`);
	client.channels.cache.find(channel => channel.id === 'SOME_CHANNEL_ID').send(`I'm ready!`);
});

client.on('messageReactionAdd', (reaction, user) => {
    	if (user.bot) return;
    	if (reaction.emoji.name == "⛔" && reaction.count >= 5) {
		console.log("Five reactions caused a message delete");
		reaction.message.delete();
		reaction.message.channel.send(`${reaction.message.author}'s message has been deleted!`);
    	}
});

// Login to Discord with your client's token
client.login("TOKEN");
