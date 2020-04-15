
var red = 0;
var green = 50;
var blue=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(400,400);
  cursor=createSprite(10,10,10,10);
  cursor.shapeColor="yellow";
  red=createSprite(2,2,150,800);
  red.shapeColor="pink";
  green=createSprite(152,2,150,800);
  green.shapeColor="violet";
  blue=createSprite(301,2,200,800);
  blue.shapeColor="aqua";
}


function draw(){
background(0);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
red.depth=cursor.depth;
cursor.depth=cursor.depth+1;
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
if(isTouching(cursor,red)){
  green.shapeColor="pink";
  blue.shapeColor="pink";
  red.shapeColor="pink";
}
else{
  green.shapeColor="violet";
  blue.shapeColor="aqua";
  }

if(isTouching(cursor,green)){
  red.shapeColor="violet";
  blue.shapeColor="violet";
  green.shapeColor="violet"
}

if(isTouching(cursor,blue)){
  red.shapeColor="aqua";
  green.shapeColor="aqua";
  blue.shapeColor="aqua"
}




  // Create an ellipse that will move around with you mouse about the X axis.
  cursor.x=World.mouseX;
  cursor.y=World.mouseY;
  // Remember to fill the canvas with white paint before creating the ellipse.
drawSprites();
}