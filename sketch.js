
var countDistanceX=0,gap, mario;
var platformGroup;

function preload()
{
  marioAnimation=loadAnimation("images/Capture1.png","images/Capture4.png","images/Capture3.png");
  obstacleAnimation=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  groundAnimation=loadAnimation("ground.png");  
}

function setup() {
  createCanvas(windowWidth,650);
  
  platformGroup=createGroup()
  
  mario = new Player(); 
  
  for (var i =0 ;i<20; i=i+1){
    platform1=new Platform(countDistanceX);
    platformGroup.add(platform1.spt);
    gap=random([0,30,50,0,70,0,80,0])
    countDistanceX=countDistanceX+platform1.rw+gap
    
     if(i%3===0){
      wall=new Wall(countDistanceX);
      platformGroup.add(wall.spt);
    }
    if(i%4===0){
      obstacle=new Obstacle(countDistanceX);
    }
  
  }
}

function draw() {
  background('skyblue'); 
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  
  translate(-mario.spt.x+width/2,0)
  
  if(keyDown("left")){
    mario.moveLeft()
  }
  
  if(keyDown("right")){
    mario.moveRight()
  }
  
   if(keyDown("up")&&(mario.spt.velocityY===0)){
    mario.jump()
  } 
 drawSprites();
}

