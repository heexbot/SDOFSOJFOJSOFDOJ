const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
























const x5bz4 = [
   '*** ��� ���� ���� ***',
   '*** ������ ���� ���� � ***',
   `*** ���� �� ! ��� ����� �� ��� ������  ***`,
   '*** �� ��� ������� � ***',
   '*** ����� �� ��� ���� ����� � ***',
   '*** ���� ���� ���� ���� ��� �� ���� ���� ���� ����� ������ ***',
   '*** ����� ��� ���� ���� ����� ***',
   '*** �� ��� ���� ��� ����� � ***',
   '*** ����� ��� ���� ���� ����� ***',
   '*** �� ��� ���� ��� ����� � ***',
   '*** �� ��� ������� � ***',
   '*** ��� ����� ��� ����� ���� ! ***',
   '*** ���� ��� �� ����� ��� ��� ������ �� ��� ***',
   '*** ����� ����� �� ����� �� ��� ��� �� ��� ***',
   '*** ��� ��� ��� ���� � ���� �� ���� ***',
   '*** ��� ���� ***',
   '*** ��� �� ����� ���� ���� �� ������ ***',
   '*** �� ����� ���� ����� �� ����� ***',
   '*** ����� !  ***',
   '*** ��� ����� ��� ������ ����� ����� ������� ����� ���� ���� ***',
   '*** �� ��� ���� � ***',
   '*** ��� ����� ����� ��� ��� ������� ������ ***',
   '*** �� ��� �� ����� ���� ***',
   '*** ��� ��� ����� ������ ��� ����� ***',
   '*** ��� ��� ����� �����***',
   '*** ����� ��� �� ����� ����� � ***',
   '*** ��� ���� ���� ����� ��� ����� �� ������ ***',
   '*** ���� �� ��� ���� ���� ���� �������� ***',
   '*** ���� �� ����� ������ �� ��� ����� ��� ***',
   '*** ����� �� ���� ������ � ***',
   '*** ������������������� ��� ���� ����� �� ��� ������ ***',
   '*** �� ���� ��� ���� �� ��� ���� ***',
   '*** ������� ��� ! ���� .����  ***',
   '*** ����� ���� , �� ���� ���� � ***',
   '*** �� �� ���� ���� , ���� .���� ��� ���� ***',
   '*** ����� ���� . �� ���� ���� � ***',
   '*** ��� ���� �� ����� ����� ��� �� ���� ***',
   '*** ��� ���� �� ���� ��� ������ ***',
   '*** �� ���� �� ��� ! ***',
   '*** ���� : ��� ��� ***',
   '*** ���� : �� ���� ������� ��� ��� ***',
   '*** ���� : ���� ��� ��� �� ������ ***',
   '*** ���� : ���� ���� �� ���� ***',
   '*** ���� : ���� ��� ������ ����� ��� �� | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** ��� �� ��� �� ������ ***',
   '*** ����� ����� ������ ����� ���� ����� 100 ����� , ������ �� ��� ����� ����� ��� ������� https://discord.gg/dqVFqrN ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-����')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("���� ���� ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});













































client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links ����� �� ���� ���� :) ������������� ?? ! **`)
    }
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '�2') {
    msg.reply('�� ��� ����� �������� ��� 2 �� �2 ���� ���� ������ ���� ��� ��� ��� ������ �� ���� ����� ����� �������� ������ ����� ���� ����� -support');
  }
});





client.on('message', msg => {
  if (msg.content === '��� ���ȿ') {
    msg.reply('��� ���� ��� �� :)');
  }
});









client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('� heex Bot:heart: ���� ������ ������ 2017 ������')
      .setFooter('����� ��������')
	  .addField('-bc', `������ �����������`)
      .setFooter('======================================================')
      .setFooter('����� �������')
      .addField('-invite', `������ ����� ��� ������`)
	  .addField('-roles', `������ ����� ��� �� �������`)
      .addField('-avatar', `����� ������� ��� ���� ���� �����`)
      .addField('-2avatar', `������� �� ���� ������`)
	  .addField('-server', `����� ������� �������`)
	  .addField('-id', `����� ����� ������ ���`)
	  .addField('-clear', `����� ����  100 �����`)
	  .addField('-say', `����� ���� ������ ��� ��� �����`)
	  .addField('-ping', `���� �� ��� �����`)
      .addField('-support', `����� �����`)
      .setFooter('======================================================')
      .setFooter('����� ��� �������(����� �������) �����')
      .addField('-play', `����� �������`)
      .addField('-���', `�������`)
      .addField('-embed', `����� ���� ������ ��� ���� � ����`)
	  .addField('-cat', `����� ���� ���`)
  message.author.send({embed});

 }
});










client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('� heex Bot:heart: ���� ������ ������ 2017 ������')
      .addField('��������� � ����� ���', `https://discordapp.com/api/oauth2/authorize?client_id=440864078114586624&permissions=8&scope=bot`)
  message.author.send({embed});

 }
});


































client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('� heex Bot:heart: ���� ������ ������ 2017 ������')  
  message.author.send({embed});

 }
});





















  
  
  








client.on('message', message => {
     if (message.content === "-��") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``���� ����� �������`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` heex Bot
 .`, 'https://b.top4top.net/p_6021qh431.jpg')

  message.channel.sendEmbed(embed);
    }
});












client.on('message', message => {
    if (message.content === "-roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});












var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});













































         client.on('message', message => {
            if (message.content === '���') {
              message.channel.sendFile("./tyt.png");
            }
         });




         client.on('message', message => {
            if (message.content === '�1') {
              message.channel.sendFile("./5.png");
            }
         });





         client.on('message', message => {
            if (message.content === '������ �����') {
              message.channel.sendFile("./5bz.png");
            }
         });








         client.on('message', message => {
            if (message.content === '����') {
              message.channel.sendFile("./2.png");
            }
         });








         client.on('message', message => {
            if (message.content === '���') {
              message.channel.sendFile("./WLC.png");
            }
         });
         
         
         
         
         
         
         
         
         
                 client.on('message', message => {
            if (message.content === '�����') {
              message.channel.sendFile("./1.jpg");
            }
         });



















client.on('ready', () => {
   console.log(`----------------`);
      console.log(`heex BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`in 2 server -help`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});








 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});





















client.on("message", message => {
     if (message.content === "-kick") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("bla bla")
     }
});




client.on("message", message => {
     if (message.content === "-ban") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("bla bla")
     }
});











client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



















Client.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});

Client.on("message", message => {
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | �� ����� ���� ����� �����")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | �� ����� ���� ������� !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});












































client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "���") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('� . :AG || Copyright')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});
















































































































const cuttweet = [
     '�� ���� �- ����� �� ��� ����� ��� ���� ����� ����ɡ ���� �����',
     '�� ���� �- ���� ��� ������ ����� ����߿',
     '�� ���� �- ������ �� ... �',
     '�� ���� �- ���� ������� ������� �� �����߿',
     '�� ���� �- ���� ������ڿ',
     '�� ���� �- �� ����� ���� ������߿',
     '�� ���� �- �� ����� ���� ������߿',
     '�� ���� �- ���� ���� ����� �� ��� ��� ���� ����� �߿',
     '�� ���� �- ����� ����ѡ �������� �� ���ȿ',
     '�� ����| ��� 10 ���� ��� ����� �',

     '�� ���� �- ��� ���� ����� ������� ���� ��� ���߿',
     '��� ����| ���� ��� ����� �� ��� ������ �',
'�� ���� �- ���� ���� ����� ���� �����ǿ',
     '��� ����|�� �� ����� ���� ����� ���� �����ݿ',
     '��� ����|�� ���� ������ɿ',
     '��� ����|��� ������ �� ���� �',
     '��� ����|�� ��� ���� ��� ����.',
     '��� ����|��� ������ �� ������� �������� �',
     '��� ����|���� ���� ������ ��� ���� �߿',
     '��� ����|�� ����� ����� �� �� �� ���� | �� ���� ����� �� ������ ������� ����� �� ����� �����Ͽ',
     '��� ����|���� ���� �� ����� �� ������ �!',
     '��� ����|���� ���� ��� ���� �',
     '��� ����|����� ����� ��� ���� ����� ��� ���� ����� �',
     '�� ����|�� ��� ����� �� ��� ���� ����ʿ',
     '��� ����|���� ����� ������� �����ǿ',
     '��� ����|����� �� ����� ��� ���� ���� ����� �',
     '��� ����|�� ����� ���� ���� ����� �',
     '��� ����|����� ������ ����� �',
     '��� ����|- �� ��� ����� ���� ������ ��� ������ ����� ������',
]

client.on('message', message => {
  if (message.content === `-�� ����`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});










client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** �� ���� ���� ����� ���� :( *** ..',
}}).catch(console.error);
  }
);
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** ������ ����� *** !',
}}).catch(console.error);
  }
);





















client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});















client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});





client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var ���� = message.guild.owner
        var ����� = message.guild.memberCount
        var ���� = message.guild.id
        var ���������� = message.guild.region
        var ������� = message.guild.channels.size
        var ����� = message.guild.roles
        var ��� = message.guild.createdAt
        var ����� = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('��� �������', servername)
        .addField('�� �� ������� ' , [����])
        .addField('����� �������', �����)
        .addField('����� �������', �������)
        .addField('��� ����� �������', �����)
        .addField('���� �������', ����)
        .addField('��� �������', ����������)
        .addField('����� ������ �������', ���)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});














    client.on('message', message => {
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});




















































client.login(process.env.BOT_TOKEN);
