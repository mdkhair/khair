var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://alamatbroker.com ')
// if got password use this >  var client = mqtt.connect('mqtt://alamatbroker.com',{clientId:"anything",usernmae:"khair",password:"12345"}) 
var mysql = require(mysql');
var connection = mysql.creteConnection({
	host		: 'localhost',
	user		: 'root',
	password	: '', 
	database	: 'mydb;
});

connection.connect();
client.on('connect', function () {
	client.subscribe('mytopic', function (err) {
 })
})

client.on ('message', function (topic, message) {
	console.log(message.toString())
	connection.query('INSERT INTO mytable VALUES
(NULL,"'+message.toString()+'","40")', function (error, results,
fields){
	if (error) throw error;
	console.log('ok');
});
	//connection.end();
	//client.end();
})
