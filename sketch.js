const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  DustbinImg,DustbinObj,paperObject,groundObject;
var world;
var leftSide,bottom,rightSide;


function setup() {
  createCanvas(1600,700);
  rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paperObject = new Paper(200,450,30);
 groundObject = new Ground(width/2,670,width,20);
 rightSide = new Dustbin2(1320, 500, 20, 325);
 bottom = new Dustbin2(1200, 600, 260, 20);
 leftSide = new Dustbin2(1079, 500, 20, 325);
 DustbinObj = new Dustbin(1200,500);


var render = Render.create({
  element: document.body,
  engine: engine,
  options:{
    width: 1200,
    heighy: 700,
    wireframes: false
  }
});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  
  Engine.update(engine);
 
bottom.display();  
leftSide.display();
rightSide.display();  
paperObject.display();
groundObject.display();
DustbinObj.display();



  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:225, y: -225})
  }
}
