var redis = require("redis");
var subscriber = redis.createClient();
subscriber.on("message", function (channel, message) {
    console.log("Response : " + message + " on channel: " + channel + " is arrive!");
});
subscriber.subscribe("kanal");