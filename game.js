//Flappy Game

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var window_Height = window.innerHeight;
var window_Width = window.innerWidth;

canvas.width = window_Width;
canvas.height = window_Height;

canvas.style.background = "#90A9B7";

var xpos = 200;
var recWid = 100;
while(xpos < window_Width) { 
    var recHig = Math.random() * ((window_Height- 200) - 100) + 100;
    var ypos = window_Height - recHig;
    context.fillRect(xpos, ypos, recWid, recHig);
    xpos+= (recWid * 2);
}

//the canvas resets to a new obstacle course every time the play button is pressed

//the bird moves forward and up and down based on button clicks
class avatar {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 5;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.endPath();
    }

    update() {
        //context.clearRect(0, 0 , window_Width, window_Height);
        this.draw(context);
        this.x += this.dx;
        this.y += this.dy; 
    }
}

let createAvatar = function(avatar) {
    avatar.draw(context);
}

let my_avatar = new avatar(50, 200, 30, "black", 1);

createAvatar(my_avatar);

let updateAvatar = function() {
    requestAnimationFrame(updateAvatar);
    my_avatar.update();
}

updateAvatar();


//game ends when the bird hits an obstacle in the canvas
//scoreboard saves scores 
















/*class Circle{
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.endPath();
    }
}



let all_circles = [];

let createCircle = function(circle) {
    circle.draw(context);
}

for (var nums = 0; nums < 10; nums++) {
    let random_x = Math.random() * window_Width;
    let random_y = Math.random() * window_Width;
    let my_circle = new Circle(random_x, random_y, 50, "black");
    all_circles.push(my_circle);
    createCircle(all_circles[nums]);
}*/
