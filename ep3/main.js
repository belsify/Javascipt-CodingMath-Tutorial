window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        height = canvas.height = window.innerHeight,
        width = canvas.width = window.innerWidth;
    
    //sin = opposite / hypotenuse (sin)
    //cos = adjascent/ hypotenuse (cos)
    //tan = opposite / hypotenuse (tan)
    //1 radian = 57.3 degrees
    //1 circle = 2 * PI * radian
    //degress = (radian * 180) / PI
    //radian = (degrees * PI) / 180

    var centerY = height * .5,
        centerX = width * .5,
        baseRadius = 100,
        baseAlpha = 0.5,
        alphaOffset = 0.5,
        offset = 50,
        speed = 0.1,
        angle = 0;

    render();

    function render(){
        var radius = baseRadius + Math.sin(angle) * offset;
        var alpha = baseAlpha + Math.sin(angle) * alphaOffset;
        context.fillStyle = "rgba(0,0,0," + alpha + ")";
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        // context.fillStyle = "rgba(0,0,0,1)";
        context.arc(centerX - radius * 3, centerY, radius, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
};