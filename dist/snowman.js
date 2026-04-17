document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    drawGround(context);
    drawSnowText(canvas, context);

    drawSnowman(context);
    
    // tests single flake, should draw in the bottom left corner
    // drawSingleFlake(context, 20, 250);
    drawSnowflakes(context);
});

// light grey for 2/3s and brown on bottom 3rd
function drawGround(ctx) {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, 300, 300);

    ctx.fillStyle = "brown";
    ctx.fillRect(0, 200, 300, 100);
}

// three piece snowman made of circles
function drawSnowman(ctx) {
  ctx.fillStyle = "white";

    // .arc(x, y, radius, startAngle, endAngle)

  // Bottom circle
  ctx.beginPath();
  ctx.arc(150, 200, 50, 0, Math.PI * 2);
  ctx.fill();
  // Middle circle
  ctx.beginPath();
  ctx.arc(150, 120, 40, 0, Math.PI * 2);
  ctx.fill();
  // Head
  ctx.beginPath();
  ctx.arc(150, 60, 30, 0, Math.PI * 2);
  ctx.fill();
}

// draw a single diamond shaped snowflake
function drawSingleFlake(ctx, x, y) {
    const flakeSize = 10;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + flakeSize/2, y + flakeSize/2);
    ctx.lineTo(x + flakeSize, y);
    ctx.lineTo(x + flakeSize / 2, y - flakeSize / 2);
    ctx.closePath();
    
    ctx.fillStyle = "#eee";
    ctx.fill();


}

// draws 100 random snowflakes on the canvas
function drawSnowflakes(ctx) {
    for (let i = 0; i < 100; i++) {
        let x = Math.random() * 290;
        let y = Math.random() * 290;

        drawSingleFlake(ctx, x, y);
    }
}


function drawSnowText(canvas,ctx) {
  ctx.font = "80px Verdana";
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("SNOW", canvas.width/2, 10);
}

