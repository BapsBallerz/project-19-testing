var rocket, rocketImg;
var space, spaceImg;
var asteroid, asteroidImg, asteroidsGroup;
var gameState = "play";
var invisibleWall, invisibleWallGroup;



function preload(){
spaceImg = loadImage("space.jpeg");
rocket = loadImage("rocket.png");
asteroidImg = loadImage("asteroid.jpeg");
}

function setup() {
    createCanvas(600, 600);
    rocket = createSprite(20, 20, 50, 50);
    rocket.addImage(rocketImg);
    rocket.scale = 0.25;

    space = createSprite(600, 600);
    space.addImage("space", spaceImg);
    tower.velocityY = 1;

    asteroidsGroup = new Group();
    invisibleWallGroup = new Group();
}
 

function draw() {
    backgroundImg(backgroundImg);
    if(gameState ==="play") {

        if(keyDown("RIGHT_ARROW")) {
            rocket.x = rocket.x+3;
        }
        
        if(keyDown("LEFT_ARROW")) {
            rocket.x = rocket.x-3;
        }

        if(keyDown("SPACE")) {
            rocket.velocityY = -10;
        }
        
        rocket.velocityY = rocket.velocityY + 0.8;

        if(tower.y > 400) {
            tower.y = 300;
        }

        spawnAsteroids();

        if(rocket.isTouching(invisibleWallGroup)) {
            rocket.velocityY = 0;
        }
    }




    drawSprites();
    
}

function spawnAsteroids() { 

}