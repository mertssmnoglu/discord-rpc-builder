# Discord Rpc Builder

Best option for discord-rpc.

## Download

```bash
git clone https://github.com/mertssmnoglu/discord-rpc-builder
```

## Setup and Settings

#### Dependencies:

- [x] [Node Js](https://nodejs.org)
- [x] [discord-rpc](https://npmjs.com/package/discord-rpc)
- [x] [inquirer](https://npmjs.com/package/)

#### Create a New Application:

1) Open [Discord Developers](https://discord.com/developers/applications) website and log in.

2) Click the `New Application` button then enter the application name (ex. personal-links) and click the create.

![New Application](https://cdn.discordapp.com/attachments/869417576931926036/970000328114180136/unknown.png)

#### Add Image to Application:

! If you do not want to add image you can skip these steps.

5) Clik `Rich Presence` section and upload your images.

![Add Image Area](https://cdn.discordapp.com/attachments/869417576931926036/969999909384257586/unknown.png)

Discord, may be slow for show your uploaded images. Be patient.

## Run

Run the app with npm run command.

```bash
npm run
```

If you run the app first time, it asks for

1. Discord app's client id
2. Discord app's first text
3. Discord app's second text
4. If you upload images, images id's and their texts.
5. If you want buttons, buttons numbers and their datas.

When all of the datas given correctly it restarts in 5 seconds.