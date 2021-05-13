class snowflake{
    constructor(x,y,r){
        var options={restitution:0.4,density:2,friction:7}
        this.r=r
        this.image=loadImage('snow5.webp');
        this.body=Body.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.psition;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
}