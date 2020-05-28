const MusicBot = require('../apa/commands/index');
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.json
const cooldown = new Set();
const ms = require('./node_modules/ms');
const translate = require('./node_modules/google-translate');
const weather = require("./node_modules/weather-js")
const ownerID = 521450563230105618
const fs = require("fs");




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("!help made by melo", {
    type: "PLAYING",
  });
});
 
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
const { Permissions } = require('discord.js');
  const permissions = new Permissions([
    'MANAGE_CHANNELS',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MANAGE_ROLES',
  'ADMINISTRATOR',
  'BAN_MEMBERS',
  'KICK_MEMBERS',
  'MANAGE_GUILD',
  'VIEW_AUDIT_LOG',
  'MANAGE_NICKNAMES',
  'MANAGE_WEBHOOKS',
  'MANAGE_MESSAGES',
  'ADD_REACTIONS',
  'CONNECT',
  'SPEAK',
  'MUTE_MEMBERS',
  'DEAFEN_MEMBERS',
  'SEND_MESSAGES',
  'CREATE_INSTANT_INVITE',
]);
 
  if(command === 'ping') {
    console.log(`ping command`)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
  if (command === `server`) {
    message.channel.send(`${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
if (command === `porn`) {
  message.channel.send(`https://www.pornhub.com/`);
}
if (command === `news`) {
  message.channel.send(`https://beta.playvalorant.com/en-us/news/`);
}
  if(command === `status`|| command === `st`){
        if(message.author.id == ownerID) {
        client.user.setActivity(`${args.join(' ')}`)
        message.channel.send('Successfully changed status')
    }
  }
 
  if(command === `username`|| command === `un`|| command === `u`){
  if(message.author.id == ownerID) {
  client.user.setUsername(`${args.join(' ')}`)
  message.channel.send('Successfully changed Username')
  }
}
  if(command === `8ball`){
if (cooldown.has(message.author.id)) {
 message.reply(`This command has a cooldown of 2 Seconds`);
}
  cooldown.add(message.author.id);
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 2000);
if(!args[0]) message.reply("Please ask a full question!");
let replies = ["Yes.", "No.", "I don't know.", "of course.", "Ask again later", "Most likely", "As I see it, yes", "Not sure", "Maybe", "Nope", "NO - It may cause dissaster!", "My Source say yes", "Most likely no"];
 
let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");
 
let ballembed = new Discord.MessageEmbed()
.setAuthor(message.author.tag)
.setColor("RANDOM")
.addField(":question:Question", question)
.addField("Answer", replies[result]);
 
message.channel.send(ballembed);
    }
 
 
  if(command === 'say'|| command === 's') {
        if(message.author.id == ownerID) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
}
 if(command === 'unban'|| command === 'ub') {
  console.log(`unban cmd`)
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "You do not have permissions to do ban, sorry."
      );
    }
    if (isNaN(args[0]))
       message.channel.send("You need to provide an ID.");
   
    let member = args[0];
    if(!member)
       message.reply("Please mention a valid Banned Member ID");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
await message.guild.members.unban(member)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't unban because of : ${error}`));
      if(!permissions.has('BAN_MEMBERS')) {
    message.reply(`${member} has been unbanned by ${message.author.tag} because: ${reason}`);
      console.log(`unban worked!`)
        console.error(err);
      }
}
    if (command === "ban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "You do not have permissions to ban people, sorry."
      );
    }
 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "I don't have permission to ban people contact a staff member to fix this issue."
      );
    }
 
    let target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
 
    if (!target) {
      return message.channel.send(
        "Invalid arguments provided.\nUsage: " +
          `\`!ban <@member> <reason>\``
      );
    }
 
 if (!target.bannable) {
      return message.channel.send(
        "I cannot ban that user due to role hierarchy."
      );
    }
 
    let reason = args.slice(1);
    if (!reason) {
      reason = "no reason given";
    }
   
    message.channel.send(`Successfully banned ${target.user.tag}!`);
    target.ban(reason + `Banned by ${message.author.tag}`);
 
}
      if(command === 'mu!help0'){
      let embed = new Discord.MessageEmbed()
                 .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
              {name: "say/s", value: "purge messages", inline: true},
               {name: "username/un/u", value: "ban someone", inline: true},
               {name: "status/st", value: "Kick someone", inline: true},
           )
                 message.channel.send(embed)
   }  
      if(message.content === 'help1'){
      let embed = new Discord.MessageEmbed()
                 .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
              {name: "purge/p", value: "purge messages", inline: true},
               {name: "ban/b", value: "ban someone", inline: true},
               {name: "kick/k", value: "Kick someone", inline: true},
               {name: "unban/ub", value: "Unban someone [USE THEIR ID]", inline: true},
               {name: "warn", value: "warn someone", inline: true},
               {name: "lock", value: "Lock the channel for an amount of time", inline: true},
           )
                 message.channel.send(embed)
   }
               if(message.content === 'mu!help3'){
      let embed = new Discord.MessageEmbed()
                 .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
            {name: "flip", value: "flip a coin", inline: true},
               {name: "wiki", value: "Search something on wikipedia", inline: true},  
 
               {name: "youtube", value: "Search something on youtube", inline: true},  
 
               {name: "wikihow", value: "Search something on wikihow", inline: true},  
 
               {name: "google", value: "Search something on google", inline: true},  
 
               {name: "urban", value: "Search something on the urban dictionary", inline: true},  
 
           )
                 message.channel.send(embed)
   }
           
    if(command === 'mu!help'){
       let embed = new Discord.MessageEmbed()
           .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
               {name: "help1", value: "Show moderation commands", inline: true},
               {name: "help2", value: "Show Searching Commands", inline: true},
               {name: "help3", value: "Show Fun Commands", inline: true},
               {name: "Support", value: "https://discord.gg/ZgDVKpQ ", inline: true},
 
               {name: "Invite me", value: "https://discord.com/oauth2/authorize?client_id=713004756888453141&scope=bot&permissions=8", inline: true},
           )
           message.channel.send(embed)
   }
if(command === 'purge'|| command === 'p') {
  message.delete()
    console.log(`purge cmd`)
    if(!permissions.has('MANAGE_MESSAGES'))
          return message.reply("Sorry, you don't have permissions to use this!");
    const deleteCount = parseInt(args[0], 10);
   
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
   
    message.channel.bulkDelete(deleteCount)
      .then(messages => console.log(`deleted ${messages.size} messages`))
      .catch(error => message.reply(`Couldn't delete messages because of: ${error} Please Contact: *Melo#2500* For Information On how to fix this`));
  }
  if(command === `addrole`){
if(args[0] == "help"){
    let helpembxd = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: mu!addrole <@user> <role>")
 
    message.channel.send(helpembxd);
    return;
  }
 
  let xdemb = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setTitle(`Addrole command`)
  .addField("Description:", "Add role to member", true)
  .addField("Usage", "!addrole [user] [role]", true)
  .addField("Example", "!addrole @Odar Member")
 
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permission to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);
 
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");
 
  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already have that role.");
  await(rMember.addRole(gRole.id));
 
    await message.channel.send(`***I just gave ${rMember.user.username} the ${gRole.name} role!***`)
 
    message.delete();
 
}
 
 
      if(command === 'help1'){
      let embed = new Discord.MessageEmbed()
                 .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
              {name: "purge/p", value: "purge messages", inline: true},
               {name: "ban/b", value: "ban someone", inline: true},
               {name: "kick/k", value: "Kick someone", inline: true},
               {name: "unban/ub", value: "Unban someone [USE THEIR ID]", inline: true},
           )
                 message.channel.send(embed)
   }
      if(command === 'help4'){
      let embed = new Discord.MessageEmbed()
                 .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
              {name: "say/s", value: "purge messages", inline: true},
               {name: "username/un/u", value: "ban someone", inline: true},
               {name: "status/st", value: "Kick someone", inline: true},
               {name: "unban/ub", value: "Unban someone [USE THEIR ID]", inline: true},
           )
                 message.channel.send(embed)
   }
            if(command === 'help2'){
      let embed = new Discord.MessageEmbed()
                 .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
              {name: "flip", value: "flip a coin", inline: true},
               {name: "wiki", value: "Search something on wikipedia", inline: true},  
 
               {name: "youtube", value: "Search something on youtube", inline: true},  
 
               {name: "wikihow", value: "Search something on wikihow", inline: true},  
 
               {name: "google", value: "Search something on google", inline: true},  
 
               {name: "urban", value: "Search something on the urban dictionary", inline: true},  
 
               {name: "morsecode/morse/m", value: "Translate something to morsecode", inline: true},  
 
               {name: "weather", value: "Check the weather in an area", inline: true},  
           )
          message.channel.send(embed)
   }              
    if(command === 'help'){
       let embed = new Discord.MessageEmbed()
           .setAuthor(`Help`, `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`)
           .addFields(
               {name: "help1", value: "Show moderation commands", inline: true},
               {name: "help2", value: "Show Fun Commands", inline: true},
               {name: "Support", value: "https://discord.gg/ZgDVKpQ ", inline: true},
 
               {name: "Invite me", value: "https://discord.com/oauth2/authorize?client_id=713004756888453141&scope=bot&permissions=8", inline: true},
           )
           message.channel.send(embed)
   }
 
   if(command == "flip")
{
      function doRandHT() {
var rand = ['HEADS!','TAILS!'];
 
return rand[Math.floor(Math.random()*rand.length)];
}
 
 const embed = {
"title": `The Winner Is!`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });
};
    if(command === `google`) {
         let google = args.join('+')
    let link = `https://www.google.com/search?q=${google}` ;
    message.channel.send(link);
  }
      if(command === `pornhub`) {
         let porn = args.join('+')
    let link = `https://www.pornhub.com/video/search?search=${porn}` ;
    message.channel.send(link);
  }
        if(command === `youtube`) {
         let youtube = args.join('+')
    let link = `https://www.youtube.com/results?search_query=${youtube}` ;
    message.channel.send(link);
  }
      if(command === `reddit`) {
         let reddit = args.join('_')
    let link = `https://www.reddit.com/r/${reddit}` ;
    message.channel.send(link);
  }
        if(command === `wiki`) {
         let wiki = args.join('+')
    let link = `https://en.wikipedia.org/w/index.php?cirrusUserTesting=control&search=${wiki}&title=Special:Search&profile=advanced&fulltext=1&advancedSearch-current=%7B%7D&ns0=1` ;
    message.channel.send(link);
  }  
        if(command === `wikihow`) {
         let wikihow = args.join('+')
    let link = `https://www.wikihow.com/wikiHowTo?search=${wikihow}` ;
    message.channel.send(link);
  }
        if(command === `urban`) {
         let urban = args.join('%20')
    let link = `https://www.urbandictionary.com/define.php?term=${urban}` ;
    message.channel.send(link);
  }
 
if (command === `guild`) {
  if (message.author.id === ownerID) {
    client.guilds.cache.forEach(guild => {
      const invitechannels = guild.channels.cache.filter(c => client.has.permissionsF(guild.me).has('CREATE_INSTANT_INVITE'));
if (invitechannels.random() != undefined && invitechannels.random() != null) {
        invitechannels.random().createInvite()
          .then(invite => message.channel.send('Created invite for `' + guild.name + '`:\nhttps://discord.gg/' + invite.code))
      }
 
    })
  } else {
    message.channel.send("Couldn't create invite for `" + message.guild.name + "` due to lack of permissions")
  }
}
if(command === `weather`){
    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)
 
        //If the place entered is invalid
        if(args === `0`) {
            message.channel.send("**please enter a valid location**")
            return;
        }
 
        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output
 
        //Sends weather log in embed
        let embed = new Discord.MessageEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("Timezone", `UTC${location.timezone}`, true) //Shows the timezone
           .addField("Degree Type", location.degreetype, true) //Shows the degrees in Celcius
           .addField("Temperature", `${current.temperature}`, true)
           .addField("Feels like", `${current.feelslike} Degrees`, true)
           .addField("Winds", current.winddisplay, true)
           .addField("Humidity", ` ${current.humidity}%`, true)
           .addField("Day", `${current.day}`, true)
           .addField("Date", `${current.date}`, true)
           
           //Display when it's called
           message.channel.send(embed)
 
    });
 
}
if(command === `morsecode`|| command === `mc` || command === `m`|| command === `morse`){
    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
                morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
                text = args.join(" ").toUpperCase();
            while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
                text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
            }
            if (text.startsWith(".") || text.startsWith("-")) {
                text = text.split(" ");
                let length = text.length;
                for (i = 0; i < length; i++) {
                    text[i] = alpha[morse.indexOf(text[i])];
                }
                text = text.join("");
            } else {
                text = text.split("");
                let length = text.length;
                for (i = 0; i < length; i++) {
                    text [i] = morse[alpha.indexOf(text[i])];
                }
                text = text.join(" ");
            }
            return message.channel.send("```"+text+"```");
 
}
if(command === `kick`){
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        "You do not have permissions to kick people, sorry."
      );
    }
   
  let xdemb = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", "!kick [user] [reason]", true)
  .addField("Example:" ,"!kick @Odar spam")
 
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
     
    if(!member.kickable)
      return message.channel.send("I cannot kick this user!");
 
   if(member.user.id === ownerID) return message.channel.send("I can't kick my owner!")
 
   
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
   
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
 
      let kick = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()
      .setFooter(member.id)
 
      message.guild.channels.cache.get("713426288936747149").send(kick)
 
    message.delete();
   
}
if(command === `warn`) {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premission to do that!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
  if (reason.length < 1) return message.reply('You must have a reason for the warning.');
 
  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);
 
  user.send(dmsEmbed);
 
  message.delete();
 
      message.guild.channels.cache.get("713426288936747149").send(`${user.tag} has been warned by ${message.author.tag} for ${reason}`)
}
if(command === `lock`|| command === `lockdown`) {
      if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(
        "You do not have permissions to do lockdown, sorry."
      );
    }
        let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
 
if(!permissions.has('MANAGE_CHANNELS')) {
  let lockemb = new Discord.MessageEmbed()
  .setTitle(`LockDown Complete`)
  .setColor(`#00ff00`)
  .addField(`Channel ${message.channel} locked by ${message.author.mention} because ${reason}`)
 
      message.guild.channels.cache.get("713426288936747149").send(lockemb)
 
    channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false });
      console.log(`lockdown worked!`)
        console.error(err);
      }
}
});
module.exports = MusicBot;
client.login(`NzEzMDA0NzU2ODg4NDUzMTQx.XscDfA.v5vm7iQhmYTmCEUQtNkLpxULJTk`);
