var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("./config.json");
var filter = require("./filter.json");

bot.on('ready', () => {
  console.log('reddy');
})

bot.on('message', (message) => {
  if(filter[message.content]) {
    message.reply(filter[message.content] + "*");
  }
})

bot.login(config.token);
