const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix,token} = require('./config.json');

//prefix ==> ${prefix}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //Input with Prefix
  const args = message.content.slice(prefix.length).trim().split(' '); 
  const command = args.shift().toLowerCase();
  console.log(message.author.username+ " : "+ message.content);


  switch (command) {
      //for getting user id
        case "id": 
          message.channel.send(message.author.id);
          break;
      //Shut down
        case "quit": 
          if (message.author.id !== '273714398647025664') return;
          message.channel.send('Shutted down.').then(() => {
          process.exit(1);
          });
          break;
      //Deleting messages
        case "delete-message":
          const amount = parseInt(args[0]+ 1);
          if(isNaN(amount))
          {
            return message.reply("Sayi girmelisiniz.");
          }
          else if(amount < 1 || amount > 100)
          {
            return message.reply("1 ve 99 arasında sayi girmelisiniz.")
          }
          else
          {
            message.channel.bulkDelete(amount);
            console.log(amount + " mesaj #" + message.channel.name + " kanalindan silindi.");
          }


    }
    //
  
});



client.login(token);