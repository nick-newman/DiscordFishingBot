import * as Discord from "discord.js";
import * as db from "quick.db";
import {IBotCommand} from "../api";

export default class fish implements IBotCommand {

    private readonly _command = "fish"

    help(): string {
        return "Fish";
    }
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        
        msgObject.delete(0);
        let commandUser = msgObject.author.username;

//Trash tier objects
var seaweed = {fishName:"seaweed", channel:1, avgWeight:0.5};
var macBook = {fishName:"a MacBook", channel:1, avgWeight:2};
var plasticBag = {fishName:"a plastic bag", channel:1, avgWeight:0.1};
var earOil = {fishName:"a bottle of ear oil", channel:1, avgWeight:0.5};
var shoes = {fishName:"a pair of light-up Sketchers", channel:1, avgWeight:0.7};
var rock = {fishName:"a rock", channel:1, avgWeight:2};
var plasticStraw = {fishName:"a plastic straw", channel:1, avgWeight:0.1};
var plasticBottle = {fishName:"a plastic bottle", channel:1, avgWeight:0.1};

//Common tier objects
var longearSunfish = {fishName:"a Longear Sunfish", channel:1, avgWeight:1};
var pumpkinseed = {fishName:"a Pumpkinseed", channel:1, avgWeight:1};
var redearSunfish = {fishName:"a Redear Sunfish", channel:1, avgWeight:1};
var redbreastSunfish = {fishName:"a Redbreast Sunfish", channel:1, avgWeight:2};
var kingfish = {fishName:"a Kingfish", channel:1, avgWeight:3};
var yellowPerch = {fishName:"a Yellow Perch", channel:1, avgWeight:3};
var warmouth = {fishName:"a Warmouth", channel:1, avgWeight:3};
var scup = {fishName:"a Scup", channel:1, avgWeight:3};
var bluegill = {fishName:"a Bluegill", channel:1, avgWeight:3};
var herring = {fishName:"a Herring", channel:1, avgWeight:3};
var rockBass = {fishName:"a Rock Bass", channel:1, avgWeight:3};
var blackCrappie = {fishName:"a Black Crappie", channel:1, avgWeight:4};
var whitePerch = {fishName:"a Perch", channel:1, avgWeight:4};
var whiteCrappie = {fishName:"a White Crappie", channel:1, avgWeight:4};
var sauger = {fishName:"a Sauger", channel:1, avgWeight:5};
var mackerel = {fishName:"a Mackerel", channel:1, avgWeight:5};
var bullheadCatfish = {fishName:"a Bullhead Catfish", channel:1, avgWeight:5};
var chainPickerel = {fishName:"a Chain Pickerel", channel:1, avgWeight:6};
var americanShad = {fishName:"an American Shad", channel:1, avgWeight:7};
var smallmouthBass = {fishName:"a Smallmouth Bass", channel:1, avgWeight:8};
var freshwaterDrum = {fishName:"a Freshwater Drum", channel:1, avgWeight:10};
var commonCarp = {fishName:"a Common Carp", channel:1, avgWeight:10};
var asianCarp = {fishName:"an Asian Carp", channel:1, avgWeight:10};
var largemouthBass = {fishName:"a Largemouth Bass", channel:1, avgWeight:12};

//Uncommon tier objects
var brookTrout = {fishName:"a Brook Trout", channel:1, avgWeight:10};
var spottedBass = {fishName:"a Spotted Bass", channel:1, avgWeight:11};
var chub = {fishName:"a Chub", channel:1, avgWeight:15};
var saugeye = {fishName:"a Saugeye", channel:1, avgWeight:15};
var bonefish = {fishName:"a Bonefish", channel:1, avgWeight:20};
var haddock = {fishName:"a Haddock", channel:1, avgWeight:20};
var weakfish = {fishName:"a Weakfish", channel:1, avgWeight:20};
var bucketmouthBass = {fishName:"a Bucketmouth Bass", channel:1, avgWeight:20};
var bowfin = {fishName:"a Bowfin", channel:1, avgWeight:21};
var walleye = {fishName:"a Walleye", channel:1, avgWeight:24};
var rainbowTrout = {fishName:"a Rainbow Trout", channel:1, avgWeight:27};
var redSnapper = {fishName:"a Red Snapper", channel:1, avgWeight:28};
var cod = {fishName:"a Cod", channel:1, avgWeight:30};

//Rare tier objects
var channelCatfish = {fishName:"a Channel Catfish", channel:1, avgWeight:30};
var northernPike = {fishName:"a Northern Pike", channel:1, avgWeight:34};
var burbot = {fishName:"a Burbot", channel:1, avgWeight:41};
var atlanticSalmon = {fishName:"an Atlantic Salmon", channel:1, avgWeight:57};
var pollock = {fishName:"a Pollock", channel:1, avgWeight:39};
var cusk = {fishName:"a Cusk", channel:1, avgWeight:45};
var halibut = {fishName:"a Halibut", channel:1, avgWeight:50};
var stripedBass = {fishName:"a Striped Bass", channel:1, avgWeight:69};
var blueCatfish = {fishName:"a Blue Catfish", channel:1, avgWeight:83};

//Legendary tier objects
var gucciSneakers = {fishName:"a pair of Gucci Off-White Sneakers!", channel:1, avgWeight:1};
var lakeTrout = {fishName:"a Lake Trout!", channel:1, avgWeight:40};
var greatBarracuda = {fishName:"a Great Barracuda!", channel:1, avgWeight:53};
var muskellunge = {fishName:"a Muskellunge!", channel:1, avgWeight:60};
var permit = {fishName:"a Permit!", channel:1, avgWeight:79};
var siberianTaimen = {fishName:"a Siberian Taimen!", channel:1, avgWeight:85};
var amberjack = {fishName:"an Amberjack!", channel:1, avgWeight:100};
var wahoo = {fishName:"a Wahoo!", channel:1, avgWeight:103};
var roosterfish = {fishName:"a Roosterfish!", channel:1, avgWeight:110};
var sailfish = {fishName:"a Sailfish!", channel:1, avgWeight:120};

//Mythical tier objects
var goliathTigerfish = {fishName:"a Goliath Tigerfish!", channel:1, avgWeight:154};
var giantTrevally = {fishName:"a Giant Trevally!", channel:1, avgWeight:176};
var blueMarlin = {fishName:"a Blue Marlin!", channel:1, avgWeight:210};
var nilePerch = {fishName:"a Nile Perch!", channel:1, avgWeight:240};
var tarpon = {fishName:"a Tarpon!", channel:1, avgWeight:280};
var alligatorGar = {fishName:"an Alligator Gar!", channel:1, avgWeight:350};
var arapaima = {fishName:"an Arapaima!", channel:1, avgWeight:440};
var goliathCatfish = {fishName:"a Goliath Catfish!", channel:1, avgWeight:450};
var giantOarfish = {fishName:"a Giant Oarfish!", channel:1, avgWeight:600};
var atlanticBluefinTuna = {fishName:"an Atlantic Bluefin Tuna!", channel:1, avgWeight:830};
var whiteSturgeon = {fishName:"a White Sturgeon!", channel:1, avgWeight:990};
//var swordfish = {fishName:"a Swordfish!", channel:1, avgWeight:1430};
//var belugaSturgeon = {fishName:"a Beluga Sturgeon!", channel:1, avgWeight:2500};

var trashArray = [seaweed,macBook,plasticBag,earOil,shoes,rock,plasticStraw,plasticBottle];
var commonArray = [longearSunfish,pumpkinseed,redearSunfish,redbreastSunfish,kingfish,yellowPerch,warmouth,scup,bluegill,herring,rockBass,blackCrappie,whitePerch,whiteCrappie,sauger,mackerel,bullheadCatfish,chainPickerel,americanShad,smallmouthBass,freshwaterDrum,commonCarp,asianCarp,largemouthBass];
var uncommonArray = [brookTrout,spottedBass,chub,saugeye,bonefish,haddock,weakfish,bucketmouthBass,bowfin,walleye,rainbowTrout,redSnapper,cod];
var rareArray = [channelCatfish,northernPike,burbot,atlanticSalmon,pollock,cusk,halibut,stripedBass,blueCatfish];
var legendaryArray = [gucciSneakers,lakeTrout,greatBarracuda,muskellunge,permit,siberianTaimen,amberjack,wahoo,roosterfish,sailfish];
var mythicalArray = [goliathTigerfish,giantTrevally,blueMarlin,nilePerch,tarpon,alligatorGar,arapaima,giantOarfish,goliathCatfish,atlanticBluefinTuna,whiteSturgeon];
//swordfish,belugaSturgeon

        var tierPointMultiplier;
        var weight;
        var tierArray;
        var tierName;
        var sizeName;
        var pointReward;

        //Random number 1-1000
        var tierValue = Math.floor((Math.random() * 1000) + 1);

        if (tierValue <= 5) {
            tierArray = mythicalArray;
            tierPointMultiplier = 33.333;
            tierName = "MYTHICAL";
            db.add(`${msgObject.author.id}.mythFishCaught`,1);

        } else if (tierValue > 5 && tierValue <= 40) {
            tierArray = legendaryArray;
            tierPointMultiplier = 11.429;
            tierName = "LEGENDARY";
            db.add(`${msgObject.author.id}.legFishCaught`,1);

        } else if (tierValue > 40 && tierValue <= 160) {
            tierArray = rareArray;
            tierPointMultiplier = 3.333;
            tierName = "RARE";
            db.add(`${msgObject.author.id}.rareFishCaught`,1);

        } else if (tierValue > 160 && tierValue <= 440) {
            tierArray = uncommonArray;
            tierPointMultiplier = 1.429;
            tierName = "UNCOMMON";
            db.add(`${msgObject.author.id}.uncomFishCaught`,1);

        } else if (tierValue > 440 && tierValue <= 840) {
            tierArray = commonArray;
            tierPointMultiplier = 1;
            tierName = "COMMON";
            db.add(`${msgObject.author.id}.comFishCaught`,1);

        } else {
            tierArray = trashArray;
            tierPointMultiplier = 0;
            tierName = "TRASH";
            db.add(`${msgObject.author.id}.trashCaught`,1);

        }

        var randFish = tierArray[Math.floor(Math.random() * tierArray.length)];

        //Random number 1-1000
        var sizeValue = Math.floor((Math.random() * 1000) + 1);

        if (sizeValue <= 10) {
            weight = randFish.avgWeight * 2;
            sizeName = "MONDO";

        } else if (sizeValue > 10 && sizeValue <= 40) {
            weight = randFish.avgWeight * 1.75;
            sizeName = "FATTY";

        } else if (sizeValue > 40 && sizeValue <= 130) {
            weight = randFish.avgWeight * 1.5;
            sizeName = "HUGE";

        } else if (sizeValue > 130 && sizeValue <= 310) {
            weight = randFish.avgWeight * 1.25;
            sizeName = "BIG";

        } else if (sizeValue > 310 && sizeValue <= 700) {
            weight = randFish.avgWeight;
            sizeName = "AVERAGE";

        } else if (sizeValue > 700 && sizeValue <= 880) {
            weight = randFish.avgWeight * 0.75;
            sizeName = "SMALL";

        } else if (sizeValue > 880 && sizeValue <= 970) {
            weight = randFish.avgWeight * 0.50;
            sizeName = "TINY";

        } else {
            weight = randFish.avgWeight * 0.25;
            sizeName = "PATHETIC";

        }

        var roundedWeight = Math.round(weight);
        pointReward = Math.round(roundedWeight * tierPointMultiplier);
        db.add(`${msgObject.author.id}.points`,pointReward);
        db.add(`${msgObject.author.id}.fishCaught`,1);

        if (tierName == "MYTHICAL") {

            let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
            .setColor([170,0,170])
            .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`)
            msgObject.channel.send(pointsEmbed);

        } else if (tierName == "LEGENDARY") {

            let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
            .setColor([255,170,0])
            .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`)
            msgObject.channel.send(pointsEmbed);

        } else if (tierName == "RARE") {

            let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
            .setColor([85,85,255])
            .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`)
            msgObject.channel.send(pointsEmbed);

        } else if (tierName == "UNCOMMON") {

            let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
            .setColor([85,255,85])
            .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`)
            msgObject.channel.send(pointsEmbed);

        } else if (tierName == "COMMON") {

            let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
            .setColor([170,170,170])
            .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`)
            msgObject.channel.send(pointsEmbed);

        } else {

            let pointsEmbed = new Discord.RichEmbed()
            .setTitle(`${msgObject.author.username} caught ${randFish.fishName}`)
            .setColor([90,90,90])
            .setDescription(`Tier: ${tierName} (${tierValue}/1000)\nSize: ${sizeName} (${roundedWeight} lbs)\n+${pointReward} Points`)
            msgObject.channel.send(pointsEmbed);

        }
        
    }
}