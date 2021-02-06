var game, form, player, allPlayers, db, gameState, playerCount;
var car1, car2, car3, car4, cars;

gameState = 0;

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
}
