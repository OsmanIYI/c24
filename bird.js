class Bird {
    constructor(x,y){
       var options =  {
           restitution: 0.8, 
           friction:0.3,
           density: 1.0, 
       }
       this.width = 50;
       this.height = 50;
       
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height)
        pop();
    }
}