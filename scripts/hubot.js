module.exports = function(robot) {

	robot.respond(/What do you eat?/, function(res) {
		return res.send("I'm a robot--I don't eat!");
	});

	robot.respond(/Is class meeting today?/i, function(msg){
		var today = new Date();
		msg.reply(today.getDay() === 1 || today.getDay() === 3 ? "Yes we do, because today is " + today : "nah, not today");
	});

	robot.hear(/Yo/, function(res) {
		return res.send('hi', res.message.user.name);
	});

	robot.hear(/hey/, function(res) {
    	return msg.envelope.user.id.send("Well, Hello there");
	});

	// robot.respond(/hi/i, function(msg) {
 //    	robot.messageRoom "userid" "message";
 //  	});

	


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