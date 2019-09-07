"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const db = require("quick.db");
class fish {
    constructor() {
        this._command = "fish";
    }
    help() {
        return "Fish";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        let commandUser = msgObject.author.username;
        var seaweed = { fishName: "seaweed", channel: 1, avgWeight: 0.5 };
        var macBook = { fishName: "a MacBook", channel: 1, avgWeight: 2 };
        var plasticBag = { fishName: "a plastic bag", channel: 1, avgWeight: 0.1 };
        var earOil = { fishName: "a bottle of ear oil", channel: 1, avgWeight: 0.5 };
        var shoes = { fishName: "a pair of light-up Sketchers", channel: 1, avgWeight: 0.7 };
        var rock = { fishName: "a rock", channel: 1, avgWeight: 2 };
        var plasticStraw = { fishName: "a plastic straw", channel: 1, avgWeight: 0.1 };
        var plasticBottle = { fishName: "a plastic bottle", channel: 1, avgWeight: 0.1 };
        var longearSunfish = { fishName: "a Longear Sunfish", channel: 1, avgWeight: 1 };
        var pumpkinseed = { fishName: "a Pumpkinseed", channel: 1, avgWeight: 1 };
        var redearSunfish = { fishName: "a Redear Sunfish", channel: 1, avgWeight: 1 };
        var redbreastSunfish = { fishName: "a Redbreast Sunfish", channel: 1, avgWeight: 2 };
        var kingfish = { fishName: "a Kingfish", channel: 1, avgWeight: 3 };
        var yellowPerch = { fishName: "a Yellow Perch", channel: 1, avgWeight: 3 };
        var warmouth = { fishName: "a Warmouth", channel: 1, avgWeight: 3 };
        var scup = { fishName: "a Scup", channel: 1, avgWeight: 3 };
        var bluegill = { fishName: "a Bluegill", channel: 1, avgWeight: 3 };
        var herring = { fishName: "a Herring", channel: 1, avgWeight: 3 };
        var rockBass = { fishName: "a Rock Bass", channel: 1, avgWeight: 3 };
        var blackCrappie = { fishName: "a Black Crappie", channel: 1, avgWeight: 4 };
        var whitePerch = { fishName: "a Perch", channel: 1, avgWeight: 4 };
        var whiteCrappie = { fishName: "a White Crappie", channel: 1, avgWeight: 4 };
        var sauger = { fishName: "a Sauger", channel: 1, avgWeight: 5 };
        var mackerel = { fishName: "a Mackerel", channel: 1, avgWeight: 5 };
        var bullheadCatfish = { fishName: "a Bullhead Catfish", channel: 1, avgWeight: 5 };
        var chainPickerel = { fishName: "a Chain Pickerel", channel: 1, avgWeight: 6 };
        var americanShad = { fishName: "an American Shad", channel: 1, avgWeight: 7 };
        var smallmouthBass = { fishName: "a Smallmouth Bass", channel: 1, avgWeight: 8 };
        var freshwaterDrum = { fishName: "a Freshwater Drum", channel: 1, avgWeight: 10 };
        var commonCarp = { fishName: "a Common Carp", channel: 1, avgWeight: 10 };
        var asianCarp = { fishName: "an Asian Carp", channel: 1, avgWeight: 10 };
        var largemouthBass = { fishName: "a Largemouth Bass", channel: 1, avgWeight: 12 };
        var brookTrout = { fishName: "a Brook Trout", channel: 1, avgWeight: 10 };
        var spottedBass = { fishName: "a Spotted Bass", channel: 1, avgWeight: 11 };
        var chub = { fishName: "a Chub", channel: 1, avgWeight: 15 };
        var saugeye = { fishName: "a Saugeye", channel: 1, avgWeight: 15 };
        var bonefish = { fishName: "a Bonefish", channel: 1, avgWeight: 20 };
        var haddock = { fishName: "a Haddock", channel: 1, avgWeight: 20 };
        var weakfish = { fishName: "a Weakfish", channel: 1, avgWeight: 20 };
        var bucketmouthBass = { fishName: "a Bucketmouth Bass", channel: 1, avgWeight: 20 };
        var bowfin = { fishName: "a Bowfin", channel: 1, avgWeight: 21 };
        var walleye = { fishName: "a Walleye", channel: 1, avgWeight: 24 };
        var rainbowTrout = { fishName: "a Rainbow Trout", channel: 1, avgWeight: 27 };
        var redSnapper = { fishName: "a Red Snapper", channel: 1, avgWeight: 28 };
        var cod = { fishName: "a Cod", channel: 1, avgWeight: 30 };
        var channelCatfish = { fishName: "a Channel Catfish", channel: 1, avgWeight: 30 };
        var northernPike = { fishName: "a Northern Pike", channel: 1, avgWeight: 34 };
        var burbot = { fishName: "a Burbot", channel: 1, avgWeight: 41 };
        var atlanticSalmon = { fishName: "an Atlantic Salmon", channel: 1, avgWeight: 57 };
        var pollock = { fishName: "a Pollock", channel: 1, avgWeight: 39 };
        var cusk = { fishName: "a Cusk", channel: 1, avgWeight: 45 };
        var halibut = { fishName: "a Halibut", channel: 1, avgWeight: 50 };
        var stripedBass = { fishName: "a Striped Bass", channel: 1, avgWeight: 69 };
        var blueCatfish = { fishName: "a Blue Catfish", channel: 1, avgWeight: 83 };
        var gucciSneakers = { fishName: "a pair of Gucci Off-White Sneakers!", channel: 1, avgWeight: 1 };
        var lakeTrout = { fishName: "a Lake Trout!", channel: 1, avgWeight: 40 };
        var greatBarracuda = { fishName: "a Great Barracuda!", channel: 1, avgWeight: 53 };
        var muskellunge = { fishName: "a Muskellunge!", channel: 1, avgWeight: 60 };
        var permit = { fishName: "a Permit!", channel: 1, avgWeight: 79 };
        var siberianTaimen = { fishName: "a Siberian Taimen!", channel: 1, avgWeight: 85 };
        var amberjack = { fishName: "an Amberjack!", channel: 1, avgWeight: 100 };
        var wahoo = { fishName: "a Wahoo!", channel: 1, avgWeight: 103 };
        var roosterfish = { fishName: "a Roosterfish!", channel: 1, avgWeight: 110 };
        var sailfish = { fishName: "a Sailfish!", channel: 1, avgWeight: 120 };
        var goliathTigerfish = { fishName: "a Goliath Tigerfish!", channel: 1, avgWeight: 154 };
        var giantTrevally = { fishName: "a Giant Trevally!", channel: 1, avgWeight: 176 };
        var blueMarlin = { fishName: "a Blue Marlin!", channel: 1, avgWeight: 210 };
        var nilePerch = { fishName: "a Nile Perch!", channel: 1, avgWeight: 240 };
        var tarpon = { fishName: "a Tarpon!", channel: 1, avgWeight: 280 };
        var alligatorGar = { fishName: "an Alligator Gar!", channel: 1, avgWeight: 350 };
        var arapaima = { fishName: "an Arapaima!", channel: 1, avgWeight: 440 };
        var goliathCatfish = { fishName: "a Goliath Catfish!", channel: 1, avgWeight: 450 };
        var giantOarfish = { fishName: "a Giant Oarfish!", channel: 1, avgWeight: 600 };
        var atlanticBluefinTuna = { fishName: "an Atlantic Bluefin Tuna!", channel: 1, avgWeight: 830 };
        var whiteSturgeon = { fishName: "a White Sturgeon!", channel: 1, avgWeight: 990 };
        var trashArray = [seaweed, macBook, plasticBag, earOil, shoes, rock, plasticStraw, plasticBottle];
        var commonArray = [longearSunfish, pumpkinseed, redearSunfish, redbreastSunfish, kingfish, yellowPerch, warmouth, scup, bluegill, herring, rockBass, blackCrappie, whitePerch, whiteCrappie, sauger, mackerel, bullheadCatfish, chainPickerel, americanShad, smallmouthBass, freshwaterDrum, commonCarp, asianCarp, largemouthBass];
        var uncommonArray = [brookTrout, spottedBass, chub, saugeye, bonefish, haddock, weakfish, bucketmouthBass, bowfin, walleye, rainbowTrout, redSnapper, cod];
        var rareArray = [channelCatfish, northernPike, burbot, atlanticSalmon, pollock, cusk, halibut, stripedBass, blueCatfish];
        var legendaryArray = [gucciSneakers, lakeTrout, greatBarracuda, muskellunge, permit, siberianTaimen, amberjack, wahoo, roosterfish, sailfish];
        var mythicalArray = [goliathTigerfish, giantTrevally, blueMarlin, nilePerch, tarpon, alligatorGar, arapaima, giantOarfish, goliathCatfish, atlanticBluefinTuna, whiteSturgeon];
        var tierPointMultiplier;
        var weight;
        var tierArray;
        var tierName;
        var sizeName;
        var pointReward;
        var tierValue = Math.floor((Math.random() * 1000) + 1);
        if (tierValue <= 5) {
            tierArray = mythicalArray;
            tierPointMultiplier = 33.333;
            tierName = "MYTHICAL";
            db.add(`${msgObject.author.id}.mythFishCaught`, 1);
        }
        else if (tierValue > 5 && tierValue <= 40) {
            tierArray = legendaryArray;
            tierPointMultiplier = 11.429;
            tierName = "LEGENDARY";
            db.add(`${msgObject.author.id}.legFishCaught`, 1);
        }
        else if (tierValue > 40 && tierValue <= 160) {
            tierArray = rareArray;
            tierPointMultiplier = 3.333;
            tierName = "RARE";
            db.add(`${msgObject.author.id}.rareFishCaught`, 1);
        }
        else if (tierValue > 160 && tierValue <= 440) {
            tierArray = uncommonArray;
            tierPointMultiplier = 1.429;
            tierName = "UNCOMMON";
            db.add(`${msgObject.author.id}.uncomFishCaught`, 1);
        }
        else if (tierValue > 440 && tierValue <= 840) {
            tierArray = commonArray;
            tierPointMultiplier = 1;
            tierName = "COMMON";
            db.add(`${msgObject.author.id}.comFishCaught`, 1);
        }
        else {
            tierArray = trashArray;
            tierPointMultiplier = 0;
            tierName = "TRASH";
            db.add(`${msgObject.author.id}.trashCaught`, 1);
        }
        var randFish = tierArray[Math.floor(Math.random() * tierArray.length)];
        var sizeValue = Math.floor((Math.random() * 1000) + 1);
        if (sizeValue <= 10) {
            weight = randFish.avgWeight * 2;
            sizeName = "MONDO";
        }
        else if (sizeValue > 10 && sizeValue <= 40) {
            weight = randFish.avgWeight * 1.75;
            sizeName = "FATTY";
        }
        else if (sizeValue > 40 && sizeValue <= 130) {
            weight = randFish.avgWeight * 1.5;
            sizeName = "HUGE";
        }
        else if (sizeValue > 130 && sizeValue <= 310) {
            weight = randFish.avgWeight * 1.25;
            sizeName = "BIG";
        }
        else if (sizeValue > 310 && sizeValue <= 700) {
            weight = randFish.avgWeight;
            sizeName = "AVERAGE";
        }
        else if (sizeValue > 700 && sizeValue <= 880) {
            weight = randFish.avgWeight * 0.75;
            sizeName = "SMALL";
        }
        else if (sizeValue > 880 && sizeValue <= 970) {
            weight = randFish.avgWeight * 0.50;
            sizeName = "TINY";
        }
        else {
            weight = randFish.avgWeight * 0.25;
            sizeName = "PATHETIC";
        }
        var roundedWeight = Math.round(weight);
        pointReward = Math.round(roundedWeight * tierPointMultiplier);
        db.add(`${msgObject.author.id}.points`, pointReward);
        db.add(`${msgObject.author.id}.fishCaught`, 1);
        if (tierName == "MYTHICAL") {
            let pointsEmbed = new Discord.RichEmbed()
                .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
                .setColor([170, 0, 170])
                .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`);
            msgObject.channel.send(pointsEmbed);
        }
        else if (tierName == "LEGENDARY") {
            let pointsEmbed = new Discord.RichEmbed()
                .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
                .setColor([255, 170, 0])
                .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`);
            msgObject.channel.send(pointsEmbed);
        }
        else if (tierName == "RARE") {
            let pointsEmbed = new Discord.RichEmbed()
                .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
                .setColor([85, 85, 255])
                .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`);
            msgObject.channel.send(pointsEmbed);
        }
        else if (tierName == "UNCOMMON") {
            let pointsEmbed = new Discord.RichEmbed()
                .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
                .setColor([85, 255, 85])
                .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`);
            msgObject.channel.send(pointsEmbed);
        }
        else if (tierName == "COMMON") {
            let pointsEmbed = new Discord.RichEmbed()
                .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
                .setColor([170, 170, 170])
                .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`);
            msgObject.channel.send(pointsEmbed);
        }
        else {
            let pointsEmbed = new Discord.RichEmbed()
                .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
                .setColor([90, 90, 90])
                .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`);
            msgObject.channel.send(pointsEmbed);
        }
    }
}
exports.default = fish;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9maXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUcvQixNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUErUHRDLENBQUM7SUE3UEcsSUFBSTtRQUNBLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUdwRCxJQUFJLE9BQU8sR0FBRyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsR0FBRyxFQUFDLENBQUM7UUFDN0QsSUFBSSxPQUFPLEdBQUcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzdELElBQUksVUFBVSxHQUFHLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxHQUFHLEVBQUMsQ0FBQztRQUN0RSxJQUFJLE1BQU0sR0FBRyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxHQUFHLEVBQUMsQ0FBQztRQUN4RSxJQUFJLEtBQUssR0FBRyxFQUFDLFFBQVEsRUFBQyw4QkFBOEIsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxHQUFHLEVBQUMs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