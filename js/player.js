class Player {
    constructor() {

    this.name = null;
    this.index = null;
    this.distance = 0; 
    }
    getPlayerCount() {
        var playerCountRef = db.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        });
    }
    updateCount(count) {
        db.ref("/").update({
            playerCount: count
        })
    }
    update() {
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({
            name: this.name, distance: this.distance
        })
    }
    static getPlayerInfo() {
        var playerInfoRef = db.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        }
        ) 
    }
}