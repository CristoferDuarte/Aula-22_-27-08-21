//Cria um mecanismo de fisica
const Engine = Matter.Engine
//Cria um mundo fisico e cria objetos a ele
const World = Matter.World;
//Cria objetos fisicos 
const Bodies = Matter.Bodies

var engine,world;
var bola, ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground)

  var ball_options ={
    restitution:1.0
  }
  
  bola = Bodies.circle(200,100,20, ball_options);
  World.add(world,bola);

}

function draw() {
  background('black'); 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,20)
  //drawSprites();
}