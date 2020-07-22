const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var p;
var pl;
var pl1;
var pl2;
var particles=[];
var ground;
var div;
var divisions=[];
var plinkos=[];
var divisionHeight=300;
function setup(){
    createCanvas(480,800);
    engine= Engine.create();
    world= engine.world;
    ground= new Ground(240,793,480,10);
    
}
function draw()
{ 
    Engine.update(engine);
    for(var j=40; j<=width;j=j+50)
{
    pl= new Plinko(j,75,5);
    plinkos.push(pl);
}
for(var j=15; j<=width-10;j=j+50)
{
    pl1= new Plinko(j,150,5);
    plinkos.push(pl1);
}
for(var j=-10; j<=width;j=j+50)
{
    pl2= new Plinko(j,225,5);
    plinkos.push(pl2);
}
for(var k=0; k<=width;k=k+80)
{
    div= new Division(k,height-divisionHeight/2,10,divisionHeight);
    divisions.push(div);
}

    if(frameCount%90==0)
    {
        p= new Particle(random(50,400),50,10);
        particles.push(p);
    }
    background("black");
    
   for(i=0;i<particles.length;i++)
   {
    particles[i].display();
   }
   for(k=0;k<plinkos.length;k++)
   {
    plinkos[k].display();
   }
   for(a=0;a<divisions.length;a++)
   {
    divisions[a].display();
   }
    ground.display();
       
    

}
