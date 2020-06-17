const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var divisions = [];
var particles = [];
var plinkos = [];
var engine, world;
var ground, div1;
var divisonHeight = 300;

function setup() {
  createCanvas(480,650);
    engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,650,480,20);
  ground1 = new Ground(240,0,480,20);
  ground2 = new Ground(0,325,20,650);
  ground3 = new Ground(480,325,20,650);
  div1 = new Divisons(235,645,490,10);

  for( var k = 0; k <= width; k = k+80){
    divisions.push(new Divisons(k, 506,10, divisonHeight))
  }

  for( var a = 20; a <= width; a=a+0){
    particles.push(new Particle(a,10,10))
  }
  
  /*for (var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinko(j,75,40));
  }*/
  
  for (var i = 60; i<= width; i=i+50){
    plinkos.push(new Plinko(i,115,40));
  }

  for (var b = 40; b<= width; b=b+50){
    plinkos.push(new Plinko(b,155,40));
  }
  for (var c = 60; c<= width; c=c+50){
    plinkos.push(new Plinko(c,195,40));
  }
  for (var d = 40; d<= width; d=d+50){
    plinkos.push(new Plinko(d,235,40));
  }
  for (var x = 60; x<= width; x=x+50){
    plinkos.push(new Plinko(x,275,40));
  }
  for (var y = 40; y<= width; y=y+50){
    plinkos.push(new Plinko(y,315,40));
  }

  
  var render = Render.create({
		element: document.body,
		engine : engine,
		options:{
			width : 1200,
			height : 700,
			wireframes: false
		}

});
Engine.run(engine)
}

function draw() {
  background(0);
  Engine.update(engine);  
  if(frameCount%60 ===0){
    particles.push(new Particle(random(width/2 -10,width/2 +10),10,10))
  }
  
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  div1.display();

for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for (var b = 0; b < plinkos.length; b++){
    plinkos[b].display();
  }

  for (var c = 0; c < plinkos.length; c++){
    plinkos[c].display();
  }
  for (var d = 0; d < plinkos.length; d++){
    plinkos[d].display();
  }
  for (var x = 0; x < plinkos.length; x++){
    plinkos[x].display();
  }

  for (var y = 0; y < plinkos.length; y++){
    plinkos[y].display();
  }

  for(var a = 0; j < particles.length; a++){
    particles[a].display();
  }
  drawSprites();
}