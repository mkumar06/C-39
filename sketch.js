var game, form, player, allPlayers, db, gameState, playerCount;
var car1, car2, car3, car4, cars;
var car1Image, car2Image, car3Image, car4Image, groundImage, trackImage;
var refresh;

gameState = 0;

function preload() {
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    groundImage = loadImage("images/ground.png");
    trackImage = loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth - 45, displayHeight - 65);

    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
   if(playerCount === 4) {
       game.updateState(1);
   }
   if(gameState === 1) {
       clear();
       game.play();
   }
   if(gameState === 2) {
       game.end();
   }
}
