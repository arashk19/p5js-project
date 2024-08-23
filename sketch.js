let buildings = [];
let circles = [];
let backgroundColor;

function setup() {
  createCanvas(800, 600);
  backgroundColor = color(30, 30, 50);

  // Initialize buildings (rectangles)
  for (let i = 0; i < 5; i++) {
    buildings.push({
      x: i * 150,
      y: height - random(100, 300),
      w: 80,
      h: random(100, 300),
      speed: random(1, 3),
    });
  }

  // Initialize circles representing the flow of traffic
  for (let i = 0; i < 20; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      r: random(10, 30),
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2),
    });
  }
}

function draw() {
  background(backgroundColor);

  // Draw and animate buildings
  for (let building of buildings) {
    fill(100, 100, 150);
    building.y += building.speed;
    if (building.y > height) building.y = -building.h; // Loop the movement
    rect(building.x, building.y, building.w, building.h);
  }

  // Draw and animate circles (traffic)
  for (let circ of circles) {
    fill(200, 100, 100, 150);
    circ.x += circ.xSpeed;
    circ.y += circ.ySpeed;

    // Bounce off walls
    if (circ.x < 0 || circ.x > width) circ.xSpeed *= -1;
    if (circ.y < 0 || circ.y > height) circ.ySpeed *= -1;

    ellipse(circ.x, circ.y, circ.r * 2);
  }
}

function mousePressed() {
  // Change background color when the mouse is pressed, like a burst of energy
  backgroundColor = color(random(50, 100), random(50, 100), random(100, 200));
}

function keyPressed() {
  // Press any key to change the color palette, representing a change in mood
  for (let building of buildings) {
    building.speed = random(1, 5); // Adjust speed dynamically
  }
  for (let circ of circles) {
    circ.xSpeed = random(-3, 3);
    circ.ySpeed = random(-3, 3);
  }
}
