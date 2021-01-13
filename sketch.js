const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope;
function preload(){

}

function setup(){
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

b1 = new Box(600,365,50,50)
b2 = new Box(550,365,50,50)
b3 = new Box(650,365,50,50)
b4 = new Box(625,315,50,50)
b5 = new Box(575,315,50,50)
b6 = new Box(600,265,50,50)

//rope = new Rope(b6.body,d1.body,0)

p1 = new Box(30,430,35,35)
stand1 = new Ground(600,400,200,20);
earth = new Ground(400,699,800,10);
//d1 = new Dot(30,390,50,10)

Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background("white");
  
    Engine.update(engine);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    p1.display();

    //d1.display();

    stand1.display();

    earth.display();

    //rope.display();
}
