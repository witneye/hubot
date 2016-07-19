module.exports = function(bot) {

	bot.respond(/What do you eat?/, function(res) {
		return res.send("I'm a robot--I don't eat!");
	});

	bot.respond(/Is class meeting today?/i, function(msg){
		var today = new Date();
		msg.reply(today.getDay() === 1 || today.getDay() === 3 ? "Yes we do, because today is " + today : "nah, not today");
	});

	bot.hear(/Yo/, function(res) {
		return res.send('hi', res.message.user.name);
	});

	robot.respond(/oh nelly/i, function(msg) {
    	robot.messageRoom "userid" "message";
  	});



	// bot.respond(/oh nelly/i, function (msg) {
 //    	bot.send({ user: msg.message.user.jid }, 'hi');
 //  	});

// bot.respond(/oh nelly/i, function (msg) {
// 	msg.envelope.user.type = 'direct'
//   	msg.send "Hey #{msg.envelope.user.name}!"
// });

 //    bot.hear(/hey/, function(msg) {
 //    	return msg.envelope.user.id.send("Well, Hello there");
	// });

	

	// robot.hear(['hello'], 'ambient', function(bot, message) {
	//   username = user.info.name;
	//   bot.reply(message, username);
	// });

	// controller.hears(/hey/, function(bot, message) {
 //  		bot.api.users.info({user: message.user}, function(err, info){
 //    	bot.reply(message, info.user.name)
 //  		});
	// });

}