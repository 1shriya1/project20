var movingrect, fixedrect;
var gameobject1,gameobject2;




function setup() {
  createCanvas(800,400);
   fixedrect  = createSprite(400, 200, 50, 50);
   fixedrect.shapeColor = "green";
   movingrect  = createSprite(200, 100, 50, 50);
   movingrect.shapeColor = "green";
   gameobject1  = createSprite(100, 100, 50, 50);
   gameobject1.shapeColor = "pink";
   gameobject2 = createSprite(100, 300, 50, 50);
   gameobject2.shapeColor = "blue";
   gameobject1.velocityY = 5;
   gameobject2.velocityY = -5;

}

function draw() {
  background(255,255,255); 
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(istouching(movingrect,fixedrect)){
    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"
   
  }
   else{
    fixedrect.shapeColor = "green"
    movingrect.shapeColor = "green"


   }
   bounceoff(gameobject1,gameobject2);
  drawSprites();
  
}
