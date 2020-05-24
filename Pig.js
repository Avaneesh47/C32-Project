class Pig{
    constructor(x,y){
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.image = loadImage("assets/face2.png");
        this.x = x;
        this.y = y;
        World.add(world,this.body);
        this.Visibility = 255;
    }
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            push();
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,70,70);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }

    score(){
        if(this.Visibility<0 && this.Visibility>-1005){
            score++;
        }
    }
}