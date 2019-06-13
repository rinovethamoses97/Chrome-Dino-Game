var dino;
var obstacles=[];
function setup(){
    createCanvas(800,300);
    background(0);
    dino=new Dino();
}
function draw(){
    if(frameCount%80==0){

        obstacles.push(new Obstacle());
    }
    background(0);
    dino.update();
    dino.show();
    for(var i in obstacles){
        obstacles[i].update();
        obstacles[i].show();
        if(dino.hits(obstacles[i])){
            alert("Game Over");
            noLoop();
        }
        if(obstacles[i].pos.x+obstacles[i].width<dino.pos.x && !obstacles[i].crossed){
            obstacles[i].crossed=true;
            dino.score++;
        }
    }
    for(var i=0;i<obstacles.length;i++){
        if(obstacles[i].pos.x<=0){
            obstacles.splice(i,1);
            i--;
        }
    }
    stroke(255);
    noFill();
    text("Score= "+dino.score,730,30);
}
function keyPressed(){
    if(keyCode==32){
        if(!dino.inAir)
            dino.jump();
    }
}