class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.position = createVector(x, y);
    this.r = 6;
    this.maxspeed = 5;
    this.maxforce = 0.5;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  applyForce(force) {
    this.acceleration.add(force);
  }

  eat(list) {
    let record = Infinity;
    let closest = null;
    for (let i = 0; i < list.length; i++) {
      let d = this.position.dist(list[i]);
      if (d < record) {
        record = d;
        closest = i;
      }
    }

    if (record < 5) {
      list.splice(closest, 1);
    } else if (closest > -1) {
      this.seek(list[closest]);
    }

  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);

    desired.setMag(this.maxspeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);

    this.applyForce(steer);
  }
  display() {
    // let theta = this.velocity.heading() + PI/2;
    fill(255);
    ellipse(this.position.x, this.position.y, this.r * 3);
  }
}