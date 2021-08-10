const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
const Body = Matter.Body; 
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;

var ball;
var blower;
var blowerMouth;



function setup() {
  createCanvas(800,400);

 
  

 ball=new Ball(250,200,80,80);
 blower=new Blower(350,230,90,100);
 blowerMouth=new Blowermouth(300,230,100,150);

 button=createButton("Click to Blow");
 button.position(width/2,height-100);
 button.class(blowButton);
 button.mousePressed(blow);

}

function draw() {
  background(255,255,255);  


  ball.show();
  blower.show();
  blowerMouth.show();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}