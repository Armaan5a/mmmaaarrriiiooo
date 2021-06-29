class Wall {
    constructor(posX) {
      this.rx = posX;
      this.ry = height- random([300,450,350]);  
    
      this.spt=createSprite(this.rx, this.ry);
      this.spt.shapeColor="brown";
      this.spt.addAnimation("ground",wallAnimation);
    
    }
  
  
  }
  