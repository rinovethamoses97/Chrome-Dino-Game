var dino;
function setup(){
    createCanvas(800,300);
    background(0);
    dino=new Dino();
}
function draw(){
    background(0);
    dino.update();
    dino.show();
}
function keyPressed(){
    if(keyCode==32){
        if(!dino.inAir)
            dino.jump();
    }
}