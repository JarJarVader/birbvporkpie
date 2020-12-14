class Firebolt{
    constructor(x,y,w,h,angle){
    
        var b_options = {
    
            restitution : 1, 
            friction:2,
            density:1
          }
            this.object = Bodies.rectangle(x,y,w,h,b_options)
            this.w = w;
            this.h = h;
            Matter.Body.setAngle(this.object,angle);
            World.add(world,this.object)
    }
    disrespect(){
        push();
        translate(this.object.position.x,this.object.position.y)  ;
        rotate(this.object.angle);
        fill("crimson");
      //  stroke("green")
       // strokeWeight(8)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop();
    }
    }