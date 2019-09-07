import * as Discord from "discord.js";
import * as db from "quick.db";
import { IBotCommand } from "../api";

export default class stats implements IBotCommand {

    private readonly _command = "stats"
    
    help(): string {
        return "Displays the user's points and amount of fish caught";
    }
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {

        msgObject.delete(0);

        let pointsAmount = db.get(`${msgObject.author.id}.points`);
        let fishAmount = db.get(`${msgObject.author.id}.fishCaught`);
        let trashAmount = db.get(`${msgObject.author.id}.trashCaught`);
        let commonAmount = db.get(`${msgObject.author.id}.comFishCaught`);
        let uncommonAmount = db.get(`${msgObject.author.id}.uncomFishCaught`);
        let rareAmount = db.get(`${msgObject.author.id}.rareFishCaught`);
        let legendaryAmount = db.get(`${msgObject.author.id}.legFishCaught`);
        let mythicalAmount = db.get(`${msgObject.author.id}.mythFishCaught`);

        let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username}'s Fishing Stats`)
            .setColor([52,54,60])
            .setDescription(`Points: ${pointsAmount}\nTotal Fish Caught: ${fishAmount}\nTrash: ${trashAmount}\nCommon: ${commonAmount}\nUncommon: ${uncommonAmount}\nRare: ${rareAmount}\nLegendary: ${legendaryAmount}\nMythical: ${mythicalAmount}`)
            msgObject.channel.send(pointsEmbed);

    }

}