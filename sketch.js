var coliding_object, moving_object, coliding_object2, moving_object2,bounce1,bounce2;


function setup() {
  createCanvas(800,400);



  coliding_object = createSprite(400, 200, 50, 50);
  coliding_object.shapeColor = "green";

  moving_object = createSprite(450,200,50,50);
  moving_object.shapeColor = "green";

  coliding_object2 = createSprite(460, 300, 50, 50);
  coliding_object2.shapeColor = "green";

  moving_object2 = createSprite(450,200,50,50);
  moving_object2.shapeColor = "green";

  bounce1 = createSprite(50,100,50,50)
  bounce1.shapeColor = "green";

  bounce2 = createSprite(550,100,50,50)
  bounce2.shapeColor = "green";

  bounce1.velocityX = 4;

  bounce2.velocityX = -4;
}

function draw() {

  moving_object.y = World.mouseY;

  moving_object.x = World.mouseX;



 if(touching(moving_object,moving_object2)){
  moving_object2.shapeColor = "blue";
  
  moving_object.shapeColor = "blue";
 } else { coliding_object.shapeColor = "green";
 moving_object.shapeColor = "green";}

 bounce();

  background("red");  
  drawSprites();
}

