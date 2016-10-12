var Discord = require("discord.js"); // Initializes discord.js and defines it to "Discord"
var bot = new Discord.Client(); // Initializes discord client and defines it to "bot"
var e = new Error(); // e represents error throughout the script
var prefix = "!fred";

try {
    var config = require("./config.json"); // Checks for config.json, which holds token, etc.
} catch (e) {
    console.log(e.stack);
    console.log("There is no config.json");
    console.log("Please create the file and insert the token as a variable");
}

try {
    var filter = require("./filter.json"); // Checks for filter.json, which holds keywords
} catch (e) {
    console.log(e.stack);
    console.log("There is no filter.json");
    console.log("Please create the file and insert keywords as variables");
}

try {
    bot.on('ready', () => { // Initializes friendlyfred
        console.log('- friendlyfred is online');
    })
} catch (e) {
    console.log(e.stack); // Output error log and provide troubleshooting
    console.log("Couldn't start friendlyfred");
    console.log("Troubleshooting:")
    console.log("1. Make sure node.js is above v6.0.0");
    console.log("2. Update discord.js to latest version");
    console.log("3. Make sure auth token is correct");

}

bot.on('message', (message) => { // Processes messages
    //if(message.author.bot)
          //return;

   if (filter[message.content]) { // Checks for keyword
        try {
            var keyword = message.content; // Stores keyword as variable for short term use
            message.reply(filter[message.content] + "*");
            console.log("corrected " + keyword + " to " + filter[message.content]);
        } catch (e) {
            console.log(e.stack);
            console.log("Could not correct user's message");
        }

    } if (message.content.startsWith(prefix + " help")) { // List Help
        message.channel.sendMessage("!fred help hi ");
    }
})

try {
    bot.login(config.token); // Authenticates friendlyfred using token
    console.log("logging in friendlyfred with token");
} catch (e) {
    console.log(e.stack);
    console.log("Couldn't find login token in config.json");
}

bot.on("disconnected", function () {

    console.log("- friendlyfred has been disconnected from the server");
    process.exit(1); // Exits node.js

});
