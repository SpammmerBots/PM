const Discord = require('discord.js');
const client1 = new Discord.Client();

client1.on("ready", () => {

	      var interval = setInterval (function () {
client1.channels.get('522375285761507329').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
		  }, 120000);
  
	      var interval1 = setInterval (function () {
  client1.channels.get('522375285761507329').send('#daily');
  client.channels.get('522375285761507329').send('#rep <@411137717884289024>');  
		  }, 86800000);
  
	      var interval1 = setInterval (function () {
client1.channels.get('522375285761507329').send('..!daily <@411137717884289024>');
client1.channels.get('522375285761507329').send('..!rep <@411137717884289024>');
		  }, 61360000);
});

client1.login(process.env.STYLE_BOT1);
/////////
client2.on("ready", () => {

	      var interval = setInterval (function () {
client2.channels.get('522375285761507329').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
		  }, 120000);
  
	      var interval1 = setInterval (function () {
  client1.channels.get('522375285761507329').send('#daily');
  client.channels.get('522375285761507329').send('#rep <@411137717884289024>');  
		  }, 86800000);
  
	      var interval2 = setInterval (function () {
client2.channels.get('522375285761507329').send('..!daily <@411137717884289024>');
client2.channels.get('522375285761507329').send('..!rep <@411137717884289024>');
		  }, 61360000);
});

client2.login(process.env.STYLE_BOT2);














