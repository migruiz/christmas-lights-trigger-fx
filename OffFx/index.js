/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.lightsoff = (req, res) => {
    var mqtt = require('mqtt');
    var client  = mqtt.connect(process.env.mtqqURL);
  	console.log(process.env.mtqqURL);
  	console.log(process.env.turnOffLightsTopic);
    client.on('connect', function () {
      console.log('entered');
        client.publish(process.env.turnOffLightsTopic, 'LightsOff');
        res.status(200).send('');
    })
  };