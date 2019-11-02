const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const token = process.env.token;
var prefix = "/"
var eightball = [ // sets the answers to an eightball
    "Ouiiii ",
    "non...",
    "pitetre",
    "probablement",
    "Sûrement pas",
    "Neverrrrr",
    "tu dois essayer...",
    "heuuuu",
];

client.login(token);

client.on('ready' , () => {
      console.log("Je suis connecté")
       client.user.setActivity('Dev : ".𝐳𝐋𝐱𝐟𝐲 ' , {type : "STREAMING"})
});
client.on("guildMemberAdd" , user => {

	user.guild.channels.get("624313898778230844").send("𝙃𝙚𝙮 " + user + "! 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙙𝙖𝙣𝙨 𝙡𝙖 " + user.guild.name + " ! 𝙅𝙚 𝙩'𝙞𝙣𝙫𝙞𝙩𝙚 𝙖̀ 𝙥𝙧𝙚𝙣𝙙𝙧𝙚 𝙘𝙤𝙣𝙣𝙖𝙞𝙨𝙨𝙖𝙣𝙘𝙚 𝙙𝙪 <#605849743205335041>, 𝙘𝙝𝙤𝙞𝙨𝙞𝙧 𝙩'𝙚𝙨 𝙧𝙤̂𝙡𝙚𝙨 𝙚𝙩 𝙧𝙚𝙨𝙥𝙚𝙘𝙩𝙚𝙧 𝙩𝙤𝙪𝙩𝙚𝙨 𝙡𝙚𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚𝙨 𝙦𝙪𝙞 𝙩'𝙚𝙣𝙩𝙤𝙪𝙧𝙚𝙣𝙩, 𝙈𝙚𝙧𝙘𝙞 !")	});

	
client.on('message' , message => {
let args = message.content.split(" ").slice(1)


      
   if (message.content.startsWith(prefix + 'verif')) {
            message.reply(` **${message.author.bot}**, **tu n'es pas un robot :p **`)
                .then(() => console.log(`[C] A Command was successfully used by ${message.author.username}. The command was: ${message.content}  |  In: ${server.name}`))
                .catch(error => console.log(error.stack));
        }


 if (message.content === prefix + 'ping') {
    message.reply(`**Mon ping est de : ${Math.round(client.ping)}ms**`)
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
    embed.addField("mmmmmmm, ", message.author + " viens de lécher " + member + "...", true);
    embed.setThumbnail("https://i.imgur.com/mxOEBUM.gif")
    embed.setTimestamp()
message.channel.send({ embed });
  }
 
 if (message.content.startsWith(prefix + `mute`)) {
    let user = message.mentions.members.first();
    let role = message.guild.roles.find('name', '『😶』Mute');
 
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      const embed = new Discord.RichEmbed()
      embed.addField("Error", `:warning: **Vous n'avez pas la permission d'effectuer cette commande !**`, true);
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
         embed.addField("Error", `*__ :warning: Veuillez mentionner un utilisateur à Mute !__*`, true);
          embed.setFooter(prefix + "mute ", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
        } else {
          user.addRole(role)
          const embed = new Discord.RichEmbed()
          embed.addField("Success", `**${user.user.tag}** *__a bien été Mute !__*`,  true);
          embed.setFooter(prefix + "mute", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
 
          const embed2 = new Discord.RichEmbed()
          let DlogChannel = "『🖨』𝙇𝙤𝙜𝙨-𝘽𝙊𝙏"
          const channel = user.guild.channels.find('name', DlogChannel);
          if (!channel) return;
          embed2.setAuthor(user.user.tag, user.user.avatarURL)
          embed2.setDescription(`**Moderator**: \`${message.author.tag}\``)
          embed2.setFooter("User muted", client.user.avatarURL)
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
      embed.addField("Error", `*__:warning: Vous n'avez pas la permission d'effectuer cette commande__*`, true);
      embed.setFooter(prefix + "warn", client.user.avatarURL)
      embed.setColor(000000)
      embed.setTimestamp()
      message.channel.send({ embed: embed });
    } else {
       if (!user) {
        const embed = new Discord.RichEmbed()
        embed.addField("Error", `*__:warning: Vous n'avez pas mentionné d'utilisateur à warn__*`, true);
       embed.setFooter(prefix + "warn", client.user.avatarURL)
       embed.setColor(000000)
       embed.setTimestamp()
       message.channel.send({ embed: embed });
     } else {
       if (!args) {
         const embed = new Discord.RichEmbed()
         embed.addField("Error", `*__:warning: Il faut une raison pour le warn !__*`, true);
          embed.setFooter(prefix + "warn", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
        } else {
          const embed = new Discord.RichEmbed()
          embed.addField("Success", `**${user.user.tag}** *__a bien été averti !__*`, true);
          embed.setFooter(prefix + "warn", client.user.avatarURL)
          embed.setColor(000000)
          embed.setTimestamp()
          message.channel.send({ embed: embed });
 
          const embed2 = new Discord.RichEmbed()
          let DlogChannel = "『🖨』𝙇𝙤𝙜𝙨-𝘽𝙊𝙏"
          const channel = user.guild.channels.find('name', DlogChannel);
          if (!channel) return;
          embed2.setAuthor(user.user.tag, user.user.avatarURL)
          embed2.setDescription(`**Moderator**: \`${message.author.tag}\`\n**Reason**: ${args}`)
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
    embed.addField(`*__Informations du serveur :__*`, `**Nom**: \`${message.guild.name}\`\n**Fondateur**: \`${message.guild.owner.user.tag}\`\n**Membres**: \`${m1user}\`\n**Bots**: \`${m2bot}\`\n**Total**: \`${message.guild.memberCount}\``, true);
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
    .setTitle('**_BOT de la T4P ! Voici toute mes commandes :_**')
    .setDescription("**_Vous pouvez utiliser mes commandes avec mon prefix '/' !_**")
    .addField("*__📌Modération :__*" , "```ban, kick, clear, suppr, av, warn, mute```")
    .addField("*__✨Fun :__*", "```say, hello, leche, dance```")
    .addField("*__🛠️Utilitaire :__*", "```avatar, help, serverinfo, ui, pp, ping(du bot), verif```")
    .addField("*__🗡️Spéciales :__*", "```//, off, mpall```")
 .setTimestamp()
    .setFooter('".𝐳𝐋𝐱𝐟𝐲')
    console.log("Commande d'aide demandée !")
    message.channel.send(Help)
    message.delete();

    }
    
if (message.content === prefix + 'avatar') {
  
    message.reply(message.author.avatarURL);
  }

 if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban')) {
if (!message.member.hasPermission("ADMINISTRATOR"))  { return message.channel.send("** :warning: Tu n'as pas la permission d'effectuer cette commande BG **")}
    const user = message.mentions.users.first();
    if (user) {
      
      const member = message.guild.member(user);
    
      if (member) {
 
        member.ban({
          reason: '**They were bad!**',
        }).then(() => {
         
          message.reply(`**A bien banni ${user.tag} du serveur !**`);
        }).catch(err => {
        
          message.reply('**Je ne peut pas bannir ce membre !**');
    
          console.error(err);
        });
      } else {
        message.reply("**Cet utilisateur n'est pas dans le serveur**" );
      }
    } else {
      message.reply("** Tu n'as mentionné personne je peux pas le faire à ta place :p !!**");
    }
  }
 
   if (!message.guild) return;
  if (message.content.startsWith(prefix + "kick")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  { return message.channel.send("** :warning: Tu n'as pas la permission d'effectuer cette commande BG **")}
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
        if (member) {
        
    member.kick('Optional reason that will display in the audit logs').then(() => {
   
          message.reply(`**A bien exclu ${user.tag} du serveur !** `);
        }).catch(err => {

          message.reply("**Je ne peux pas kick ce membre !**");
          console.error(err);
        });
      } else {
        message.reply("**Cet utilisateur n'est pas dans le serveur !**");
      }
    } else {
      message.reply('**Veuillez mentionner un utilisateur à kick !**');
    }
  }

 if (message.content === prefix + "/"){
       if(message.author.id !== "508347829169684491") { return message.channel.send(":warning: **vous n'avez pas la permission**")}
message.channel.send("*__@everyone @e@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone @everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyoveryone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@ev__*")
}
if (message.content === prefix + "av"){
if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send("Tu ne peux mas utiliser cette commande !")}
message.delete()
message.channel.send("**_ :warning:Ce n'est pas toléré ici ! La prochaine fois ce sera un warn ou un ban ! :warning:_**")
}
if(message.content === prefix + "hello"){
 	message.channel.send ("**Heyy ^^**")}
 if(message.content.includes(prefix + 'off')){
    if(message.author.id !== "508347829169684491") { return message.channel.send(":warning: **vous n'avez pas la permission**")}
        message.channel.send('**au revoir, snif :cry: . . .**')
        message.delete().then(client.destroy())
        } else if(message.content.startsWith(prefix + "suppr") || message.content.startsWith(prefix + "clear")) {
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":warning: **Tu n'as pas les permissions pour effectuer cette commande BG**");
                
               if(!args[0]) return message.channel.send("**Tu n'as pas défini le nombre de message que tu veux supprimer !**")
            message.delete()
            message.channel.bulkDelete(args[0]).then(() => {
            	message.channel.send(`${args[0]} **_messages ont été supprimés !_** `)
           })
 } else if (message.content.startsWith(prefix + "say")) {
             if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send  ("**_ :warning: Bien tenté mais tu n'as pas assez de skill_** ")}
             let botmessage = args.join(" ");
             if(!botmessage[0]) return message.channel.send( "** :x: Que veux-tu que je dise !**" ) ;
             message.channel.send(botmessage);
             message.delete();
}
       else if(message.content.startsWith(prefix +"ui")){
        message.delete();
       let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let usericon = UserInfo.user.avatarURL;
 let userembed = new Discord.RichEmbed()
.setDescription("information sur l'utilisateur")
.setColor("BLACK")
 .setThumbnail(usericon)
  .addField("Nom d'utilisateur:", UserInfo.user.username)
.addField("Tag:", UserInfo.user.tag)
.addField("Status:", UserInfo.user.presence.status)
.addField("Playing:", UserInfo.user.presence.game)
.addField("Bot:", UserInfo.user.bot)
.addField("rejoins le:", UserInfo.joinedAt)  .addField("compte crée le:", UserInfo.user.createdAt)
 .addField("ID:", UserInfo.id)
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
