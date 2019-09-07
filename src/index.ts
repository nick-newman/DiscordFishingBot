import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import * as db from "quick.db";
import {IBotCommand} from "./api";
import { isNull } from "util";

const bot: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];
loadCommands(`${__dirname}/commands`)

bot.on("ready",()=>{

    //What the bot is playing
    bot.user.setActivity("Fishing", { type: "PLAYING"});

    let allUsers = bot.users.array();  
    for(let i = 0; i < allUsers.length; i++) {
        if(isNull(db.get(allUsers[i].id))){

            db.set(allUsers[i].id, {points: 0, fishCaught: 0, trashCaught:0, comFishCaught: 0, uncomFishCaught: 0, rareFishCaught: 0, legFishCaught: 0, mythFishCaught: 0})
        }  
    }

    //Let us know that the bot is online
    console.log("Fishing Bot Loaded");
})

bot.on("guildMemberAdd", member => {

    if(isNull(db.get(member.id))){

        db.set(member.id, {points: 0, fishCaught: 0, trashCaught:0, comFishCaught: 0, uncomFishCaught: 0, rareFishCaught: 0, legFishCaught: 0, mythFishCaught: 0})
    }    

});

bot.on("message", msg => {

    //Ignore messages sent by the bot
    if (msg.author.bot) {return;}

    //Ignore messages without the bot's prefix
    if(!msg.content.startsWith(ConfigFile.config.prefix)) {return;}

    //Handle the command
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    //Loop through all of the loaded commands
    for(const commandClass of commands) {

        //Attempt to execute code, send error message on failure
        try {

            //Check if command class is correct
            if(!commandClass.isThisCommand(command)) {

                //Go to next iteration of loop if incorrect command
                continue;
            }

            //Pause execution while command's code runs
            await commandClass.runCommand(args, msg, bot);
        }
            catch(exception) {
                //On error, log the exception
                console.log(exception);
            }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if no commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) {return;}

    //Loop through all of the commands in the config file
    for (const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

bot.login(ConfigFile.config.token);