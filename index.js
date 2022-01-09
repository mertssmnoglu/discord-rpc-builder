const DiscordRPC = require("discord-rpc");
const {clientId,staticActivityOptions} = require('./config.json');
DiscordRPC.register(clientId);
const rpc = new DiscordRPC.Client({transport: 'ipc'});

rpc.on('ready', () => {
    if (!rpc) return;
    rpc.setActivity(staticActivityOptions).then(drpc => console.log(`${drpc.name} is running`))
})

rpc.login({ clientId }).catch(console.error);