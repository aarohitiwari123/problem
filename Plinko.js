class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      r = 15;
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var plpos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(plpos.x, plpos.y, this.r , this.r);
    }
  };