var game, form, player, db, gameState, playerCount;

gameState = 0;

function setup(){
    createCanvas(500,500);

    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
   
}
