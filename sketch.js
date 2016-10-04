var points = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(49, 89, 232);

  var point = {
    x: mouseX,
    y: mouseY
  }
  points.push(point);

  if (points.length - 1) {
    points.splice(0, 5);
  }

  for (var i = points.length - 1; i >= 0; i--) {
    stroke(0);
    strokeWeight(3);
    fill(random(200));
    ellipse(points[i].x, points[i].y, i + 70, i + 90); // create first ellipse 
    if (mouseIsPressed) {
      fill(222, 78, 229);
      ellipse(points[i].x, points[i].y, i + 150, i + 200); // on mouse click, create second, bigger ellipse  
    }
  }
}