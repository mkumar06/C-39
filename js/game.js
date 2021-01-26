class Game {
    constructor() {
        
    }
    getState() {
        var gameStateRef = db.ref("gameState");
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }
    updateState(state) {
        db.ref("/").update({
            gameState: state
        })
    }
    async start() {
        if(gameState == 0){
            player = new Player();
            var playerCountRef = await db.ref("playerCount").once("value");
            
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val;
                player.getPlayerCount(); 
            }
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(28);
        text("Game Started!", 120, 100);
        Player.getPlayerInfo();
        
        if(allPlayers!== undefined) {
            var displayPosition = 130;
            
            for(var plr in allPlayers) {
                if(plr == "player" + player.index) {
                    fill("red");
                }else {
                    fill("black");
                }
            }
            displayPosition += 30;
            textSize(20);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);
        }
        if(keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 50;
            player.update();
        }
    }
}