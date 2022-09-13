/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

const mqtt = require('mqtt');

// your credentials
const options = {
  username: 'mateotito1',
  password: 'alexander316',
  host: 'f2b1609840084b779ce38ba266e6eb8d.s1.eu.hivemq.cloud',
	port: 8884,
	protocol: 'mqtts',

};

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});


// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');




/* ###############################################################################################*/


/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/

// prints a received message
client.on('message', function(topic, message) {
  	console.log('Received message:', topic, message.toString());
	
	let json = JSON.parse(message.payloadString);
	/* Contenedor 1 */
	document.getElementById("contenedorUnoVolumen").innerHTML =
		json.contenedores[0].volumen + " m3";
	document.getElementById("contenedorUnoCo").innerHTML =
		json.contenedores[0].co2 + " ..";
	document.getElementById("contenedorUnoPeso").innerHTML =
		json.contenedores[0].peso + " kg";
	0;

	/* Contenedor 2 */
	document.getElementById("contenedorDosVolumen").innerHTML =
		json.contenedores[1].volumen + " m3";
	document.getElementById("contenedorDosCo").innerHTML =
		json.contenedores[1].co2 + " ..";
	document.getElementById("contenedorDosPeso").innerHTML =
		json.contenedores[1].peso + " kg";
	console.log(json.contenedores[0].ubicacion.lat);

	let location = [
		[
			"Contenedor 1",
			json.contenedores[0].ubicacion.lat,
			json.contenedores[0].ubicacion.long,
			1,
		],
		[
			"Contenedor 2",
			json.contenedores[1].ubicacion.lat,
			json.contenedores[1].ubicacion.long,
			2,
		],
	];

	draw(location);
	
});