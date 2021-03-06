let vehicle;
let food = [];
let poison = [];

function setup() {
  createCanvas(1600, 700);
  vehicle = new Vehicle(width / 2, height / 2);
  for (let i = 0; i < 10; i++) {
    food.push(createVector(random(width), random(height)));
  }
  for (let i = 0; i < 10; i++) {
    poison.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(50);

  for (let i = 0; i < food.length; i++) {
    fill(0, 255, 0);
    noStroke();
    ellipse(food[i].x, food[i].y, 8, 8);
  }
  // for (let i = 0; i < poison.length; i++) {
  //   fill(255, 0, 0);
  //   noStroke();
  //   ellipse(poison[i].x, poison[i].y, 8, 8);
  // }

  vehicle.eat(food);
  // vehicle.eat(poison);
  // vehicle.seek(food);
  vehicle.update();
  vehicle.display();
}