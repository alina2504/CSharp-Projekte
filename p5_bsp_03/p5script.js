var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600);//Fenster wird erstellt
    colorMode(RGB, 255);//Farbe
    background(0);
    smooth();
    frameRate(60);
}

function draw() {
    background(0);
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}