
var mqtt = require('mqtt')
var client  = mqtt.connect(global.mtqqURL) 
client.on('connect', function () {
    client.publish(global.turnOnLightsTopic, 'LightsOn')
})