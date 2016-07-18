module.exports = function(robot) {

robot.respond(/What do you eat?/, function(res) {
	return res.send("I'm a robot--I don't eat!");
});

robot.respond(/Do we have class today?/i, function(msg){
var today = new Date();

msg.reply(today.getDay() === 1 || today.getDay() === 3 ? "YES" : "NO");
});


}