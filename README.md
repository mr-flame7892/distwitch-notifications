# distwitch-notifications
An open code source discord bot who will send a notification on a server when one of the members is doing a stream!

## 🗃️ Requirements

1. Version 1.5.0 of @discordjs/builders
2. Version 1.6.0 of @discordjs/rest
3. Version 13.13.1 of discord.js
4. Version 0.0.1-security of fs
5. Version 3.7.0 of phin

## 🔧 Configuration

After installing the zip of the project, drop the folder on your desktop or somewhere else and open a terminal in this folder. Write: ```npm install``` then you can close the terminal. After that, you will need to set some values in the ```config.json``` file: 

```json
{
  "token": "",
  "twitch_token": "",
  "twitch_id": "",
  "twitch_secret": "",
  "CLIENT_ID": ""
}
```

1. The "token" is the token of your discord bot. (If you haven't one, you can create one here: https://discord.com/developers/applications)

2. You can blank it for the moment.

3. In the twitch_id value, you will need to put the id of your twitch application here. (If you haven't one, you can create one here: https://dev.twitch.tv/console/apps)

4. In the twitch_secret value, you will need to put the secret of your twitch application. (If you haven't one, you can create one here: https://dev.twitch.tv/console/apps)

5. Finally you will need to put the id of your discord bot in the CLIENT_ID value (If you don't know how to get it, simply go on the page of your discord bot and on the "General informations" page, you will find a section "Application id" and then copy it)
