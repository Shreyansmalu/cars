var ground;
var car;
var boxGroup;
var box;
var l;
function setup() {
  createCanvas(1200,400);
  boxGroup = new Group();
  ground = createSprite(600,465);
  ground.addImage("ground.png",ground_Image);
  ground.velocityX = -10;
  car = createSprite(125,315);
  car.addImage("car.png",car_Image);
}
function preload(){
  ground_Image = loadImage("ground.png");
  car_Image = loadImage("car.png");
  box_Image = loadImage("box.png");
  l_Image = loadImage("l.gif");
}
function keyPressed(){
}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15);
  if(ground.x<-500){
    ground.x = 1200; 
  }
  if(car.y<150){
    car.velocityY = 4;
  }
  if(car.y === 315){
    car.velocityY = 0;
  }
  if(car.collide(boxGroup)){
   car.destroy();
   l = createSprite(600,200,10,10);
   l.addImage("l.gif",l_Image);
   l.scale = 3;
   boxGroup.destroyEach();
   box.destroy();
  }
  if (World.frameCount % 150 === 0) {
    box = createSprite(random(1200,1300),330,50,50)
    box.addImage("box.png",box_Image);
    box.velocityX = -5;
    box.scale = 0.10;
    boxGroup.add(box);
    }
  ground.scale = 10;
  car.scale = 0.3;

  drawSprites();
}
function keyPressed(){
  if(keyCode === 32 && car.y >= 315){
  car.velocityY = -4 ;
}
}