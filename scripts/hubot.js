module.exports = function(robot) {

robot.respond(/What do you eat?/, function(res) {
	return res.send("I'm a robot--I don't eat!");
});

robot.respond(/Is class meeting today?/i, function(msg){
	var today = new Date();
	msg.reply(today.getDay() === 1 || today.getDay() === 3 ? "Yes we do, because today is " + today : "nah, not today");
});

robot.hears(/'Hello There!'/, function(bot, message) {
  username = users.info.name;
  bot.reply(message, username);
});


}