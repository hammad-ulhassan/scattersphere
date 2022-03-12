var r = 250;
var step = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  colorMode(RGB);

  strokeWeight(2.5);
  noFill();
}

function draw() {
  background(10, 0, 50);
  orbitControl(4, 4);

  rotateY(90); 
  rotateZ(65);

  let thetaM = map(mouseX, 0, width, 1, 10)
  let phiM = map(mouseY, 0, height, 1, 10)
  bumpySphere(thetaM, phiM);
}

function normalSphere() {
  for (let phi = 0; phi < 180; phi += step) {
    beginShape();
    for (let theta = 0; theta < 360; theta += step) {
      let x = r * cos(phi);
      let y = r * sin(phi) * sin(theta);
      let z = r * sin(phi) * cos(theta);
      
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

function bumpySphere(thetaM, phiM) {
  for (let phi = 0; phi < 180; phi += step) {
    beginShape(POINTS);
    for (let theta = 0; theta < 360; theta += step) {
      let x = r * (1+0.2*sin(theta*thetaM)*sin(phi*phiM)) * cos(phi);
      let y = r * (1+0.2*sin(theta*thetaM)*sin(phi*phiM)) * sin(phi) * sin(theta);
      let z = r * (1+0.2*sin(theta*thetaM)*sin(phi*phiM)) * sin(phi) * cos(theta);
      stroke(x+255, y+171, z)
      // stroke(0,0,255)
      vertex(x, y, z);
    }
    endShape();
  }
}
