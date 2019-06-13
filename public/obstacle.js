class Obstacle{
    constructor(image,speed){
        this.width=floor(random(30,60));
        this.height=floor(random(50,80));
        this.pos=createVector(width,height-2-this.height);
        this.velcoity=createVector(-speed,0);
        this.acceleration=createVector(0,0);
        this.crossed=false;
        this.img=image;
    }
    show(){
        stroke(0);
        // rect(this.pos.x,this.pos.y,this.width,this.height);
        image(this.img,this.pos.x-10,this.pos.y-10,this.width+20,this.height+10);
    }
    update(){  
        this.velcoity.add(this.acceleration);
        this.pos.add(this.velcoity);
        this.acceleration.x=0
        this.acceleration.y=0;
    }
}