# distwitch-notifications
An open code source discord bot write in javascript with discord.js who will send a notification on a server, in a specific channel when one of the members is doing a stream!

## 🗃️ Requirements:

1. Version 1.5.0 of [@discordjs/builders](https://www.npmjs.com/package/@discordjs/builders/v/1.5.0)
2. Version 1.6.0 of [@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest/v/1.6.0)
3. Version 13.13.1 of [discord.js](https://www.npmjs.com/package/discord.js/v/13.13.1)
4. Version 0.0.1-security of fs
5. Version 3.7.0 of [phin](https://www.npmjs.com/package/phin/v/3.7.0)

## 🔧 Configuration:

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

When everything is ready, open a terminal in the folder and write: ```node index.js```

## 👥 Members features:

- Add your twitch username

/add_your_twitch [your_username]

- Edit the twitch username that you added

/change_your_twitch [your_new_username]

- Display your current twitch

/your_twitch

- Delete my twitch from the bot for a certain server

/delete_your_twitch

## 🛠️ Admins features:

- Set the channel to send notifications

/set_notification_channel [channel_notification]

- Change the twitch of a member

/change_the_twitch_of_a_member [user]  [new_twitch]

- Delete the twitch of a member

/delete_the_twitch_of_a_member [user]

## 🖼️ Previews:

- Notification:![weird_picture](https://user-images.githubusercontent.com/67482496/226495495-294d75da-fcb5-427a-ab41-e4d7e24e097d.png)

- Add your twitch channel:![preview](https://user-images.githubusercontent.com/67482496/226495620-3ab5e5d6-00c9-4f8a-b94b-e1f2003d62e2.png)

- Change the twitch of a member:![preview2](https://user-images.githubusercontent.com/67482496/226496024-4e6913d2-c5fd-4d9c-8b6a-154d62075268.png)
