npm install discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

/**
 * Send a message using a webhook
 */

// Import the discord.js module

// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook

 if(command === "") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
