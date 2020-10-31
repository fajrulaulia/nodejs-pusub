var redis = require("redis");
var publisher = redis.createClient();
publisher.publish("kanal", "{\"message\":\"Peu haba, kiban gam !\"}", () => {
    process.exit(0);
});
