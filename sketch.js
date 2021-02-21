const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var opt;


var engine, world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        restitution:4.0
    }

   object= Bodies.circle(200,200,20,object_options);
    World.add(world,object);

    var ground_opt ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,10,ground_opt);
    World.add(world,ground);
     
   

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("pink");
    ellipse(object.position.x,object.position.y,50);
    fill ("green");
    rect(ground.position.x,ground.position.y,400,10);
}
