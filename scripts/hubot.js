module.exports = function(robot) {

robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
	var today = new Date();
	msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
});

robot.hear(/i did it/i, function(msg){
	msg.send("Congratulations! Good job!");
});

robot.respond(/are you there?/i, function(msg){
	msg.reply('Yes, usually here, and listening.');
});

robot.respond(/convert \$(.*) to btc/i, function(res){
var usd = res.match[1];
	res.reply('That is about ' + usd * 0.0024 + ' in BTC');
});

robot.hear(/Hello!/, function(res) {
	return res.send("Hi there!");
});

robot.respond(/What's do you eat?/, function(res) {
	return res.send("I'm a robot--I don't eat!");
});

robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
	var name;
	name = msg.match[1];
	if (name == "Hubot"){
		return msg.send("You're not Hubot--I'm Hubot!");
	} else {
	return msg.reply("Nice to meet you, " + name + "!");
}

robot.respond(/add (.) and (.)/i, function(msg) {
	var a;
	var b;
	a = parseInt(msg.match[1]);
	b = parseInt(msg.match[2]);
	c = a + b

	return msg.reply(a + " plus " + b + " = " + c);
});

robot.respond(/do we have class today/i, function(msg){
	var today = new Date();
	return msg.reply(today.getDay() === 1 || today.getDay() === 3 ? "YES" : "NO");
});

}