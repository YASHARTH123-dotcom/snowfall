var snowflakes;
var backgroundImg
function preload(){
  
    backgroundImg = loadImage("hs/snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  
}

function draw() {

  background(backgroundImg); 
  if(frameCount%60===0){
   snowflakes= new snowflake(random(width/2-30, width/2+30), 10,10);
   snowflakes.display();
  }

  drawSprites();
}