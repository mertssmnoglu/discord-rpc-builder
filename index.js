const DiscordRPC = require("discord-rpc");
const fs = require('fs');
const rpc = new DiscordRPC.Client({transport: 'ipc'});
const inquirer = require("inquirer");

fs.access("config.json", async (err) => {
    if (err) {
        console.log("File doesnt exists. Let's create one.")
        await createConfigFile("config.json")
        console.log("config.json file successfully created. Restarting in 5 seconds...")
        setTimeout(async () => {
            await startRpc('./config.json')
        }, 5000);
    } else {
        await startRpc('./config.json')
    }
});
async function createConfigFile(fileName) {
    await inquirer.prompt([{
        name: "clientid",
        type: "input",
        message: "What is your client id?",
    }, {
        name: "details",
        type: "input",
        message: "What is your first text (detail) ?",
    }, {
        name: "state",
        type: "input",
        message: "What is your second text (state) ?",
    }, {
        name: "images",
        type: "list",
        message: "Do you want images ?",
        choices: ["No Image","Large Image","Small Image","Large and Small Images"]
    }, {
        name: "buttons",
        type: "list",
        message: "Do you want buttons ?",
        choices: ["No buttons","1 Button","2 Buttons"]
    }]).then(async(answer) => {
        switch (answer.images) {
            case "Large Image":
                await inquirer.prompt([{
                    name: "largeImageKey",
                    type: "input",
                    message: "What is your large image key?",
                },{
                    name: "largeImageText",
                    type: "input",
                    message: "What is your large image text?",
                }]).then((imageAnswers) => {
                    answer.images = imageAnswers
                })
                break;
            case "Small Image":
                await inquirer.prompt([{
                    name: "smallImageKey",
                    type: "input",
                    message: "What is your small image key?",
                },{
                    name: "smallImageText",
                    type: "input",
                    message: "What is your small image text?",
                }]).then((imageAnswers) => {
                    answer.images = imageAnswers
                })
                break;
            case "Large and Small Images":
                await inquirer.prompt([{
                    name: "largeImageKey",
                    type: "input",
                    message: "What is your large image key?",
                },{
                    name: "largeImageText",
                    type: "input",
                    message: "What is your large image text?",
                },{
                    name: "smallImagekey",
                    type: "input",
                    message: "What is your small image key?",
                },{
                    name: "smallImageText",
                    type: "input",
                    message: "What is your small image text?",
                }]).then((imageAnswers) => {
                    answer.images = imageAnswers
                })
                break;
        }

        switch (answer.buttons) {
            case "1 Button":
                await inquirer.prompt([{
                    name: "label",
                    type: "input",
                    message: "What is your button text?",
                },{
                    name: "url",
                    type: "input",
                    message: "What is your button url?",
                }]).then((buttonAnswers) => {
                    let buttons = [{
                        label: buttonAnswers.label,
                        url: buttonAnswers.url
                    }]
                    answer.buttons = buttons
                })
                break;
            case "2 Buttons":
                await inquirer.prompt([{
                    name: "label1",
                    type: "input",
                    message: "What is your button 1 text?",
                },{
                    name: "url1",
                    type: "input",
                    message: "What is your button 1 url?",
                },{
                    name: "label2",
                    type: "input",
                    message: "What is your button 2 text?",
                },{
                    name: "url2",
                    type: "input",
                    message: "What is your button 2 url?",
                }]).then((buttonAnswers) => {
                    let firstButton = {label: buttonAnswers.label1,url: buttonAnswers.url1}
                    let secondButton = {label: buttonAnswers.label2,url: buttonAnswers.url2}
                    let buttons = [firstButton,secondButton]
                    answer.buttons = buttons
                })
                break;
        }
        let configDatas = {
            clientId: answer.clientid,
            staticActivityOptions: {
                details: answer.details,
                state: answer.state
            }
        }
        if(typeof(answer.images) == 'object'){
            Object.keys(answer.images).forEach(key => {
                configDatas.staticActivityOptions[key] = answer.images[key]
            })
        }
        if(answer.buttons != "No buttons"){
            configDatas.staticActivityOptions["buttons"] = []
            let configbuttons = []
            answer.buttons.forEach(button => {
                configbuttons.push(button) 
            });
            configDatas.staticActivityOptions["buttons"] = configbuttons
        }
        const content = JSON.stringify(configDatas);
        fs.writeFileSync(fileName, content);
    });
}

async function startRpc(configFile) {
    const {clientId,staticActivityOptions} = require(configFile);
    DiscordRPC.register(clientId);
    rpc.on('ready', () => {
        if (!rpc) return;
        rpc.setActivity(staticActivityOptions).then(drpc => console.log(`Running ${drpc.name}`))
    })

    rpc.login({clientId}).catch(console.error);
}