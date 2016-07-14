module.exports = function(robot) {

robot.respond(/What do you eat?/, function(res) {
	return res.send("I'm a robot--I don't eat!");
});


}