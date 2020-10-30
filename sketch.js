var monkey, monkey_running
var banana, bananaImage, obstacle, obstaceImage
var BannanaGroup, obstacleGroup
var ground;
var survivalTime=0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("player", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -10;
  ground.x = ground.width / 2;
  console.log(ground.x)

  
  BannanaGroup=createGroup();
  obstacleGroup=createGroup();
 }


function draw() {
  background(180);
  
   if (ground.x < 50) 
   {
    ground.x = ground.width / 2;
   }

  if(keyDown("space")&& monkey.y >= 100) 
  {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  
  stroke("black");
  textSize=20;
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  
  
  
  bannana();
  obstacles();
   
  drawSprites();

}


function bannana(){
 if(frameCount % 80 === 0){
  var bannana =createSprite(600,100,20,20)
  bannana.y=Math.round(random(120,200));
  bannana.addImage(bananaImage);
  bannana.scale=0.1;
  bannana.velocityX=-5;
  bannana.lifetime=100;
  BannanaGroup.add(bannana);
 }
}

function obstacles(){
 if(frameCount % 300 === 0){
  var obstacles =createSprite(600,330,20,20)
  obstacles.addImage(obstaceImage);
  obstacles.scale=0.1;
  obstacles.velocityX=-4;
  obstacles.lifetime=185;
  obstacleGroup.add(obstacles);
 }
}