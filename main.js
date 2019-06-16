var canvas = document.getElementById('myCanvas');
var canLoad = document.getElementById('canLoad');
var ctx = canvas.getContext('2d');

var leftPressed, rightPressed, spacePressed, xPressed, upPressed, downPressed, friction, gravity, leftClicked, rightClicked, shootingWalk, canShoot, boxes, colDetect, dustDetect, dustDetectCheckSpaceBtn, bloodSplashDetect, enemyBloodDetect;
var elevatorDraw, jumpCount, jumpLand, messageActive, messageTwoActive, htpActive, mesButtonColor, htpButtonColor, menuOnHover, menuName;
var controllerAllow, mailSoundAllow, enemyWarSound, gameOverSound, tryAgainSound, climbing, turretShooting, turretShootingLeft, turShot, turShotLeft, elevatorTwoAnim, gunAllow, uziAllow, shotgunAllow;
var onePressed, twoPressed, threePressed, ePressed, weaponChangeFx, ePressAllower, sBuySound, uBuySound, notEnoughMoneyS, messageUziAcquired, messageSwitchWeapon, messageBuyWarn;
var acquiredSound, uziAcquiredOff, messageShotgunAcquired, shotgunAcquiredOff, gameOverButs, canShootUzi, canShootShotgun, initialShoot, extractionMessageActive, mesExtButtonColor;
var oneSignShow, twoSignShow, threeSignShow, fourSignShow, fiveSignShow, sixSignShow, sevenSignShow, eightSignShow, uziMessagesClickActive, mailTwoSoundAllow;

climbing = false;
friction = 0.8;
gravity = 0.1;
jumpCount = 0;

gunAllow = true;
uziAllow = false;
shotgunAllow = false;

jumpLand = 0;
elevatorTwoAnim = false;
gameOverButs = false;

messageActive = false;
htpActive = false;
messageTwoActive = false;
extractionMessageActive = false;
messageUziAcquired = false;
uziAcquiredOff = false;
messageShotgunAcquired  = false;
shotgunAcquiredOff = false;
messageSwitchWeapon = false;
messageBuyWarn = false;
uziMessagesClickActive = true;

notEnoughMoneyS = true;
acquiredSound = true;

mailSoundAllow = false;
mailTwoSoundAllow = false;
enemyWarSound = false;
gameOverSound = false;
tryAgainSound = false;
sBuySound = false;
uBuySound = false;

mesButtonColor = "#fff";
mesTwoButtonColor = "#fff";
htpButtonColor = "#fff";
mesSwitchButtonColor = "#fff";
mesBuyButtonColor = "#fff";
mesExtButtonColor = "#fff";

/// LEVEL SIGNS SHOW ///
oneSignShow = true;
twoSignShow = true;
threeSignShow = true;
fourSignShow = true;
fiveSignShow = true;
sixSignShow = true;
sevenSignShow = true;
eightSignShow = true;

///*** KEY PRESSES ***///
leftPressed = false;
rightPressed = false;
spacePressed = false;
xPressed = false;
upPressed = false;
downPressed = false;
onePressed = false;
twoPressed = false;
threePressed = false;
ePressed = false;
/////////////////////////

leftClicked = false;
rightClicked = true;
shootingWalk = false;
turretShooting = true;
turretShootingLeft = true;
turShot = true;
turShotLeft = true;

controllerAllow = true;
initialShoot = true;
canShoot = true;
canShootUzi = true;
canShootShotgun = true;

weaponChangeFx = true;
ePressAllower = true;

colDetect = false;
dustDetect = false;
dustDetectCheckSpaceBtn = false;
bloodSplashDetect = false;
enemyBloodDetect = false;
menuOnHover = false;
menuName = false;

elevatorDraw = false;

	WebFont.load({
             google: { 
                families: ['Ultra', 'Faster One', 'Black Han Sans', 'Fjalla One']
                } 
	}); 
////////////////********** UI SOUNDS **********////////////////
var click = new Audio();
click.src = "sounds/click.mp3";
var punch = new Audio();
punch.src = "sounds/punch.mp3";
var enemyWS = new Audio();
enemyWS.src = "sounds/enemyWarningSound.mp3";
var mailS = new Audio();
mailS.src = "sounds/mailSound.mp3";
var tryAgainS = new Audio();
tryAgainS.src = "sounds/tryAgain.mp3";
var gameOverS = new Audio();
gameOverS.src = "sounds/gameOver.mp3";
var acquired = new Audio();
acquired.src = "sounds/acquired.mp3";
var endGameIntro = new Audio();
endGameIntro.src = "sounds/endGameIntro.mp3";
////////////////---------------////////////////

////////////////********** UI SOUNDS **********////////////////
var pGun = new Audio();
pGun.src = "sounds/barreta_m9.mp3";

var pUzi = new Audio();
pUzi.src = "sounds/uzi.mp3";

var pShotg = new Audio();
pShotg.src = "sounds/winchester12-shotgun.mp3";

var whiteGun = new Audio();
whiteGun.src = "sounds/380_gun.mp3";

var blackGun = new Audio();
blackGun.src = "sounds/winchester12-shotgunEnemy.mp3";

var fatGun = new Audio();
fatGun.src = "sounds/uzi.mp3";

var beardGun = new Audio();
beardGun.src = "sounds/colt_45.mp3";

var smgSound = new Audio();
smgSound.src = "sounds/smg.mp3";

var turSound = new Audio();
turSound.src = "sounds/turSound.mp3";
////////////////---------------////////////////

////////////////********** CHARACTER-COLLISION SOUNDS **********////////////////							
var playerpain = new Audio();
playerpain.src = "sounds/playerpain.mp3";

var enemypain = new Audio();
enemypain.src = "sounds/enemypain1.mp3";

var damage = new Audio();
damage.src = "sounds/damage.mp3";

var score = new Audio();
score.src = "sounds/score.mp3";

var ammoScore = new Audio();
ammoScore.src = "sounds/score.mp3";

var ammoReloadScore = new Audio();
ammoReloadScore.src = "sounds/reloaded.mp3";

var shotgunAmmoReloadScore = new Audio();
shotgunAmmoReloadScore.src = "sounds/shotgunReloaded.mp3";

var medical = new Audio();
medical.src = "sounds/medical.mp3";

var livesBuy = new Audio();
livesBuy.src = "sounds/livesBuy.mp3";

var slurping = new Audio();
slurping.src = "sounds/slurping.mp3";

var jumplanding = new Audio();
jumplanding.src = "sounds/jumpland.mp3";

var colWall = new Audio();
colWall.src = "sounds/colSound.mp3";

var rigExp = new Audio();
rigExp.src = "sounds/rig-exp.mp3";

var turretExp = new Audio();
turretExp.src = "sounds/turretExp.mp3";
////////////////---------------////////////////
/// DISPLAY FPS ///
window.countFPS = (function () {
  var lastLoop = (new Date()).getMilliseconds();
  var count = 1;
  var fps = 0;

  return function () {
    var currentLoop = (new Date()).getMilliseconds();
    if (lastLoop > currentLoop) {
      fps = count;
      count = 1;
    } else {
      count += 1;
    }
    lastLoop = currentLoop;
    return fps;
  };
}());

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var game = {
levelState: "menu",
lastLevel: "",

////**** LEVEL 1 ****////
	//== ENTITIES ==//
		// PLAYER // x: 42 y: 13
		playerOne: {
			x: 42, y: 18.736363636363638, width: 43.33333333333333, height: 43.16666666666667, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 518, spriteRow: 12, spriteColumn: 9, currentFrame: 0, alive: true,
		},

		health: 100, money: 0, lives: 3, uziAcquired: false, shotgunAcquired: false,

		/// ENEMY TYPE 1//
		whiteE: {										
			x: 432, y: 75, width: 44.44444444444444, height: 44.5, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 400, spriteHeight: 267, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 100, alive: true,
		},

		/// ENEMY TYPE 2//
		blackE: {						
			x: 120, y: 149, width: 45.22222222222222, height: 45.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 407, spriteHeight: 271, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 140, alive: true,
		},

		/// ENEMY TYPE 3//
		fatE: {		
			x: 37, y: 324, width: 47.22222222222222, height: 47.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 425, spriteHeight: 283, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 95, alive: true,
		},

		/// ENEMY TYPE 4//
		beardE: {		
			x: 39, y: 452, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 120, alive: true,
		},

		bullets: {
			left: [],
			right: [],
			shellLeft: [],
			shellRight: [],
			col: { x: 35, y: 330, width: 42.85714285714286, height: 43, spriteX: 0, spriteY: 0, spriteWidth: 300, spriteHeight: 43, spriteRow: 1, 
				spriteColumn: 7, currentFrame: 0 },
		},

		enemyBullets: {
			left: [],
			right: [],
		},

		dust: {
			x: 0, y: 0, width: 21.66666666666667, height: 21, spriteX: 0, spriteY: 0, spriteWidth: 130, spriteHeight: 21, spriteRow: 1, 
			spriteColumn: 6, currentFrame: 0,
		},

		heart: {
			x: 0, y: 0, width: 138.3333333333333, height: 139, spriteX: 0, spriteY: 0, spriteWidth: 830, spriteHeight: 139, spriteRow: 1, 
			spriteColumn: 6, currentFrame: 0,
		},

		bloodSplash: {
			x: 0, y: 0, width: 125, height: 126, spriteX: 0, spriteY: 0, spriteWidth: 750, spriteHeight: 126, spriteRow: 1, 
			spriteColumn: 6, currentFrame: 0,
		},

		enemyBlood: {
			x: 0, y: 0, width: 96.1111111111111, height: 97, spriteX: 0, spriteY: 0, spriteWidth: 865, spriteHeight: 97, spriteRow: 1, 
			spriteColumn: 9, currentFrame: 0,
		},

		gpuE: {
			width: 21.66666666666667, height: 22, velY: 0, spriteX: 0, spriteY: 0, spriteWidth: 130, spriteHeight: 22, spriteRow: 1, 
			spriteColumn: 6, currentFrame: 0,

			posOneGreen: [{x: 180, y: 38, colDetect: false}, {x: 430, y: 224, colDetect: false}, {x: 53, y: 192, colDetect: false},
			{x: 437, y: 470, height: 34, colDetect: false}],
			posTwoGreen: [{x: 253, y: 350, colDetect: false}, {x: 100, y: 97, colDetect: false}],
			posThreeGreen: [{x: 470, y: 320, colDetect: false}],
			posFourGreen: [{x: 53, y: 265, colDetect: false}],
			posFiveGreen: [{x: 532, y: 192, colDetect: false}, {x: 38, y: 250, colDetect: false}, {x: 489, y: 305, colDetect: false}],
			posSixGreen: [{x: 429, y: 168, colDetect: false}, {x: 100, y: 453, colDetect: false}, {x: 489, y: 305, colDetect: false}],
			posSevenGreen: [{x: 637, y: 94, colDetect: false}, {x: 98, y: 441, colDetect: false}, {x: 505, y: 305, colDetect: false}],
			posEightGreen: [ {x: 475, y: 342, colDetect: false}],

			posOneRed: [{x: 516, y: 75, height: 34, colDetect: false},
			{x: 62, y: 120, height: 34, colDetect: false},],
			posTwoRed: [{x: 515, y: 430, colDetect: false}],
			posThreeRed: [{x: 390, y: 432, colDetect: false}],
			posFourRed: [{x: 39, y: 137, colDetect: false}, {x: 460, y: 450, colDetect: false}],
			posFiveRed: [{x: 130, y: 262, colDetect: false}, {x: 460, y: 470, colDetect: false}],
			posSixRed: [{x: 409, y: 415, colDetect: false}, {x: 438, y: 69, colDetect: false}],
			posSevenRed: [{x: 408, y: 261, colDetect: false}, {x: 658, y: 467, colDetect: false}],
			posEightRed: [{x: 50, y: 222, colDetect: false}, {x: 619, y: 96, colDetect: false}],
		},
		gpuCol: {
			width: 19.4, height: 20, velY: 0, spriteX: 0, spriteY: 0, spriteWidth: 97, spriteHeight: 20, spriteRow: 1, 
			spriteColumn: 5, currentFrame: 0,
		},

		sodaE: {
			width: 21.66666666666667, height: 22, velY: 0, spriteX: 0, spriteY: 0, spriteWidth: 130, spriteHeight: 22, spriteRow: 1, 
			spriteColumn: 6, currentFrame: 0,

			pos: [{x: 349, y: 224, colDetect: false}],
			posTwo: [{x: 515, y: 220, colDetect: false}],
			posThree: [{x: 520, y: 336, colDetect: false}],
			posFour: [{x: 200, y: 71, colDetect: false}],
			posFive: [{x: 279, y: 350, colDetect: false}],
			posSix: [{x: 507, y: 475, colDetect: false}, {x: 645, y: 71, colDetect: false}],
			posSeven: [{x: 537, y: 350, colDetect: false}],
			posEight: [{x: 588, y: 221, colDetect: false}],
		},

		transporterE: {
			x: 200, y: 495, width: 68, height: 13, speed: 1.6,
		},	

		elevatorE: {
			x: 498, y: 448, width: 64, height: 64, spriteRow: 4, spriteColumn: 5, currentFrame: 0,
			sheetWidth: 320, sheetHeight: 256, spriteX: 0, spriteY: 0,
			levelTwo: [{x: 43, y: 449}, {x: 496, y: 45}],
			levelThree: [{x: 30, y: 324}],
			levelFour: [{x: 497, y: 44}],
			levelFive: [{x: 497, y: 449}],
			levelSix: [{x: 33, y: 45}],
			levelSeven: [{x: 498, y: 448}],
		},

		levelBeepE: {
			x: 225, y: 233, width: 16.66666666666667, height: 17, spriteX: 0, spriteY: 0, spriteWidth: 200, spriteHeight: 17, spriteRow: 1, 
			spriteColumn: 12, currentFrame: 0,
		},
	// ENTITIES END HERE !//

	levelSigns: function() {

		if(this.levelState === 0 && !messageActive && !htpActive) {

			if(oneSignShow) {
			ctx.drawImage(ui.levelOneSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			setTimeout(function(){
				oneSignShow = false;
			}, 3000);
			}
		}
		if(this.levelState === 1 && !messageTwoActive) {

			if(twoSignShow) {
			ctx.drawImage(ui.levelTwoSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				twoSignShow = false;
			}, 3000);
		}
		if(this.levelState === 2 && !messageUziAcquired) {

			if(threeSignShow) {
			ctx.drawImage(ui.levelThreeSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				threeSignShow = false;
			}, 3000);
		}
		if(this.levelState === 3) {

			if(fourSignShow) {
			ctx.drawImage(ui.levelFourSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				fourSignShow = false;
			}, 3000);
		}
		if(this.levelState === 4 && !messageShotgunAcquired) {

			if(fiveSignShow) {
			ctx.drawImage(ui.levelFiveSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				fiveSignShow = false;
			}, 3000);
		}
		if(this.levelState === 5) {

			if(sixSignShow) {
			ctx.drawImage(ui.levelSixSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				sixSignShow = false;
			}, 2000);
		}
		if(this.levelState === 6 && !extractionMessageActive) {

			if(sevenSignShow) {
			ctx.drawImage(ui.levelSevenSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				sevenSignShow = false;
			}, 2000);
		}
		if(this.levelState === 7) {
			if(eightSignShow) {
			ctx.drawImage(ui.levelEightSign, 0, 0);
			//// GREEN BEEP ////
			ctx.drawImage(ui.levelBeep, this.levelBeepE.spriteX, this.levelBeepE.spriteY, this.levelBeepE.width, 
			this.levelBeepE.height, this.levelBeepE.x, this.levelBeepE.y, this.levelBeepE.width, this.levelBeepE.height);
			///////////////////
			}
			setTimeout(function(){
				eightSignShow = false;
			}, 2000);
		}

	},

drawOne: function(player) {

		boxes=[ 2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,
			1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
			1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,
			1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			3,3,3,3,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1
		];

  		size = 31;
  
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		//Background
		ctx.drawImage(sprites.levelOneBack, 0, 0);

		if(elevatorDraw) {
		// ELEVATOR 
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.x, 
				this.elevatorE.y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		}	

		// GREEN GPU
			for (var i = 0; i < this.gpuE.posOneGreen.length; i++) {
				if(this.gpuE.posOneGreen[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, this.gpuE.posOneGreen[i].x, this.gpuE.posOneGreen[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < this.gpuE.posOneGreen.length; i++) {
				if(this.gpuE.posOneGreen[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				this.gpuE.posOneGreen[i].x, this.gpuE.posOneGreen[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < this.gpuE.posOneRed.length; i++) {
				if(this.gpuE.posOneRed[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, this.gpuE.posOneRed[i].x, this.gpuE.posOneRed[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < this.gpuE.posOneRed.length; i++) {
				if(this.gpuE.posOneRed[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				this.gpuE.posOneRed[i].x, this.gpuE.posOneRed[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < this.sodaE.pos.length; i++) {
				if(this.sodaE.pos[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, this.sodaE.pos[i].x, this.sodaE.pos[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};	
						

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
		player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);

		}

		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b') {

				controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 330);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {

		jumplanding.play();
		}
		//// DUST DETECT ////
		dustDetect = true;

		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};

ctx.closePath();

},

enemiesOneDraw: function(player) {

		// WHITE ENEMY
			if(this.whiteE.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.whiteOne, this.whiteE.spriteX, this.whiteE.spriteY, this.whiteE.width, this.whiteE.height,
				this.whiteE.x, this.whiteE.y, this.whiteE.width, this.whiteE.height);
			ctx.closePath();	
			};

		// ENEMY RIGHT BULLETS
			ctx.beginPath();
			for(var i = 0; i < game.enemyBullets.right.length; i++) {
				if(game.enemyBullets.right[i].width === 4) {
			ctx.drawImage(sprites.capBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 10) {
			ctx.drawImage(sprites.shotgunBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 3.75) {
			ctx.drawImage(sprites.uziBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 5) {
			ctx.drawImage(sprites.coltBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
			ctx.closePath();
		};

		// ENEMY LEFT BULLETS
			ctx.beginPath();
			for(var i = 0; i < game.enemyBullets.left.length; i++) {	
				if(game.enemyBullets.left[i].width === 4) {
			ctx.drawImage(sprites.capBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 10) {
			ctx.drawImage(sprites.shotgunBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 3.75) {
			ctx.drawImage(sprites.uziBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 5) {
			ctx.drawImage(sprites.coltBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
			ctx.closePath();
		};

		// BLACK ENEMY
			if(this.blackE.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.blackOne, this.blackE.spriteX, this.blackE.spriteY, this.blackE.width, this.blackE.height,
				this.blackE.x, this.blackE.y, this.blackE.width, this.blackE.height);
			ctx.closePath();	
			};

		// FAT ENEMY
			if(this.fatE.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.fatOne, this.fatE.spriteX, this.fatE.spriteY, this.fatE.width, this.fatE.height,
				this.fatE.x, this.fatE.y, this.fatE.width, this.fatE.height);
			ctx.closePath();	
			};

		// BEARD ENEMY
			if(this.beardE.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.beardOne, this.beardE.spriteX, this.beardE.spriteY, this.beardE.width, this.beardE.height,
				this.beardE.x, this.beardE.y, this.beardE.width, this.beardE.height);
			ctx.closePath();	
			};

},

		//////== CONTROLLER ==/////
controller: function(player) {
if(!messageActive && !htpActive && !messageTwoActive && !extractionMessageActive) {
	if(controllerAllow) {
			// PLAYER SPRITE ANIM
		if(!leftPressed && !rightPressed && !spacePressed && !xPressed && !upPressed && !climbing) {
		
		player.spriteX = player.currentFrame;
		player.spriteY = 2 * player.height;
		};
if(game.health > 0) {	
		////// LEFT PRESSED !! ///////
			if(leftPressed) {
			leftClicked = true;
			rightClicked = false;
				if(player.velX > -player.speed) {
					player.velX--;
if(!climbing) {					
					// SPRITE ANIM
					player.currentFrame = ++player.currentFrame % player.spriteColumn;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 1 * player.height;
};					

				}	
			};

		////// RIGHT PRESSED !! ///////
			if(rightPressed) {
			leftClicked = false;
			rightClicked = true;
				if(player.velX < player.speed) {
					player.velX++;
if(!climbing) {
					// SPRITE ANIM
					player.currentFrame = ++player.currentFrame % player.spriteColumn;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 3 * player.height;
};				
				}	
			};

		////// SPACE PRESSED !! ///////
			if(spacePressed) {
				if(player.jumping === false && player.grounded === true) {
					jumpCount = 0;
					player.jumping = true;
					player.grounded = false;
					player.velY += -player.speed * 1.57;
					rightSprite = false;
					leftSprite = false;
					dustDetectCheckSpaceBtn = true;
					jumpLand = 0;
				if(leftPressed || rightPressed) {
					//player.velY -= 0.10;
					gravity = 0.08;
				}	
				}
			};

			if(player.velY > 1) {
				jumpLand = 0;
			}

			/// DOUBLE JUMP
			if(player.jumping && spacePressed && jumpCount === 1 && player.velY > -3) {
				player.velY -= 0.1;
				if(leftPressed || rightPressed) {
					player.velY -= 0.42;
					gravity = 0.08;
				}		
			}; 





		/////==== SPRITES ANIMATIONS ====/////

		// BULLET AND WALL COLLISION
		this.bullets.col.currentFrame = ++this.bullets.col.currentFrame % this.bullets.col.spriteColumn;
		this.bullets.col.spriteX = this.bullets.col.currentFrame * this.bullets.col.width;
		this.bullets.col.spriteY = 0 * this.bullets.col.height;

		// BLOODSPLASH EFFECT
		this.bloodSplash.currentFrame = ++this.bloodSplash.currentFrame % this.bloodSplash.spriteColumn;
		this.bloodSplash.spriteX = this.bloodSplash.currentFrame * this.bloodSplash.width;
		this.bloodSplash.spriteY = 0 * this.bloodSplash.height;

		////////----------////////

		if(player.jumping || player.velY > 1) {
			if(leftClicked && !climbing) {			
		player.currentFrame = 2;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 4 * player.height;	
	}
			if(rightClicked && !climbing) {			
		player.currentFrame = 3;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 4 * player.height;	
	}
};
		
		if(player.jumping && rightPressed && !climbing) {
		player.currentFrame = 0;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 4 * player.height;
		};

		if(player.jumping && leftPressed && !climbing) {
		player.currentFrame = 1;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 4 * player.height;
		};

if(gunAllow) {
		/////// SHOOTING ANIM /////////
		if(player.grounded && rightClicked && xPressed && !climbing && !shootingWalk) {
		player.currentFrame = ++player.currentFrame % 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 5 * player.height;
}
		if(player.grounded && leftClicked && xPressed && !climbing && !shootingWalk) {			
		player.currentFrame = ++player.currentFrame % 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 6 * player.height;	
	}
} else if (uziAllow) {
	if(this.uziAmmo > 0) { 
			/////// SHOOTING ANIM /////////
		if(player.grounded && rightClicked && xPressed && !climbing && !shootingWalk) {
		player.currentFrame = ++player.currentFrame % 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 12 * player.height;
}
		if(player.grounded && leftClicked && xPressed && !climbing && !shootingWalk) {			
		player.currentFrame = ++player.currentFrame % 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 13 * player.height;	
	}
} else if (this.uziAmmo <= 0) {
			/////// SHOOTING ANIM /////////
		if(player.grounded && rightClicked && xPressed && !climbing && !shootingWalk) {
		player.currentFrame = 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 12 * player.height;
}
		if(player.grounded && leftClicked && xPressed && !climbing && !shootingWalk) {			
		player.currentFrame = 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 13 * player.height;	
	}
}
} else if (shotgunAllow) {
	if(this.shotgunAmmo > 0) { 
				/////// SHOOTING ANIM /////////
		if(player.grounded && rightClicked && xPressed && !climbing && !shootingWalk) {
		player.currentFrame = ++player.currentFrame % 5;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 17 * player.height;
}
		if(player.grounded && leftClicked && xPressed && !climbing && !shootingWalk) {			
		player.currentFrame = ++player.currentFrame % 5;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 18 * player.height;	
	}
	} else if(this.shotgunAmmo <= 0) {
				/////// SHOOTING ANIM /////////
		if(player.grounded && rightClicked && xPressed && !climbing && !shootingWalk) {
		player.currentFrame = 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 17 * player.height;
}
		if(player.grounded && leftClicked && xPressed && !climbing && !shootingWalk) {			
		player.currentFrame = 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 18 * player.height;	
	}
	}
};

		/// SHOOTING WHILE WALKING
if(gunAllow) {
		if(player.velY >= 0 && player.velY < 0.68 && rightPressed && xPressed && !climbing) {
		shootingWalk = true;			
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 9 * player.height;		
		} else {
		shootingWalk = false;
		}

		if(player.velY >= 0 && player.velY < 0.68 && leftPressed && xPressed && !climbing) {
		shootingWalk = true;
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 10 * player.height;
		} else {
		shootingWalk = false;
		}
} else if (uziAllow) {
	if(this.uziAmmo > 0) { 
		if(player.velY >= 0 && player.velY < 0.68 && rightPressed && xPressed && !climbing) {
		shootingWalk = true;			
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 14 * player.height;		
		} else {
		shootingWalk = false;
		}

		if(player.velY >= 0 && player.velY < 0.68 && leftPressed && xPressed && !climbing) {
		shootingWalk = true;
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 15 * player.height;
		} else {
		shootingWalk = false;
		}
	} else if (this.uziAmmo <= 0) {
		if(player.velY >= 0 && player.velY < 0.68 && rightPressed && xPressed && !climbing) {
		shootingWalk = true;			
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 21 * player.height;		
		}

		if(player.velY >= 0 && player.velY < 0.68 && leftPressed && xPressed && !climbing) {
		shootingWalk = true;
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 22 * player.height;
		}
	}
} else if (shotgunAllow) {
	if(this.shotgunAmmo > 0) { 
		if(player.velY >= 0 && player.velY < 0.68 && rightPressed && xPressed && !climbing) {
		shootingWalk = true;			
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 19 * player.height;		
		} else {
		shootingWalk = false;
		}

		if(player.velY >= 0 && player.velY < 0.68 && leftPressed && xPressed && !climbing) {
		shootingWalk = true;
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 20 * player.height;
		} else {
		shootingWalk = false;
		}
	} else if(this.shotgunAmmo <= 0) {
		if(player.velY >= 0 && player.velY < 0.68 && rightPressed && xPressed && !climbing) {
		shootingWalk = true;			
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 23 * player.height;		
		} 

		if(player.velY >= 0 && player.velY < 0.68 && leftPressed && xPressed && !climbing) {
		shootingWalk = true;
		player.currentFrame = ++player.currentFrame % 9;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 24 * player.height;
		} 
	}
}	


		/// SHOOTING WHILE JUMPING
if(gunAllow) {		
		if((player.jumping && rightClicked && xPressed) || (player.velY >= 1 && rightClicked && xPressed && !climbing)) {	
		player.currentFrame = 4;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 4 * player.height;
		}

		if((player.jumping && leftClicked && xPressed) || (player.velY >= 1 && leftClicked && xPressed)) {	
		player.currentFrame = 5;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 4 * player.height;
		}
} else if	(uziAllow) {
	if(this.uziAmmo > 0) { 
		if((player.jumping && rightClicked && xPressed) || (player.velY >= 1 && rightClicked && xPressed && !climbing)) {	
		player.currentFrame = 0;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}

		if((player.jumping && leftClicked && xPressed) || (player.velY >= 1 && leftClicked && xPressed)) {	
		player.currentFrame = 1;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}
	} else if(this.uziAmmo <= 0) {
		if((player.jumping && rightClicked && xPressed) || (player.velY >= 1 && rightClicked && xPressed && !climbing)) {	
		player.currentFrame = 4;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}

		if((player.jumping && leftClicked && xPressed) || (player.velY >= 1 && leftClicked && xPressed)) {	
		player.currentFrame = 5;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}
	}

} else if (shotgunAllow) {
	if(this.shotgunAmmo > 0) { 
		if((player.jumping && rightClicked && xPressed) || (player.velY >= 1 && rightClicked && xPressed && !climbing)) {	
		player.currentFrame = 2;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}

		if((player.jumping && leftClicked && xPressed) || (player.velY >= 1 && leftClicked && xPressed)) {	
		player.currentFrame = 3;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}
	} else if(this.shotgunAmmo <= 0) {
		if((player.jumping && rightClicked && xPressed) || (player.velY >= 1 && rightClicked && xPressed && !climbing)) {	
		player.currentFrame = 6;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}

		if((player.jumping && leftClicked && xPressed) || (player.velY >= 1 && leftClicked && xPressed)) {	
		player.currentFrame = 7;
		player.spriteX = player.currentFrame * player.width;
		player.spriteY = 16 * player.height;
		}
	}
}



}; // Check alive end..
		/////// VELOCITY, SPEED, GRAVITY, FRICTION ETC.. ///////
		player.x += player.velX;
		player.velX *= friction;

		if(!climbing) {
		player.y += player.velY;
		player.velY += gravity;
		}
}; // LOAD CHECK
	} // CONTROLLER ALLOW
		},

		shooting: function(player) {
if(!messageActive && !htpActive && !messageTwoActive && !extractionMessageActive) {
	if(controllerAllow) {

		//////=== PLAYER SHOOTING ===//////
if(game.health > 0) {
if(rightClicked) {	
			if(gunAllow && xPressed && canShoot) {
			canShoot = false;
			setTimeout(function(){
			var bullet = {x: player.x +35, y: player.y + player.height/2, width: 5.5, height: 5.5, alive: true};
			game.bullets.left.push(bullet);

			pGun.play();
	
			/// PLAYER SHELL LEFT
			var shell = {x: player.x +25, y: player.y + player.height/2 +5, width: 3.5, height: 3.5, velY: 0, alive: true};
			game.bullets.shellLeft.push(shell);

			////******////

			}, 150);
			setTimeout(function(){canShoot = true;},550);

			} 

			if(uziAllow && xPressed && canShootUzi) {
			
			this.uziAmmo -= 1;

			if(this.uziAmmo > -1) {
			canShootUzi = false;
			setTimeout(function(){
			var bullet = {x: player.x +35, y: player.y + player.height/2 -4, width: 3.75, height: 5.5, alive: true};
			game.bullets.left.push(bullet);

			pUzi.play();

			/// PLAYER SHELL LEFT
			var shell = {x: player.x +25, y: player.y + player.height/2 +5, width: 3.5, height: 3.5, velY: 0, alive: true};
			game.bullets.shellLeft.push(shell);

			////******////

			}, 150);
			setTimeout(function(){canShootUzi = true;},180);
		} else if (this.uziAmmo <= -1) {
			canShootUzi = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){canShootUzi = true;},180);
		}
			} 

			if(shotgunAllow && xPressed && canShootShotgun) {

				this.shotgunAmmo -= 1;

				if(this.shotgunAmmo > -1) {
			canShootShotgun = false;
			setTimeout(function(){
			var bullet = {x: player.x +35, y: player.y + player.height/2 +4, width: 10, height: 10, alive: true};
			game.bullets.left.push(bullet);

			pShotg.play();

			/// PLAYER SHELL LEFT
			var shell = {x: player.x +25, y: player.y + player.height/2 +5, width: 5.5, height: 5.5, velY: 0, alive: true};
			game.bullets.shellLeft.push(shell);
			////******////

			}, 150);
			setTimeout(function(){canShootShotgun = true;},1000);
		} else if (this.shotgunAmmo <= -1) {
			canShootShotgun = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){canShootShotgun = true;},180);
		}
			}
		}
if(leftClicked) {
			if(gunAllow && xPressed && canShoot) {
			canShoot = false;
			setTimeout(function(){
			var bullet = {x: player.x, y: player.y + player.height/2, width: 5.5, height: 5.5, alive: true};
				game.bullets.right.push(bullet);

				pGun.play();

			/// PLAYER SHELL RIGHT
			var shell = {x: player.x +14, y: player.y + player.height/2 +5, width: 3.5, height: 3.5, velY: 0, alive: true};
			game.bullets.shellRight.push(shell);
		
			}, 150);
			setTimeout(function(){canShoot = true;},550);
			
		} 

			if(uziAllow && xPressed && canShootUzi) {

			this.uziAmmo -= 1;

			if(this.uziAmmo > -1) {
			canShootUzi = false;
			setTimeout(function(){
			var bullet = {x: player.x, y: player.y + player.height/2 -4, width: 3.75, height: 5.5, alive: true};
				game.bullets.right.push(bullet);

				pUzi.play();

			/// PLAYER SHELL RIGHT
			var shell = {x: player.x +14, y: player.y + player.height/2 +5, width: 3.5, height: 3.5, velY: 0, alive: true};
			game.bullets.shellRight.push(shell);
		
			}, 150);
			setTimeout(function(){canShootUzi = true;},180);
			} else if (this.uziAmmo <= -1) {
			canShootUzi = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){canShootUzi = true;},180);
		}
		} 
			if(shotgunAllow && xPressed && canShootShotgun) {

			this.shotgunAmmo -= 1;

			if(this.shotgunAmmo > -1) {
				canShootShotgun = false;
			setTimeout(function(){
			var bullet = {x: player.x, y: player.y + player.height/2 +4, width: 10, height: 10, alive: true};
				game.bullets.right.push(bullet);

				pShotg.play();

			/// PLAYER SHELL RIGHT
			var shell = {x: player.x +14, y: player.y + player.height/2 +5, width: 5.5, height: 5.5, velY: 0, alive: true};
			game.bullets.shellRight.push(shell);
		
			}, 150);
			setTimeout(function(){canShootShotgun = true;},1000);
			} else if (this.shotgunAmmo <= -1) {
			canShootShotgun = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){canShootShotgun = true;},180);
		}
		}
		} // left clicked ends here
			
		} // health check ends here


		////*** WEAPONS BULLETS ***////
		for(var i = 0; i < this.bullets.left.length; i++) {
			if(this.bullets.left[i].x < canvas.width && this.bullets.left[i].x > 0) {
			this.bullets.left[i].x += 5;
			} else if(this.bullets.left[i].x > canvas.width || this.bullets.left[i].x < 0) {
			this.bullets.left.splice(0, 1);
			}
		};

		for(var i = 0; i < this.bullets.right.length; i++) {
			if(this.bullets.right[i].x < canvas.width && this.bullets.right[i].x > 0) {
			this.bullets.right[i].x -= 5;
			} else if(this.bullets.right[i].x > canvas.width || this.bullets.right[i].x < 0) {
			this.bullets.right.splice(0, 1);
				
			}
		};

		/// PLAYER SHELL LEFT
		for(var i = 0; i < this.bullets.shellLeft.length; i++) {
			this.bullets.shellLeft[i].y -= 2.2;
			this.bullets.shellLeft[i].y += this.bullets.shellLeft[i].velY;
			this.bullets.shellLeft[i].velY += gravity;

			// SHELL DELETE
			if(this.bullets.shellLeft[i].y > canvas.height) {
				game.bullets.shellLeft.splice(0, 1);
			}
		};

		/// PLAYER SHELL RIGHT
		for(var i = 0; i < this.bullets.shellRight.length; i++) {
			this.bullets.shellRight[i].y -= 2.2;
			this.bullets.shellRight[i].y += this.bullets.shellRight[i].velY;
			this.bullets.shellRight[i].velY += gravity;

			// SHELL DELETE
			if(this.bullets.shellRight[i].y > canvas.height) {
				game.bullets.shellRight.splice(0, 1);
			}
		};


		//GUN BULLET RIGHT AND WALL COLLISION

for(var i = 0; i < boxes.length; i++) {	
	for(var y = 0; y < this.bullets.right.length; y++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;
if(boxes[i] === 1) {
	if(this.bullets.right[y].x < boxesX + boxesW && this.bullets.right[y].x + this.bullets.right[y].width> boxesX &&
		this.bullets.right[y].y < boxesY + boxesH && this.bullets.right[y].y + this.bullets.right[y].height > boxesY) {

			colWall.play();
			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.right[y].x -5, this.bullets.right[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.right[y].alive = false;

			game.bullets.right.splice(0, 1);
	}
			
	}
}
}; // for ends


// GUN BULLET LEFT AND WALL COLLISION

for(var i = 0; i < boxes.length; i++) {	
	for(var y = 0; y < this.bullets.left.length; y++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;
if(boxes[i] === 1) {
	if(this.bullets.left[y].x < boxesX + boxesW && this.bullets.left[y].x + this.bullets.left[y].width> boxesX &&
		this.bullets.left[y].y < boxesY + boxesH && this.bullets.left[y].y + this.bullets.left[y].height > boxesY) {

			colWall.play();
			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.left[y].x -35, this.bullets.left[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.left[y].alive = false;

			game.bullets.left.splice(0, 1);
	}
			
	}
}
}; // for ends

}; // LOAD CHECK
}; // CONTROLLER ALLOW
		},
									
enemyUpdate: function(enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount) {

			/// ENEMY PHYSICS //////
			for(var i = 0; i < boxes.length; i++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;
				if(boxes[i] === 1 || boxes[i] === 3) {
					var enemyDir = colCheck(enemy, boxesX, boxesY, boxesW, boxesH);
				};

				if(enemyDir === 'b') {
					enemy.velY = 0;
				}
			};

			////////--------////////
					// BLOOD EFFECT //
					this.enemyBlood.currentFrame = ++this.enemyBlood.currentFrame % this.enemyBlood.spriteColumn;
					this.enemyBlood.spriteX = this.enemyBlood.currentFrame * this.enemyBlood.width;
					this.enemyBlood.spriteY = 0 * this.enemyBlood.height;
					/////////=====//

			/////////////---- ENEMY DIRECTION ------////////
			// GOING RIGHT
			if(enemy.enemyRight) {
			enemy.currentFrame = ++enemy.currentFrame % enemy.spriteColumn;
			enemy.spriteX = enemy.currentFrame * enemy.width;
			enemy.spriteY = 1 * enemy.height;

				if(enemy.x > rightX) {
					enemy.enemyRight = false;
					enemy.enemyLeft = true;
					enemy.speed = -enemy.speed;
				}

			};
			// GOING LEFT
			if(enemy.enemyLeft) {
			enemy.currentFrame = ++enemy.currentFrame % enemy.spriteColumn;
			enemy.spriteX = enemy.currentFrame * enemy.width;
			enemy.spriteY = 0 * enemy.height;

				if(enemy.x < leftX) {
					enemy.enemyRight = true;
					enemy.enemyLeft = false;
					enemy.speed = -enemy.speed;
				}
			};
			//////////////-------------------//////////////

			///////== ENEMY ATTACK ==////////

			////WHITE ONE LINE////
			if((player.x > lineXmin && player.x < lineXmax) && (player.y > LineYmin && player.y < LineYmax)) {
				///// STANDING LEFT
				if(enemy.standingLeft) {
			enemy.currentFrame = 0;
			enemy.spriteX = enemy.currentFrame * enemy.width;
			enemy.spriteY = 0 * enemy.height;
			enemy.enemyMovement = false;
				}
				///// STANDING RIGHT
				if(enemy.standingRight) {
			enemy.currentFrame = 0;
			enemy.spriteX = enemy.currentFrame * enemy.width;
			enemy.spriteY = 1 * enemy.height;
			enemy.enemyMovement = false;
				}

				////// LEFT
				if(player.x < enemy.x && !enemy.standingLeft) {	
			enemy.currentFrame = ++enemy.currentFrame % enemy.spriteColumn;
			enemy.spriteX = enemy.currentFrame * enemy.width;
			enemy.spriteY = 3 * enemy.height;
			enemy.enemyMovement = false;	

			/// LEFT SHOOTING ///
			if(enemy.canShoot && enemy.shootingTime && enemy.alive) {
				enemy.canShoot = false;

				var bullet = {x: enemy.x -5, y: enemy.y + enemy.height/2, width: enemiesBulWidth, height: enemiesBulHeight, alive: true};
				//enemy.enemyRightBullets.push(bullet);
				game.enemyBullets.right.push(bullet);

										////////////// GUN SOUNDS //////////////
				if(enemyGunSound === 'whiteSound') {
					whiteGun.play();
				} 
				
				if(enemyGunSound === 'blackSound') {
					blackGun.play();
				} 
				if(enemyGunSound === 'fatSound') {
					fatGun.play();
				}  
				if (enemyGunSound === 'beardSound') {
					beardGun.play();
				}
				if (enemyGunSound === 'smgSound') {
					smgSound.play();
				}
				
				setTimeout(function(){
					enemy.canShoot = true;
				}, lShootSpeed);

				setTimeout(function(){
					enemy.shootingTime = false;
					enemy.standingLeft = true;
				}, lShootAmount);

				setTimeout(function(){
					enemy.shootingTime = true;
					enemy.standingLeft = false;
				}, 1900);
			}

			}; // ends here

			/////// RIGHT
			if(player.x > enemy.x && !enemy.standingRight) {
			enemy.currentFrame = ++enemy.currentFrame % enemy.spriteColumn;
			enemy.spriteX = enemy.currentFrame * enemy.width;
			enemy.spriteY = 2 * enemy.height;
			enemy.enemyMovement = false;

			/// RIGHT SHOOTING ///
			if(enemy.canShoot && enemy.shootingTime && enemy.alive) {
				enemy.canShoot = false;

				var bullet = {x: enemy.x +50, y: enemy.y + enemy.height/2, width: enemiesBulWidth, height: enemiesBulHeight, alive: true};
				game.enemyBullets.left.push(bullet);
				
							////////////// GUN SOUNDS //////////////
				if(enemyGunSound === 'whiteSound') {
					whiteGun.play();
				} 
				if(enemyGunSound === 'blackSound') {
					blackGun.play();
				} 
				if(enemyGunSound === 'fatSound') {
					fatGun.play();
				}  
				if (enemyGunSound === 'beardSound') {
					beardGun.play();
				}

				if (enemyGunSound === 'smgSound') {
					smgSound.play();
				} 
				
				setTimeout(function(){
					enemy.canShoot = true;
				}, rShootSpeed);

				setTimeout(function(){
					enemy.shootingTime = false;
					enemy.standingRight = true;
				}, rShootAmount);

				setTimeout(function(){
					enemy.shootingTime = true;
					enemy.standingRight = false;
				}, 1900);
			}

			}; // ends here

			} else {
				enemy.enemyMovement = true;

}

			////// SHOOTING DIRECTION
			if(game.levelState === 0 || game.levelState === 1 || game.levelState === 2 || game.levelState === 7) {
			for(var i = 0; i < game.enemyBullets.right.length; i++) {
				if(game.enemyBullets.right[i].x < canvas.width && game.enemyBullets.right[i].alive) {
				game.enemyBullets.right[i].x -= 0.74;
				}
			};

			for(var i = 0; i < game.enemyBullets.left.length; i++) {
				if(game.enemyBullets.left[i].x < canvas.width && game.enemyBullets.left[i].alive) {
				game.enemyBullets.left[i].x += 0.74;
				}
			};
		} else if (game.levelState === 3 || game.levelState === 4 || game.levelState === 5 || game.levelState === 6) {
				for(var i = 0; i < game.enemyBullets.right.length; i++) {
				if(game.enemyBullets.right[i].x < canvas.width && game.enemyBullets.right[i].alive) {
				game.enemyBullets.right[i].x -= 0.51;
				}
			};

			for(var i = 0; i < game.enemyBullets.left.length; i++) {
				if(game.enemyBullets.left[i].x < canvas.width && game.enemyBullets.left[i].alive) {
				game.enemyBullets.left[i].x += 0.51;
				}
			};
			
		}
		
		// BULLET LEFT AND WALL COLLISION
for(var i = 0; i < boxes.length; i++) {	
	for(var y = 0; y < game.enemyBullets.left.length; y++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;
if(boxes[i] === 1) {
	if(game.enemyBullets.left[y].x < boxesX + boxesW && game.enemyBullets.left[y].x + game.enemyBullets.left[y].width > boxesX &&
		game.enemyBullets.left[y].y < boxesY + boxesH && game.enemyBullets.left[y].y + game.enemyBullets.left[y].height > boxesY) {

			game.enemyBullets.left.splice(0, 1);
	}
			
	}
}
}; // for ends

			// BULLET RIGHT AND WALL COLLISION

for(var i = 0; i < boxes.length; i++) {	
	for(var y = 0; y < game.enemyBullets.right.length; y++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

if(boxes[i] === 1) {
	if(game.enemyBullets.right[y].x < boxesX + boxesW && game.enemyBullets.right[y].x + game.enemyBullets.right[y].width > boxesX &&
		game.enemyBullets.right[y].y < boxesY + boxesH && game.enemyBullets.right[y].y + game.enemyBullets.right[y].height > boxesY) {

		game.enemyBullets.right.splice(0, 1);

	}
			
	}
}
}; // for ends


if(enemy.alive) {
				//// WEAPONS SHOOTING COLLISION LEFT
		for(var i = 0; i < this.bullets.left.length; i++) {
			var playerBul = colCheck(this.bullets.left[i], enemy.x, enemy.y, enemy.width, enemy.height);

			if(playerBul === 'r') {
					this.bullets.left[i].alive = false;


					enemy.currentFrame = 4;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 5 * enemy.height;

					// DRAW ENEMY BLOOD
					ctx.beginPath();
					ctx.drawImage(sprites.blood, this.enemyBlood.spriteX, this.enemyBlood.spriteY, this.enemyBlood.width, this.enemyBlood.height,
					enemy.x -30, enemy.y-25, this.enemyBlood.width, this.enemyBlood.height);
					ctx.closePath();
					/// === ////
						
						if(this.bullets.left[i].width === 5.5) {
						enemy.health = enemy.health -50;
						}
						if(this.bullets.left[i].width === 3.75) {
						enemy.health = enemy.health -32;
						}
						if(this.bullets.left[i].width === 10) {
						enemy.health = enemy.health -120;
						}

					damage.play();	
					enemypain.play();
					
					game.bullets.left.splice(0, 1);
					
				};
			};
};						/// ENEMY DIE
					if(enemy.health <= 0 && player.x < enemy.x) {
						setTimeout(function(){
					enemy.canShoot = false;		
					enemy.currentFrame = 0;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 5 * enemy.height;

						}, 100);
						setTimeout(function(){
					enemy.currentFrame = 1;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 5 * enemy.height;
						}, 181);
						setTimeout(function(){
					enemy.currentFrame = 2;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 5 * enemy.height;
						}, 222);
						setTimeout(function(){
					enemy.currentFrame = 3;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 5 * enemy.height;
						}, 263);
					
					setTimeout(function(){
						enemy.alive = false;
						}, 304);
					}
			

				
if(enemy.alive) {
				//// WEAPONS SHOOTING COLLISION RIGHT
		for(var i = 0; i < this.bullets.right.length; i++) {
			var playerBul = colCheck(this.bullets.right[i], enemy.x, enemy.y, enemy.width, enemy.height);
			

			if(playerBul === 'l') {
					this.bullets.right[i].alive = false;
					enemy.currentFrame = 4;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 4 * enemy.height;

					// DRAW ENEMY BLOOD
					ctx.beginPath();
					ctx.drawImage(sprites.blood, this.enemyBlood.spriteX, this.enemyBlood.spriteY, this.enemyBlood.width, this.enemyBlood.height,
					enemy.x, enemy.y-30, this.enemyBlood.width, this.enemyBlood.height);
					ctx.closePath();
					/// === ////

						if(this.bullets.right[i].width === 5.5) {
						enemy.health = enemy.health -50;
						}
						if(this.bullets.right[i].width === 3.75) {
						enemy.health = enemy.health -32;
						}
						if(this.bullets.right[i].width === 10) {
						enemy.health = enemy.health -120;
						}

					damage.play();
					enemypain.play();

					game.bullets.right.splice(0, 1);
					

				}
			}

};

			if(enemy.health <= 0 && player.x > enemy.x) {
			var destroy = false;	
					
					setTimeout(function(){
					enemy.canShoot = false;
					enemy.currentFrame = 0;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 4 * enemy.height;
					}, 100);

					setTimeout(function(){	
					enemy.currentFrame = 1;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 4 * enemy.height;
					}, 181);

					setTimeout(function(){	
					enemy.currentFrame = 2;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 4 * enemy.height;
					}, 222);

					setTimeout(function(){	
					enemy.currentFrame = 4;
					enemy.currentFrame = enemy.currentFrame;
					enemy.spriteX = enemy.currentFrame * enemy.width;
					enemy.spriteY = 4 * enemy.height;
					}, 263);

					setTimeout(function(){	
					enemy.alive = false;
					}, 304);
						
}
			//////** ENEMY ATTACKS TO PLAYER --- COLLISON CHECK **//////////////

				///CLOSE ATTACK LEFT
				if((player.x >= enemy.x -20 && player.x <= enemy.x +5) && (player.y >= enemy.y -5 && player.y<= enemy.y +5) && !player.jumping && enemy.standingLeft && enemy.alive){
				punch.play();
				game.health = 0;
				}
				
				///CLOSE ATTACK RIGHT
				if((player.x <= enemy.x +20 && player.x >= enemy.x -5) && (player.y >= enemy.y -5 && player.y<= enemy.y +5) && !player.jumping && enemy.standingRight && enemy.alive){
				punch.play();
				game.health = 0;
				}

				//// SHOOTING COLLISION RIGHT
				if(player.alive) {
		for(var i = 0; i < game.enemyBullets.left.length; i++) {
			var enemyBul = colCheck(game.enemyBullets.left[i], player.x, player.y, player.width, player.height);
			
			if(enemyBul === 'r' || enemyBul === 'l' || enemyBul === 't' || enemyBul === 'b') {

					// DRAW PLAYER BLOOD
					ctx.beginPath();
					ctx.drawImage(sprites.blood, this.enemyBlood.spriteX, this.enemyBlood.spriteY, this.enemyBlood.width, this.enemyBlood.height,
					player.x -35, player.y-player.height/2, this.enemyBlood.width, this.enemyBlood.height);
					ctx.closePath();
					/// === ////
					game.health = game.health -playerDamage;
			
						game.enemyBullets.left.splice(0, 1);

						setTimeout(function(){

							playerpain.play();
						}, 100);
						
					
				};
			};
};						/// PLAYER DIE
					if(game.health <= 0 && player.x > enemy.x) {

						setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 100);
						setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 381);
						setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 424);
					setTimeout(function(){
						player.alive = false;
						}, 504);
					}

///////////////****** SHOOTING COLLISION LEFT *******///////////////
					
				if(player.alive) {
		for(var i = 0; i < game.enemyBullets.right.length; i++) {
			var enemyBul = colCheck(game.enemyBullets.right[i], player.x, player.y, player.width, player.height);
			

			if(enemyBul === 'l' || enemyBul === 'r' || enemyBul === 't' || enemyBul === 'b') {

					// DRAW PLAYER BLOOD
					ctx.beginPath();
					ctx.drawImage(sprites.blood, this.enemyBlood.spriteX, this.enemyBlood.spriteY, this.enemyBlood.width, this.enemyBlood.height,
					player.x-15, player.y-player.height/2, this.enemyBlood.width, this.enemyBlood.height);
					ctx.closePath();
					/// === ////
					
					game.health = game.health -playerDamage;

						setTimeout(function(){

							playerpain.play();
						}, 100);
				
						game.enemyBullets.right.splice(0, 1);
					
				};
			};
};						/// PLAYER DIE
					if(game.health <= 0 && player.x < enemy.x) {
						setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 7 * player.height;
						}, 50);
						setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 7 * player.height;
						}, 450);
						setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 7 * player.height;
						}, 950);
					setTimeout(function(){
						player.alive = false;
						}, 1550);
					}
			////// ------------------------------- //////////////		
			/////// ENEMY SPEED, GRAVITY ETC.. ///////
			if(enemy.enemyMovement === true && !enemy.standingRight && enemy.health > 0)	{
			enemy.x += enemy.speed;
		};
		
			enemy.y += enemy.velY;
			enemy.velY += gravity;
		},
			
		transporterUpdate: function(player) {

			///////// TRANSPORTER DRAW //////////
			ctx.beginPath();
			ctx.drawImage(sprites.transporter, this.transporterE.x, this.transporterE.y, this.transporterE.width, this.transporterE.height);
			ctx.closePath();
			///////// ----------------- //////////

			/////////// TRANSPORTER COLLISION //////////
		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

			if(boxes[i] === 1 || boxes[i] === 3) {
			var tranporterDir = colCheck(this.transporterE, boxesX, boxesY, boxesW, boxesH);
			
			if(game.transporterE.x < 185 || tranporterDir === 'r') {
				this.transporterE.speed = -this.transporterE.speed;
			}

			var tranporterColDir = colCheck(player, this.transporterE.x, this.transporterE.y, this.transporterE.width, this.transporterE.height);

			if (tranporterColDir === 'b') {
				player.grounded = true;
				player.jumping = false;
				player.velY = 0;

				if(!rightPressed && !leftPressed){
				player.x = this.transporterE.x + 10;
				} else if (rightPressed) {
					player.x += 0.01;
					player.x = player.x;
				} else if (leftPressed) {
					player.x -= 0.01;
					player.x = player.x;
				}
			}
			}
			};

			///////////////// ---- /////////////

			/////////// TRANSPORTER VELOCITY ///////////

			this.transporterE.x += this.transporterE.speed;

			////////// ----------------- ///////////

		},

		elevatorUpdate: function(player, alertX, alertY) {
				elevatorDraw = true;
				if(enemyWarSound) {
				enemyWS.play();
				}	

			///////// ELEVATOR /////////
				this.elevatorE.currentFrame = 0;
				this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
				this.elevatorE.spriteY = 0 * this.elevatorE.height;

				if(player.y > alertY && player.x > alertX) {

					if(!game.whiteE.alive && !game.blackE.alive && !game.fatE.alive && !game.beardE.alive) {
				controllerAllow = false;	
				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				messageTwoActive = true;
				game.levelState = 1;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		gpuOneCreate: function(player) {
			/// GPU ANIM FOR GREEN AND RED //
			this.gpuE.currentFrame = ++this.gpuE.currentFrame % this.gpuE.spriteColumn;
			this.gpuE.spriteX = this.gpuE.currentFrame * this.gpuE.width;
			this.gpuE.spriteY = 0 * this.gpuE.height;

			/// GPU COL ANIM FOR GREEN AND RED//
			this.gpuCol.currentFrame = ++this.gpuCol.currentFrame % this.gpuCol.spriteColumn;
			this.gpuCol.spriteX = this.gpuCol.currentFrame * this.gpuCol.width;
			this.gpuCol.spriteY = 0 * this.gpuCol.height;

//////***===== GREEN GPU SECTION ======***//////

			// REMOVE GPU COL EFFECT
			for (var i = 0; i < this.gpuE.posOneGreen.length; i++) {

    		 (function(){
         		var j = i;
         		if(game.gpuE.posOneGreen[j].colDetect) {
         		setTimeout(function() { 
         		game.gpuE.posOneGreen[j].colDetect = null;
         		game.gpuE.posOneGreen[j].x = null;
        		 }, 250);
				}
     			})();
			};

			// GPU COLLISION WITH PLAYER
			for (var i = 0; i < this.gpuE.posOneGreen.length; i++) {
	if(this.gpuE.posOneGreen[i].colDetect === false) {
			if(player.x < this.gpuE.posOneGreen[i].x + this.gpuE.width -20 && player.x + player.width -20 > this.gpuE.posOneGreen[i].x &&
				player.y < this.gpuE.posOneGreen[i].y + this.gpuE.height && player.y + player.height > this.gpuE.posOneGreen[i].y) {

				score.play();

				this.money += 20;
				this.gpuE.posOneGreen[i].colDetect = true;
			}
}


}
//////***===== -------------- ======***//////

//////***===== RED GPU SECTION ======***//////
			// REMOVE GPU COL EFFECT
			for (var i = 0; i < this.gpuE.posOneRed.length; i++) {

    		 (function(){
         		var j = i;
         		if(game.gpuE.posOneRed[j].colDetect) {
         		setTimeout(function() { 
         		game.gpuE.posOneRed[j].colDetect = null;
         		game.gpuE.posOneRed[j].x = null;
        		 }, 250);
				}
     			})();
			};

			// ADVANCED GPU COL
for (var i = 0; i < this.gpuE.posOneRed.length; i++) {
	if(this.gpuE.posOneRed[i].colDetect === false) {
			if(player.x < this.gpuE.posOneRed[i].x + this.gpuE.width -20 && player.x + player.width -20 > this.gpuE.posOneRed[i].x &&
				player.y < this.gpuE.posOneRed[i].y + this.gpuE.height && player.y + player.height > this.gpuE.posOneRed[i].y) {

				score.play();

				this.money += 20;
				this.gpuE.posOneRed[i].colDetect = true;
			}
}


}
//////***===== -------------- ======***//////

		},

		sodaOneCreate: function(player){
			/// SODA ANIM
			this.sodaE.currentFrame = ++this.sodaE.currentFrame % this.sodaE.spriteColumn;
			this.sodaE.spriteX = this.sodaE.currentFrame * this.sodaE.width;
			this.sodaE.spriteY = 0 * this.sodaE.height;

			// SODA COLLISION
		for(var i = 0; i < this.sodaE.pos.length; i++) {
			if(player.x < this.sodaE.pos[i].x + this.sodaE.width -20 &&
				player.x + player.width -20 > this.sodaE.pos[i].x &&
				player.y < this.sodaE.pos[i].y + this.sodaE.height &&
				player.y + player.height > this.sodaE.pos[i].y) {

			slurping.play();

			this.sodaE.pos[i].colDetect = true;
			this.sodaE.pos[i].x = null;

			if(game.health < 100) {
				game.health += 30;
				if(game.health > 100) {
					game.health = 100;
				}
			}

			}
	};

	},

		levelOneBg: function(){
		ctx.drawImage(bg.levelOneBg, 0, 0);
		},

		hudUpdate: function(player) {
			// HEALTH
			ctx.beginPath();
			ctx.drawImage(ui.health, 60, -6);
			ctx.closePath();

			if(this.health <= 0) {
			ctx.beginPath();
			ctx.font = "16px Fjalla One";
			ctx.fillStyle = "#FFC4C4";
			ctx.fillText("0%", 111, 21);
			ctx.closePath();

			} else if(this.health === 100) {
			ctx.beginPath();
			ctx.font = "15px Fjalla One";
			ctx.fillStyle = "#FFC4C4";
			ctx.fillText(this.health + "%", 105, 20);
			ctx.closePath();
			} else if (this.health < 100 && this.health >= 10) {
			ctx.beginPath();
			ctx.font = "16px Fjalla One";
			ctx.fillStyle = "#FFC4C4";
			ctx.fillText(this.health + "%", 109, 21);
			ctx.closePath();	
			} else if (this.health <= 9 && this.health > 0) {
			ctx.beginPath();
			ctx.font = "16px Fjalla One";
			ctx.fillStyle = "#FFC4C4"; //FFC4C4
			ctx.fillText(this.health + "%", 111, 21);
			ctx.closePath();
			};

			// DOLLAR
			ctx.beginPath();
			ctx.drawImage(ui.dollar, 180, -5);
			ctx.font = "15px Fjalla One";
			ctx.fillStyle = "#F2F2EF";
			ctx.fillText(this.money, 230, 22);
			ctx.closePath();

			//HEART AND LIVES
			ctx.beginPath();
			ctx.drawImage(sprites.heart, this.heart.spriteX, this.heart.spriteY, this.heart.width, this.heart.height,
			303, 7, this.dust.width, this.dust.height);
			ctx.font = "18px Black Han Sans";
			ctx.fillStyle = "#EB0000";
			if(this.lives >= 0) {
			ctx.fillText(this.lives, 335, 25);
		} else if (this.lives < 0) {
			ctx.fillText("0", 335, 25);
		}
			ctx.closePath();


			// MESSAGE
			if(messageActive && game.levelState === 0) {
			ctx.drawImage(menuSprites.mess, 0, 0);
				// MESSAGE OK BUTTON
				ctx.beginPath();
				ctx.font = "18px Faster One";
				ctx.fillStyle = mesButtonColor;
				ctx.fillText("OK", 327, 320);
				ctx.closePath();
			}


			if(messageActive) {
			canvas.addEventListener('click', buttonClick);
			canvas.addEventListener('mousemove', buttonHoover);
			}

			function buttonClick(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(messageActive && game.levelState === 0) {					
				if(mouseX > 315 && mouseX < 369 && mouseY > 303 && mouseY < 326) {

					click.play();
					messageActive = false;
					htpActive = true;
					canvas.style.cursor = "default";
				}
}				
				};

			function buttonHoover(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(messageActive && game.levelState === 0) {						
				if(mouseX > 315 && mouseX < 369 && mouseY > 303 && mouseY < 326) {
					mesButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";

				} else {
					mesButtonColor = "#fff";
					canvas.style.cursor = "default";
				}
}				
				};


			// HOW TO PLAY SECTION
			if(htpActive) {
			ctx.drawImage(menuSprites.htp, 0, 0);
				// HTP OK BUTTON
				ctx.beginPath();
				ctx.font = "18px Faster One";
				ctx.fillStyle = htpButtonColor;
				ctx.fillText("OK", 337, 360);
				ctx.closePath();
};
	
			if(htpActive) {
			canvas.addEventListener('click', htpButtonClick);
			canvas.addEventListener('mousemove', htpButtonHoover);
			}

			function htpButtonClick(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(htpActive) {					
				if(mouseX > 327 && mouseX < 378 && mouseY > 341 && mouseY < 366) {

					click.play();
					htpActive = false;
					canvas.style.cursor = "default";
				}
}				
				};

			function htpButtonHoover(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(htpActive) {					
				if(mouseX > 327 && mouseX < 378 && mouseY > 341 && mouseY < 366) {
					htpButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";

				} else {
					htpButtonColor = "#fff";
					canvas.style.cursor = "default";
				}
}				
				};

			///// MESSAGE TWO -----!!** LEVEL2 **!!------

			if(messageTwoActive && game.levelState === 1) {
			ctx.drawImage(menuSprites.messTwo, 0, 0);
				// MESSAGE TWO OK BUTTON
				ctx.beginPath();
				ctx.font = "18px Faster One";
				ctx.fillStyle = mesTwoButtonColor;
				ctx.fillText("OK", 342, 342);
				ctx.closePath();
			}


			if(messageTwoActive && this.levelState === 1) {
			canvas.addEventListener('click', messTwoButtonClick);
			canvas.addEventListener('mousemove', messTwoButtonHoover);
			}

			function messTwoButtonClick(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE TWO OK BUTTON ///////////
if(messageTwoActive && game.levelState === 1) {					
				if(mouseX > 333 && mouseX < 387 && mouseY > 323 && mouseY < 348) {

					click.play();
					messageTwoActive = false;
					canvas.style.cursor = "default";
				}
}				
				};

			function messTwoButtonHoover(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE TWO OK BUTTON ///////////
if(messageTwoActive && game.levelState === 1) {						
				if(mouseX > 333 && mouseX < 387 && mouseY > 323 && mouseY < 348) {
					mesTwoButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";

				} else {
					mesTwoButtonColor = "#fff";
					canvas.style.cursor = "default";
				}
}				
				};

				///// EXTRACTION MESSAGE -----!!** LEVEL7 **!!------

if(extractionMessageActive && game.levelState === 6) {
			ctx.drawImage(menuSprites.messExt, 0, 0);
				// MESSAGE TWO OK BUTTON
				ctx.beginPath();
				ctx.font = "18px Faster One";
				ctx.fillStyle = mesExtButtonColor;
				ctx.fillText("OK", 336, 314);
				ctx.closePath();
			}

			if(extractionMessageActive && game.levelState === 6) {
			canvas.addEventListener('click', messExtButtonClick);
			canvas.addEventListener('mousemove', messExtButtonHover);
			}

			function messExtButtonClick(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE TWO OK BUTTON ///////////
if(extractionMessageActive && game.levelState === 6) {					
				if(mouseX > 326 && mouseX < 383 && mouseY > 293 && mouseY < 324) {

					click.play();
					extractionMessageActive = false;
					canvas.style.cursor = "default";
				}
}				
				};

			function messExtButtonHover(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE TWO OK BUTTON ///////////
if(extractionMessageActive && game.levelState === 6) {						
				if(mouseX > 326 && mouseX < 383 && mouseY > 293 && mouseY < 324) {
					mesExtButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";

				} else {
					mesExtButtonColor = "#fff";
					canvas.style.cursor = "default";
				}
}				
				};


			//////////////// ------------ /////////////////

				//////////////// WEAPON SLOTS /////////////////

				/// GUN
			if(gunAllow) {
				ctx.drawImage(ui.gunSlot, 370, 3);
				ctx.drawImage(ui.ammoBg, 372, 34);	
				// infinity sign
				ctx.drawImage(ui.infi, 378, 36)
			} else if (!gunAllow) {
				ctx.drawImage(ui.gunUNS, 370, 3);
			}

				/// UZI
		if(!this.uziAcquired) {
			ctx.drawImage(ui.emptySlot, 407, 3);
		} else if(this.uziAcquired) {
				if(uziAllow) {
				ctx.drawImage(ui.uziSlot, 407, 3);
				// AMMO BG
				if(this.uziAmmo < 100) {
				ctx.drawImage(ui.ammoBg, 409, 34);	
				} else if (this.uziAmmo >= 100) {
				ctx.drawImage(ui.ammoBgE, 405, 34);	
				}
				/////////
				ctx.beginPath();
				ctx.font = "13px Black Han Sans";
				
				if(this.uziAmmo > 0) {
				ctx.fillStyle = "#F2F2EF";
				} else if (this.uziAmmo <= 0) {
				ctx.fillStyle = "#FB1411";
				}

				if(this.uziAmmo < 10) {
				ctx.fillText(this.uziAmmo, 418, 47);
				} else if (this.uziAmmo < 100) {
				ctx.fillText(this.uziAmmo, 414, 47);
				} else if (this.uziAmmo >= 100) {
				ctx.fillText(this.uziAmmo, 410, 47);
				}
				ctx.closePath();



				} else if(!uziAllow) {
				ctx.drawImage(ui.uziUNS, 407, 3);
				}
		}; // acquired or not

				/// SHOTGUN
			if(!this.shotgunAcquired) {
				ctx.drawImage(ui.emptySlot, 444, 3);
			} else if(this.shotgunAcquired) {
				if(shotgunAllow) {	
				ctx.drawImage(ui.shotgunSlot, 444, 3);
				// AMMO BG
				if(this.shotgunAmmo < 100) {
				ctx.drawImage(ui.ammoBg, 446, 34);	
				} else if (this.shotgunAmmo >= 100) {
				ctx.drawImage(ui.ammoBgE, 442, 34);
				}
				/////////
				ctx.beginPath();
				ctx.font = "13px Black Han Sans";
				if(this.shotgunAmmo > 0) {
				ctx.fillStyle = "#F2F2EF";
				} else if (this.shotgunAmmo <= 0) {
				ctx.fillStyle = "#FB1411";
				}

				if(this.shotgunAmmo < 100 && this.shotgunAmmo >= 10) {
				ctx.fillText(this.shotgunAmmo, 451, 47);		
				} else if(this.shotgunAmmo >= 100) {
				ctx.fillText(this.shotgunAmmo, 447, 47);
				} else if(this.shotgunAmmo < 10) {
				ctx.fillText(this.shotgunAmmo, 455, 47);
				}

				ctx.closePath();
				} else if(!shotgunAllow) {
				ctx.drawImage(ui.shotgunUNS, 444, 3);
				}	
		}; // acquired or not

		},

		setGameOver: function(player) {
			
			if(player.y > 816) {
			player.alive = false;
			player.velY = 0;
				player.x = 42;
				player.y = 13;
			};
	
			if(!player.alive && this.lives > 0) {
				setTimeout(function(){
				game.levelState = 'gameOver';
				tryAgainS.play();
				}, 100)
				setTimeout(function(){
					gameOverButs = true;
				}, 1500);
			} else if (!player.alive && this.lives <= 0) {
				this.levelState = "lost";
				setTimeout(function(){
					gameOverS.play();
				}, 100);
			};

		},

		gameUpdateOne: function(player, white, black, fat, beard) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 42;
				player.y = 18.736363636363638;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];

				this.gpuE.posOneGreen = [{x: 180, y: 38, colDetect: false}, {x: 430, y: 224, colDetect: false}, {x: 53, y: 192, colDetect: false},
			{x: 437, y: 470, height: 34, colDetect: false}];
				this.gpuE.posOneRed = [{x: 516, y: 75, height: 34, colDetect: false},
			{x: 62, y: 120, height: 34, colDetect: false},];
				this.sodaE.pos = [{x: 349, y: 224, colDetect: false}];
				
				/// ENEMY 1
				white.alive = true;
				white.health = 100;
				white.canShoot = true;
				white.enemyRightBullets = [];
				white.enemyLeftBullets = [];
				/// ENEMY 2
				black.alive = true;
				black.health = 250;
				black.canShoot = true;
				black.enemyRightBullets = [];
				black.enemyLeftBullets = [];
				/// ENEMY 3
				fat.alive = true;
				fat.health = 150;
				fat.canShoot = true;
				fat.enemyRightBullets = [];
				fat.enemyLeftBullets = [];
				/// ENEMY 4
				beard.alive = true;
				beard.health = 130;
				beard.canShoot = true;
				beard.enemyRightBullets = [];
				beard.enemyLeftBullets = [];
				

			
	},
										 ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 2 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

			uziAmmo: 96, shotgunAmmo: 7,
			
			playerTwo: { //x: 40, y: 452
			x: 40, y: 452, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},
			whiteETwo: {										
			x: 454, y: 452, width: 44.44444444444444, height: 44.5, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 400, spriteHeight: 267, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 110, alive: true,
		},

			fatETwo: {		
			x: 518, y: 452, width: 47.22222222222222, height: 47.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 425, spriteHeight: 283, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 120, alive: true,
		},

			blackETwo: {						
			x: 361, y: 333, width: 45.22222222222222, height: 45.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 407, spriteHeight: 271, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

			beardETwo: {		
			x: 468, y: 47, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 130, alive: true,
		},

			rigs: {
			width: 36.16666666666667, height: 37, spriteX: 0, spriteY: 0, spriteWidth: 217, spriteHeight: 37, spriteRow: 1, 
			spriteColumn: 6, currentFrame: 0,

			exp: { width: 64, height: 65, spriteX: 0, spriteY: 0, spriteWidth: 1024, spriteHeight: 65, spriteRow: 1, 
			spriteColumn: 16, currentFrame: 0},

			levelTwo: [{x: 45, y: 215, health: 12, alive: true, exp: false}, {x: 94, y: 215, health: 12, alive: true, exp: false}],
			levelThree: [{x: 517, y: 464, health: 12, alive: true, exp: false}, {x: 468, y: 464, health: 12, alive: true, exp: false}, 
			{x: 34, y: 464, health: 12, alive: true, exp: false}, {x: 34, y: 184, health: 12, alive: true, exp: false}],
			levelFour: [{x: 524, y: 309, health: 12, alive: true, exp: false},{x: 346, y: 464, health: 12, alive: true, exp: false}, 
			{x: 389, y: 464, health: 12, alive: true, exp: false}, {x: 524, y: 464, health: 12, alive: true, exp: false}],
			levelFive: [{x: 524, y: 340, health: 12, alive: true, exp: false},{x: 33, y: 464, health: 12, alive: true, exp: false}, 
			{x: 93, y: 464, health: 12, alive: true, exp: false}],
			levelSix: [{x: 524, y: 340, health: 12, alive: true, exp: false},{x: 30, y: 340, health: 12, alive: true, exp: false}, 
			{x: 62, y: 340, health: 12, alive: true, exp: false}, {x: 97, y: 340, health: 12, alive: true, exp: false}, 
			{x: 30, y: 464, health: 12, alive: true, exp: false}],
			},

			turrets: {
			width: 64.33333333333333, height: 66, spriteX: 0, spriteY: 0, spriteWidth: 579, spriteHeight: 66, spriteRow: 1, 
			spriteColumn: 9, currentFrame: 0,

			exp: { width: 64, height: 65, spriteX: 0, spriteY: 0, spriteWidth: 1024, spriteHeight: 65, spriteRow: 1, 
			spriteColumn: 16, currentFrame: 0},
			rightBul: [],
			leftBul: [],

			levelTwo: [{x: 494, y: 215, health: 12, alive: true, exp: false}],
			levelThree: [{x: 394, y: 464, health: 12, alive: true, exp: false}],
			levelFour: [{x: 375, y: 59, health: 15, alive: true, exp: false}],
			levelSix: [{x: 456, y: 340, health: 15, alive: true, exp: false}],
			levelSeven: [{x: 428, y: 463, health: 18, alive: true, exp: false}],
			levelEight: [{x: 490, y: 91, health: 18, alive: true, exp: false}],

			levelThreeLeft: [{x: 70, y: 464, health: 12, alive: true, exp: false}],
			levelFourLeft: [{x: 32, y: 183, health: 18, alive: true, exp: false}],
			levelSixLeft: [{x: 136, y: 340, health: 15, alive: true, exp: false}],
			levelSevenLeft: [{x: 27, y: 90, health: 21, alive: true, exp: false}],
			},

			shotgunAmmoMac: {
				width: 40, height: 52,
				levelTwo: [{x: 240, y: 445}],
				levelFive: [{x: 272, y: 167}],
				levelSix: [{x: 139, y: 167}],
				levelSeven: [{x: 102, y: 197}],
				levelEight: [{x: 235, y: 73}],
			},

			uziAmmoMac: {
				width: 40, height: 52,
				levelThree: [{x: 124, y: 321}],
				levelFour: [{x: 305, y: 167}],
				levelFive: [{x: 80, y: 322}],
				levelSix: [{x: 458, y: 167}],
				levelSeven: [{x: 40, y: 321}],
				levelEight: [{x: 295, y: 73}],
			},

			healthMac: {
				width: 40, height: 52,
				levelFour: [{x: 273, y: 290}],
				levelFive: [{x: 34, y: 322}],
				levelSix: [{x: 284, y: 42}],
				levelSeven: [{x: 144, y: 321}],
			},

			livesMac: {
				width: 40, height: 52,
				levelFour: [{x: 220, y: 42}],
				levelFive: [{x: 250, y: 445}],
				levelSix: [{x: 123, y: 445}],
				levelSeven: [{x: 108, y: 73}],
			},


			

		drawTwo: function(player) {

			///// !* STATE *! //////
			if(this.levelState === 1) {
				sprites.tile = sprites.crate;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		canvas.style.backgroundColor = "#300000";

		// GREEN GPU
			for (var i = 0; i < this.gpuE.posTwoGreen.length; i++) {
				if(this.gpuE.posTwoGreen[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, this.gpuE.posTwoGreen[i].x, this.gpuE.posTwoGreen[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < this.gpuE.posTwoGreen.length; i++) {
				if(this.gpuE.posTwoGreen[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				this.gpuE.posTwoGreen[i].x, this.gpuE.posTwoGreen[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < this.gpuE.posTwoRed.length; i++) {
				if(this.gpuE.posTwoRed[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, this.gpuE.posTwoRed[i].x, this.gpuE.posTwoRed[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < this.gpuE.posTwoRed.length; i++) {
				if(this.gpuE.posTwoRed[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				this.gpuE.posTwoRed[i].x, this.gpuE.posTwoRed[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};
if(!this.turrets.levelTwo[0].alive) {
		// SODA
			for (var i = 0; i < this.sodaE.posTwo.length; i++) {
				if(this.sodaE.posTwo[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, this.sodaE.posTwo[i].x, this.sodaE.posTwo[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	}

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {

		jumplanding.play();
		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();

		},

		levelTwoBg: function(){
		ctx.drawImage(bg.levelTwoBg, 0, 0);
		},

		drawPlayer: function(player) {
		controllerAllow = true;
		// PLAYER
		if(player.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.character, player.spriteX, player.spriteY, player.width, 
				player.height, player.x, player.y, player.width, player.height);
			ctx.closePath();
		};

		// BLOODSPLASH EFFECT
		this.bloodSplash.currentFrame = ++this.bloodSplash.currentFrame % this.bloodSplash.spriteColumn;
		this.bloodSplash.spriteX = this.bloodSplash.currentFrame * this.bloodSplash.width;
		this.bloodSplash.spriteY = 0 * this.bloodSplash.height;

		// PLAYER RIGHT BULLETS
			ctx.beginPath();
			for(var i = 0; i < this.bullets.right.length; i++) {
				if(this.bullets.right[i].width === 5.5) {
			ctx.drawImage(sprites.bul, this.bullets.right[i].x, this.bullets.right[i].y, this.bullets.right[i].width, 
				this.bullets.right[i].height);
				}
				if(this.bullets.right[i].width === 3.75) {
			ctx.drawImage(sprites.uziBul, this.bullets.right[i].x, this.bullets.right[i].y, this.bullets.right[i].width, 
				this.bullets.right[i].height);
				}
				if(this.bullets.right[i].width === 10) {
			ctx.drawImage(sprites.shotgunBul, this.bullets.right[i].x, this.bullets.right[i].y, this.bullets.right[i].width, 
				this.bullets.right[i].height);
				}
			ctx.closePath();
		};

		// PLAYER LEFT BULLETS
			ctx.beginPath();
			for(var i = 0; i < this.bullets.left.length; i++) {	
				if(this.bullets.left[i].width === 5.5) {
			ctx.drawImage(sprites.bul, this.bullets.left[i].x, this.bullets.left[i].y, this.bullets.left[i].width, 
				this.bullets.left[i].height);
				}
				if(this.bullets.left[i].width === 3.75) {
			ctx.drawImage(sprites.uziBul, this.bullets.left[i].x, this.bullets.left[i].y, this.bullets.left[i].width, 
				this.bullets.left[i].height);
				}
				if(this.bullets.left[i].width === 10) {
			ctx.drawImage(sprites.shotgunBul, this.bullets.left[i].x, this.bullets.left[i].y, this.bullets.left[i].width, 
				this.bullets.left[i].height);
				}
			ctx.closePath();
		};
		
		///PLAYER SHELL SPRITES
		var playerShell;
		if(shotgunAllow) {
			playerShell = sprites.pShotgunShell;
		} else {
			playerShell = sprites.pshell;
		}

		// PLAYER SHELL LEFT
		for(var i = 0; i < this.bullets.shellLeft.length; i++) {
	if(game.bullets.shellLeft[i].alive) {	
			ctx.beginPath();
			ctx.drawImage(playerShell, game.bullets.shellLeft[i].x, game.bullets.shellLeft[i].y, game.bullets.shellLeft[i].width, game.bullets.shellLeft[i].height);
			ctx.closePath();
		}
	};

		// PLAYER SHELL RIGHT
		for(var i = 0; i < this.bullets.shellRight.length; i++) {
		if(game.bullets.shellRight[i].alive) {	
			ctx.beginPath();
			ctx.drawImage(playerShell, game.bullets.shellRight[i].x, game.bullets.shellRight[i].y, game.bullets.shellRight[i].width, game.bullets.shellRight[i].height);
			ctx.closePath();
		}
	};
		},

		enemiesDraw: function (white, black, fat, beard, eWhite, eBeard, eBlack) {
		// WHITE ENEMY
			if(white.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.whiteOne, white.spriteX, white.spriteY, white.width, white.height,
				white.x, white.y, white.width, white.height);
			ctx.closePath();	
			};

			// ENEMY RIGHT BULLETS
			ctx.beginPath();
			for(var i = 0; i < game.enemyBullets.right.length; i++) {
				if(game.enemyBullets.right[i].width === 4) {
			ctx.drawImage(sprites.capBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 10) {
			ctx.drawImage(sprites.shotgunBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 3.75) {
			ctx.drawImage(sprites.uziBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 5) {
			ctx.drawImage(sprites.coltBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
			ctx.closePath();
		};

		// ENEMY LEFT BULLETS
			ctx.beginPath();
			for(var i = 0; i < game.enemyBullets.left.length; i++) {	
				if(game.enemyBullets.left[i].width === 4) {
			ctx.drawImage(sprites.capBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 10) {
			ctx.drawImage(sprites.shotgunBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 3.75) {
			ctx.drawImage(sprites.uziBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 5) {
			ctx.drawImage(sprites.coltBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
			ctx.closePath();
		};
if(this.levelState === 2) {
		// EXTRA WHITE ENEMY
			if(eWhite.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.whiteOne, eWhite.spriteX, eWhite.spriteY, eWhite.width, eWhite.height,
				eWhite.x, eWhite.y, eWhite.width, eWhite.height);
			ctx.closePath();	
			};
}; // level check

if(this.levelState === 3) {
		// EXTRA BEARD ENEMY
			if(eBeard.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.beardOne, eBeard.spriteX, eBeard.spriteY, eBeard.width, eBeard.height,
				eBeard.x, eBeard.y, eBeard.width, eBeard.height);
			ctx.closePath();	
			};

		// EXTRA BLACK ENEMY
		if(eBlack.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.blackOne, eBlack.spriteX, eBlack.spriteY, eBlack.width, eBlack.height,
				eBlack.x, eBlack.y, eBlack.width, eBlack.height);
			ctx.closePath();	
			};
}; // level check

		// FAT ENEMY
			if(fat.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.fatOne, fat.spriteX, fat.spriteY, fat.width, fat.height,
				fat.x, fat.y, fat.width, fat.height);
			ctx.closePath();	
			};

if(this.levelState !== 2) {
		// BLACK ENEMY
			if(black.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.blackOne, black.spriteX, black.spriteY, black.width, black.height,
				black.x, black.y, black.width, black.height);
			ctx.closePath();	
			};
}; // level check		

		// BEARD ENEMY
			if(beard.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.beardOne, beard.spriteX, beard.spriteY, beard.width, beard.height,
				beard.x, beard.y, beard.width, beard.height);
			ctx.closePath();	
			};
		},

			gpuCreate: function(player, levelGreen, levelRed) {
						/// GPU ANIM FOR GREEN AND RED //
			this.gpuE.currentFrame = ++this.gpuE.currentFrame % this.gpuE.spriteColumn;
			this.gpuE.spriteX = this.gpuE.currentFrame * this.gpuE.width;
			this.gpuE.spriteY = 0 * this.gpuE.height;

			/// GPU COL ANIM FOR GREEN AND RED//
			this.gpuCol.currentFrame = ++this.gpuCol.currentFrame % this.gpuCol.spriteColumn;
			this.gpuCol.spriteX = this.gpuCol.currentFrame * this.gpuCol.width;
			this.gpuCol.spriteY = 0 * this.gpuCol.height;

			////// LEVEL7 TURRET GREEN GPU ACTIVATE
			if(!this.turrets.levelSevenLeft[0].alive) {
				this.gpuE.posSevenGreen[0].x = 41;
			}
			////// LEVEL7 TURRET RED GPU ACTIVATE
			if(!this.turrets.levelSeven[0].alive) {
				this.gpuE.posSevenRed[1].x = 458;
			}
			////// LEVEL8 TURRET RED GPU ACTIVATE
			if(!this.turrets.levelEight[0].alive) {
				this.gpuE.posEightRed[1].x = 519;
			}

//////***===== GREEN GPU SECTION ======***//////

			//////////////////

			// REMOVE GPU COL EFFECT
			for (var i = 0; i < levelGreen.length; i++) {

    		 (function(){
         		var j = i;
         		if(levelGreen[j].colDetect) {
         		setTimeout(function() { 
         		levelGreen[j].colDetect = null;
         		levelGreen[j].x = null;
        		 }, 250);
				}
     			})();
			};

			// GPU COLLISION WITH PLAYER
			for (var i = 0; i < levelGreen.length; i++) {
	if(levelGreen[i].colDetect === false) {
			if(player.x < levelGreen[i].x + this.gpuE.width -20 && player.x + player.width -20 > levelGreen[i].x &&
				player.y < levelGreen[i].y + this.gpuE.height && player.y + player.height > levelGreen[i].y) {

				score.play();
				this.money += 20;
				levelGreen[i].colDetect = true;
			}
}

}
//////***===== -------------- ======***//////

//////***===== RED GPU SECTION ======***//////
			// REMOVE GPU COL EFFECT
			for (var i = 0; i < levelRed.length; i++) {

    		 (function(){
         		var j = i;
         		if(levelRed[j].colDetect) {
         		setTimeout(function() { 
         		levelRed[j].colDetect = null;
         		levelRed[j].x = null;
        		 }, 250);
				}
     			})();
			};

			// ADVANCED GPU COL
for (var i = 0; i < levelRed.length; i++) {
	if(levelRed[i].colDetect === false) {
			if(player.x < levelRed[i].x + this.gpuE.width -20 && player.x + player.width -20 > levelRed[i].x &&
				player.y < levelRed[i].y + this.gpuE.height && player.y + player.height > levelRed[i].y) {

				score.play();
				this.money += 20;
				levelRed[i].colDetect = true;
			}
}
}
//////***===== -------------- ======***//////

		},

		sodaCreate: function(player, level){
			/// SODA ANIM
			this.sodaE.currentFrame = ++this.sodaE.currentFrame % this.sodaE.spriteColumn;
			this.sodaE.spriteX = this.sodaE.currentFrame * this.sodaE.width;
			this.sodaE.spriteY = 0 * this.sodaE.height;

		////// LEVEL6 SODA ACTIVATE
			if(!game.agentBrownESix.alive && !game.sodaE.posSix[1].colDetect){
				game.sodaE.posSix[1].x = game.agentBrownESix.x;
			}	

		////// LEVEL8 SODA ACTIVATE
			if(!game.agentBaldEEight.alive && !game.sodaE.posEight[0].colDetect){
				game.sodaE.posEight[0].x = game.agentBaldEEight.x;
			}

if(this.levelState === 1) {			
if(!this.turrets.levelTwo[0].alive) {
			// SODA COLLISION
		for(var i = 0; i < this.sodaE.posTwo.length; i++) {
			if(player.x < this.sodaE.posTwo[i].x + this.sodaE.width -20 &&
				player.x + player.width -20 > this.sodaE.posTwo[i].x &&
				player.y < this.sodaE.posTwo[i].y + this.sodaE.height &&
				player.y + player.height > this.sodaE.posTwo[i].y) {

			slurping.play();

			this.sodaE.posTwo[i].colDetect = true;
			this.sodaE.posTwo[i].x = null;

			if(game.health < 100) {
				game.health += 30;
				if(game.health > 100) {
					game.health = 100;
				}
			}

			}
	};
};
} else {
				// SODA COLLISION
		for(var i = 0; i < level.length; i++) {
			if(player.x < level[i].x + this.sodaE.width -20 &&
				player.x + player.width -20 > level[i].x &&
				player.y < level[i].y + this.sodaE.height &&
				player.y + player.height > level[i].y) {

			slurping.play();

			level[i].colDetect = true;
			level[i].x = null;

			if(game.health < 100) {
				game.health += 30;
				if(game.health > 100) {
					game.health = 100;
				}
			}

			}
	};

};


	},

		elevatorCreate: function() {
		if(this.levelState === 1) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 43, 449);
			ctx.closePath();
			
			// ELEVATOR 2 DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.levelTwo[1].x, 
				this.elevatorE.levelTwo[1].y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		} else if (this.levelState === 2) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 31, 47);
			ctx.closePath();

			// ELEVATOR 2 DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.levelThree[0].x, 
				this.elevatorE.levelThree[0].y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		} else if (this.levelState === 3) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 497, 171);
			ctx.closePath();

			// ELEVATOR 2 DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.levelFour[0].x, 
				this.elevatorE.levelFour[0].y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		} else if (this.levelState === 4) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 33, 48);
			ctx.closePath();

			// ELEVATOR 2 DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.levelFive[0].x, 
				this.elevatorE.levelFive[0].y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		} else if (this.levelState === 5) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 33, 171);
			ctx.closePath();

			// ELEVATOR 2 DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.levelSix[0].x, 
				this.elevatorE.levelSix[0].y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		} else if (this.levelState === 6) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 498, 77);
			ctx.closePath();

			// ELEVATOR 2 DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevator, this.elevatorE.spriteX, this.elevatorE.spriteY, this.elevatorE.width, this.elevatorE.height, this.elevatorE.levelSeven[0].x, 
				this.elevatorE.levelSeven[0].y, this.elevatorE.width, this.elevatorE.height);
			ctx.closePath();
		} else if (this.levelState === 7) {
			// OPEN ELEVATOR DRAW
			ctx.beginPath();
			ctx.drawImage(sprites.elevatorOpen, 36, 78);
			ctx.closePath();
		}
		
		},

		elevatorLevelTwoUpdate: function(player, alertX, alertMinY, alertMaxY) {
			
				if(enemyWarSound) {
				enemyWS.play();
				}
							///////// ELEVATOR 2 /////////
			this.elevatorE.currentFrame = 0;
			this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
			this.elevatorE.spriteY = 0 * this.elevatorE.height;

				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertX) {

				if(!game.whiteETwo.alive && !game.blackETwo.alive && !game.fatETwo.alive && !game.beardETwo.alive && !this.rigs.levelTwo[0].alive &&
					!this.rigs.levelTwo[1].alive) {

				controllerAllow = false;	
				setTimeout(function(){
				
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				game.levelState = 2;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyRigsWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		levelTwoClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 127, y: 368}, {x: 375, y: 247}, {x: 219, y: 125}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.woodLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},

		rigsCreate: function(level){

		// RIG EXPLOSION ANIM
		this.rigs.exp.currentFrame = ++this.rigs.exp.currentFrame % 16;
		this.rigs.exp.spriteX = this.rigs.exp.currentFrame * this.rigs.exp.width;
		this.rigs.exp.spriteY = 0 * this.rigs.exp.height;

		// DRAW RIGS
for(var i = 0; i < level.length; i++) {
	if(level[i].alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.rig, this.rigs.spriteX, this.rigs.spriteY, this.rigs.width, this.rigs.height,
			level[i].x, level[i].y, this.rigs.width, this.rigs.height);
			ctx.closePath();
	}	

		// DRAW RIGS' EXPLOSION
		if(level[i].exp) {
			ctx.beginPath();
			ctx.drawImage(sprites.rigExplosion, this.rigs.exp.spriteX, this.rigs.exp.spriteY, this.rigs.exp.width, this.rigs.exp.height,
			level[i].x -2, level[i].y-18, this.rigs.exp.width, this.rigs.exp.height);
			ctx.closePath();
};

};


		//RIGS GUN SHOOTING RIGHT
for(var i = 0; i < level.length; i++) {

if(level[i].alive) {
for(var y = 0; y < this.bullets.right.length; y++) {		
		if(this.bullets.right[y].x < level[i].x + this.rigs.width && this.bullets.right[y].x + this.bullets.right[y].width > level[i].x &&
		this.bullets.right[y].y < level[i].y + this.rigs.height && this.bullets.right[y].y + this.bullets.right[y].height > level[i].y) {

     		colWall.play();	

			for(var a = 0; a < game.bullets.right.length; a++) {	
				if(game.bullets.right[a].width === 5.5) {
					level[i].health -= 3.2;
				}
				if(game.bullets.right[a].width === 3.75) {
				    level[i].health -= 0.7;
				}
				if(game.bullets.right[a].width === 10) {
					level[i].health -= 6.5;
				}
			};

			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.right[y].x -15, this.bullets.right[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.right[y].alive = false;

			game.bullets.right.splice(0, 1);
	}
}; //loops end here
}; // rigs loops end here
}; // rigs alive check

	//RIGS GUN SHOOTING LEFT
for(var i = 0; i < level.length; i++) {

if(level[i].alive) {
for(var y = 0; y < this.bullets.left.length; y++) {		
		if(this.bullets.left[y].x < level[i].x + this.rigs.width && this.bullets.left[y].x + this.bullets.left[y].width > level[i].x &&
		this.bullets.left[y].y < level[i].y + this.rigs.height && this.bullets.left[y].y + this.bullets.left[y].height > level[i].y) {

     		colWall.play();

			for(var a = 0; a < game.bullets.left.length; a++) {	
				if(game.bullets.left[a].width === 5.5) {
					level[i].health -= 3.2;
				}
				if(game.bullets.left[a].width === 3.75) {
				    level[i].health -= 0.7;
				}
				if(game.bullets.left[a].width === 10) {
					level[i].health -= 6.5;
				}
			};

			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.left[y].x -26, this.bullets.left[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.left[y].alive = false;

			game.bullets.left.splice(0, 1);
	}
}; //loops end here
}; // rigs loops end here
}; // rigs alive check

	//RIGS DESTROY
for(var i = 0; i < level.length; i++) {	
	if(level[i].health === 0 || level[i].health < 0) {

		level[i].alive = false;
		level[i].exp = true;
		rigExp.play();

		(function(){
         		var j = i;
         		setTimeout(function() { 
         		level[j].x = 1000;
         		level[j].y = 1000;
         		level[j].exp = false;
         		level[j].health = null;
        		}, 600);
     			})();
	}
}; // rigs loops end here

		},


	turretsCreate: function(player, level, speed, amount){
if(!extractionMessageActive) {
		if(turretShooting) {
		// TURRET ANIM
		this.turrets.currentFrame = ++this.turrets.currentFrame % this.turrets.spriteColumn;
		this.turrets.spriteX = this.turrets.currentFrame * this.turrets.width;
		this.turrets.spriteY = 0 * this.turrets.height;
		} else if (!turretShooting) {
		this.turrets.currentFrame = 0;
		this.turrets.spriteX = this.turrets.currentFrame * this.turrets.width;
		this.turrets.spriteY = 0 * this.turrets.height;
		}

		// TURRET EXPLOSION ANIM
		this.turrets.exp.currentFrame = ++this.turrets.exp.currentFrame % 16;
		this.turrets.exp.spriteX = this.turrets.exp.currentFrame * this.turrets.exp.width;
		this.turrets.exp.spriteY = 0 * this.turrets.exp.height;

		//DRAW TURRET
	for(var i = 0; i < level.length; i++) {
		if(level[i].alive) {
		ctx.beginPath();
		ctx.drawImage(sprites.tur, this.turrets.spriteX, this.turrets.spriteY, this.turrets.width, this.turrets.height, 
			level[i].x, level[i].y, this.turrets.width, this.turrets.height);
		ctx.closePath();
		}

		// DRAW TURRETS' EXPLOSION
		if(level[i].exp) {
			ctx.beginPath();
			ctx.drawImage(sprites.turExplosion, this.turrets.exp.spriteX, this.turrets.exp.spriteY, this.turrets.exp.width, this.turrets.exp.height,
			level[i].x -2, level[i].y-18, this.turrets.exp.width, this.turrets.exp.height);
			ctx.closePath();
};
	}; // loops end here

for(var i = 0; i < level.length; i++) {
		//TURRET ENEMY DETECTION
		if(player.y > level[i].y -30 && player.y < level[i].y) {
			turretShooting = true;
		} else {
			turretShooting = false;
		}
}; // loops end here		

		//TURRETS WEAPONS SHOOTING LEFT
for(var i = 0; i < level.length; i++) {

if(level[i].alive) {
for(var y = 0; y < this.bullets.left.length; y++) {		
		if(this.bullets.left[y].x < level[i].x + this.turrets.width && this.bullets.left[y].x + this.bullets.left[y].width > level[i].x &&
		this.bullets.left[y].y < level[i].y + this.turrets.height && this.bullets.left[y].y + this.bullets.left[y].height > level[i].y) {

			colWall.play();

			for(var a = 0; a < game.bullets.left.length; a++) {	
				if(game.bullets.left[a].width === 5.5) {
					level[i].health -= 3.2;
				}
				if(game.bullets.left[a].width === 3.75) {
				    level[i].health -= 0.7;
				}
				if(game.bullets.left[a].width === 10) {
					level[i].health -= 4.5;
				}
			};

			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.left[y].x +2, this.bullets.left[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.left.splice(0, 1);
	}
}; //loops end here
}; // turrets loops end here
}; // turrets alive check

		//TURRETS WEAPONS SHOOTING RIGHT
for(var i = 0; i < level.length; i++) {

if(level[i].alive) {
for(var y = 0; y < this.bullets.right.length; y++) {		
		if(this.bullets.right[y].x < level[i].x + this.turrets.width && this.bullets.right[y].x + this.bullets.right[y].width > level[i].x &&
		this.bullets.right[y].y < level[i].y + this.turrets.height && this.bullets.right[y].y + this.bullets.right[y].height > level[i].y) {

			colWall.play();

			for(var a = 0; a < game.bullets.right.length; a++) {	
				if(game.bullets.right[a].width === 5.5) {
					level[i].health -= 3.2;
				}
				if(game.bullets.right[a].width === 3.75) {
				   level[i].health -= 0.7;
				}
				if(game.bullets.right[a].width === 10) {
					level[i].health -= 4.5;
				}
			};

			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.right[y].x -22, this.bullets.right[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.right.splice(0, 1);
	}
}; //loops end here
}; // turrets loops end here
}; // turrets alive check

	//TURRETS DESTROY
for(var i = 0; i < level.length; i++) {	
	if(level[i].health === 0 || level[i].health < 0) {

		level[i].alive = false;
		level[i].exp = true;
		turretExp.play();

		(function(){
         		var j = i;
         		setTimeout(function() { 
         		level[j].x = 1000;
         		level[j].y = 1000;
         		level[j].exp = false;
         		level[j].health = null;
        		}, 600);
     			})();
	}
}; // rigs loops end here

for(var i = 0; i < this.turrets.rightBul.length; i++) {
	// TURRETS BULLET DRAW
	ctx.beginPath();
	ctx.drawImage(sprites.turBul, this.turrets.rightBul[i].x, this.turrets.rightBul[i].y, this.turrets.rightBul[i].width, this.turrets.rightBul[i].height);
	ctx.closePath();
	};

for(var i = 0; i < level.length; i++) {	
	//TURRET SHOOTING
if(level[i].health > 0) {	
		if(turShot && turretShooting) {
			
			turShot = false;
			setTimeout(function(){
			var bullet = {x: level[0].x, y: level[0].y +10, width: 8, height: 8, alive: true};
			game.turrets.rightBul.push(bullet);
			
			turSound.play();
			////******////

			}, 150);
			setTimeout(function(){turShot = true},amount);
			}
		}
}; //loops end here

		for(var i = 0; i < this.turrets.rightBul.length; i++) {
			this.turrets.rightBul[i].x -= speed;
		};


		// TURRET BULLET RIGHT AND WALL COLLISION
for(var i = 0; i < boxes.length; i++) {	
	for(var y = 0; y < this.turrets.rightBul.length; y++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;
if(boxes[i] === 1) {
	if(this.turrets.rightBul[y].x < boxesX + boxesW && this.turrets.rightBul[y].x + this.turrets.rightBul[y].width > boxesX &&
		this.turrets.rightBul[y].y < boxesY + boxesH && this.turrets.rightBul[y].y + this.turrets.rightBul[y].height > boxesY) {

			game.turrets.rightBul.splice(0, 1);
	}
			
	}
}
}; // for ends

				//// SHOOTING TO PLAYER COLLISION RIGHT
				if(player.alive) {
		for(var i = 0; i < this.turrets.rightBul.length; i++) {
			var enemyBul = colCheck(this.turrets.rightBul[i], player.x, player.y, player.width, player.height);
			

			if(enemyBul === 'r' || enemyBul === 'l' || enemyBul === 't' || enemyBul === 'b') {

					// DRAW PLAYER BLOOD
					ctx.beginPath();
					ctx.drawImage(sprites.blood, this.enemyBlood.spriteX, this.enemyBlood.spriteY, this.enemyBlood.width, this.enemyBlood.height,
					player.x -35, player.y-player.height/2, this.enemyBlood.width, this.enemyBlood.height);
					ctx.closePath();
					/// === ////
					game.health = game.health - 44;
				
						this.turrets.rightBul.splice(this.turrets.rightBul.length -1, 1);

						setTimeout(function(){
							var sounds = {};
							sounds.playerpain = new Audio();
							sounds.playerpain.src = "sounds/playerpain.mp3";
							sounds.playerpain.play();
						}, 100);
						
					
				};
			};
};	
}; // message check	
	},

	turretsLeftCreate: function(player, level, speed, amount){
if(!extractionMessageActive) {		
				if(turretShootingLeft) {
		// TURRET ANIM
		this.turrets.currentFrame = ++this.turrets.currentFrame % this.turrets.spriteColumn;
		this.turrets.spriteX = this.turrets.currentFrame * this.turrets.width;
		this.turrets.spriteY = 0 * this.turrets.height;
		} else if (!turretShootingLeft) {
		this.turrets.currentFrame = 8;
		this.turrets.spriteX = this.turrets.currentFrame * this.turrets.width;
		this.turrets.spriteY = 0 * this.turrets.height;
		}

		// TURRET EXPLOSION ANIM
		this.turrets.exp.currentFrame = ++this.turrets.exp.currentFrame % 16;
		this.turrets.exp.spriteX = this.turrets.exp.currentFrame * this.turrets.exp.width;
		this.turrets.exp.spriteY = 0 * this.turrets.exp.height;

		//DRAW TURRET
	for(var i = 0; i < level.length; i++) {
		if(level[i].alive) {
		ctx.beginPath();
		ctx.drawImage(sprites.turLeft, this.turrets.spriteX, this.turrets.spriteY, this.turrets.width, this.turrets.height, 
			level[i].x, level[i].y, this.turrets.width, this.turrets.height);
		ctx.closePath();
		}

		// DRAW TURRETS' EXPLOSION
		if(level[i].exp) {
			ctx.beginPath();
			ctx.drawImage(sprites.turExplosion, this.turrets.exp.spriteX, this.turrets.exp.spriteY, this.turrets.exp.width, this.turrets.exp.height,
			level[i].x -2, level[i].y-18, this.turrets.exp.width, this.turrets.exp.height);
			ctx.closePath();
};
	}; // loops end here

for(var i = 0; i < level.length; i++) {
if(this.levelState !== 3) {
		//TURRET ENEMY DETECTION
		if(player.y > level[i].y -30 && player.y < level[i].y) {
			turretShootingLeft = true;
		} else {
			turretShootingLeft = false;
		}

	} else if (this.levelState === 3) {
				//TURRET ENEMY DETECTION
		if(player.y > level[i].y -30 && player.y < level[i].y && player.x < 495) {
			turretShootingLeft = true;
		} else {
			turretShootingLeft = false;
		}
	}
}; // loops end here

		//TURRETS WEAPONS SHOOTING RIGHT
for(var i = 0; i < level.length; i++) {

if(level[i].alive) {
for(var y = 0; y < this.bullets.right.length; y++) {		
		if(this.bullets.right[y].x < level[i].x + this.turrets.width && this.bullets.right[y].x + this.bullets.right[y].width > level[i].x &&
		this.bullets.right[y].y < level[i].y + this.turrets.height && this.bullets.right[y].y + this.bullets.right[y].height > level[i].y) {

     		colWall.play();

			for(var a = 0; a < game.bullets.right.length; a++) {	
				if(game.bullets.right[a].width === 5.5) {
					level[i].health -= 3.2;
				}
				if(game.bullets.right[a].width === 3.75) {
				    level[i].health -= 0.7;
				}
				if(game.bullets.right[a].width === 10) {
					level[i].health -= 4.5;
				}
			};

			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.right[y].x -32, this.bullets.right[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.right.splice(0, 1);
	}
}; //loops end here
}; // turrets loops end here
}; // turrets alive check

//TURRETS WEAPONS SHOOTING LEFT
for(var i = 0; i < level.length; i++) {

if(level[i].alive) {
for(var y = 0; y < this.bullets.left.length; y++) {		
		if(this.bullets.left[y].x < level[i].x + this.turrets.width && this.bullets.left[y].x + this.bullets.left[y].width > level[i].x &&
		this.bullets.left[y].y < level[i].y + this.turrets.height && this.bullets.left[y].y + this.bullets.left[y].height > level[i].y) {

     			colWall.play();

			for(var a = 0; a < game.bullets.left.length; a++) {	
				if(game.bullets.left[a].width === 5.5) {
					level[i].health -= 3.2;
				}
				if(game.bullets.left[a].width === 3.75) {
				   level[i].health -= 0.7;
				}
				if(game.bullets.left[a].width === 10) {
					level[i].health -= 4.5;
				}
			};

			ctx.drawImage(sprites.col, this.bullets.col.spriteX, this.bullets.col.spriteY, this.bullets.col.width, this.bullets.col.height,
			this.bullets.left[y].x +2, this.bullets.left[y].y -20, this.bullets.col.width, this.bullets.col.height);
			game.bullets.left.splice(0, 1);
	}
}; //loops end here
}; // turrets loops end here
}; // turrets alive check

	//TURRETS DESTROY
for(var i = 0; i < level.length; i++) {	
	if(level[i].health === 0 || level[i].health < 0) {

		level[i].alive = false;
		level[i].exp = true;
		turretExp.play();

		(function(){
         		var j = i;
         		setTimeout(function() { 
         		level[j].x = 1000;
         		level[j].y = 1000;
         		level[j].exp = false;
         		level[j].health = null;
        		}, 600);
     			})();
	}
}; // rigs loops end here

for(var i = 0; i < this.turrets.leftBul.length; i++) {
	// TURRETS BULLET DRAW
	ctx.beginPath();
	ctx.drawImage(sprites.turBul, this.turrets.leftBul[i].x, this.turrets.leftBul[i].y, this.turrets.leftBul[i].width, this.turrets.leftBul[i].height);
	ctx.closePath();
	};

for(var i = 0; i < level.length; i++) {	
	//TURRET SHOOTING
if(level[i].health > 0) {	
		if(turShotLeft && turretShootingLeft) {
			
			turShotLeft = false;
			setTimeout(function(){
			var bullet = {x: level[0].x +50, y: level[0].y +10, width: 8, height: 8, alive: true};
			game.turrets.leftBul.push(bullet);
			
			turSound.play();
			////******////

			}, 150);
			setTimeout(function(){turShotLeft = true},amount);
			}
		}
}; //loops end here

		for(var i = 0; i < this.turrets.leftBul.length; i++) {
			this.turrets.leftBul[i].x += speed;
		};


		// TURRET BULLET RIGHT AND WALL COLLISION
for(var i = 0; i < boxes.length; i++) {	
	for(var y = 0; y < this.turrets.leftBul.length; y++) {
		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;
if(boxes[i] === 1) {
	if(this.turrets.leftBul[y].x < boxesX + boxesW && this.turrets.leftBul[y].x + this.turrets.leftBul[y].width > boxesX &&
		this.turrets.leftBul[y].y < boxesY + boxesH && this.turrets.leftBul[y].y + this.turrets.leftBul[y].height > boxesY) {

			game.turrets.leftBul.splice(0, 1);
	}
			
	}
}
}; // for ends

				//// SHOOTING TO PLAYER COLLISION LEFT
				if(player.alive) {
		for(var i = 0; i < this.turrets.leftBul.length; i++) {
			var enemyBul = colCheck(this.turrets.leftBul[i], player.x, player.y, player.width, player.height);
			

			if(enemyBul === 'r' || enemyBul === 'l' || enemyBul === 't' || enemyBul === 'b') {

					// DRAW PLAYER BLOOD
					ctx.beginPath();
					ctx.drawImage(sprites.blood, this.enemyBlood.spriteX, this.enemyBlood.spriteY, this.enemyBlood.width, this.enemyBlood.height,
					player.x -35, player.y-player.height/2, this.enemyBlood.width, this.enemyBlood.height);
					ctx.closePath();
					/// === ////

					
					game.health = game.health - 44;
				
						this.turrets.leftBul.splice(this.turrets.leftBul.length -1, 1);

						setTimeout(function(){
							var sounds = {};
							sounds.playerpain = new Audio();
							sounds.playerpain.src = "sounds/playerpain.mp3";
							sounds.playerpain.play();
						}, 100);
						
					
				};
			};
};	
}; // message check
	},

	weaponChangeLevelOne: function() {
		if(onePressed && !xPressed) {
			gunAllow = true;
			uziAllow = false;
		} else if(twoPressed && !xPressed) {
			gunAllow = true;
			uziAllow = false;
		}
	},

	weaponChange: function() {

		if(this.levelState === 3 || this.levelState === 4 || this.levelState === 5 || this.levelState === 6 || this.levelState === 7) {
			this.uziAcquired = true;
		}

		if(this.levelState === 5 || this.levelState === 6 || this.levelState === 7) {
			this.shotgunAcquired = true;
		}

		if(onePressed && !xPressed) {
			if(weaponChangeFx){
			var weaponChange = new Audio();
			weaponChange.src = "sounds/weapon_change.mp3";
			weaponChangeFx = false;
			weaponChange.play();
			setTimeout(function(){weaponChangeFx = true;},500);
			}
								
			gunAllow = true;
			uziAllow = false;
			shotgunAllow = false;
		} else if(twoPressed && !xPressed) {
			if(weaponChangeFx){
			var weaponChange = new Audio();
			weaponChange.src = "sounds/weapon_change.mp3";
			weaponChangeFx = false;
			weaponChange.play();
			setTimeout(function(){weaponChangeFx = true;},500);
		}
		if(!this.uziAcquired) {
			gunAllow = true;
			uziAllow = false;
			shotgunAllow = false;
			} else if (this.uziAcquired) {
			gunAllow = false;
			uziAllow = true;
			shotgunAllow = false;
			}

		} else if(threePressed && !xPressed) {
			if(weaponChangeFx){
			var weaponChange = new Audio();
			weaponChange.src = "sounds/weapon_change.mp3";
			weaponChangeFx = false;
			weaponChange.play();
			setTimeout(function(){weaponChangeFx = true;},500);
			}
		if(!this.shotgunAcquired) {
			gunAllow = true;
			uziAllow = false;
			shotgunAllow = false;
			} else if (this.shotgunAcquired) {
			gunAllow = false;
			uziAllow = false;
			shotgunAllow = true;
			}
		}

		/// AMMO
		if(this.uziAmmo < 1) {
			this.uziAmmo = 0;
		} else if (this.uziAmmo > 999) {
			this.uziAmmo = 999;
		}

		if(this.shotgunAmmo < 1) {
			this.shotgunAmmo = 0;
		} else if (this.shotgunAmmo > 999) {
			this.shotgunAmmo = 999;
		}


	},

	shotgunAmmoMachineCreate: function(player, level){
		for(var i = 0; i < level.length; i++) {
		ctx.drawImage(sprites.shotgunAmmoMachine, level[i].x, level[i].y);
		};

		// BUY AMMO COLLISION CHECK
	for(var i = 0; i < level.length; i++) {
		if(player.x + player.width -25 > level[i].x && player.x < level[i].x + this.shotgunAmmoMac.width -25 &&
			player.y + player.height > level[i].y && player.y < level[i].y + this.shotgunAmmoMac.height) {
if(!xPressed) {	
			ctx.drawImage(ui.shotgunBuy, 119, 130);

			if(ePressed && this.money >= 25 && this.shotgunAmmo < 999 && ePressAllower) {
				ePressAllower = false;

				gunAllow = false;
				uziAllow = false;
				shotgunAllow = true;

				shotgunAmmoReloadScore.play();	

				this.money -= 25;
				this.shotgunAmmo += 4;
				
				setTimeout(function(){
					ePressAllower = true;
				},180);
			} else if (ePressed && this.money < 25 && ePressAllower && notEnoughMoneyS) {
			notEnoughMoneyS = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){notEnoughMoneyS = true;},180);
			}
		}
	} // loops end here	
}; // shooting check
	},

	uziAmmoMachineCreate: function(player, level){
	
		for(var i = 0; i < level.length; i++) {
		ctx.drawImage(sprites.uziAmmoMachine, level[i].x, level[i].y);
		};

		// BUY AMMO COLLISION CHECK
	for(var i = 0; i < level.length; i++) {
		if(player.x + player.width -25 > level[i].x && player.x < level[i].x + this.uziAmmoMac.width -25 &&
			player.y + player.height > level[i].y && player.y < level[i].y + this.uziAmmoMac.height) {
if(!xPressed) {	
			ctx.drawImage(ui.uziBuy, 119, 130);

			if(ePressed && this.money >= 15 && this.uziAmmo < 999 && ePressAllower) {
				ePressAllower = false;

				gunAllow = false;
				uziAllow = true;
				shotgunAllow = false;
	
				ammoReloadScore.play();		

				this.money -= 15;
				this.uziAmmo += 32;
				
				setTimeout(function(){
					ePressAllower = true;
				},180);
			} else if (ePressed && this.money < 15 && ePressAllower && notEnoughMoneyS) {
			notEnoughMoneyS = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){notEnoughMoneyS = true;},180);
			}
		}
	} // loops end here	
}; // shooting check
	},

	healthMachineCreate: function(player, level){
		for(var i = 0; i < level.length; i++) {
		ctx.drawImage(sprites.healthMachine, level[i].x, level[i].y);
		};

		// BUY AMMO COLLISION CHECK
	for(var i = 0; i < level.length; i++) {
		if(player.x + player.width -25 > level[i].x && player.x < level[i].x + this.healthMac.width -25 &&
			player.y + player.height > level[i].y && player.y < level[i].y + this.healthMac.height) {
if(!xPressed) {	
			ctx.drawImage(ui.healthBuy, 119, 130);

			if(ePressed && this.money >= 100 && game.health < 100 && ePressAllower) {
				ePressAllower = false;

				medical.play();	

				this.money -= 100;
				game.health = 100;
				
				setTimeout(function(){
					ePressAllower = true;
				},180);
			} else if (ePressed && this.money < 100 && ePressAllower && notEnoughMoneyS) {
			notEnoughMoneyS = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){notEnoughMoneyS = true;},180);
			}
		}
	} // loops end here	
}; // shooting check
	},

	livesMachineCreate: function(player, level){
		for(var i = 0; i < level.length; i++) {
		ctx.drawImage(sprites.livesMachine, level[i].x, level[i].y);
		};

		// BUY AMMO COLLISION CHECK
	for(var i = 0; i < level.length; i++) {
		if(player.x + player.width -25 > level[i].x && player.x < level[i].x + this.livesMac.width -25 &&
			player.y + player.height > level[i].y && player.y < level[i].y + this.livesMac.height) {
if(!xPressed) {	
			ctx.drawImage(ui.livesBuy, 119, 130);

			if(ePressed && this.money >= 150 && ePressAllower) {
				ePressAllower = false;

				livesBuy.play();	

				this.money -= 150;
				this.lives += 1;
				
				setTimeout(function(){
					ePressAllower = true;
				},180);
			} else if (ePressed && this.money < 150 && ePressAllower && notEnoughMoneyS) {
			notEnoughMoneyS = false;
			var empty = new Audio();
			empty.src = "sounds/empty_gun.mp3";
			empty.play();
			setTimeout(function(){notEnoughMoneyS = true;},180);
			}
		}
	} // loops end here	
}; // shooting check
	},

	gameUpdateTwo: function(player, white, black, fat, beard) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 48;
				player.y = 452;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];
				this.turrets.rightBul = [];

				this.gpuE.posTwoGreen = [{x: 253, y: 350, colDetect: false}, {x: 100, y: 97, colDetect: false}];

				this.gpuE.posTwoRed = [{x: 515, y: 430, colDetect: false}];

				this.sodaE.posTwo = [{x: 515, y: 220, colDetect: false}];

				this.rigs.levelTwo = [{x: 45, y: 215, health: 12, alive: true, exp: false}, {x: 94, y: 215, health: 12, alive: true, exp: false}];

				this.turrets.levelTwo = [{x: 494, y: 215, health: 12, alive: true, exp: false}];
				
				/// ENEMY 1
				white.alive = true;
				white.health = 100;
				white.canShoot = true;
				white.enemyRightBullets = [];
				white.enemyLeftBullets = [];
				/// ENEMY 2
				black.alive = true;
				black.health = 240;
				black.canShoot = true;
				black.enemyRightBullets = [];
				black.enemyLeftBullets = [];
				/// ENEMY 3
				fat.alive = true;
				fat.health = 170;
				fat.canShoot = true;
				fat.enemyRightBullets = [];
				fat.enemyLeftBullets = [];
				/// ENEMY 4
				beard.alive = true;
				beard.health = 185;
				beard.canShoot = true;
				beard.enemyRightBullets = [];
				beard.enemyLeftBullets = [];
				
	},

	///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 3 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

		playerThree: {
			x: 37, y: 46, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},
			whiteEThree: {										
			x: 40, y: 173, width: 44.44444444444444, height: 44.5, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 400, spriteHeight: 267, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 120, alive: true,
		},

			whiteeEThree: {										
			x: 92, y: 173, width: 44.44444444444444, height: 44.5, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 400, spriteHeight: 267, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 125, alive: true,
		},

			fatEThree: {		
			x: 91, y: 326, width: 47.22222222222222, height: 47.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 425, spriteHeight: 283, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 135, alive: true,
		},

			beardEThree: {		
			x: 194, y: 173, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 125, alive: true,
		},

		gameUpdateThree: function(player, white, whiteSec, black, fat, beard) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 37;
				player.y = 46;
				this.uziAmmo = 96;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];
				this.turrets.rightBul = [];
				this.turrets.leftBul = [];

				this.gpuE.posThreeGreen = [{x: 470, y: 320, colDetect: false}];

				this.gpuE.posThreeRed = [{x: 390, y: 432, colDetect: false}];

				this.sodaE.posThree = [{x: 520, y: 336, colDetect: false}];

				this.rigs.levelThree = [{x: 517, y: 464, health: 12, alive: true, exp: false}, {x: 468, y: 464, health: 12, alive: true, exp: false}, 
			{x: 34, y: 464, health: 12, alive: true, exp: false}, {x: 34, y: 184, health: 12, alive: true, exp: false}];

				this.turrets.levelThree = [{x: 394, y: 464, health: 12, alive: true, exp: false}];
				this.turrets.levelThreeLeft = [{x: 70, y: 464, health: 12, alive: true, exp: false}];
				
				/// ENEMY 1
				white.alive = true;
				white.health = 160;
				white.canShoot = true;
				white.enemyRightBullets = [];
				white.enemyLeftBullets = [];
				/// WHITE ENEMY 2
				whiteSec.alive = true;
				whiteSec.health = 165;
				whiteSec.canShoot = true;
				whiteSec.enemyRightBullets = [];
				whiteSec.enemyLeftBullets = [];
				/// ENEMY 2
				fat.alive = true;
				fat.health = 240;
				fat.canShoot = true;
				fat.enemyRightBullets = [];
				fat.enemyLeftBullets = [];
				/// ENEMY 3
				beard.alive = true;
				beard.health = 220;
				beard.canShoot = true;
				beard.enemyRightBullets = [];
				beard.enemyLeftBullets = [];
				
	},


		drawThree: function(player) {
///// !* STATE *! //////
			if(this.levelState === 2) {
				sprites.tile = sprites.lightCrate;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,
			1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		canvas.style.backgroundColor = "#300000";

		// GREEN GPU
			for (var i = 0; i < this.gpuE.posThreeGreen.length; i++) {
				if(this.gpuE.posThreeGreen[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, this.gpuE.posThreeGreen[i].x, this.gpuE.posThreeGreen[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < this.gpuE.posThreeGreen.length; i++) {
				if(this.gpuE.posThreeGreen[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				this.gpuE.posThreeGreen[i].x, this.gpuE.posThreeGreen[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < this.gpuE.posThreeRed.length; i++) {
				if(this.gpuE.posThreeRed[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, this.gpuE.posThreeRed[i].x, this.gpuE.posThreeRed[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < this.gpuE.posThreeRed.length; i++) {
				if(this.gpuE.posThreeRed[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				this.gpuE.posThreeRed[i].x, this.gpuE.posThreeRed[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < this.sodaE.posThree.length; i++) {
				if(this.sodaE.posThree[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, this.sodaE.posThree[i].x, this.sodaE.posThree[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {
   		jumplanding.play();

		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();
		},

		levelThreeClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 406, y: 90}, {x: 468, y: 215}, {x: 189, y: 366}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.woodLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},

		elevatorLevelThreeUpdate: function(player, alertXMin, alertXMax, alertMinY, alertMaxY) {
				if(enemyWarSound) {
				enemyWS.play();
				}
							///////// ELEVATOR 2 /////////
			this.elevatorE.currentFrame = 0;
			this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
			this.elevatorE.spriteY = 0 * this.elevatorE.height;

				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertXMin && player.x < alertXMax) {

				if(!game.whiteEThree.alive && !game.whiteeEThree.alive && !game.fatEThree.alive && !game.beardEThree.alive && 
					!this.rigs.levelThree[0].alive && !this.rigs.levelThree[1].alive && !this.rigs.levelThree[2].alive && !this.rigs.levelThree[3].alive) {

				controllerAllow = false;	
				setTimeout(function(){
				
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				game.levelState = 3;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyRigsWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		levelThreeBg: function(){
		ctx.drawImage(bg.levelThreeBg, 0, 0);
		},


		uziAcquire: function(player){
			if(!this.uziAcquired) {
			// UZI NOT ACQUIRED
			ctx.beginPath();
			ctx.drawImage(ui.uziNotAcquired, 160, 41);
			ctx.closePath();
			} else if (this.uziAcquired) {
			ctx.beginPath();
			ctx.drawImage(ui.uziAcquired, 160, 41);
			ctx.closePath();
			}
if(this.levelState === 2) {
			if(player.x > 143 && player.x < 145 && !uziAcquiredOff) {
				this.uziAcquired = true;
				messageUziAcquired = true;
				gunAllow = false;
				uziAllow = true;
			}
}; // level check


		// UI
		if(messageUziAcquired && !uziAcquiredOff) {
			ctx.beginPath();
			ctx.drawImage(ui.uziAcquiredWarn, 73, 110);
			ctx.closePath()
			if(acquiredSound) {
				acquired.play();
			};
			setTimeout(function(){
				acquiredSound = false;
			}, 20)
		
		setTimeout(function(){
			messageSwitchWeapon = true;
			uziAcquiredOff = true;
		}, 1000);
		};
			
		if(messageSwitchWeapon) {
			ctx.beginPath();
			ctx.drawImage(ui.messageSwitchWeapons, 73, 110);
			ctx.closePath()
				// MESSAGE OK BUTTON
				ctx.beginPath();
				ctx.font = "14px Faster One";
				ctx.fillStyle = mesSwitchButtonColor;
				ctx.fillText("OK", 361, 322);
				ctx.closePath();
		
if(uziMessagesClickActive) {
	canvas.addEventListener('click', messSwitchClick);
	canvas.addEventListener('mousemove', messSwitchHover);
}

	function messSwitchClick(e) {
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		//console.log('x: ' + mouseX + ' y: ' + mouseY);
		///////// START GAME BUTTON ///////////
		
		if(mouseX > 352 && mouseX < 397 && mouseY > 310 && mouseY < 328 && uziMessagesClickActive) {
			click.play();
			messageBuyWarn = true;
			messSwitchClick = false;
		}
	}
		//////////////----------///////////	


	function messSwitchHover(e) {
		
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;

		if(mouseX > 352 && mouseX < 397 && mouseY > 310 && mouseY < 328) {
					mesSwitchButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";
				} else {
					mesSwitchButtonColor = "#fff";
					canvas.style.cursor = "default";
				}


	}
}; // messageSwitchWeapon check

	if(messageBuyWarn) {
			ctx.beginPath();
			ctx.drawImage(ui.messageBuyWarn, 73, 110);
			ctx.closePath()
				// MESSAGE OK BUTTON
				ctx.beginPath();
				ctx.font = "14px Faster One";
				ctx.fillStyle = mesBuyButtonColor;
				ctx.fillText("OK", 361, 322);
				ctx.closePath();

if(uziMessagesClickActive) {
	canvas.addEventListener('click', messBuyClick);
	canvas.addEventListener('mousemove', messBuyHover);
}
	function messBuyClick(e) {
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		//console.log('x: ' + mouseX + ' y: ' + mouseY);
		///////// START GAME BUTTON ///////////		
		if(mouseX > 352 && mouseX < 397 && mouseY > 310 && mouseY < 328 && uziMessagesClickActive) {
			click.play();
			messageBuyWarn = false;
			messageSwitchWeapon = false;
			uziMessagesClickActive = false;
	}
	}
		//////////////----------///////////	


	function messBuyHover(e) {
		
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		if(mouseX > 352 && mouseX < 397 && mouseY > 310 && mouseY < 328 && uziMessagesClickActive) {
					mesBuyButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";
				} else {
					mesBuyButtonColor = "#fff";
					canvas.style.cursor = "default";
				}

	}

	}; // messageBuyWarn check
	},

	///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 4 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

		playerFour: { //x: 502, y: 173
			x: 502, y: 173, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},

			whiteEFour: {										
			x: 500, y: 295, width: 44.44444444444444, height: 44.5, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 400, spriteHeight: 267, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 130, alive: true,
		},

			fatEFour: {		
			x: 66, y: 450, width: 47.22222222222222, height: 47.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 425, spriteHeight: 283, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

			blackEFour: {						
			x: 140, y: 49, width: 45.22222222222222, height: 45.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 407, spriteHeight: 271, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},
			blackeEFour: {						
			x: 465, y: 49, width: 45.22222222222222, height: 45.16666666666667, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 407, spriteHeight: 271, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 150, alive: true,
		},

			beardEFour: {		
			x: 370, y: 295, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

			beardeEFour: {		
			x: 291, y: 49, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 130, alive: true,
		},

		gameUpdateFour: function(player, white, black, eBlack, fat, beard, eBeard) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 502;
				player.y = 173;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];
				this.turrets.rightBul = [];
				this.turrets.leftBul = [];

				this.gpuE.posFourGreen = [{x: 58, y: 270, colDetect: false}];

				this.gpuE.posFourRed = [{x: 39, y: 137, colDetect: false}, {x: 460, y: 450, colDetect: false}];

				this.sodaE.posFour = [{x: 200, y: 71, colDetect: false}];

				this.rigs.levelFour = [{x: 524, y: 309, health: 12, alive: true, exp: false},{x: 346, y: 464, health: 12, alive: true, exp: false}, 
			{x: 389, y: 464, health: 12, alive: true, exp: false}, {x: 524, y: 464, health: 12, alive: true, exp: false}];

				this.turrets.levelFour = [{x: 375, y: 59, health: 15, alive: true, exp: false}];
				this.turrets.levelFourLeft = [{x: 32, y: 183, health: 18, alive: true, exp: false}];
				
				/// ENEMY 1
				white.alive = true;
				white.health = 200;
				white.canShoot = true;
				white.enemyRightBullets = [];
				white.enemyLeftBullets = [];
				/// ENEMY 2
				black.alive = true;
				black.health = 300;
				black.canShoot = true;
				black.enemyRightBullets = [];
				black.enemyLeftBullets = [];
				/// EXTRA BLACK
				eBlack.alive = true;
				eBlack.health = 305;
				eBlack.canShoot = true;
				eBlack.enemyRightBullets = [];
				eBlack.enemyLeftBullets = [];
				/// ENEMY 3
				fat.alive = true;
				fat.health = 280;
				fat.canShoot = true;
				fat.enemyRightBullets = [];
				fat.enemyLeftBullets = [];
				/// ENEMY 4
				beard.alive = true;
				beard.health = 245;
				beard.canShoot = true;
				beard.enemyRightBullets = [];
				beard.enemyLeftBullets = [];
				/// EXTRA BEARD
				eBeard.alive = true;
				eBeard.health = 240;
				eBeard.canShoot = true;
				eBeard.enemyRightBullets = [];
				eBeard.enemyLeftBullets = [];
				
	},

		drawFour: function(player, green, red, soda) {
///// !* STATE *! //////
			if(this.levelState === 3) {
				sprites.tile = sprites.levelFourTile;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		//Background
		ctx.drawImage(sprites.levelFourBack, 0, 0);

		// GREEN GPU
			for (var i = 0; i < this.gpuE.posThreeGreen.length; i++) {
				if(green[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, green[i].x, green[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				green[i].x, green[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, red[i].x, red[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				red[i].x, red[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < soda.length; i++) {
				if(soda[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, soda[i].x, soda[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {
   		jumplanding.play();

		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();
		},

		levelFourClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 36, y: 86}, {x: 158, y: 211}, {x: 189, y: 336}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.ironLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},

		elevatorLevelFourUpdate: function(player, alertXMin, alertXMax, alertMinY, alertMaxY) {
			
				if(enemyWarSound) {
				enemyWS.play();
				}
							///////// ELEVATOR 2 /////////
			this.elevatorE.currentFrame = 0;
			this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
			this.elevatorE.spriteY = 0 * this.elevatorE.height;

				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertXMin && player.x < alertXMax) {

				if(!game.whiteEFour.alive && !game.blackEFour.alive && !game.blackeEFour.alive && !game.fatEFour.alive && !game.beardEFour.alive && 
					!game.beardeEFour.alive && !this.rigs.levelFour[0].alive && !this.rigs.levelFour[1].alive && !this.rigs.levelFour[2].alive &&
					 !this.rigs.levelFour[3].alive) {

				controllerAllow = false;	
				setTimeout(function(){
				
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				game.levelState = 4;
				acquiredSound = true;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyRigsWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		levelFourBg: function(){
		ctx.drawImage(bg.levelFourBg, 0, 0);
		},

	///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 5 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

playerFive: { // 41 49
			x: 41, y: 49, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},

		agentBaldEFive: {		
			x: 408, y: 330, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

		agentBaldeEFive: {		
			x: 103, y: 450, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

		agentBlackSmgEFive: {		
			x: 470, y: 330, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

		agentBlackEFive: {
			x: 185, y: 173, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

		agentBlondeEFive: {		
			x: 168, y: 450, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},

		agentBrownEFive: {		
			x: 85, y: 173, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 145, alive: true,
		},


		gameUpdateFive: function(player, bald, baldE, black, blackE, brown, blonde) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 41;
				player.y = 49;
				this.uziAmmo = 96;
				this.shotgunAmmo = 7;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];

				this.gpuE.posFiveGreen = [{x: 532, y: 192, colDetect: false}, {x: 38, y: 250, colDetect: false}, {x: 489, y: 305, colDetect: false}];

				this.gpuE.posFiveRed = [{x: 130, y: 262, colDetect: false}, {x: 460, y: 470, colDetect: false}];

				this.sodaE.posFive = [{x: 279, y: 350, colDetect: false}];

				this.rigs.levelFive = [{x: 524, y: 340, health: 12, alive: true, exp: false},{x: 33, y: 464, health: 12, alive: true, exp: false}, 
			{x: 93, y: 464, health: 12, alive: true, exp: false}];
			
				/// ENEMY 1
				bald.alive = true;
				bald.health = 245;
				bald.canShoot = true;
				bald.enemyRightBullets = [];
				bald.enemyLeftBullets = [];
				/// ENEMY 2
				baldE.alive = true;
				baldE.health = 245;
				baldE.canShoot = true;
				baldE.enemyRightBullets = [];
				baldE.enemyLeftBullets = [];
				/// BLACK
				black.alive = true;
				black.health = 245;
				black.canShoot = true;
				black.enemyRightBullets = [];
				black.enemyLeftBullets = [];
				/// ENEMY 3
				blackE.alive = true;
				blackE.health = 245;
				blackE.canShoot = true;
				blackE.enemyRightBullets = [];
				blackE.enemyLeftBullets = [];
				/// ENEMY 4
				brown.alive = true;
				brown.health = 245;
				brown.canShoot = true;
				brown.enemyRightBullets = [];
				brown.enemyLeftBullets = [];
				/// ENEMY 5
				blonde.alive = true;
				blonde.health = 245;
				blonde.canShoot = true;
				blonde.enemyRightBullets = [];
				blonde.enemyLeftBullets = [];
				
	},


drawFive: function(player, green, red, soda) {
///// !* STATE *! //////
			if(this.levelState === 4) {
				sprites.tile = sprites.levelFiveTile;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
			1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,1,,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		// GREEN GPU
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, green[i].x, green[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				green[i].x, green[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, red[i].x, red[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				red[i].x, red[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < soda.length; i++) {
				if(soda[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, soda[i].x, soda[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {
   		jumplanding.play();

		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();
		},

		agentsDraw: function (agentBald, agentBlackSmg, agentBlack, agentBlonde, agentBrown, agentBaldE) {
			// AGENT BALD
			if(agentBald.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.agentBaldOne, agentBald.spriteX, agentBald.spriteY, agentBald.width, agentBald.height,
				agentBald.x, agentBald.y, agentBald.width, agentBald.height);
			ctx.closePath();	
			};

		// ENEMY RIGHT BULLETS
			ctx.beginPath();
			for(var i = 0; i < game.enemyBullets.right.length; i++) {
				if(game.enemyBullets.right[i].width === 3.75) {
			ctx.drawImage(sprites.smgBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
				if(game.enemyBullets.right[i].width === 3.7) {
			ctx.drawImage(sprites.capBul, game.enemyBullets.right[i].x, game.enemyBullets.right[i].y, game.enemyBullets.right[i].width, 
				game.enemyBullets.right[i].height);
				}
			ctx.closePath();
		};

		// ENEMY LEFT BULLETS
			ctx.beginPath();
			for(var i = 0; i < game.enemyBullets.left.length; i++) {	
				if(game.enemyBullets.left[i].width === 3.75) {
			ctx.drawImage(sprites.smgBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
				if(game.enemyBullets.left[i].width === 3.7) {
			ctx.drawImage(sprites.capBul, game.enemyBullets.left[i].x, game.enemyBullets.left[i].y, game.enemyBullets.left[i].width, 
				game.enemyBullets.left[i].height);
				}
			ctx.closePath();
		};

		// AGENT BALD EXTRA
			if(agentBaldE.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.agentBaldOne, agentBaldE.spriteX, agentBaldE.spriteY, agentBaldE.width, agentBaldE.height,
				agentBaldE.x, agentBaldE.y, agentBaldE.width, agentBaldE.height);
			ctx.closePath();	
			};

		if(this.levelState !== 7) {
		// AGENT BLACK SMG
			if(agentBlackSmg.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.agentBlackSmgOne, agentBlackSmg.spriteX, agentBlackSmg.spriteY, agentBlackSmg.width, agentBlackSmg.height,
				agentBlackSmg.x, agentBlackSmg.y, agentBlackSmg.width, agentBlackSmg.height);
			ctx.closePath();	
			};
		};

		if(this.levelState !== 6 && this.levelState !== 7) {
		// AGENT BLACK
			if(agentBlack.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.agentBlackOne, agentBlack.spriteX, agentBlack.spriteY, agentBlack.width, agentBlack.height,
				agentBlack.x, agentBlack.y, agentBlack.width, agentBlack.height);
			ctx.closePath();	
			};
		};

		// AGENT BLONDE
			if(agentBlonde.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.agentBlondeOne, agentBlonde.spriteX, agentBlonde.spriteY, agentBlonde.width, agentBlonde.height,
				agentBlonde.x, agentBlonde.y, agentBlonde.width, agentBlonde.height);
			ctx.closePath();	
			};

		// AGENT BROWN
			if(agentBrown.alive) {
			ctx.beginPath();
			ctx.drawImage(sprites.agentBrownOne, agentBrown.spriteX, agentBrown.spriteY, agentBrown.width, agentBrown.height,
				agentBrown.x, agentBrown.y, agentBrown.width, agentBrown.height);
			ctx.closePath();	
			};
		},

		levelFiveClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 468, y: 86}, {x: 128, y: 211}, {x: 345, y: 365}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.ironLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},

		elevatorLevelFiveUpdate: function(player, alertXMin, alertXMax, alertMinY, alertMaxY) {
			
				if(enemyWarSound) {
				enemyWS.play();
				}
				if(this.levelState === 4 && this.levelState !== 5) {
							///////// ELEVATOR 2 /////////
			this.elevatorE.currentFrame = 0;
			this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
			this.elevatorE.spriteY = 0 * this.elevatorE.height;
			}
				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertXMin && player.x < alertXMax) {

				if(!game.agentBaldEFive.alive && !game.agentBaldeEFive.alive && !game.agentBlackSmgEFive.alive && !game.agentBlackEFive.alive && 
					!game.agentBlondeEFive.alive && !game.agentBrownEFive.alive && !this.rigs.levelFive[0].alive && !this.rigs.levelFive[1].alive && 
					!this.rigs.levelFive[2].alive) {

				controllerAllow = false;	
				setTimeout(function(){
				
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				game.levelState = 5;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyRigsWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		levelFiveBg: function(){
		ctx.drawImage(bg.levelFiveBg, 0, 0);
		},

		shotgunAcquire: function(player){
			if(!this.shotgunAcquired) {
			// UZI NOT ACQUIRED
			ctx.beginPath();
			ctx.drawImage(ui.shotgunNotAcquired, 192, 51);
			ctx.closePath();
			} else if (this.shotgunAcquired) {
			ctx.beginPath();
			ctx.drawImage(ui.shotgunAcquired, 192, 51);
			ctx.closePath();
			}
if(this.levelState === 4) {
			if(player.x > 175 && player.x < 177 && !shotgunAcquiredOff) {
				this.shotgunAcquired = true;
				messageShotgunAcquired = true;
				gunAllow = false;
				uziAllow = false;
				shotgunAllow = true;
			}
}; // level check
		// UI
		if(messageShotgunAcquired && !shotgunAcquiredOff) {
			ctx.beginPath();
			ctx.drawImage(ui.shotgunAcquiredWarn, 73, 110);
			ctx.closePath()
			if(acquiredSound) {
				acquired.play();
			};
			setTimeout(function(){
				acquiredSound = false;
			}, 20)
		
		setTimeout(function(){
			shotgunAcquiredOff = true;
		}, 2000);
		};

	},

		///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 6 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

playerSix: { // 39 173
			x: 39, y: 173, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},

		agentBaldESix: {		
			x: 385, y: 174, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 165, alive: true,
		},

		agentBaldeESix: {		
			x: 103, y: 450, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 170, alive: true,
		},

		agentBlackSmgESix: {		
			x: 185, y: 50, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 165, alive: true,
		},

		agentBlackESix: {
			x: 215, y: 450, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 165, alive: true,
		},

		agentBlondeESix: {		
			x: 163, y: 450, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 170, alive: true,
		},

		agentBrownESix: {		
			x: 90, y: 50, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 170, alive: true,
		},

		gameUpdateSix: function(player, bald, baldE, black, blackE, brown, blonde) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 39;
				player.y = 173;
				this.uziAmmo = 96;
				this.shotgunAmmo = 7;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];
				this.turrets.rightBul = [];
				this.turrets.leftBul = [];

				this.gpuE.posSixGreen = [{x: 429, y: 168, colDetect: false}, {x: 100, y: 453, colDetect: false}, {x: 489, y: 305, colDetect: false}];

				this.gpuE.posSixRed = [{x: 409, y: 415, colDetect: false}, {x: 438, y: 69, colDetect: false}];

				this.sodaE.posSix = [{x: 507, y: 475, colDetect: false}, {x: 645, y: 71, colDetect: false}]; 

				this.rigs.levelSix = [{x: 524, y: 340, health: 12, alive: true, exp: false},{x: 30, y: 340, health: 12, alive: true, exp: false}, 
				{x: 62, y: 340, health: 12, alive: true, exp: false}, {x: 97, y: 340, health: 12, alive: true, exp: false}, 
				{x: 30, y: 464, health: 12, alive: true, exp: false}];

				this.turrets.levelSix = [{x: 456, y: 340, health: 15, alive: true, exp: false}];
				this.turrets.levelSixLeft = [{x: 136, y: 340, health: 15, alive: true, exp: false}];

				/// ENEMY 1
				bald.alive = true;
				bald.health = 330;
				bald.canShoot = true;
				bald.enemyRightBullets = [];
				bald.enemyLeftBullets = [];
				/// ENEMY 2
				baldE.alive = true;
				baldE.health = 300;
				baldE.canShoot = true;
				baldE.enemyRightBullets = [];
				baldE.enemyLeftBullets = [];
				/// BLACK
				black.alive = true;
				black.health = 300;
				black.canShoot = true;
				black.enemyRightBullets = [];
				black.enemyLeftBullets = [];
				/// ENEMY 3
				blackE.alive = true;
				blackE.health = 300;
				blackE.canShoot = true;
				blackE.enemyRightBullets = [];
				blackE.enemyLeftBullets = [];
				/// ENEMY 4
				brown.alive = true;
				brown.health = 300;
				brown.canShoot = true;
				brown.enemyRightBullets = [];
				brown.enemyLeftBullets = [];
				/// ENEMY 5
				blonde.alive = true;
				blonde.health = 300;
				blonde.canShoot = true;
				blonde.enemyRightBullets = [];
				blonde.enemyLeftBullets = [];		
	},

		drawSix: function(player, green, red, soda) {
			///// !* STATE *! //////
			if(this.levelState === 5) {
				sprites.tile = sprites.tileSix;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		//Background
		ctx.drawImage(sprites.levelSixBack, 0, 0);

		// GREEN GPU
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, green[i].x, green[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				green[i].x, green[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, red[i].x, red[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				red[i].x, red[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < soda.length; i++) {
				if(soda[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, soda[i].x, soda[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {
   		jumplanding.play();

		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();
		},

	levelSixBg: function(){
		ctx.drawImage(bg.levelSixBg, 0, 0);
		},


	levelSixClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 530, y: 86}, {x: 282, y: 211}, {x: 407, y: 365}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.ironLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},


	elevatorLevelSixUpdate: function(player, alertXMin, alertXMax, alertMinY, alertMaxY) {
			
				if(enemyWarSound) {
				enemyWS.play();
				}
							///////// ELEVATOR 2 /////////
			this.elevatorE.currentFrame = 0;
			this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
			this.elevatorE.spriteY = 0 * this.elevatorE.height;

				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertXMin && player.x < alertXMax) {

				if(!game.agentBaldESix.alive && !game.agentBaldeESix.alive && !game.agentBlackSmgESix.alive && !game.agentBlackESix.alive && 
					!game.agentBlondeESix.alive && !game.agentBrownESix.alive && !this.rigs.levelSix[0].alive && !this.rigs.levelSix[1].alive && 
					!this.rigs.levelSix[2].alive && !this.rigs.levelSix[3].alive && !this.rigs.levelSix[4].alive) {

				controllerAllow = false;	
				setTimeout(function(){
				
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				extractionMessageActive = true;
				game.levelState = 6;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyRigsWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 7 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

playerSeven: { // 500 80.64
			x: 490, y: 80.64, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},

		agentBaldESeven: {		
			x: 475, y: 204, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 185, alive: true,
		},

		agentBaldeESeven: {		
			x: 30, y: 325, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 190, alive: true,
		},

		agentBlackSmgESeven: {		
			x: 205, y: 325, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 200, alive: true,
		},

		agentBlondeESeven: {		
			x: 260, y: 325, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 205, alive: true,
		},

		agentBrownESeven: {		
			x: 245, y: 204, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 190, alive: true,
		},

		gameUpdateSeven: function(player, bald, baldE, black, brown, blonde) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 500;
				player.y = 80.64;
				this.uziAmmo = 96;
				this.shotgunAmmo = 7;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];
				this.turrets.rightBul = [];
				this.turrets.leftBul = [];

				this.gpuE.posSevenGreen = [{x: 637, y: 94, colDetect: false}, {x: 98, y: 441, colDetect: false}, {x: 505, y: 305, colDetect: false}];

				this.gpuE.posSevenRed = [{x: 408, y: 261, colDetect: false}, {x: 658, y: 467, colDetect: false}];

				this.sodaE.posSeven = [{x: 537, y: 350, colDetect: false}];

				this.turrets.levelSeven =  [{x: 428, y: 463, health: 18, alive: true, exp: false}];
				this.turrets.levelSevenLeft = [{x: 27, y: 90, health: 21, alive: true, exp: false}];

				/// ENEMY 1
				bald.alive = true;
				bald.health = 360;
				bald.canShoot = true;
				bald.enemyRightBullets = [];
				bald.enemyLeftBullets = [];
				/// ENEMY 2
				baldE.alive = true;
				baldE.health = 360;
				baldE.canShoot = true;
				baldE.enemyRightBullets = [];
				baldE.enemyLeftBullets = [];
				/// BLACK
				black.alive = true;
				black.health = 365;
				black.canShoot = true;
				black.enemyRightBullets = [];
				black.enemyLeftBullets = [];
				/// ENEMY 3
				brown.alive = true;
				brown.health = 360;
				brown.canShoot = true;
				brown.enemyRightBullets = [];
				brown.enemyLeftBullets = [];
				/// ENEMY 4
				blonde.alive = true;
				blonde.health = 360;
				blonde.canShoot = true;
				blonde.enemyRightBullets = [];
				blonde.enemyLeftBullets = [];		
	},


		drawSeven: function(player, green, red, soda) {
			///// !* STATE *! //////
			if(this.levelState === 6) {
				sprites.tile = sprites.levelSevenTile;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,
			1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		//Background
		ctx.drawImage(sprites.levelSevenBack, 0, 0);

		// GREEN GPU
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, green[i].x, green[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				green[i].x, green[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, red[i].x, red[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				red[i].x, red[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < soda.length; i++) {
				if(soda[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, soda[i].x, soda[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {
   		jumplanding.play();

		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();
		},

		elevatorLevelSevenUpdate: function(player, alertXMin, alertXMax, alertMinY, alertMaxY) {
			
				if(enemyWarSound) {
				enemyWS.play();
				}
							///////// ELEVATOR 2 /////////
			this.elevatorE.currentFrame = 0;
			this.elevatorE.spriteX = this.elevatorE.currentFrame * this.elevatorE.width;
			this.elevatorE.spriteY = 0 * this.elevatorE.height;

				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertXMin && player.x < alertXMax) {

				if(!game.agentBaldESeven.alive && !game.agentBaldeESeven.alive && !game.agentBlackSmgESeven.alive && 
					!game.agentBlondeESeven.alive && !game.agentBrownESeven.alive) {

				controllerAllow = false;	
				setTimeout(function(){
				
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 1 * game.elevatorE.height;
				}, 200)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 2 * game.elevatorE.height;

				player.currentFrame = ++player.currentFrame % player.spriteColumn;
				player.spriteX = player.currentFrame * player.width;
				player.spriteY = 0 * player.height;
				}, 330)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;
				}, 460)

				setTimeout(function(){
				game.elevatorE.currentFrame = 0;
				game.elevatorE.spriteX = game.elevatorE.currentFrame * game.elevatorE.width;
				game.elevatorE.spriteY = 3 * game.elevatorE.height;

				}, 510)

				setTimeout(function(){
				game.levelState = 7;
				}, 1050)
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

		levelSevenBg: function(){
		ctx.drawImage(bg.levelSevenBg, 0, 0);
		},

		levelSevenClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 66, y: 115}, {x: 406, y: 239}, {x: 97, y: 363}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.ironLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},

		///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====*************************====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

///////////////////////!!!!====******** LEVEL 8 ********====!!!!//////////////////////// ///////////////////////!!!!====*************************====!!!!////////////////////////

playerEight: { // 40 79
			x: 40, y: 79, width: 43.33333333333333, height: 43.44, velX: 0, velY: 0, speed: 1.7, jumping: false, grounded: false, spriteX: 0,
			spriteY: 0, spriteWidth: 390, spriteHeight: 1086, spriteRow: 25, spriteColumn: 9, currentFrame: 0, alive: true,
		},

		carE: {
			x: 370, y: 471, width: 11, height: 11, spriteX: 0, spriteY: 0, spriteWidth: 88, spriteHeight: 11, spriteRow: 1, 
			spriteColumn: 8, currentFrame: 0,
		},

		carFrontE: {
			x: 446, y: 473, width: 8, height: 8, spriteX: 0, spriteY: 0, spriteWidth: 64, spriteHeight: 8, spriteRow: 1, 
			spriteColumn: 8, currentFrame: 0,
		},

		agentBaldEEight: {		
			x: 29, y: 204, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 180, alive: true,
		},

		agentBaldeEEight: {		
			x: 490, y: 325, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 190, alive: true,
		},

		agentBlondeEEight: {		
			x: 400, y: 80, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 200, alive: true,
		},

		agentBrownEEight: {		
			x: 46, y: 204, width: 45, height: 45, velY: 0, speed: 0.8, spriteX: 0, spriteY: 0, spriteWidth: 405, spriteHeight: 270, spriteRow: 6, 
			spriteColumn: 9, currentFrame: 0, enemyMovement: true, enemyRight: true, enemyLeft: false, enemyRightBullets: [], enemyLeftBullets: [],
			canShoot: true, standingRight: false, standingLeft: false, shootingTime: true, health: 200, alive: true,
		},

		gameUpdateEight: function(player, bald, baldE, brown, blonde) {	
		
				this.lastLevel = this.levelState;
				controllerAllow = true;
				player.velY = 0;
				game.health = 100;
				player.alive = true;
				this.money = 0;
				player.x = 40;
				player.y = 79;
				this.uziAmmo = 96;
				this.shotgunAmmo = 7;
				this.bullets.left = [];
				this.bullets.right = [];
				this.enemyBullets.left = [];
				this.enemyBullets.right = [];
				this.bullets.shellLeft = [];
				this.bullets.shellRight = [];
				this.turrets.rightBul = [];

				this.gpuE.posEightGreen = [ {x: 475, y: 342, colDetect: false}];

				this.gpuE.posEightRed = [{x: 50, y: 222, colDetect: false}, {x: 619, y: 96, colDetect: false}];

				this.sodaE.posEight = [{x: 588, y: 221, colDetect: false}];

				this.turrets.levelEight =  [{x: 490, y: 91, health: 18, alive: true, exp: false}];

				/// ENEMY 1
				bald.alive = true;
				bald.health = 440;
				bald.canShoot = true;
				bald.enemyRightBullets = [];
				bald.enemyLeftBullets = [];
				/// ENEMY 2
				baldE.alive = true;
				baldE.health = 440;
				baldE.canShoot = true;
				baldE.enemyRightBullets = [];
				baldE.enemyLeftBullets = [];
				/// ENEMY 3
				brown.alive = true;
				brown.health = 440;
				brown.canShoot = true;
				brown.enemyRightBullets = [];
				brown.enemyLeftBullets = [];
				/// ENEMY 4
				blonde.alive = true;
				blonde.health = 440;
				blonde.canShoot = true;
				blonde.enemyRightBullets = [];
				blonde.enemyLeftBullets = [];		
	},

		drawEight: function(player, green, red, soda) {
			///// !* STATE *! //////
			if(this.levelState === 7) {
				sprites.tile = sprites.levelSevenTile;
			};

			boxes=[ 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 	];

 		size = 31;
		canvas.width = 19 * size;
		canvas.height = 17 * size;

		//Background
		ctx.drawImage(sprites.levelSevenBack, 0, 0);

		// GREEN GPU
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, green[i].x, green[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
			}

		// GREEN GPU COL
			for (var i = 0; i < green.length; i++) {
				if(green[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpugreencol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				green[i].x, green[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();

			}
			}

		// RED GPU
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.redgpu, this.gpuE.spriteX, this.gpuE.spriteY, this.gpuE.width, this.gpuE.height, red[i].x, red[i].y, this.gpuE.width, this.gpuE.height);
			ctx.closePath();
			}
		};

		// RED GPU COL
			for (var i = 0; i < red.length; i++) {
				if(red[i].colDetect) {
			ctx.beginPath();
			ctx.drawImage(sprites.gpuredcol, this.gpuCol.spriteX, this.gpuCol.spriteY, this.gpuCol.width, this.gpuCol.height, 
				red[i].x, red[i].y, this.gpuCol.width, this.gpuCol.height);
			ctx.closePath();
				}
			};

		// SODA
			for (var i = 0; i < soda.length; i++) {
				if(soda[i].colDetect === false) {
			ctx.beginPath();
			ctx.drawImage(sprites.soda, this.sodaE.spriteX, this.sodaE.spriteY, this.sodaE.width, this.sodaE.height, soda[i].x, soda[i].y,
				 this.sodaE.width,  this.sodaE.height);
			ctx.closePath();	
		}
	};
	

		// DUST
		if(dustDetect === true && dustDetectCheckSpaceBtn === true) {
		ctx.beginPath();
		ctx.drawImage(sprites.dusts, this.dust.spriteX, this.dust.spriteY, this.dust.width, this.dust.height,
			player.x +10, player.y +30, this.dust.width, this.dust.height);
		ctx.closePath();
		};

		// BLOOD SPLASH
		if(bloodSplashDetect) {
		ctx.beginPath();
		ctx.drawImage(sprites.bloodSplash, game.bloodSplash.spriteX, game.bloodSplash.spriteY, game.bloodSplash.width, game.bloodSplash.height,
			player.x -43, player.y-77, game.bloodSplash.width, game.bloodSplash.height);
		ctx.closePath();
			};

// TILE MAP AND PLAYER PHYSICS //	
		ctx.beginPath();	
			player.grounded = false;

		for(var i = 0; i < boxes.length; i++) {	

		var boxesX = (i % 19) * size;
		var boxesY = (Math.floor(i/19) * size);
		var boxesW = size;
		var boxesH = size;

		if(boxes[i] === 1) {
			ctx.drawImage(sprites.tile, boxesX, boxesY, boxesW, boxesH);
		}
		if(boxes[i] === 3) {
			ctx.drawImage(sprites.whiteTile, boxesX, boxesY, boxesW, boxesH);
		}
		
		if(boxes[i] === 1 || boxes[i] === 2 || boxes[i] === 3) {
		var tileDir = colCheck(player, boxesX, boxesY, boxesW, boxesH);
		}
	if(tileDir === 'l' || tileDir === 'r') {
		player.velX = 0;
	} else if (player.velY >= 6 && tileDir === 'b' && player.alive) {
					controllerAllow = false;
				setTimeout(function(){
					player.currentFrame = 0;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
					game.health = 0;
						}, 100);

				setTimeout(function(){
					bloodSplashDetect = true;
				}, 50);

				setTimeout(function(){
					player.currentFrame = 1;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 260);

				setTimeout(function(){
					player.currentFrame = 2;
					player.currentFrame = player.currentFrame;
					player.spriteX = player.currentFrame * player.width;
					player.spriteY = 8 * player.height;
						}, 320);

				setTimeout(function(){
						bloodSplashDetect = false;
						player.alive = false;
						}, 380);

			

	 } else if (tileDir === 'b') {
		
		player.grounded = true;
		player.jumping = false;
		jumpLand++;
		if(jumpLand === 1) {
   		jumplanding.play();

		}
		//// DUST DETECT ////
		dustDetect = true;
		
		setTimeout(function(){dustDetect = false; dustDetectCheckSpaceBtn = false; },1000);

	} else if (tileDir === 't' && (leftPressed || rightPressed)) {
		player.velY = -player.velY * 0.01;
	}

	if(player.grounded) {
		player.velY = 0;
		jumpCount = 0;
	}

};
ctx.closePath();
		},

		levelEightBg: function(){
		ctx.drawImage(bg.levelEightBg, 0, 0);
		},

		carWaiting: function() {

			// BACK LIGHT
			ctx.beginPath();
			ctx.drawImage(sprites.carLight, this.carE.spriteX, this.carE.spriteY, this.carE.width, this.carE.height, 
				this.carE.x, this.carE.y, this.carE.width, this.carE.height);
			ctx.closePath();
			// FRONT LIGHT
			ctx.beginPath();
			ctx.drawImage(sprites.carFrontLight, this.carFrontE.spriteX, this.carFrontE.spriteY, this.carFrontE.width, this.carFrontE.height, 
				this.carFrontE.x, this.carFrontE.y, this.carFrontE.width, this.carFrontE.height);
			ctx.closePath();

		},

		levelEightClimb: function(player){

			var lW = 24;
			var lH = 123;
			var ladders = [{x: 469, y: 115}, {x: 252, y: 239}, {x: 97, y: 363}];

for(var i = 0; i < ladders.length; i++) {
			ctx.beginPath();
			ctx.drawImage(sprites.ironLad, ladders[i].x, ladders[i].y, lW, lH);
			ctx.closePath();
} // loops end here		
				
			if((player.x < ladders[0].x + lW -20 && player.x + player.width -20 > ladders[0].x &&
				player.y < ladders[0].y + lH && player.y + player.height > ladders[0].y) ||
				(player.x < ladders[1].x + lW -20 && player.x + player.width -20 > ladders[1].x &&
				player.y < ladders[1].y + lH && player.y + player.height > ladders[1].y) ||
				(player.x < ladders[2].x + lW -20 && player.x + player.width -20 > ladders[2].x &&
				player.y < ladders[2].y + lH && player.y + player.height > ladders[2].y)) {

				if(upPressed) {
				climbing = true;
				player.y -= 1.5;
				player.velY = 0.1;
				} else if (downPressed) {
				climbing = true;
				player.y += 1.5;
				} 
			} else {
				climbing = false;
			}
			
		},

		extractionUpdate: function(player, alertXMin, alertXMax, alertMinY, alertMaxY) {
			
				if(enemyWarSound) {
				enemyWS.play();
				}

				if(player.y > alertMinY && player.y < alertMaxY && player.x > alertXMin && player.x < alertXMax) {

				if(!game.agentBaldEEight.alive && !game.agentBaldeEEight.alive && !game.agentBlondeEEight.alive && 
					!game.agentBrownEEight.alive) {

				controllerAllow = false;	

				game.levelState = "end";

				game.bullets.left = [];
				game.bullets.right = [];
				game.bullets.shellLeft = [];
				game.bullets.shellRight = [];
				
			} else {
				enemyWarSound = true;
				setTimeout(function(){
					enemyWarSound = false;
				}, 20);
				ctx.drawImage(ui.enemyWar, 119, 130);
			}

				}
			///////// ---------- ////////
		},

}; //////////////*************!!!--- GAME ENDS HERE ---!!!*************//////////////


/////////////////// KEY HANDLERS //////////////////////
document.addEventListener('keydown', trueHandler);
document.addEventListener('keyup', falseHandler);

function trueHandler(e) {
	if(e.keyCode === 37) {
		leftPressed = true;
	} else if(e.keyCode === 39) {
		rightPressed = true;
	} else if(e.keyCode === 32) {
	
		spacePressed = true;
		jumpCount += 1;
if(jumpCount >= 1) {
		setTimeout(function(){
			spacePressed = false;
		}, 40);
}

	} else if(e.keyCode === 88) {
		xPressed = true;
	} else if(e.keyCode === 38) {
		upPressed = true;
	} else if(e.keyCode === 40) {
		downPressed = true;
	} else if(e.keyCode === 49) {
		onePressed = true;
	} else if(e.keyCode === 50) {
		twoPressed = true;
	} else if(e.keyCode === 51) {
		threePressed = true;
	} else if(e.keyCode === 69) {
		ePressed = true;
	} 

};

function falseHandler(e) {
	if(e.keyCode === 37) {
		leftPressed = false;
	} else if(e.keyCode === 39) {
		rightPressed = false;
	} else if(e.keyCode === 32) {
		spacePressed = false;
	} else if(e.keyCode === 88) {
		xPressed = false;
	} else if(e.keyCode === 38) {
		upPressed = false;
	} else if(e.keyCode === 40) {
		downPressed = false;
	} else if(e.keyCode === 49) {
		onePressed = false;
	} else if(e.keyCode === 50) {
		twoPressed = false;
	} else if(e.keyCode === 51) {
		threePressed = false;
	} else if(e.keyCode === 69) {
		ePressed = false;
	} 
};

//////////////////----------/////////////////////////

function levelOne() {
if(game.levelState === 0) {
ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawOne(game.playerOne);
	game.levelOneBg();
	game.drawPlayer(game.playerOne);
	game.enemiesOneDraw();
	game.levelSigns();
					//player, alertX, alertY
	game.elevatorUpdate(game.playerOne, 496, 450);
	game.transporterUpdate(game.playerOne);
	// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.whiteE, 'whiteSound', 4, 4, game.playerOne, 12, 310, 540, 8, 130, 510, 377, 280, 280, 800, 800);
	game.enemyUpdate(game.blackE, 'blackSound', 10, 10, game.playerOne, 32, 110, 482.3, 93, 145, 157, 86, 350, 350, 200, 200);
	game.enemyUpdate(game.fatE, 'fatSound', 3.75, 5.5, game.playerOne, 4, 13, 469, 280, 375, 96, 26, 120, 120, 1000, 1000);
	game.enemyUpdate(game.beardE, 'beardSound', 5, 7, game.playerOne, 4, -30, 550, 400, 473, 94, -2, 400, 400, 600, 600);
	// ---- //										 	
	game.controller(game.playerOne);
	game.weaponChangeLevelOne();
	game.shooting(game.playerOne);
	game.hudUpdate(game.playerOne);
	game.setGameOver(game.playerOne);
}		
};

function levelOneAnim() {
	if(game.levelState === 0) {
	game.gpuOneCreate(game.playerOne);
	/// SODA //
	game.sodaOneCreate(game.playerOne);
	}

	// HEART ANIM
	game.heart.currentFrame = ++game.heart.currentFrame % game.heart.spriteColumn;
	game.heart.spriteX = game.heart.currentFrame * game.heart.width;
	game.heart.spriteY = 0 * game.heart.height;

		// DUST EFFECT
	game.dust.currentFrame = ++game.dust.currentFrame % game.dust.spriteColumn;
	game.dust.spriteX = game.dust.currentFrame * game.dust.width;
	game.dust.spriteY = 0 * game.dust.height;
};

setInterval(levelOneAnim, 100);

function levelTwoAnim() {
	if(game.levelState === 1) {
game.gpuCreate(game.playerTwo, game.gpuE.posTwoGreen, game.gpuE.posTwoRed);	
game.sodaCreate(game.playerTwo, game.sodaE.posTwo);	
	

if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerTwo.currentFrame = ++game.playerTwo.currentFrame % 5;
		game.playerTwo.spriteX = game.playerTwo.currentFrame * game.playerTwo.width;
		game.playerTwo.spriteY = 11 * game.playerTwo.height;
		}	
}
}; // level check
 		// RIG ANIM
		game.rigs.currentFrame = ++game.rigs.currentFrame % 6;
		game.rigs.spriteX = game.rigs.currentFrame * game.rigs.width;
		game.rigs.spriteY = 0 * game.rigs.height;
};

setInterval(levelTwoAnim, 100);


///////////////////////!!!!====******** LEVEL 2 ********====!!!!////////////////////////

function levelTwo() {
	if(game.levelState === 1) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawTwo(game.playerTwo);
	game.levelTwoBg();
	game.levelTwoClimb(game.playerTwo);
	game.elevatorCreate();
	game.rigsCreate(game.rigs.levelTwo);
	game.turretsCreate(game.playerTwo, game.turrets.levelTwo, 3.8, 1550);
	game.drawPlayer(game.playerTwo);
	game.enemiesDraw(game.whiteETwo, game.blackETwo, game.fatETwo, game.beardETwo);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.whiteETwo, 'whiteSound', 4, 4, game.playerTwo, 12, 40, 560, 405, 496, 524, 417, 120, 120, 300, 300);
	game.enemyUpdate(game.blackETwo, 'blackSound', 10, 10, game.playerTwo, 32, 10, 560, 280, 370, 465, 336, 350, 350, 200, 200);
	game.enemyUpdate(game.fatETwo, 'fatSound', 3.75, 5.5, game.playerTwo, 5, 40, 560, 405, 496, 524, 450, 420, 420, 480, 480);
	game.enemyUpdate(game.beardETwo, 'beardSound', 5, 7, game.playerTwo, 14, 10, 560, 2, 80, 515, 363, 250, 250, 850, 850);
	// ---- //	
	game.elevatorLevelTwoUpdate(game.playerTwo, 489, 47, 75);
	game.controller(game.playerTwo);
	game.weaponChange();
	game.shooting(game.playerTwo);
	game.hudUpdate(game.playerTwo);
	game.setGameOver(game.playerTwo);

	}
}; /// level 2 ends here

function levelThreeAnim() {
	if(game.levelState === 2) {
game.gpuCreate(game.playerThree, game.gpuE.posThreeGreen, game.gpuE.posThreeRed);	
game.sodaCreate(game.playerThree, game.sodaE.posThree);	
	

if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerThree.currentFrame = ++game.playerThree.currentFrame % 5;
		game.playerThree.spriteX = game.playerThree.currentFrame * game.playerThree.width;
		game.playerThree.spriteY = 11 * game.playerThree.height;
		}	
}

} // level check
};

setInterval(levelThreeAnim, 100);

function levelThree() {
if(game.levelState === 2) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawThree(game.playerThree);
	game.levelThreeBg();
	game.levelThreeClimb(game.playerThree);
	game.elevatorCreate();
	game.rigsCreate(game.rigs.levelThree);
	game.turretsLeftCreate(game.playerThree, game.turrets.levelThreeLeft, 3.8, 1550);
	game.turretsCreate(game.playerThree, game.turrets.levelThree, 3.8, 1550);
	game.uziAmmoMachineCreate(game.playerThree, game.uziAmmoMac.levelThree);
	game.enemiesDraw(game.whiteEThree, null, game.fatEThree, game.beardEThree, game.whiteeEThree);
	game.uziAcquire(game.playerThree);
	game.drawPlayer(game.playerThree);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.whiteEThree, 'whiteSound', 4, 4, game.playerThree, 12, 10, 560, 128, 220, 174, 38, 120, 120, 300, 300);
	game.enemyUpdate(game.whiteeEThree, 'whiteSound', 4, 4, game.playerThree, 12, 10, 560, 128, 220, 181, 38, 120, 120, 150, 150);
	game.enemyUpdate(game.beardEThree, 'beardSound', 5, 7, game.playerThree, 14, 10, 560, 128, 220, 182, 28, 220, 220, 500, 500);
	game.enemyUpdate(game.fatEThree, 'fatSound', 3.75, 5.5, game.playerThree, 5, 10, 560, 243, 381, 151, 33, 120, 120, 770, 770);
	// ---- //	
							//player, alertXMin, alertXMax, alertMinY, alertMaxY
	game.elevatorLevelThreeUpdate(game.playerThree, 23, 44, 325, 377);
	game.controller(game.playerThree);
	game.weaponChange();
	game.shooting(game.playerThree);
	game.hudUpdate(game.playerThree);
	game.setGameOver(game.playerThree);
	} // level check
}; /// level3 ends here

function levelFourAnim() {
	if(game.levelState === 3) {
game.gpuCreate(game.playerFour, game.gpuE.posFourGreen, game.gpuE.posFourRed);	
game.sodaCreate(game.playerFour, game.sodaE.posFour);	
	
if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerFour.currentFrame = ++game.playerFour.currentFrame % 5;
		game.playerFour.spriteX = game.playerFour.currentFrame * game.playerFour.width;
		game.playerFour.spriteY = 11 * game.playerFour.height;
		}	
}

} // level check
};

setInterval(levelFourAnim, 100);

function levelFour() {
if(game.levelState === 3) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawFour(game.playerFour, game.gpuE.posFourGreen, game.gpuE.posFourRed, game.sodaE.posFour);
	game.levelFourBg();
	game.levelFourClimb(game.playerFour);
	game.elevatorCreate();
	game.rigsCreate(game.rigs.levelFour);
	game.healthMachineCreate(game.playerFour, game.healthMac.levelFour);
	game.uziAmmoMachineCreate(game.playerFour, game.uziAmmoMac.levelFour);
	game.livesMachineCreate(game.playerFour, game.livesMac.levelFour);
	game.drawPlayer(game.playerFour);
	game.turretsLeftCreate(game.playerFour, game.turrets.levelFourLeft, 5, 1000);
	game.turretsCreate(game.playerFour, game.turrets.levelFour, 3.8, 2000);
	game.enemiesDraw(game.whiteEFour, game.blackEFour, game.fatEFour, game.beardEFour, null, game.beardeEFour, game.blackeEFour);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.whiteEFour, 'whiteSound', 4, 4, game.playerFour, 12, 10, 560, 239, 347, 513, 406, 120, 120, 300, 300);
	game.enemyUpdate(game.blackEFour, 'blackSound', 10, 10, game.playerFour, 32, 10, 560, 3, 63, 370, 232, 350, 350, 200, 200);
	game.enemyUpdate(game.blackeEFour, 'blackSound', 10, 10, game.playerFour, 32, 10, 560, 3, 63, 490, 274, 350, 350, 200, 200);
	game.enemyUpdate(game.beardEFour, 'beardSound', 5, 7, game.playerFour, 14, 10, 560, 239, 347, 500, 385, 220, 220, 500, 500);
	game.enemyUpdate(game.beardeEFour, 'beardSound', 5, 7, game.playerFour, 14, 10, 560, 3, 63, 420, 218, 120, 120, 300, 300);
	game.enemyUpdate(game.fatEFour, 'fatSound', 3.75, 5.5, game.playerFour, 5, 10, 260, 385, 501, 121, 23, 120, 120, 770, 770);
	// ---- //	
						//player, alertXMin, alertXMax, alertMinY, alertMaxY
	game.elevatorLevelFourUpdate(game.playerFour, 501, 545, 47, 99);
	game.controller(game.playerFour);
	game.weaponChange();
	game.shooting(game.playerFour);
	game.hudUpdate(game.playerFour);
	game.setGameOver(game.playerFour);
	} // level check
}; /// level4 ends here

function levelFiveAnim() {
	if(game.levelState === 4) {
game.gpuCreate(game.playerFive, game.gpuE.posFiveGreen, game.gpuE.posFiveRed);	
game.sodaCreate(game.playerFive, game.sodaE.posFive);	
	
if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerFive.currentFrame = ++game.playerFive.currentFrame % 5;
		game.playerFive.spriteX = game.playerFive.currentFrame * game.playerFive.width;
		game.playerFive.spriteY = 11 * game.playerFive.height;
		}	
}

} // level check
};

setInterval(levelFiveAnim, 100);

function levelFive() {
if(game.levelState === 4) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawFive(game.playerFive, game.gpuE.posFiveGreen, game.gpuE.posFiveRed, game.sodaE.posFive);
	game.levelFiveBg();
	game.levelFiveClimb(game.playerFive);
	game.elevatorCreate();
	game.rigsCreate(game.rigs.levelFive);
	game.shotgunAmmoMachineCreate(game.playerFive, game.shotgunAmmoMac.levelFive);
	game.healthMachineCreate(game.playerFive, game.healthMac.levelFive);
	game.uziAmmoMachineCreate(game.playerFive, game.uziAmmoMac.levelFive);
	game.livesMachineCreate(game.playerFive, game.livesMac.levelFive);
							//(agentBald, agentBlackSmg, agentBlack, agentBlonde, agentBrown)
	game.agentsDraw(game.agentBaldEFive, game.agentBlackSmgEFive, game.agentBlackEFive, game.agentBlondeEFive,  game.agentBrownEFive, game.agentBaldeEFive);
	game.shotgunAcquire(game.playerFive);
	game.drawPlayer(game.playerFive);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount

	game.enemyUpdate(game.agentBaldEFive, 'smgSound', 3.75, 5.5, game.playerFive, 20, 229, 570, 249, 383, 527, 379, 120, 120, 300, 300);
	game.enemyUpdate(game.agentBlackSmgEFive, 'smgSound', 3.75, 5.5, game.playerFive, 20, 229, 570, 249, 383, 527, 379, 220, 220, 180, 180);
	game.enemyUpdate(game.agentBrownEFive, 'smgSound', 3.75, 5.5, game.playerFive, 20, 10, 564, 122, 226, 100, 23, 120, 120, 300, 300);
	game.enemyUpdate(game.agentBlondeEFive, 'smgSound', 3.75, 5.5, game.playerFive, 20, 10, 570, 415, 505, 255, 163, 120, 120, 350, 350);
	game.enemyUpdate(game.agentBlackEFive, 'beardSound', 3.7, 5.5, game.playerFive, 12, 10, 564, 122, 226, 270, 155, 220, 220, 250, 250);
	game.enemyUpdate(game.agentBaldeEFive, 'smgSound', 3.75, 5.5, game.playerFive, 20, 10, 570, 415, 505, 181, 29, 120, 120, 200, 200);
	// ---- //	
						//player, alertXMin, alertXMax, alertMinY, alertMaxY
	game.elevatorLevelFiveUpdate(game.playerFive, 501, 553, 450, 500);
	game.controller(game.playerFive);
	game.weaponChange();
	game.shooting(game.playerFive);
	game.hudUpdate(game.playerFive);
	game.setGameOver(game.playerFive);

	} // level check
}; /// level5 ends here

function levelSixAnim() {
	if(game.levelState === 5) {
game.gpuCreate(game.playerSix, game.gpuE.posSixGreen, game.gpuE.posSixRed);	
game.sodaCreate(game.playerSix, game.sodaE.posSix);	
	
if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerSix.currentFrame = ++game.playerSix.currentFrame % 5;
		game.playerSix.spriteX = game.playerSix.currentFrame * game.playerSix.width;
		game.playerSix.spriteY = 11 * game.playerSix.height;
		}	
}


} // level check
};

setInterval(levelSixAnim, 100);

function levelSix() {
if(game.levelState === 5) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawSix(game.playerSix, game.gpuE.posSixGreen, game.gpuE.posSixRed, game.sodaE.posSix);
	game.levelSixBg();
	game.levelSixClimb(game.playerSix);
	game.elevatorCreate();
	game.rigsCreate(game.rigs.levelSix);
	game.shotgunAmmoMachineCreate(game.playerSix, game.shotgunAmmoMac.levelSix);
	game.healthMachineCreate(game.playerSix, game.healthMac.levelSix);
	game.uziAmmoMachineCreate(game.playerSix, game.uziAmmoMac.levelSix);
	game.livesMachineCreate(game.playerSix, game.livesMac.levelSix);
	game.turretsLeftCreate(game.playerSix, game.turrets.levelSixLeft, 3.8, 1300);
	game.turretsCreate(game.playerSix, game.turrets.levelSix, 3.8, 1300);
							//(agentBald, agentBlackSmg, agentBlack, agentBlonde, agentBrown)
	game.agentsDraw(game.agentBaldESix, game.agentBlackSmgESix, game.agentBlackESix, game.agentBlondeESix,  game.agentBrownESix, game.agentBaldeESix);
	game.drawPlayer(game.playerSix);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.agentBaldESix, 'smgSound', 3.75, 5.5, game.playerSix, 20, 10, 570, 117, 227, 506, 370, 120, 120, 600, 600);
	game.enemyUpdate(game.agentBlackSmgESix, 'smgSound', 3.75, 5.5, game.playerSix, 20, 10, 570, -20, 51, 285, 124, 220, 220, 440, 440);
	game.enemyUpdate(game.agentBrownESix, 'smgSound', 3.75, 5.5, game.playerSix, 20, 10, 570, -20, 51, 184, 98, 120, 120, 500, 500);
	game.enemyUpdate(game.agentBlondeESix, 'smgSound', 3.75, 5.5, game.playerSix, 20, 10, 570, 400, 506, 255, 40, 120, 120, 350, 350);
	game.enemyUpdate(game.agentBlackESix, 'beardSound', 3.7, 5.5, game.playerSix, 12, 10, 570, 400, 506, 270, 115, 220, 220, 250, 250);
	game.enemyUpdate(game.agentBaldeESix, 'smgSound', 3.75, 5.5, game.playerSix, 20, 10, 570, 400, 506, 181, 29, 120, 120, 200, 200);
	// ---- //
						//player, alertXMin, alertXMax, alertMinY, alertMaxY
	game.elevatorLevelSixUpdate(game.playerSix, 29, 47, 48, 50);

	game.controller(game.playerSix);
	game.weaponChange();
	game.shooting(game.playerSix);
	game.hudUpdate(game.playerSix);
	game.setGameOver(game.playerSix);

	} // level check
}; /// level6 ends here

function levelSevenAnim() {
	if(game.levelState === 6) {
game.gpuCreate(game.playerSeven, game.gpuE.posSevenGreen, game.gpuE.posSevenRed);	
game.sodaCreate(game.playerSeven, game.sodaE.posSeven);	
	
if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerSeven.currentFrame = ++game.playerSeven.currentFrame % 5;
		game.playerSeven.spriteX = game.playerSeven.currentFrame * game.playerSeven.width;
		game.playerSeven.spriteY = 11 * game.playerSeven.height;
		}	
}

} // level check
};

setInterval(levelSevenAnim, 100);

function levelSeven() {
if(game.levelState === 6) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawSeven(game.playerSeven, game.gpuE.posSevenGreen, game.gpuE.posSevenRed, game.sodaE.posSeven);
	game.levelSevenBg();
	game.levelSevenClimb(game.playerSeven);
	game.elevatorCreate();
	game.shotgunAmmoMachineCreate(game.playerSeven, game.shotgunAmmoMac.levelSeven);
	game.healthMachineCreate(game.playerSeven, game.healthMac.levelSeven);
	game.uziAmmoMachineCreate(game.playerSeven, game.uziAmmoMac.levelSeven);
	game.livesMachineCreate(game.playerSeven, game.livesMac.levelSeven);
	game.turretsLeftCreate(game.playerSeven, game.turrets.levelSevenLeft, 3.4, 1300);
	game.turretsCreate(game.playerSeven, game.turrets.levelSeven, 3.8, 1300);
							//(agentBald, agentBlackSmg, agentBlack, agentBlonde, agentBrown)
	game.agentsDraw(game.agentBaldESeven, game.agentBlackSmgESeven, null, game.agentBlondeESeven,  game.agentBrownESeven, game.agentBaldeESeven);
	game.drawPlayer(game.playerSeven);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.agentBaldESeven, 'smgSound', 3.75, 5.5, game.playerSeven, 20, 10, 570, 200, 256, 524, 422, 120, 120, 150, 150);
	game.enemyUpdate(game.agentBlackSmgESeven, 'smgSound', 3.75, 5.5, game.playerSeven, 20, 10, 570, 280, 378, 176, 124, 220, 220, 440, 440);
	game.enemyUpdate(game.agentBrownESeven, 'smgSound', 3.75, 5.5, game.playerSeven, 20, 10, 570, 200, 256, 375, 233, 120, 120, 200, 200);
	game.enemyUpdate(game.agentBlondeESeven, 'smgSound', 3.75, 5.5, game.playerSeven, 20, 10, 570, 280, 378, 170, 109, 120, 120, 450, 450);
	game.enemyUpdate(game.agentBaldeESeven, 'smgSound', 3.75, 5.5, game.playerSeven, 20, 10, 570, 280, 378, 72, 19, 120, 120, 300, 300);
	// ---- //	
						//player, alertXMin, alertXMax, alertMinY, alertMaxY
	game.elevatorLevelSevenUpdate(game.playerSeven, 497, 519, 451, 500);
	game.controller(game.playerSeven);
	game.weaponChange();
	game.shooting(game.playerSeven);
	game.hudUpdate(game.playerSeven);
	game.setGameOver(game.playerSeven);
	} // level check
}; /// level7 ends here

function levelEightAnim() {
	if(game.levelState === 7) {
		game.gpuCreate(game.playerEight, game.gpuE.posEightGreen, game.gpuE.posEightRed);	
		game.sodaCreate(game.playerEight, game.sodaE.posEight);	
if(climbing) {
	////// UP PRESSED !! ///////
	 if(upPressed || downPressed) {
		// SPRITE ANIM
		game.playerEight.currentFrame = ++game.playerEight.currentFrame % 5;
		game.playerEight.spriteX = game.playerEight.currentFrame * game.playerEight.width;
		game.playerEight.spriteY = 11 * game.playerEight.height;
		}	
}
		// CAR BACK LIGHT SPRITE ANIM
			game.carE.currentFrame = ++game.carE.currentFrame % 8;
			game.carE.spriteX = game.carE.currentFrame * game.carE.width;
			game.carE.spriteY = 0 * game.carE.height;

		// CAR FRONT LIGHT SPRITE ANIM
			game.carFrontE.currentFrame = ++game.carFrontE.currentFrame % 8;
			game.carFrontE.spriteX = game.carFrontE.currentFrame * game.carFrontE.width;
			game.carFrontE.spriteY = 0 * game.carFrontE.height;

} // level check
};

setInterval(levelEightAnim, 100);

function levelEight() {
if(game.levelState === 7) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.drawEight(game.playerEight, game.gpuE.posEightGreen, game.gpuE.posEightRed, game.sodaE.posEight);
	game.levelEightBg();
	game.levelEightClimb(game.playerEight);
	game.elevatorCreate();
	game.carWaiting();
	game.shotgunAmmoMachineCreate(game.playerEight, game.shotgunAmmoMac.levelEight);
	game.uziAmmoMachineCreate(game.playerEight, game.uziAmmoMac.levelEight);
	game.turretsCreate(game.playerEight, game.turrets.levelEight, 3, 2300);
							//(agentBald, agentBlackSmg, agentBlack, agentBlonde, agentBrown)
	game.agentsDraw(game.agentBaldEEight, null, null, game.agentBlondeEEight,  game.agentBrownEEight, game.agentBaldeEEight);
	game.drawPlayer(game.playerEight);
	game.levelSigns();
		// ENEMIES //
					//enemy, enemyGunSound, enemiesBulWidth, enemiesBulHeight, player, playerDamage, lineXmin, lineXmax, LineYmin, LineYmax, rightX, leftX, lShootSpeed, rShootSpeed, lShootAmount, rShootAmount
	game.enemyUpdate(game.agentBaldEEight, 'smgSound', 3.75, 5.5, game.playerEight, 20, 10, 570, 156, 254, 68, 20, 120, 120, 150, 150);
	game.enemyUpdate(game.agentBrownEEight, 'smgSound', 3.75, 5.5, game.playerEight, 20, 10, 570, 156, 254, 174, 30, 120, 120, 200, 200);
	game.enemyUpdate(game.agentBlondeEEight, 'smgSound', 3.75, 5.5, game.playerEight, 20, 10, 570, -20, 130, 440, 330, 120, 120, 350, 350);
	game.enemyUpdate(game.agentBaldeEEight, 'smgSound', 3.75, 5.5, game.playerEight, 20, 10, 570, 278, 375, 516, 410, 120, 120, 300, 300);
	// ---- //	
						//player, alertXMin, alertXMax, alertMinY, alertMaxY
	game.extractionUpdate(game.playerEight, 334, 600, 400, 501);
	game.controller(game.playerEight);
	game.weaponChange();
	game.shooting(game.playerEight);
	game.hudUpdate(game.playerEight);
	game.setGameOver(game.playerEight);
	} // level check
}; /// level8 ends here

	var creditsX = 344;
	var creditsY = 500;
	var creditsTwoX = 344;
	var creditsTwoY = 1055;
	var endButtonColor = "#fff";
	var creditsClickActive = false;
	var endSoundPlayer = true;

function endGame() {
if(game.levelState === "end") {
	canvas.width = 589;
	canvas.height = 527;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

		///// OBJECTIVE ACTIVATE
	if(creditsY > 452) {
	ctx.drawImage(ui.endSecZero, 0, 0);
	}

	if(creditsY > 402 && creditsY < 452) {
	ctx.drawImage(ui.endSec, 0, 0);
		endGameIntro.play();
	}
	if(creditsY < 402 && creditsY > 302) {
	ctx.drawImage(ui.endSecTwo, 0, 0);

	acquired.play();
	} 

	if(creditsY < 302) {
	ctx.drawImage(ui.endSecThree, 0, 0);
	};
			if(creditsY < 302 && creditsY > 252) {
	acquired.play();
		}
	//////////////////////
	if(creditsY > -535) {
	creditsY -= 0.5;
	}

	if(creditsY < 165) {
		creditsClickActive = true;
	}

	if(creditsTwoY > 235) {
	creditsTwoY -= 0.5;
	}

	////// OK BUTTON //////
if(creditsClickActive) {
		ctx.beginPath();
		ctx.font = "18px Faster One";
		ctx.fillStyle = endButtonColor;
		ctx.fillText("OK", 160, 325);
		ctx.closePath();
};
	ctx.drawImage(ui.credits, creditsX, creditsY);
	ctx.drawImage(ui.creditsTwo, creditsTwoX, creditsTwoY);

if(game.levelState === "end") {
			canvas.addEventListener('click', buttonClick);
			canvas.addEventListener('mousemove', buttonHoover);
};			
			
			function buttonClick(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(creditsClickActive && game.levelState === "end") {					
				if(mouseX > 154 && mouseX < 193 && mouseY > 311 && mouseY < 328) {

					click.play();
					location.reload();
				}
};				
				};

			function buttonHoover(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(creditsClickActive && game.levelState === "end") {						
				if(mouseX > 154 && mouseX < 193 && mouseY > 311 && mouseY < 328) {
					endButtonColor = "#CA0000";
					canvas.style.cursor = "pointer";

				} else {
					endButtonColor = "#fff";
					canvas.style.cursor = "default";
				}
}				
				};

} // level check
}; // end game function ends here

var mainClickButtonColor = "#F0F1F2";

function credits() {
	if(game.levelState === "credits") {
	canvas.width = 589;
	canvas.height = 527;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.drawImage(ui.mainCredits, 0, 0);

		////// MAIN MENU BUTTON //////
		ctx.beginPath();
		ctx.font = "14px Ultra";
		ctx.fillStyle = mainClickButtonColor;
		ctx.fillText("Main Menu", 393, 330);
		ctx.closePath();

	if(game.levelState === "credits") {
			canvas.addEventListener('click', buttonClick);
			canvas.addEventListener('mousemove', buttonHoover);
};			
			
			function buttonClick(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(game.levelState === "credits") {					
				if(mouseX > 393 && mouseX < 497 && mouseY > 318 && mouseY < 333) {

					click.play();
					game.levelState = "menu";
				}
};				
				};

			function buttonHoover(e) {
				var mouseX = e.clientX - canvas.offsetLeft;
				var mouseY = e.clientY - canvas.offsetTop;
					///////// MESSAGE OK BUTTON ///////////
if(game.levelState === "credits") {						
				if(mouseX > 393 && mouseX < 497 && mouseY > 318 && mouseY < 333) {
					mainClickButtonColor = "#630200";
					canvas.style.cursor = "pointer";

				} else {
					mainClickButtonColor = "#F0F1F2";
					canvas.style.cursor = "default";
				}
}				
				};

} // level check
}; //ends here

var gpus = {
	green: [{x: 140, y: 75, speedX: 0.7, speedY: 0.7}, {x: 80, y: 190, speedX: 0.7, speedY: 0.7}, {x: 477, y: 106, speedX: 0.7, speedY: 0.7},
	{x: 504, y: 202, speedX: 0.7, speedY: 0.7}],
	red: [{x: 83, y: 102, speedX: 0.7, speedY: 0.7}, {x: 68, y: 250, speedX: 0.7, speedY: 0.7}, {x: 500, y: 64, speedX: 0.7, speedY: 0.7}, 
	{x: 503, y: 271, speedX: 0.7, speedY: 0.7}]
};

var beepE = {
	x: 217, y: 388, width: 22.08333333333333, height: 22, spriteX: 0, spriteY: 0, spriteWidth: 265, spriteHeight: 22, spriteRow: 1, 
	spriteColumn: 12, currentFrame: 0,
};

var speedX = 0.7;
var speedY = 0.7;
var startButtonColor = "#AB0000";
var creditsButtonColor = "#AB0000";

function menuUpdate() {

////// GPU BOUNCING ////////
///*** GREEN 1 ***///
if(gpus.green[0].x > 180 || gpus.green[0].x < 70) {
	gpus.green[0].speedX = -gpus.green[0].speedX;
}
if(gpus.green[0].y > 78 || gpus.green[0].y < 5) {
	gpus.green[0].speedY = -gpus.green[0].speedY;
}
///*** ---- ***///

///*** GREEN 2 ***///
if(gpus.green[1].x > 120 || gpus.green[1].x < 10) {
	gpus.green[1].speedX = -gpus.green[1].speedX;
}
if(gpus.green[1].y > 240 || gpus.green[1].y < 160) {
	gpus.green[1].speedY = -gpus.green[1].speedY;
}
///*** ---- ***///

///*** GREEN 3 ***///
if(gpus.green[2].x > 540 || gpus.green[2].x < 450) {
	gpus.green[2].speedX = -gpus.green[2].speedX;
}
if(gpus.green[2].y > 163 || gpus.green[2].y < 100) {
	gpus.green[2].speedY = -gpus.green[2].speedY;
}
///*** ---- ***///

///*** GREEN 4 ***///
if(gpus.green[3].x > 540 || gpus.green[3].x < 439) {
	gpus.green[3].speedX = -gpus.green[3].speedX;
}
if(gpus.green[3].y > 238 || gpus.green[3].y < 192) {
	gpus.green[3].speedY = -gpus.green[3].speedY;
}
///*** ---- ***///

////////////////////!!!!!!!! RED SECTION !!!!/////////////////

///*** RED 1 ***///
if(gpus.red[0].x > 140 || gpus.red[0].x < 20) {
	gpus.red[0].speedX = -gpus.red[0].speedX;
}
if(gpus.red[0].y > 130 || gpus.red[0].y < 90) {
	gpus.red[0].speedY = -gpus.red[0].speedY;
}
///*** ---- ***///

///*** RED 2 ***///
if(gpus.red[1].x > 150 || gpus.red[1].x < 10) {
	gpus.red[1].speedX = -gpus.red[1].speedX;
}
if(gpus.red[1].y > 296 || gpus.red[1].y < 222) {
	gpus.red[1].speedY = -gpus.red[1].speedY;
}
///*** ---- ***///

///*** RED 3 ***///
if(gpus.red[2].x > 540 || gpus.red[2].x < 445) {
	gpus.red[2].speedX = -gpus.red[2].speedX;
}
if(gpus.red[2].y > 80 || gpus.red[2].y < 10) {
	gpus.red[2].speedY = -gpus.red[2].speedY;
}
///*** ---- ***///

///*** RED 4 ***///
if(gpus.red[3].x > 561 || gpus.red[3].x < 399) {
	gpus.red[3].speedX = -gpus.red[3].speedX;
}
if(gpus.red[3].y > 290 || gpus.red[3].y < 244) {
	gpus.red[3].speedY = -gpus.red[3].speedY;
}
///*** ---- ***///

for(var i = 0; i < gpus.green.length; i++) {
gpus.green[i].x += gpus.green[i].speedX;
gpus.green[i].y += gpus.green[i].speedY;
}

for(var i = 0; i < gpus.red.length; i++) {
gpus.red[i].x += gpus.red[i].speedX;
gpus.red[i].y += gpus.red[i].speedY;
}

};

function beepAnim() {
if(game.levelState === "menu") {
	////// BEEP ANIM /////

beepE.currentFrame = ++beepE.currentFrame % beepE.spriteColumn;
beepE.spriteX = beepE.currentFrame * beepE.width;
beepE.spriteY = 0 * beepE.height;
};

};


setInterval(beepAnim, 100);

function levelBeepAnim() {
if(oneSignShow || twoSignShow || threeSignShow || fourSignShow || fiveSignShow || sixSignShow || sevenSignShow || eightSignShow) {
	////// LEVEL BEEP ANIM /////

game.levelBeepE.currentFrame = ++game.levelBeepE.currentFrame % game.levelBeepE.spriteColumn;
game.levelBeepE.spriteX = game.levelBeepE.currentFrame * game.levelBeepE.width;
game.levelBeepE.spriteY = 0 * game.levelBeepE.height;
};

};

setInterval(levelBeepAnim, 100);

function menu() {
	if(game.levelState === 'menu') {

menuUpdate();

canvas.width = 589;
canvas.height = 527;	
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.drawImage(menuSprites.menuBg, 0, 0);


////// DRAW MENU SPRITES ///////////

ctx.drawImage(menuSprites.greenOne, gpus.green[0].x, gpus.green[0].y);
ctx.drawImage(menuSprites.greenTwo, gpus.green[1].x, gpus.green[1].y);
ctx.drawImage(menuSprites.greenThree, gpus.green[2].x, gpus.green[2].y);
ctx.drawImage(menuSprites.greenFour, gpus.green[3].x, gpus.green[3].y);

ctx.drawImage(menuSprites.redOne, gpus.red[0].x, gpus.red[0].y);
ctx.drawImage(menuSprites.redTwo, gpus.red[1].x, gpus.red[1].y);
ctx.drawImage(menuSprites.redThree, gpus.red[2].x, gpus.red[2].y);
ctx.drawImage(menuSprites.redFour, gpus.red[3].x, gpus.red[3].y);

ctx.drawImage(menuSprites.beep, beepE.spriteX, beepE.spriteY, beepE.width, beepE.height, beepE.x, beepE.y, beepE.width, beepE.height);

///////////------------////////////

///////// START GAME BUTTON ///////////
ctx.beginPath();
ctx.font = "16px Ultra";
ctx.fillStyle = startButtonColor;
ctx.fillText("Start Game", 233, 465);
ctx.closePath();

///////// CREDITS BUTTON ///////////
ctx.beginPath();
ctx.font = "16px Ultra";
ctx.fillStyle = creditsButtonColor;
ctx.fillText("Credits", 233, 493);
ctx.closePath();

	canvas.addEventListener('click', buttonClick);
	canvas.addEventListener('mousemove', buttonHover);

	function buttonClick(e) {
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		///////// START GAME BUTTON ///////////
		if(game.levelState === 'menu') {
		if(mouseX > 234 && mouseX < 347 && mouseY > 451 && mouseY < 468) {
			click.play();
			game.levelState = 0;
			messageActive = true;
  			setTimeout(function(){
			mailS.play();
			}, 200);
		}

		if(mouseX > 235 && mouseX < 307 && mouseY > 482 && mouseY < 496) {
			click.play();
			game.levelState = "credits";
		}

	}

		//////////////----------///////////	

	};

	function buttonHover(e) {
		
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
	///////// START GAME BUTTON ///////////
		if(mouseX > 234 && mouseX < 347 && mouseY > 451 && mouseY < 468) {
			startButtonColor = "#15FF00";
			canvas.style.cursor = "pointer";

		} else {
			startButtonColor = "#AB0000";
			canvas.style.cursor = "default";
		}
	//////////////----------///////////	

		///////// CREDITS BUTTON ///////////
		if(mouseX > 235 && mouseX < 307 && mouseY > 482 && mouseY < 496) {
			creditsButtonColor = "#15FF00";
			canvas.style.cursor = "pointer";

		} else {
			creditsButtonColor = "#AB0000";
		}
	//////////////----------///////////	

	};
}
}; // MENU ENDS HERE

var tryAgainButtonColor = "#CFDBD1";
var mainMenuButtonColor = "#CFDBD1";

function gameOver() {
if(game.levelState === 'gameOver') {

canvas.width = 589;
canvas.height = 527;	
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.drawImage(sprites.gameOverBack, 0, 0);

if(gameOverButs) {
/// TRY AGAIN BUTTON ///
ctx.beginPath();
ctx.font = "13px Ultra";
ctx.fillStyle = tryAgainButtonColor;
ctx.fillText("Try Again", 255, 264);
ctx.closePath();

/// MAIN MENU BUTTON ///
ctx.beginPath();
ctx.font = "13px Ultra";
ctx.fillStyle = mainMenuButtonColor;
ctx.fillText("Main Menu", 255, 295);
ctx.closePath();
}
if(game.levelState === 'gameOver') {
canvas.addEventListener('click', buttonClick);
canvas.addEventListener('mousemove', buttonHoover);
}

function buttonClick(e) {
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		//console.log('x: ' + mouseX + ' y: ' + mouseY);
if(game.levelState === 'gameOver') {
		/// TRY AGAIN BUTTON ///
		if(mouseX > 255 && mouseX < 336 && mouseY > 254 && mouseY < 268 && gameOverButs) {
			click.play();
			game.lives--;
			gameOverButs = false;
			game.levelState = game.lastLevel;

			if(game.levelState === 0) {
				game.gameUpdateOne(game.playerOne, game.whiteE, game.blackE, game.fatE, game.beardE);
			} else if(game.levelState === 1) {
				game.gameUpdateTwo(game.playerTwo, game.whiteETwo, game.blackETwo, game.fatETwo, game.beardETwo);
			} else if(game.levelState === 2) {
				game.gameUpdateThree(game.playerThree, game.whiteEThree, game.whiteeEThree, game.blackEThree, game.fatEThree, game.beardEThree);
			} else if(game.levelState === 3) {
				game.gameUpdateFour(game.playerFour, game.whiteEFour, game.blackEFour, game.blackeEFour, game.fatEFour, game.beardEFour, game.beardeEFour);
			} else if(game.levelState === 4) { //player, bald, baldE, black, blackE, brown, blonde
				game.gameUpdateFive(game.playerFive, game.agentBaldEFive, game.agentBaldeEFive, game.agentBlackSmgEFive, game.agentBlackEFive, game.agentBrownEFive, game.agentBlondeEFive);
			} else if(game.levelState === 5) { //player, bald, baldE, black, blackE, brown, blonde
				game.gameUpdateSix(game.playerSix, game.agentBaldESix, game.agentBaldeESix, game.agentBlackSmgESix, game.agentBlackESix, game.agentBrownESix, game.agentBlondeESix);
			} else if(game.levelState === 6) { //player, bald, baldE, black, brown, blonde
				game.gameUpdateSeven(game.playerSeven, game.agentBaldESeven, game.agentBaldeESeven, game.agentBlackSmgESeven, game.agentBrownESeven, game.agentBlondeESeven);
			} else if(game.levelState === 7) { //player, bald, baldE, brown, blonde
				game.gameUpdateEight(game.playerEight, game.agentBaldEEight, game.agentBaldeEEight, game.agentBrownEEight, game.agentBlondeEEight);
			}
		}

		/// MAIN MENU BUTTON ///
		if(mouseX > 256 && mouseX < 349 && mouseY > 284 && mouseY < 297) {
			click.play();
			location.reload();
		}
}
};

function buttonHoover(e) {
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;

		/// TRY AGAIN BUTTON ///
		if(mouseX > 255 && mouseX < 336 && mouseY > 254 && mouseY < 268 && gameOverButs) {
			tryAgainButtonColor = "#C7262F";
			canvas.style.cursor = "pointer";
		} else {
			tryAgainButtonColor = "#CFDBD1";
			canvas.style.cursor = "default";
		}

		/// MAIN MENU BUTTON ///
		if(mouseX > 256 && mouseX < 349 && mouseY > 284 && mouseY < 297 && gameOverButs) {
			mainMenuButtonColor = "#C7262F";
			canvas.style.cursor = "pointer";
		} else {
			mainMenuButtonColor = "#CFDBD1";
		}
};
}

};

var newGameButtonColor = "#CFDBD1";
var menuButtonColor = "#CFDBD1";

function lost() {
if(game.levelState === 'lost') {

canvas.style.display = "block";
canLoad.style.display = "none";
canvas.width = 589;
canvas.height = 527;	
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.drawImage(sprites.gameLostBack, 0, 0);

canvas.addEventListener('click', buttonClick);

function buttonClick(e) {
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;

if(game.levelState === 'lost') {
	location.reload();

}
};

}; // level check
}; // lost function ends here


///**♫ ♫ BACKGROUND SOUNDS PLAY ♫ ♫ **//

 var menuSound = new Audio();
 menuSound.src = "sounds/drummerboy.hip.low_menu.mp3";
 menuSound.loop = true;

 var levelOneSound = new Audio();
 levelOneSound.src = "sounds/levelOneBg.mp3";
 levelOneSound.loop = true;

 var levelThreeSound = new Audio();
 levelThreeSound.src = "sounds/levelTwoBg.mp3";
 levelThreeSound.loop = true;

 var levelFiveSound = new Audio();
 levelFiveSound.src = "sounds/levelThreeBg.mp3";
 levelFiveSound.loop = true;

  var levelSevenSound = new Audio();
 levelSevenSound.src = "sounds/levelSevenBg.mp3";
 levelSevenSound.loop = true;

  var endGameSound = new Audio();
 endGameSound.src = "sounds/endGame.mp3";
 endGameSound.loop = false;

/////////////** ♫ ♫ ♫ END **/////////////


window.onload = function(){

	canLoad.style.display = "none";
	canvas.style.display = "block";

(function animloop(){
  requestAnimFrame(animloop);
if(game.levelState === 0) {
  levelOne();
  game.lastLevel = 0;
  menuSound.pause();
  if(!messageActive && !htpActive) {
  levelOneSound.play();
  };
} else if(game.levelState === 1) {
  levelTwo();
  game.lastLevel = 1;
  levelOneSound.play();
} else if (game.levelState === 2) {
	levelThree();
  	game.lastLevel = 2;
  	levelOneSound.pause();
  	levelThreeSound.play();
} else if (game.levelState === 3) {
	levelFour();
  	game.lastLevel = 3;
  	levelThreeSound.play();
  } else if (game.levelState === 4) {
	levelFive();
	levelThreeSound.pause();
	levelFiveSound.play();
    canvas.style.backgroundColor = "#F0F0EA";
    game.lastLevel = 4;
 } else if (game.levelState === 5) {
 	levelSix();
	levelFiveSound.play();
    game.lastLevel = 5;
 } else if (game.levelState === 6) {
 	levelSeven();
	levelFiveSound.pause();
  	levelSevenSound.play();
    game.lastLevel = 6;

 } else if (game.levelState === 7) {
 	levelEight();
	levelFiveSound.pause();
	levelSevenSound.play();
    game.lastLevel = 7;

 } else if(game.levelState === 'menu') {
  menu();
  menuSound.play();
} else if(game.levelState === 'gameOver') {
	gameOver();
	levelOneSound.pause();
	levelThreeSound.pause();
	levelFiveSound.pause();
	levelSevenSound.pause();
} else if(game.levelState === 'lost') {
	lost();
	levelOneSound.pause();
	levelThreeSound.pause();
	levelFiveSound.pause();
	levelSevenSound.pause();
} else if(game.levelState === 'end') {
	endGame();
	levelOneSound.pause();
	levelThreeSound.pause();
	levelFiveSound.pause();
	levelSevenSound.pause();
	endGameSound.play();
} else if(game.levelState === 'credits') {
	credits();
}
/*
	// FPS BG
	ctx.beginPath();
	ctx.rect(495, 9, 56, 26);
	ctx.fillStyle = "black";
	ctx.fill();
	// FPS
 	ctx.beginPath();
	ctx.font = "18px Fjalla One";
	ctx.fillStyle = "#00E300";
	ctx.fillText(countFPS() + " FPS", 500, 30);
	ctx.closePath();
*/
})();
}

///////////////////////////// COLLISION DETECTION /////////////////////////////

function colCheck(shapeA, x, y, w, h) {

var vX, vY, hWidths, hHeights, oX, oY, colDir;

vX = (shapeA.x + (shapeA.width / 2)) - (x + (w / 2));
vY = (shapeA.y + (shapeA.height / 2)) - (y + (h / 2));

hWidths = (shapeA.width / 2 -18) + (w / 2);
hHeights = (shapeA.height / 2) + (h / 2);

if(Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
	oX = hWidths - Math.abs(vX);
	oY = hHeights - Math.abs(vY);

	if(oX >= oY) {
		if(vY > 0) {
			colDir = 't';
			shapeA.y += oY;
		} else {
			colDir = 'b';
			shapeA.y -= oY;
		}
	} else {
		if(vX > 0) {
			colDir = 'l';
			shapeA.x += oX;
		} else {
			colDir = 'r';
			shapeA.x -= oX;
		}
	}

}
	return colDir;
};