const rpc = require("discord-rpc");
const config = require('./config.json');
rpc.register(config.id);

const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
    console.log("Discord Rpc Running")
    client.setActivity({
        details: config.details,
        state: config.state,
        largeImageKey: config.largeImageKey,
        largeImageText: config.largeImageText,
        smallImageKey: config.smallImageKey,
        smallImageText: config.smallImageText,
        buttons: config.buttons
    });
});

client.login({
    clientId: config.id
}).catch((err) => {
    console.log(err.message)
});