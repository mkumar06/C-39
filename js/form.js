class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
    }
    hide() {
        this.button.hide();
        this.input.hide();
        this.greeting.hide();        
    }

    display() {
        var title = createElement("h1", "Car Racing Game");
        title.position(displayWidth/2 - 70, 0);
        
        this.input.position(displayWidth/2 - 100, displayHeight/2 - 50);

        this.button.position(displayWidth/2 - 15, displayHeight/2 + 35);
        this.button.mousePressed(
            ()=>{
                this.button.hide();
                this.input.hide();

                player.name = this.input.value();
                playerCount = playerCount + 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
               
                this.greeting.html("Hello: " + player.name);
                this.greeting.position(displayWidth/2 - 100, displayHeight/2 - 50);
            }
        );
    }
}