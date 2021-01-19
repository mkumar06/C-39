var ball;
var db, position

function setup(){
    createCanvas(500,500);

    db = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPositionRef = db.ref("ball/position");
    ballPositionRef.on("value", readPos, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    var ballPositionRef1 = db.ref("ball/position")
    
    ballPositionRef1.set({
        x:ball.x + x, y:ball.y + y
    })
}

function readPos(data) {
    console.log(data.val());
    position = data.val();

    ball.x = position.x;
    ball.y = position.y;
}

function showError() {
    console.log("error");
}
