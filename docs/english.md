# Discord Rpc Builder

Best option for discord-rpc.

## Download

```bash
git clone https://github.com/mertssmnoglu/discord-rpc-builder
```

## Setup and Settings

#### Dependencies:

- [x] [Node Js](https://nodejs.org)
- [x] [Npm](https://npmjs.com)
- [x] [discord-rpc](https://npmjs.com/package/)

#### Create a New Application:

1) Open [Discord Developers](https://discord.com/developers/applications) website and log in.

2) Click the `New Application` button then enter the application name (ex. personal-links) and click the create.

![New Application](https://cdn.discordapp.com/attachments/838394083013689345/844095138660745246/unknown.png)
![Rename the Application](https://cdn.discordapp.com/attachments/838394083013689345/844095665977557042/unknown.png)

3) Copy the `Application ID` and paste it into config.json file's id section.

4) Other config.json settings.

    details : first line 

    state : second line 

#### Add Image to Application:

! If you do not want to add image you can skip these steps.

5) Clik `Rich Presence` section and upload your images.

![Add Image](https://cdn.discordapp.com/attachments/838394083013689345/844096542377508884/unknown.png)
![Add Image Area](https://cdn.discordapp.com/attachments/838394083013689345/844097302666936320/unknown.png)

Discord, may be slow for show your uploaded images. Be patient.

6) Write the keys of the images into config.json file's `largeImageKey` or `smallImageKey` sections. Then write the text when someone hover on the image into `largeImageText` or `smallImageText`.

#### Add or Remove Button:

7) Edit the config.json for this format.
    ```json
    "buttons":[
        {"label":"buton","url":"link1"},
        {"label":"buton2","url":"link2"}
    ]
    ```
    If you want one button remove the last one, else if you do not want any buttons delete the "buttons" array.