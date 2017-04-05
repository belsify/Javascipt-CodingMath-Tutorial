window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        height = canvas.height = window.innerHeight,
        width = canvas.width = window.innerWidth,

        //circle path variables
        centerX = width / 2,
        centerY = height / 2, 
        x , y,
        angle = 0,
        radius = 200,
        speed = 0.01,

        //arrow variables
        // arrowX = width / 2,  //if you want the base of rotation is in center of screen
        // arrowY = height / 2,  //if you want the base of rotation is in center of screen
        dx, dy,
        arrowAngle = 0;


    render();

    function render(){
        context.clearRect(0, 0, width, height);

        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        context.beginPath();
        context.save();
        context.translate(x, y);
        context.rotate(arrowAngle);
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20,0);
        context.moveTo(20, 0);
        context.lineTo(10,-10);
        context.moveTo(20, 0);
        context.lineTo(10,10);
        context.stroke();
        context.restore();
        // context.arc(x, y, 10,0,Math.PI * 2, false); //the point
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }

    document.body.addEventListener("mousemove", function(event){
        // dx = event.clientX - x; //base rotation is center screen
        // dy = event.clientY - y; //base rotation is center screen
        dx = event.clientX - x; //rotation base is the position of the arrow
        dy = event.clientY - y; //rotation base is the position of the arrow
        arrowAngle = Math.atan2(dy, dx);
    });
};