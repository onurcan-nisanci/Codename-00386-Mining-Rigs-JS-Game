var sprites = {};
var bg = {};
var ui = {};
var menuSprites = {};

//////////////////////************--MENU--************///////////////////////

menuSprites.menuBg = new Image();
menuSprites.menuBg.src = "images/ui/menu.png";

menuSprites.greenOne = new Image();
menuSprites.greenOne.src = "images/ui/anim/green1.png";

menuSprites.greenTwo = new Image();
menuSprites.greenTwo.src = "images/ui/anim/green2.png";

menuSprites.greenThree = new Image();
menuSprites.greenThree.src = "images/ui/anim/green3.png";

menuSprites.greenFour = new Image();
menuSprites.greenFour.src = "images/ui/anim/green4.png";


menuSprites.redOne = new Image();
menuSprites.redOne.src = "images/ui/anim/red1.png";

menuSprites.redTwo = new Image();
menuSprites.redTwo.src = "images/ui/anim/red2.png";

menuSprites.redThree = new Image();
menuSprites.redThree.src = "images/ui/anim/red3.png";

menuSprites.redFour = new Image();
menuSprites.redFour.src = "images/ui/anim/red4.png";

menuSprites.beep = new Image();
menuSprites.beep.src = "images/ui/anim/beep.png";

menuSprites.mess = new Image();
menuSprites.mess.src = "images/ui/messageBoard.png";

menuSprites.messTwo = new Image();
menuSprites.messTwo.src = "images/ui/messageBoardTwo.png";

menuSprites.htp = new Image();
menuSprites.htp.src = "images/ui/howtoplay.png";

menuSprites.messExt = new Image();
menuSprites.messExt.src = "images/ui/extractionWarn.png";
//////////////////////////////////////////////////////////////////////////////

///////////////////////////*******---IMAGES---*******///////////////////////////
sprites.character = new Image();
sprites.character.src = 'images/agent.png';

///===*** ENEMIES LOAD ***===///

sprites.whiteOne = new Image();
sprites.whiteOne.src = 'images/enemies/white1.png';

sprites.blackOne = new Image();
sprites.blackOne.src = 'images/enemies/black.png';

sprites.fatOne = new Image();
sprites.fatOne.src = 'images/enemies/fat.png';

sprites.beardOne = new Image();
sprites.beardOne.src = 'images/enemies/beard.png';

//////// AGENTS ////////

sprites.agentBaldOne = new Image();
sprites.agentBaldOne.src = 'images/enemies/agent01.png';

sprites.agentBlackSmgOne = new Image();
sprites.agentBlackSmgOne.src = 'images/enemies/agent02.png';

sprites.agentBlackOne = new Image();
sprites.agentBlackOne.src = 'images/enemies/agent05.png';

sprites.agentBlondeOne = new Image();
sprites.agentBlondeOne.src = 'images/enemies/agent03.png';

sprites.agentBrownOne = new Image();
sprites.agentBrownOne.src = 'images/enemies/agent04.png';

///===*** -------------- ***===///

///===*** ENEMIES BULLETS LOAD ***===///
// CAP 380
sprites.capBul = new Image();
sprites.capBul.src = "images/effects/380_bul.png";

/// SHOTGUN
sprites.shotgunBul = new Image();
sprites.shotgunBul.src = "images/effects/shotgun_bullet.png";

/// UZI
sprites.uziBul = new Image();
sprites.uziBul.src = "images/effects/uzi_bul.png";

/// COLT 45
sprites.coltBul = new Image();
sprites.coltBul.src = "images/effects/45acp_bul.png";

/// SMG
sprites.smgBul = new Image();
sprites.smgBul.src = "images/effects/smg_bullet.png";

// TURRET
sprites.turBul = new Image();
sprites.turBul.src = "images/effects/tur_bul2.png";

///===*** -------------- ***===///

///===***-- TILES LOAD --***===///

sprites.levelOneBack = new Image();
sprites.levelOneBack.src = "images/tiles/bg.png";

sprites.levelFourBack = new Image();
sprites.levelFourBack.src = "images/tiles/bgTile4.png";	

sprites.levelSixBack = new Image();
sprites.levelSixBack.src = "images/tiles/bgTile6.png";	

sprites.levelSevenBack = new Image();
sprites.levelSevenBack.src = "images/tiles/bgTile7.png";	

sprites.gameOverBack = new Image();
sprites.gameOverBack.src = "images/ui/gameOverState.png";

sprites.gameLostBack = new Image();
sprites.gameLostBack.src = "images/ui/lost.png";

sprites.tile = new Image();
sprites.tile.src = "images/tiles/tile.png";

sprites.whiteTile = new Image();
sprites.whiteTile.src = "images/tiles/whiteside.png";

sprites.crate = new Image();
sprites.crate.src = "images/tiles/crate.png";

sprites.lightCrate = new Image();
sprites.lightCrate.src = "images/tiles/light_crate.png";

sprites.tileSix = new Image();
sprites.tileSix.src = "images/tiles/tileSix.png";

sprites.levelFourTile = new Image();
sprites.levelFourTile.src = "images/tiles/tile2.png";

sprites.levelFiveTile = new Image();
sprites.levelFiveTile.src = "images/tiles/tileLevelTwo.png";

sprites.levelSevenTile = new Image();
sprites.levelSevenTile.src = "images/tiles/tileLevelSeven.png";

///===*** -------------- ***===///

sprites.bul = new Image();
sprites.bul.src = "images/effects/bullet.png";

sprites.col = new Image();
sprites.col.src = "images/effects/col.png";

sprites.dusts = new Image();
sprites.dusts.src = "images/effects/dust.png";

sprites.heart = new Image();
sprites.heart.src = "images/ui/heart.png";

sprites.bloodSplash = new Image();
sprites.bloodSplash.src = "images/effects/blood_splash.png";

sprites.rigExplosion = new Image();
sprites.rigExplosion.src = "images/effects/exp.png";

sprites.turExplosion = new Image();
sprites.turExplosion.src = "images/effects/turretExp.png";

sprites.carLight = new Image();
sprites.carLight.src = "images/effects/car_light.png";

sprites.carFrontLight = new Image();
sprites.carFrontLight.src = "images/effects/car_front_light.png";

sprites.blood = new Image();
sprites.blood.src = "images/effects/blood.png";

sprites.gpu = new Image();
sprites.gpu.src = "images/effects/gpueffect.png";

sprites.gpugreencol = new Image();
sprites.gpugreencol.src = "images/effects/gpugreen_col.png";

sprites.redgpu = new Image();
sprites.redgpu.src = "images/effects/redgpueffect.png";

sprites.gpuredcol = new Image();
sprites.gpuredcol.src = "images/effects/gpured_col.png";

sprites.pshell = new Image();
sprites.pshell.src = "images/effects/pshell.png";

sprites.pShotgunShell = new Image();
sprites.pShotgunShell.src = "images/effects/shotgun_shell.png";

sprites.soda = new Image();
sprites.soda.src = "images/effects/soda.png";

////////** TOOLS **/////////

sprites.transporter = new Image();
sprites.transporter.src = "images/tools/trans.png";

sprites.elevator = new Image();
sprites.elevator.src = "images/tools/el.png";

sprites.elevatorOpen = new Image();
sprites.elevatorOpen.src = "images/tools/elOpen.png";

sprites.woodLad = new Image();
sprites.woodLad.src = "images/tools/wood_ladder.png";

sprites.ironLad = new Image();
sprites.ironLad.src = "images/tools/iron_ladder.png";

sprites.rig = new Image();
sprites.rig.src = "images/tools/machine.png";

sprites.tur = new Image();
sprites.tur.src = "images/tools/turret.png";

sprites.turLeft = new Image();
sprites.turLeft.src = "images/tools/turret_left.png";

sprites.shotgunAmmoMachine = new Image();
sprites.shotgunAmmoMachine.src = "images/tools/shotgunAmmoMachine.png";

sprites.uziAmmoMachine = new Image();
sprites.uziAmmoMachine.src = "images/tools/uziAmmoMachine.png";

sprites.healthMachine = new Image();
sprites.healthMachine.src = "images/tools/healthMachine.png";

sprites.livesMachine = new Image();
sprites.livesMachine.src = "images/tools/livesMachine.png";

////////** BACKGROUND ENTITIES **/////////

bg.levelOneBg = new Image();
bg.levelOneBg.src = "images/bg/levelOneBg.png";

bg.levelTwoBg = new Image();
bg.levelTwoBg.src = "images/bg/levelTwoBg.png";

bg.levelThreeBg = new Image();
bg.levelThreeBg.src = "images/bg/levelThreeBg.png";

bg.levelFourBg = new Image();
bg.levelFourBg.src = "images/bg/levelFourBg.png";

bg.levelFiveBg = new Image();
bg.levelFiveBg.src = "images/bg/levelFiveBg.png";

bg.levelSixBg = new Image();
bg.levelSixBg.src = "images/bg/levelSixBg.png";

bg.levelSevenBg = new Image();
bg.levelSevenBg.src = "images/bg/levelSevenBg.png";

bg.levelEightBg = new Image();
bg.levelEightBg.src = "images/bg/levelEightBg.png";


////////** USER INTERFACE **/////////

ui.dollar = new Image();
ui.dollar.src = "images/ui/dollarSec.png";

ui.health = new Image();
ui.health.src = "images/ui/health.png";

ui.enemyWar = new Image();
ui.enemyWar.src = "images/ui/enemyWarning.png";

ui.enemyRigsWar = new Image();
ui.enemyRigsWar.src = "images/ui/enemyRigsWarning.png";

ui.gunSlot = new Image();
ui.gunSlot.src = "images/ui/weapon_slots/gunSlot.png";

ui.gunUNS = new Image();
ui.gunUNS.src = "images/ui/weapon_slots/gunUNS.png";

ui.uziSlot = new Image();
ui.uziSlot.src = "images/ui/weapon_slots/uziSlot.png";

ui.uziUNS = new Image();
ui.uziUNS.src = "images/ui/weapon_slots/uziUNS.png";

ui.shotgunSlot = new Image();
ui.shotgunSlot.src = "images/ui/weapon_slots/shotgunSlot.png";

ui.shotgunUNS = new Image();
ui.shotgunUNS.src = "images/ui/weapon_slots/shotgunUNS.png";

ui.emptySlot = new Image();
ui.emptySlot.src = "images/ui/weapon_slots/emptySlot.png";

ui.infi = new Image();
ui.infi.src = "images/ui/weapon_slots/infinity.png";

ui.shotgunBuy = new Image();
ui.shotgunBuy.src = "images/ui/shotgunBuy.png";

ui.uziBuy = new Image();
ui.uziBuy.src = "images/ui/uziBuy.png";

ui.healthBuy = new Image();
ui.healthBuy.src = "images/ui/healthBuy.png";

ui.livesBuy = new Image();
ui.livesBuy.src = "images/ui/livesBuy.png";

ui.uziNotAcquired = new Image();
ui.uziNotAcquired.src = "images/ui/uziNotAcquired.png";

ui.uziAcquired = new Image();
ui.uziAcquired.src = "images/ui/uziAcquired.png";

ui.shotgunNotAcquired = new Image();
ui.shotgunNotAcquired.src = "images/ui/shotgunNotAcquired.png";

ui.shotgunAcquired = new Image();
ui.shotgunAcquired.src = "images/ui/shotgunAcquired.png";

ui.uziAcquiredWarn = new Image();
ui.uziAcquiredWarn.src = "images/ui/acquiredUziWarn.png";

ui.shotgunAcquiredWarn = new Image();
ui.shotgunAcquiredWarn.src = "images/ui/acquiredShotgunWarn.png";

ui.messageSwitchWeapons = new Image();
ui.messageSwitchWeapons.src = "images/ui/switchWeapons.png";

ui.messageBuyWarn = new Image();
ui.messageBuyWarn.src = "images/ui/buyAmmoWarn.png";

ui.ammoBg = new Image();
ui.ammoBg.src = "images/ui/weapon_slots/ammoBG.png";

ui.ammoBgE = new Image();
ui.ammoBgE.src = "images/ui/weapon_slots/ammobgExtra.png";

////////** LEVEL SIGNS **/////////

ui.levelOneSign = new Image();
ui.levelOneSign.src = "images/ui/level_signs/level001.png";

ui.levelTwoSign = new Image();
ui.levelTwoSign.src = "images/ui/level_signs/level02.png";

ui.levelThreeSign = new Image();
ui.levelThreeSign.src = "images/ui/level_signs/level03.png";

ui.levelFourSign = new Image();
ui.levelFourSign.src = "images/ui/level_signs/level04.png";

ui.levelFiveSign = new Image();
ui.levelFiveSign.src = "images/ui/level_signs/level05.png";

ui.levelSixSign = new Image();
ui.levelSixSign.src = "images/ui/level_signs/level06.png";

ui.levelSevenSign = new Image();
ui.levelSevenSign.src = "images/ui/level_signs/level07.png";

ui.levelEightSign = new Image();
ui.levelEightSign.src = "images/ui/level_signs/level08.png";

ui.levelBeep = new Image();
ui.levelBeep.src = "images/ui/anim/levelBeep.png";

///////////////////////////////////////////////////////////////////

////////** END GAME SECTION **/////////
ui.mainCredits = new Image();
ui.mainCredits.src = "images/ui/credits/mainCredits.png";

ui.endSecZero = new Image();
ui.endSecZero.src = "images/ui/credits/end00.png";

ui.endSec = new Image();
ui.endSec.src = "images/ui/credits/end01.png";

ui.endSecTwo = new Image();
ui.endSecTwo.src = "images/ui/credits/end02.png";

ui.endSecThree = new Image();
ui.endSecThree.src = "images/ui/credits/end03.png";

ui.credits = new Image();
ui.credits.src = "images/ui/credits/credits.png";

ui.creditsTwo = new Image();
ui.creditsTwo.src = "images/ui/credits/creditsTwo.png";

///////////////////////////////////////////////////////////////////
