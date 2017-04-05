window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        height = canvas.height = window.innerHeight,
        width = canvas.width = window.innerWidth;

    
};

var v1 = vector.create(10, 5);
var v2 = vector.create(3,4);
v1.addFrom(v2);
console.log(v1.getX(), v1.getY(), v1.getLength(), v1.getAngle());
console.log(v2.getX(), v2.getY(), v2.getLength(), v2.getAngle());