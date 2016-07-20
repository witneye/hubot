module.exports = function(bot) {

	bot.respond(/What do you eat?/, function(res) {
		return res.send("I'm a robot--I don't eat!");
	});

	bot.respond(/Is class meeting today?/i, function(msg){
		var weekdays = new Array(7);
		weekdays[0] = "Sunday";
		weekdays[1] = "Monday";
		weekdays[2] = "Tuesday";
		weekdays[3] = "Wednesday";
		weekdays[4] = "Thursday";
		weekdays[5] = "Friday";
		weekdays[6] = "Saturday";

		var today = new Date();
		day = today.getDay();

		msg.reply(today.getDay() === 2 || today.getDay() === 3 ? "Yes we do, because today is " + weekdays[day] : "nah, not today is " + weekdays[day]);
	});

	bot.hear(/oh nelly/i, function(res) {
    	bot.messageRoom(res.message.user.name, "awesome!");
  	});

}