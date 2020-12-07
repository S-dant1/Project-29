const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, engine, world;
var b1, b2, b3, b4, b5 ,b6, b7, b8,
 b9, b10, b11, b12, b13, b14, b15, b16;
var polygon, slingShot, polygon_img;

function preload(){

  polygon_img = loadImage("polygon.png")


}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
    world = engine.world;

  ground = new Ground(600, 450, 250, 10);

  //level one
  b1 = new Block(510, 430, 30, 40);
  b2 = new Block(540, 430, 30, 40);
  b3 = new Block(570, 430, 30, 40);
  b4 = new Block(600, 430, 30, 40);
  b5 = new Block(630, 430, 30, 40);
  b6 = new Block(660, 430, 30, 40);
  b7 = new Block(690, 430, 30, 40);

  //level two
  b8 = new Block(540, 390, 30, 40);
  b9 = new Block(570, 390, 30, 40);
  b10 = new Block(600, 390, 30, 40);
  b11= new Block(630, 390, 30, 40);
  b12 = new Block(660, 390, 30, 40);

  //level three
  b13 = new Block(570, 350, 30, 40);
  b14 = new Block(600, 350, 30, 40);
  b15= new Block(630, 350, 30, 40);

  //level four
  b16 = new Block(600, 310, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon, {x:100, y:200});
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}