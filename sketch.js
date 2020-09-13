const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var object;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //engine
  engine=Engine.create();
  world=engine.world;
  
  var option={
    isStatic:true
  }
  object=Bodies.rectangle(200,200,50,50,option);
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_option);
  var ball_options={
    restitution:4.0
 }
  ball=Bodies.circle(200,200,20,ball_options);

//adds variables into world
  World.add(world,object);
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background(0);  

  Engine.update(engine);
  rectMode(CENTER); 

  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

