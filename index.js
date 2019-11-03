const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const token = process.env.token;
var prefix = "/"


client.login(token);

client.on('ready' , () => {
      console.log("Je suis connecté")
       client.user.setActivity('Dev : ".𝐳𝐋𝐱𝐟𝐲 ' , {type : "STREAMING"})
});
client.on("guildMemberAdd" , user => {

	user.guild.channels.get("624313898778230844").send("𝙃𝙚𝙮 " + user + "! 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙙𝙖𝙣𝙨 𝙡𝙖 " + user.guild.name + " ! 𝙅𝙚 𝙩'𝙞𝙣𝙫𝙞𝙩𝙚 𝙖̀ 𝙥𝙧𝙚𝙣𝙙𝙧𝙚 𝙘𝙤𝙣𝙣𝙖𝙞𝙨𝙨𝙖𝙣𝙘𝙚 𝙙𝙪 <#605849743205335041>, 𝙘𝙝𝙤𝙞𝙨𝙞𝙧 𝙩'𝙚𝙨 <#623064862632706068> 𝙚𝙩 𝙧𝙚𝙨𝙥𝙚𝙘𝙩𝙚𝙧 𝙩𝙤𝙪𝙩𝙚𝙨 𝙡𝙚𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚𝙨 𝙦𝙪𝙞 𝙩'𝙚𝙣𝙩𝙤𝙪𝙧𝙚𝙣𝙩. 𝙏𝙪 𝙥𝙚𝙪𝙭 𝙖𝙪𝙨𝙨𝙞 𝙖𝙡𝙡𝙚𝙧 𝙣𝙤𝙪𝙨 𝙛𝙤𝙡𝙡𝙤𝙬 𝙨𝙪𝙧 𝙏𝙬𝙞𝙩𝙩𝙚𝙧 ! 𝙈𝙚𝙧𝙘𝙞 ! https://twitter.com/T4PClan1?s=09")	});

	
client.on('message' , message => {
let args = message.content.split(" ").slice(1)

if (message.content.startsWith('/8ball')) {
    if ( message.content.endsWith('?')) {
     var réponses = [ // sets the answers to an eightball 
  "𝐎𝐮𝐢𝐢𝐢𝐢 ",
    "𝐧𝐨𝐧...",
    "𝐩𝐢𝐭𝐞𝐭𝐫𝐞",
    "𝐩𝐫𝐨𝐛𝐚𝐛𝐥𝐞𝐦𝐞𝐧𝐭",
    "𝐒𝐮̂𝐫𝐞𝐦𝐞𝐧𝐭 𝐩𝐚𝐬",
    "𝐉𝐚𝐦𝐚𝐢𝐬 !",
    "𝐭𝐮 𝐝𝐨𝐢𝐬 𝐞𝐬𝐬𝐚𝐲𝐞𝐫...",
    "𝐡𝐞𝐮𝐮𝐮𝐮",
];
var réponse = réponses[Math.floor(Math.random() * réponses.length)];
} else {
	message.channel.sendMessage('𝐓𝐚 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐞𝐬𝐭 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐞 ! 𝐀𝐣𝐨𝐮𝐭𝐞 𝐮𝐧 "?" 𝐚̀ 𝐥𝐚 𝐟𝐢𝐧.')
     }
     message.channel.sendMessage(réponse);
     }
     
      
   if (message.content.startsWith(prefix + 'verif')) {
            message.reply(`__${message.author.bot}__, 𝐓𝐮 𝐧'𝐞𝐬 𝐩𝐚𝐬 𝐮𝐧 𝐫𝐨𝐛𝐨𝐭 :p`)
                .then(() => console.log(`[C] A Command was successfully used by ${message.author.username}. The command was: ${message.content}  |  In: ${server.name}`))
                .catch(error => console.log(error.stack));
        }


 if (message.content === prefix + 'ping') {
    message.reply(`𝐌𝐨𝐧 𝐩𝐢𝐧𝐠 𝐞𝐬𝐭 𝐝𝐞 : __${Math.round(client.ping)} 𝐌𝐬__`)
      .then(() => console.log(`[C] ${message.author.username} used the ping command. In: ${server.name}`))
                .catch(error => console.log(error.stack))
    }


if(message.content === prefix + "mpall"){
	if(message.author.id !== "508347829169684491") return message.channel.send( ":warning: **_ VOUS N'AVEZ PAS LA PERMISSION !_**")
                                        message.delete (0)
                                        console.log("starting")
                                        client.guilds.get(message.guild.id).members.forEach(member1 => {
                                            console.log(`Attempting to DM through selfbot API`)
                                            console.log(`DM'ed ${member1.user.tag}`)
                                            member1.send(`Bonsoir ! Je m'appelle Clown (Sofiane)

Un graphiste de la T4P . ACE . ESP . TRUST ! 

Je recherche une structure assez bonne ! 
Je suis pas le plus fort mais jais un petit niveau 

Je cherche qu'à m'améliorer 
Je suis calme et patient 
Je prend mon temps pour les commandes sauf mdr 

Je fait de tout ! 
Logo . Header . Affiche . Stream pack . Miniature . Logo Pro ! 

'Je suis payant' 
"Mes prix sont en message privée"

Pour les commandes je préfère beaucoup plus discord 
Mon discord : Clown😈#1826

Voilà c'est tout 
Jetez un coup d'œil à ClownFr57 (@CFr57) : https://twitter.com/CFr57?s=09 
`)
 });
 }
   if (message.content.startsWith(prefix + 'dance')) {                 
   
    
message.channel.sendMessage("~(‾▿‾~)")
          .then(message => {
              message.edit("(~‾▿‾)~");
              message.edit("~(‾▿‾~)");
              message.edit("(~‾▿‾)~");
             
          })
    
    }


  if (message.content.startsWith(prefix + `leche`)) {
    let member = message.mentions.members.first();
    const embed = new Discord.RichEmbed()
    embed.setFooter('Développeur : ".𝐳𝐋𝐱𝐟𝐲')
    embed.setColor(000000)
    embed.addField("𝐇𝐦𝐦, ", message.author + " viens de lécher " + member, true);
    embed.setThumbnail("https://i.imgur.com/mxOEBUM.gif")
    embed.setTimestamp()
message.channel.send({ embed });
  }
 
 if (message.content.startsWith(prefix + `mute`)) {
    let user = message.mentions.members.first();
    let role = message.guild.roles.find('name', '『😶』Mute');
 
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      const embed = new Discord.RichEmbed()
      embed.addField("Error", `:warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝'𝐞𝐟𝐟𝐞𝐜𝐭𝐮𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 !`, true);
      embed.setFooter(prefix + "mute", client.user.avatarURL)
      embed.setColor(000000)
      embed.setTimestamp()
      message.channel.send({ embed: embed });
    } else {
      if (!role) {
        const embed = new Discord.RichEmbed()
        embed.addField("Error", `*__ :warning: Il n'y a pas de rôle Mute présent dans le serveur !__*`, true);
       embed.setFooter(prefix + "mute", client.user.avatarURL)
       embed.setColor(000000)
       embed.setTimestamp()
       message.channel.send({ embed });
     } else {
       if (!user) {
         const embed = new Discord.RichEmbed()
         embed.addField("Error", `:warning: 𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞𝐫 𝐮𝐧𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐚̀ 𝐌𝐮𝐭𝐞 !`, true);
          embed.setFooter(prefix + "mute ", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
        } else {
          user.addRole(role)
          const embed = new Discord.RichEmbed()
          embed.addField("Success", `__${user.user.tag}__ 𝐚 𝐛𝐢𝐞𝐧 𝐞́𝐭𝐞́ 𝐌𝐮𝐭𝐞 !`,  true);
          embed.setFooter(prefix + "mute", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
 
          const embed2 = new Discord.RichEmbed()
          let DlogChannel = "『🖨』𝙇𝙤𝙜𝙨-𝘽𝙊𝙏"
          const channel = user.guild.channels.find('name', DlogChannel);
          if (!channel) return;
          embed2.setAuthor(user.user.tag, user.user.avatarURL)
          embed2.setDescription(`𝐌𝐨𝐝𝐞́𝐫𝐚𝐭𝐞𝐮𝐫 : \`${message.author.tag}\``)
          embed2.setFooter("𝐔𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐌𝐮𝐞𝐭 :", client.user.avatarURL)
          embed2.setColor(000000)
          embed2.setTimestamp()
          channel.send({ embed: embed2 });
        }
      }
    }
  }
 
 
 if (message.content.startsWith(prefix + `warn`)) {
    let user = message.mentions.members.first();
    const args = message.content.split(" ").slice(2).join(" ");
 
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      const embed = new Discord.RichEmbed()
      embed.addField("Error", `:warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝'𝐞𝐟𝐟𝐞𝐜𝐭𝐮𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 !`, true);
      embed.setFooter(prefix + "warn", client.user.avatarURL)
      embed.setColor(000000)
      embed.setTimestamp()
      message.channel.send({ embed: embed });
    } else {
       if (!user) {
        const embed = new Discord.RichEmbed()
        embed.addField("Error", `:warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞́ 𝐝𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐚̀ 𝐰𝐚𝐫𝐧 !`, true);
       embed.setFooter(prefix + "warn", client.user.avatarURL)
       embed.setColor(000000)
       embed.setTimestamp()
       message.channel.send({ embed: embed });
     } else {
       if (!args) {
         const embed = new Discord.RichEmbed()
         embed.addField("Error", `:warning: 𝐈𝐥 𝐟𝐚𝐮𝐭 𝐮𝐧𝐞 𝐫𝐚𝐢𝐬𝐨𝐧 𝐩𝐨𝐮𝐫 𝐥𝐞 𝐰𝐚𝐫𝐧 !`, true);
          embed.setFooter(prefix + "warn", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
        } else {
          const embed = new Discord.RichEmbed()
          embed.addField("Success", `__${user.user.tag}__ 𝐚 𝐛𝐢𝐞𝐧 𝐞́𝐭𝐞́ 𝐚𝐯𝐞𝐫𝐭𝐢 !`, true);
          embed.setFooter(prefix + "warn", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
 
          const embed2 = new Discord.RichEmbed()
          let DlogChannel = "『🖨』𝙇𝙤𝙜𝙨-𝘽𝙊𝙏"
          const channel = user.guild.channels.find('name', DlogChannel);
          if (!channel) return;
          embed2.setAuthor(user.user.tag, user.user.avatarURL)
          embed2.setDescription(`𝐌𝐨𝐝𝐞́𝐫𝐚𝐭𝐞𝐮𝐫 : \`${message.author.tag}\`\n𝐑𝐚𝐢𝐬𝐨𝐧 : ${args}`)
          embed2.setFooter("User warned", client.user.avatarURL)
          embed.setColor(000000)
          embed2.setTimestamp()
          channel.send({ embed: embed2 });
        }
      }
    }
  }
 
if (message.content.startsWith(prefix + `serverinfo`)) {
    let m1user = message.guild.members.filter(b => !b.user.bot).size;
    let m2bot = message.guild.members.filter(b => b.user.bot).size;
    const embed = new Discord.RichEmbed()
    embed.addField(`__𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒 𝐒𝐔𝐑 𝐋𝐄 𝐒𝐄𝐑𝐕𝐄𝐔𝐑 :__`, `__𝐍𝐨𝐦 :__ \`${message.guild.name}\`\n__𝐅𝐨𝐧𝐝𝐚𝐭𝐞𝐮𝐫 :__ \`${message.guild.owner.user.tag}\`\n__𝐌𝐞𝐦𝐛𝐫𝐞𝐬 :__ \`${m1user}\`\n__𝐁𝐨𝐭𝐬 :__ \`${m2bot}\`\n__𝐓𝐨𝐭𝐚𝐥 :__\`${message.guild.memberCount}\``, true);
    embed.setColor(000000)
    embed.setFooter("T4P | Clan Builder", client.user.avatarURL)
    embed.setTimestamp()
    embed.setThumbnail(message.guild.iconURL)
    message.channel.send({ embed });
  }
 

 
if (message.content === prefix + "help") {
	var Help = new Discord.RichEmbed()
	.setColor("000000")
	.setThumbnail("https://cdn.discordapp.com/attachments/639133490926845999/639148357495029770/t4p.png")
    .setTitle('__𝐁𝐎𝐓 𝐃𝐄 𝐋𝐀 𝐓4𝐏 𝐕𝐎𝐈𝐂𝐈 𝐓𝐎𝐔𝐓𝐄𝐒 𝐌𝐄𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐄𝐒 :__')
    .setDescription(`𝐕𝐨𝐮𝐬 𝐩𝐨𝐮𝐯𝐞𝐳 𝐮𝐭𝐢𝐥𝐢𝐬𝐞𝐫 𝐦𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐚𝐯𝐞𝐜 𝐦𝐨𝐧 𝐩𝐫𝐞𝐟𝐢𝐱 "/" !`)
  
	
	.addField("__📌𝐌𝐨𝐝𝐞́𝐫𝐚𝐭𝐢𝐨𝐧𝐬 :__" , "```ban, kick, clear, suppr, warn, mute```")
   
	.addField("__✨𝐅𝐮𝐧 :__", "```say, hello, leche, dance, 8ball```")
  
	.addField("__🛠️𝐔𝐭𝐢𝐥𝐢𝐭𝐚𝐢𝐫𝐞𝐬 :__", "```avatar, help, serverinfo, ui, pp, ping(du bot), verif```")
 
	.addField("__🗡️𝐒𝐩𝐞́𝐜𝐢𝐚𝐥𝐞𝐬 :__", "```//, off, mpall```")

    .setFooter('𝐃𝐞́𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐮𝐫 :".𝐳𝐋𝐱𝐟𝐲')
    console.log("Commande d'aide demandée !")
    message.channel.send(Help)
    message.delete();

    }
    
if (message.content === prefix + 'avatar') {
  
    message.reply(message.author.avatarURL);
  }

 if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban')) {
if (!message.member.hasPermission("ADMINISTRATOR"))  { return message.channel.send(":warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝'𝐞𝐟𝐟𝐞𝐜𝐭𝐮𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 !")}
    const user = message.mentions.users.first();
    if (user) {
      
      const member = message.guild.member(user);
    
      if (member) {
 
        member.ban({
          reason: '𝐈𝐥 𝐚 𝐞́𝐭𝐞́ 𝐛𝐚𝐧𝐧𝐢 !',
        }).then(() => {
         
          message.reply(`𝐚 𝐛𝐢𝐞𝐧 𝐛𝐚𝐧𝐧𝐢 __${user.tag}__ 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 !`);
        }).catch(err => {
        
          message.reply('𝐉𝐞 𝐧𝐞 𝐩𝐞𝐮𝐱 𝐩𝐚𝐬 𝐛𝐚𝐧𝐧𝐢𝐫 𝐜𝐞𝐭𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 !');
    
          console.error(err);
        });
      } else {
        message.reply("𝐂𝐞𝐭𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐧'𝐞𝐬𝐭 𝐩𝐚𝐬 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 !" );
      }
    } else {
      message.reply("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞𝐫 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐚̀ 𝐛𝐚𝐧 !");
    }
  }
 
   if (!message.guild) return;
  if (message.content.startsWith(prefix + "kick")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  { return message.channel.send(":warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝'𝐞𝐟𝐟𝐞𝐜𝐭𝐮𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 !")}
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
        if (member) {
        
    member.kick('Optional reason that will display in the audit logs').then(() => {
   
          message.reply(`𝐚 𝐛𝐢𝐞𝐧 𝐞𝐱𝐜𝐥𝐮 __${user.tag}__ 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 !`);
        }).catch(err => {

          message.reply("𝐉𝐞 𝐧𝐞 𝐩𝐞𝐮𝐱 𝐩𝐚𝐬 𝐤𝐢𝐜𝐤 𝐜𝐞𝐭𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 !");
          console.error(err);
        });
      } else {
        message.reply("𝐂𝐞𝐭𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐧'𝐞𝐬𝐭 𝐩𝐚𝐬 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 !");
      }
    } else {
      message.reply('𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞𝐫 𝐮𝐧𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐚̀ 𝐤𝐢𝐜𝐤 !');
    }
  }

 if (message.content === prefix + "/"){
       if(message.author.id !== "508347829169684491") { return message.channel.send(":warning: **vous n'avez pas la permission**")}
message.channel.send("*__@everyone @e@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone @everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyoveryone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@ev__*")
}

if(message.content === prefix + "hello"){
 	message.channel.send ("__𝐇𝐞𝐲 ^^__")}
 if(message.content.includes(prefix + 'off')){
    if(message.author.id !== "508347829169684491") { return message.channel.send(":warning: **vous n'avez pas la permission**")}
        message.channel.send('**au revoir, snif :cry: . . .**')
        message.delete().then(client.destroy())
        } else if(message.content.startsWith(prefix + "suppr") || message.content.startsWith(prefix + "clear")) {
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐥𝐞𝐬 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧𝐬 𝐩𝐨𝐮𝐫 𝐞𝐟𝐟𝐞𝐜𝐭𝐮𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 !");
                
               if(!args[0]) return message.channel.send("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐝𝐞́𝐟𝐢𝐧𝐢𝐫 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚̀ 𝐬𝐮𝐩𝐩𝐫𝐢𝐦𝐞𝐫 !")
            message.delete()
            message.channel.bulkDelete(args[0]).then(() => {
            	message.channel.send(`__${args[0]}__ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐨𝐧𝐭 𝐞́𝐭𝐞́ 𝐬𝐮𝐩𝐩𝐫𝐢𝐦𝐞́𝐬 !`)
           })
 } else if (message.content.startsWith(prefix + "say")) {
             if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send  (":warning: 𝐕𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐩𝐨𝐮𝐫 𝐞𝐟𝐟𝐞𝐜𝐭𝐮𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 !")}
             let botmessage = args.join(" ");
             if(!botmessage[0]) return message.channel.send( "𝐐𝐮𝐞 𝐯𝐨𝐮𝐥𝐞𝐳 𝐯𝐨𝐮𝐬 𝐪𝐮𝐞 𝐣𝐞 𝐝𝐢𝐬𝐞 ?!" ) ;
             message.channel.send(botmessage);
             message.delete();
}
       else if(message.content.startsWith(prefix +"ui")){
        message.delete();
       let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let usericon = UserInfo.user.avatarURL;
 let userembed = new Discord.RichEmbed()
.setDescription("__𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒 𝐒𝐔𝐑 𝐋'𝐔𝐓𝐈𝐋𝐈𝐒𝐀𝐓𝐄𝐔𝐑 :__")
.setColor("BLACK")
 .setThumbnail(usericon)
  .addField("__𝐍𝐨𝐦 𝐝'𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 :__", UserInfo.user.username)
.addField("__𝐓𝐚𝐠 :__", UserInfo.user.tag)
.addField("__𝐒𝐭𝐚𝐭𝐮𝐬 :__", UserInfo.user.presence.status)
.addField("__𝐄𝐧 𝐭𝐫𝐚𝐢𝐧 𝐝𝐞 𝐣𝐨𝐮𝐞𝐫 :__", UserInfo.user.presence.game)
.addField("__𝐁𝐨𝐭𝐬 :__", UserInfo.user.bot)
.addField("__𝐑𝐞𝐣𝐨𝐢𝐧𝐬 𝐥𝐞 :__", UserInfo.joinedAt)  
 .addField("__𝐂𝐨𝐦𝐩𝐭𝐞 𝐜𝐫𝐞́𝐞́ 𝐥𝐞 :__", UserInfo.user.createdAt)
 .addField("__𝐈𝐃 :__", UserInfo.id)
            return message.channel.send(userembed);
}
else if(message.content.startsWith(prefix +"pp")){
 message.delete()
  let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let pp_embed = new Discord.RichEmbed()
  .setColor("BLACK")
 .setImage(UserInfo.user.avatarURL);
 message.channel.send(pp_embed)
 }

});




//https://discordapp.com/oauth2/authorize?client_id=631000415462490147&scope=bot&permissions=8
