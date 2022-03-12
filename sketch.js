let r = 400;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  colorMode(RGB);

  strokeWeight(3);
  noFill();
}

function draw() {
  background(1);
  stroke(199, 80, 88);
  orbitControl(4, 4);

  rotateY(90); 
  rotateZ(65);
  let thetaM = map(mouseX, 0, width, 25, 75)
  let phiM = map(mouseY, 0, height, 1, 10)
  bumpySphere(thetaM, phiM);
}

function normalSphere() {
  for (let phi = 0; phi < 180; phi += 5) {
    beginShape();
    for (let theta = 0; theta < 360; theta += 5) {
      let x = r * cos(phi);
      let y = r * sin(phi) * sin(theta);
      let z = r * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

function bumpySphere(thetaM, phiM) {
  for (let phi = 0; phi < 180; phi += 2) {
    beginShape(POINTS);
    for (let theta = 0; theta < 360; theta += 2) {
      let x = r * (1+0.2*sin(theta*thetaM)*sin(phi*phiM)) * cos(phi);
      let y = r * (1+0.2*sin(theta*thetaM)*sin(phi*phiM)) * sin(phi) * sin(theta);
      let z = r * (1+0.2*sin(theta*thetaM)*sin(phi*phiM)) * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape();
  }
}