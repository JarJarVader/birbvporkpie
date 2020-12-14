const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b0x1
var b0x2
var engine,world;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  

  /*   var b_options = {

      restitution : 1.5
    }
  
  ball = Bodies.circle(200,200,25, b_options)
World.add(world,ball);
*/

b0x1=new Box(700,320,70,70);
b0x2=new Box(920,320,70,70);
gr0und=new Ground(600,385,1200,15)
pork=new Pork(810,300,50,50)
broom=new Firebolt(810,275,20,300,PI/2);


b0x3=new Box(700,220,70,70);
b0x4=new Box(920,220,70,70);
bacon=new Pork(810,200,50,50)
jhadu=new Firebolt(810,175,20,300,PI/2);

b0x5=new Box(810,150,70,70);
ShootingStar=new Firebolt(730,150,20,150,PI/7)
Cleansweep=new Firebolt(890,150,20,150,PI/-5)

Chicolas=new Feather(150,200,80,80)

}



function draw() {
background(0);
Engine.update(engine);
fill("cyan");
 // ground.isStatic=true;
 /*fill("fuchsia")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25)
//ball.restitution=2
*/
b0x1.disrespect()
b0x2.disrespect()
gr0und.disrespect()
pork.disrespect()
broom.disrespect()
b0x3.disrespect()
b0x4.disrespect()
bacon.disrespect()
jhadu.disrespect()
ShootingStar.disrespect()
Cleansweep.disrespect()
b0x5.disrespect()
Chicolas.disrespect()
}
