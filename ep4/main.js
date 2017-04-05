window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        height = canvas.height = window.innerHeight,
        width = canvas.width = window.innerWidth,
        
        centerX = width / 2,
        centerY = height / 2,
        xRadius = 200,
        yRadius = 400,
        xAngle = 0,
        yAngle = 0,
        xSpeed = 0.1,
        ySpeed = 0.131,
        x, y;

    render();

    var numObjects = 20,
        angle = 0,
        slice = Math.PI * 2 / numObjects,
        radius = 200,
        sX, sY;

    
    function render(){
        //animation hovering
        //aka Lissajous Curves
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(xAngle) * xRadius;
        y = centerY + Math.sin(yAngle) * yRadius;
        context.beginPath();
        context.arc(x, y, 10,0,Math.PI * 2, false);
        context.fill();

        xAngle += xSpeed;
        yAngle += ySpeed;
        
        //creating mini circles and plotting in the arc
        for(var i = 0; i < numObjects; i++){
            angle = i * slice;
            sX = centerX + Math.cos(angle) * radius;
            sY = centerY + Math.sin(angle) * radius;
            context.beginPath();
            context.arc(sX, sY, 10,0,Math.PI * 2, false);
            context.fill();
        }

        requestAnimationFrame(render);
        
    }

};