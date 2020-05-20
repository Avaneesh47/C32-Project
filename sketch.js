const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;

var bgImg;
var bird,platform,ground
var log1;
var pig1;

function preload(){
  bgImg = loadImage("assets/bg.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  bird = new Bird(180,125);
  platform = new Platform(90,300,200,200);

  sling = new Sling(bird.body,{x:170,y:130});

  ground = new Ground(400,400,1000,50);
  log1 = new Log(400,200,20,-PI/7);

  pig1 = new Pig(450,300);
}

function draw() {
  background(255,255,255);  
  background(bgImg);

  Engine.update(engine);

  bird.display();
  platform.display();
  sling.display();
  ground.display();
  log1.display();
  pig1.display();

  push();
  fill("black");
  text("X:"+mouseX,50,50);
  text("Y:"+mouseY,50,70);
  pop();

}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32 && bird.body.speed <1){
    sling.attach(bird.body);
  }
}