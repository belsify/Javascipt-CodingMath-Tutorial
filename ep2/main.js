window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        height = canvas.height = window.innerHeight,
        width = canvas.width = window.innerWidth;
    
    context.translate(0, height / 2);
    context.scale(1, -1);
    //sinA = opposite / hypotenuse (sin)
    //cosA = adjascent/ hypotenuse (cos)
    //tanA = opposite / hypotenuse (tan)
    //1 radian = 57.3 degrees (r)
    //1 circle = 2 PI radian
    //degress = (radian * 180) / PI
    //radian = (degrees * PI) / 180

    for(var angle = 0; angle < Math.PI * 2; angle += 0.01){
        var x = angle * 200,
            y = Math.sin(angle) * 200;

        context.fillRect(x,y,5,5);
    }
};