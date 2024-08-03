let config;

try {
    config = require("../config.json");
} catch (error) {
    config = null;
}

exports.token = config ? config.token : process.env.token;
exports.twitch_token = config ? config.twitch_token : process.env.twitch_token;
exports.twitch_id = config ? config.twitch_id : process.env.twitch_id;
exports.twitch_secret = config ? config.twitch_secret : process.env.twitch_secret;
exports.CLIENT_ID = config ? config.CLIENT_ID : process.env.CLIENT_ID;
exports.COMMAND_COOLDOWN = config ? config.COMMAND_COOLDOWN : process.env.COMMAND_COOLDOWN;