class Wall{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill(225);
        rect(this.position.x, this.position.y, this.width, this.height);
    }
}