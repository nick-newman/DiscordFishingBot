# DiscordFishingBot
HOW TO SET UP ON YOUR SERVER

[Download Visual Studio Code](https://code.visualstudio.com/)

[Download Node.js](https://nodejs.org/en/)

Clone the DiscordFishingBot repository to Visual Studio Code

Open the FishingBot in Visual Studio Code

Press 'Ctrl + Shift + \`' to open the terminal

Type 'npm install -g typescript' in the terminal

Type 'npm install discord.js' in the terminal

Go to https://discordapp.com/developers

Login to your Discord account

Press 'New Application'

Under Settings, click on Bot

Press 'Add Bot'

Under Token, press 'Copy'

In Visual Studio Code, go to the file FishingBot\dist\config.js

On line 4, replace **`<PUT TOKEN HERE>`** with the copied token
  
Go back to the Discord website

Under Settings, click on General Information

Under Client ID, press 'Copy'

Replace **`<PASTE CLIENT ID HERE>`** in the link below with the copied Client ID
  
https://discordapp.com/api/oauth2/authorize?client_id=**`<PASTE CLIENT ID HERE>`**&scope=bot&permissions=67120128
  
Paste the link in a browser, hit enter, select your server, and press 'Authorize' to add the bot to your server

Go to the file FishingBot\support for info on starting the bot
