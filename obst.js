class Obstacle {
    constructor(posX) {
     
      this.rx = posX; 
      this.ry = random([220,420,620])
      this.spt=createSprite(this.rx, this.ry); 
      this.spt.shapeColor="green";
     this.spt.addAnimation("obstacle",obstacleAnimation);
     this.spt.scale=0.3;
     this.spt.velocityY=-5
     this.spt.velocityY=this.spt.velocityY+2;
    }
  
}