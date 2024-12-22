let img;
let testImg;
let points = [];
const numPoints = 15000;

function preload() {
  img = loadImage("C:/Users/karti/Pictures/Camera Roll/WIN_20240216_18_18_21_Pro.jpg", 
                  () => console.log('Image loaded successfully'), 
                  (err) => console.error('Image failed to load', err));
}

function setup() {
  createCanvas(400, 400); // Fixed dimensions for debugging
  img.loadPixels(); // Ensure image pixels are loaded
  if (img.width > 0 && img.height > 0) {
    console.log('Image width:', img.width);
    console.log('Image height:', img.height);
    testImg = createImage(img.width, img.height);
    testImg.loadPixels();
    for (let i = 0; i < img.width; i++) {
      for (let j = 0; j < img.height; j++) {
        testImg.set(i, j, img.get(i, j));
      }
    }
    testImg.updatePixels();
    console.log('Image processed into testImg');

    // Initialize points
    for (let i = 0; i < numPoints; i++) {
      points.push(createVector(random(width), random(height)));
    }
  } else {
    console.error('Image is not loaded or has invalid dimensions');
  }
}

function draw() {
  background(0, 10); // Semi-transparent background

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    
    let angle = noise(p.x * 0.005, p.y * 0.005, frameCount * 0.01) * TWO_PI * 2;
    let speed = noise(p.x * 0.005, p.y * 0.005, frameCount * 0.01 + 1000) * 2;
    
    let newX = p.x + cos(angle) * speed;
    let newY = p.y + sin(angle) * speed;
    
    let c = testImg.get(int(p.x), int(p.y));
    stroke(c);
    strokeWeight(0.5);
    line(p.x, p.y, newX, newY);
    
    points[i].set(newX, newY);
    
    if (newX < 0 || newX > width || newY < 0 || newY > height) {
      points[i].set(random(width), random(height));
    }
  }
}
