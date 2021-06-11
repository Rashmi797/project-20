
var garden, cat, mouse, catImg2, mouseImg2,keyCode


function preload() {
    //load the images here
    garden=loadImage("garden.png")
    cat=loadImage("cat1.png")
    mouse=loadImage("mouse1.png")
    catImg2=loadImage("cat2.png","cat3.png","cat4.png")
    mouseImg2=loadImage("mouse2.png","mouse3.png","mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(200,200,10,10)
    cat.addImage("cat",cat)

    mouse=createSprite(300,300,10,10)
    mouse.addImage("mouse", mouse)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x = mouse.x < (cat.width - mouseWidth)/2)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2)
    mouse. changeAnimation("mouseTeasing")
    mouse.frameDelay = 25 
}

if(keyCode === RIGHT_ARROW){
    cat.addAnimation("catRunning", catImg2)
    cat. changeAnimation("catRunning")

}

}
