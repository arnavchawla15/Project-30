class Bob{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 7.8
        }

        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill("silver");
        ellipse(this.body.position.x,this.body.position.y);
        pop();
    }
}