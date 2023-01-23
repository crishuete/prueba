var pepe;
function setup() {
  createCanvas(500,500);
  pepe= createSprite(200,200,50,50);
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) {
    pepe.position.x=pepe.position.x+5;
    pepe.shapeColor="red";
    background("coral");
  }
  if (keyIsDown(LEFT_ARROW)) {
    pepe.position.x=pepe.position.x-5;
    pepe.shapeColor="blue";
    background("gold");
  }
  if (keyIsDown(UP_ARROW)) {
    pepe.position.y=pepe.position.y-5;
    pepe.shapeColor="green";
    background("crimson");
  }
  if (keyIsDown(DOWN_ARROW)) {
    pepe.position.y=pepe.position.y+5;
    pepe.shapeColor="yellow";
    background("deepskyblue");
  }
drawSprites();
}




