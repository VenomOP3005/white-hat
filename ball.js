class Ball {
constructor(x, y, radius) {
    var option = {
        isStatic: false,
        restitution : 0.3,
        desnsity : 1.2,
        friction : 0
    }
    this.body = Bodies.circle(x, y, width, height, options);
    this.radius = radius;
}

display(){
ellipseMode( radius);
fill("red");

circle(this.position.x, this.position.y, this.radius);

}
};