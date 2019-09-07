"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const db = require("quick.db");
class stats {
    constructor() {
        this._command = "stats";
    }
    help() {
        return "Displays the user's points and amount of fish caught";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
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
            .setColor([52, 54, 60])
            .setDescription(`Points: ${pointsAmount}\nTotal Fish Caught: ${fishAmount}\nTrash: ${trashAmount}\nCommon: ${commonAmount}\nUncommon: ${uncommonAmount}\nRare: ${rareAmount}\nLegendary: ${legendaryAmount}\nMythical: ${mythicalAmount}`);
        msgObject.channel.send(pointsEmbed);
    }
}
exports.default = stats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc3RhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBRy9CLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQStCdkMsQ0FBQztJQTdCRyxJQUFJO1FBQ0EsT0FBTyxzREFBc0QsQ0FBQztJQUNsRSxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN0RSxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDakUsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUVyRSxJQUFJLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7YUFDcEMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGtCQUFrQixDQUFDO2FBQ3hELFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEIsY0FBYyxDQUFDLFdBQVcsWUFBWSx3QkFBd0IsVUFBVSxZQUFZLFdBQVcsYUFBYSxZQUFZLGVBQWUsY0FBYyxXQUFXLFVBQVUsZ0JBQWdCLGVBQWUsZUFBZSxjQUFjLEVBQUUsQ0FBQyxDQUFBO1FBQzFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVDLENBQUM7Q0FFSjtBQWpDRCx3QkFpQ0MifQ==