const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2;
var ground;
var pig1;
var bird;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,390,1200,20);
    pig1 = new Pig(810,350)
    bird= new Bird(100,100)
    log1 = new Log(810,260,300,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();
}