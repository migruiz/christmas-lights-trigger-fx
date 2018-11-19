/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.lightson = (req, res) => {
    var mqtt = require('mqtt');
    var client  = mqtt.connect(process.env.mtqqURL);
  	console.log(process.env.mtqqURL);
  	console.log(process.env.turnOnLightsTopic);
    client.on('connect', function () {
      console.log('entered');
        client.publish(process.env.turnOnLightsTopic, 'LightsOn');
        client.end();
        res.status(200);
    })
  };
  
