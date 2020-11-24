
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey = createSprite(80,372,50,50)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.2;
  
  Ground = createSprite(290,460,580,60)
  Ground.shapeColor=("green");
  
  score=0;
  obstaclesGroup=createGroup();
}


function draw() {
   createCanvas(580,480)
  background("lightblue")
  
   if (frameCount % 160 === 0){
     stones = createSprite(590,392,20,20);
     stones.addImage("obstacles",obstaceImage)
     stones.scale=0.2
     stones.velocityX=-4
     stones.lifetime=450
     obstaclesGroup.add(stones);
   }
  monkey.collide(Ground);
  

  
  
  if(keyDown("space")) {
        monkey.velocityY = -22;
  }
  monkey.velocityY = monkey.velocityY + 0.9
  
  textSize(35);
  text("Survival Time : "+score,200,50)
  score = score + Math.round(getFrameRate()/65);
  
  
  spawnBanana();
  drawSprites();
}

function spawnBanana(){
if (frameCount % 80 === 0){
  banana = createSprite(590,70,20,20)
  banana.addImage("food",bananaImage)
  banana.velocityX=-4
  banana.scale=0.1
  banana.lifetime=450;
  banana.y=Math.round(random(80,200))
}
  
}




