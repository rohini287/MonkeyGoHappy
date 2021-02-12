var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg,bg_image;
var ground;
var obstacle_image;
var score=0;
var survivalTime=0;
var obstacleGroup,bananaGroup;
var flag=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bg_image=loadImage("Bg forest.jpg");
  obstacle_image=loadImage("obstacle.png")
 
}



function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300,600,600)
  bg.addImage(bg_image)
  bg.scale=0.9;
  bg.velocityX=-3;
  
  monkey=createSprite(20,480,10,10);
  monkey.addAnimation("run", monkey_running);
  monkey.scale=0.3;
  
  ground=createSprite(300,580,600,20);
  
  obstacleGroup= new Group();
  bananaGroup= new Group();
  
}


function draw() {
 if (bg.x<200){
      bg.x=width/2
 }

//  background(0);
  
  
  
  if (keyDown("space")&& monkey.y>=100){
    console.log(monkey.velocityY)
    monkey.velocityY=-20
    console.log(monkey.velocityY)
  }
   monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground)
    spawnBananas();
    spawnObstacles();
  drawSprites();
 
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survial Time:"+survivalTime,100,50)
  
  /*if (monkey.isTouching(obstacleGroup)){
    switch (score){
      case 10: monkey.scale=0.12;
        break;
        case 20: monkey.scale=0.14;
        break;
        case 30: monkey.scale=0.16;
        break;
        case 40: monkey.scale=0.18
        break;
        default:break;
    }
    obstacleGroup.velocityX=0;
    bananaGroup.velocityX=0;
  }*/
  if (bananaGroup.isTouching(monkey)){
    score=score+1;
    monkey.scale =monkey.scale+0.001
    bananaGroup.destroyEach()
  }
  if (obstacleGroup.isTouching(monkey)){
    
    monkey.scale=monkey.scale-0.001
   //  obstacleGroup.velocityX=0;
    //bananaGroup.velocityX=0;
  }

  
}
function spawnBananas(){
  if (frameCount %180 ===0){
    var banana= createSprite(600,300,10,10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(0,400))
    banana.scale=0.25
    banana.velocityX=-3;
    banana.lifetime=-180;
    bananaGroup.add(banana)
    console.log(monkey.debug)
  
  }
}
function spawnObstacles(){
  if (frameCount %200===0){
    var obstacle= createSprite(600,520,10,10);
   obstacle.addImage(obstacle_image);
     //obstacle.y=Math.round(random(450,480))
     obstacle.scale=0.25
    obstacle.velocityX=-3;
     obstacle.lifetime=-180;
    obstacleGroup.add(obstacle)
  }
}







