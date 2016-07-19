module.exports = function(bot) {

	bot.respond(/What do you eat?/, function(res) {
		return res.send("I'm a robot--I don't eat!");
	});

	bot.respond(/Is class meeting today?/i, function(msg){
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var day = days[ now.getDay() ];
		msg.reply(today.getDay() === 2 || today.getDay() === 3 ? "Yes we do, because today is " + day : "nah, not today is " + day);
	});

	bot.hear(/oh nelly/i, function(res) {
    	bot.messageRoom(res.message.user.name, "awesome!");
  	});


}