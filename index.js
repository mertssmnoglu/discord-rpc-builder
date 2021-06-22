const rpc = require("discord-rpc");
const config = require('./config.json');
rpc.register(config.id);

const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
    client.setActivity({
        details: config.details,
        state: config.state,
        largeImageKey: config.largeImageKey,
        largeImageText: config.largeImageText,
        smallImageKey: config.smallImageKey,
        smallImageText: config.smallImageText,
        buttons: config.buttons
    }).then(drpc => {
        console.log(`${drpc.name} App Running`)
    }).catch(err => console.log(err))
});

client.login({clientId: config.id}).catch((error) => {
    throw error.message;
});