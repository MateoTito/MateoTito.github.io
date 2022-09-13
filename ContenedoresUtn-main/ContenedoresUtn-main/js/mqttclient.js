/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

const mqtt = require('mqtt');

// your credentials
const options = {
  username: 'mateotito1',
  password: 'alexander316',
};

const client = mqtt.connect('tls://f2b1609840084b779ce38ba266e6eb8d.s1.eu.hivemq.cloud:8884', options);

// reassurance that the connection worked
client.on('connect', () => {
  console.log('Connected!');
});

// prints an error message
client.on('error', (error) => {
  console.log('Error:', error);
});

// subscribe and publish to the same topic
client.subscribe('messages');
client.publish('messages', 'Hello, this message was received!');

/* ###############################################################################################*/


/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/

// prints a received message
client.on('message', function(topic, message) {
  	console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
	
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





