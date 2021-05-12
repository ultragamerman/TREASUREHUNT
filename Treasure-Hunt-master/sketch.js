var bg,bg2,form,system,code,security;
var score=0,input1,input2,input3;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  if(score<3){
    textSize(32);
    text("Score:"+score,500,250);
  }
  if(score==3){
    background(bg2);

    textSize(50);
    text("TREASURE UNLOCKED!",250,250);
  }
  // Add code to display the end screen


  drawSprites()
}