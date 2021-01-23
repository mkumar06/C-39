class Form {
    constructor(){
        
    }
    display() {
        var title = createElement("h1", "Car Racing Game");
        title.position(130, 10);
        
        var input = createInput("Name");
        input.position(130, 200);

        var button = createButton("Play");
        button.position(180, 240);
        button.mousePressed(
            function(){
                button.hide();
                input.hide();

                var name = input.value();
                playerCount = playerCount + 1;
                player.update(name);
                player.updateCount(playerCount);
               
                var greeting = createElement("h2");
                greeting.html("Hello: " + name);
                greeting.position(180, 200);
            }
        );
    }
}