var fixedRect, movingRect;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  fixedRect =  createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(600, 300, 100, 100);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  test = createSprite(900, 200, 50, 50);
  test.shapeColor = "blue";
  test.debug = true;

  test2 = createSprite(800, 200, 50, 50);
  test2.shapeColor = "blue";
  test2.debug = true;

  test3 = createSprite(100, 200, 50, 50);
  test3.shapeColor = "blue";
  test3.debug = true;

  test4 = createSprite(200, 200, 50, 50);
  test4.shapeColor = "blue";
  test4.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (touch(test2, movingRect)){
    test2.shapeColor = "green";
    movingRect.shapeColor = "green";
  } 
  else {
    test2.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }

  drawSprites();
}