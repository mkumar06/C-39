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
        title.position(130, 10);
        
        this.input.position(130, 200);

        this.button.position(180, 240);
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
                this.greeting.position(180, 200);
            }
        );
    }
}