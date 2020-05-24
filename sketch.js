const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;

var bgImg;
var bird,platform,platform2,ground
var log1;
var box1,box2;
var pig1,pig2;

var gameState = "onSling";
var score = 0;

function preload(){
  bgImg = loadImage("assets/bg.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  /*push();
  noStroke();
  textSize(35);
  fill("white");
  text("Score:"+score,625,50);
  pop();*/

  bird = new Bird(180,125);
  platform = new Platform(90,300,200,150);
  platform2 = new Platform(800,200,50,400);

  sling = new Sling(bird.body,{x:170,y:130});

  ground = new Ground(400,400,1000,50);
  log1 = new Log(450,50,200,20,PI/7);
  box1 = new Box(375,345,60,60,PI/7);
  box2 = new Box(545,345,60,60,PI/7);

  pig1 = new Pig(450,340);
  pig2 = new Pig(670,325);
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
  box1.display();
  box2.display();
  pig1.display();
  pig2.display();
  platform2.display();

  push();
  fill("black");
  text("X:"+mouseX,50,50);
  text("Y:"+mouseY,50,70);
  pop();

}

function mouseDragged(){
  if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && bird.body.speed <1){
    sling.attach(bird.body);
  }
}