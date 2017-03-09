var ellipseRadius = 20; //Größe des Kreises

function setup() {
    createCanvas(800, 600);//Fenster wird erstellt
    colorMode(RGB, 255);//Farbe
    background(0);//Hintergrund
    smooth();
    frameRate(60);
}

function draw() {
    noStroke();
    fill( 100,10 , 100, 25); // ( R, G, B, A ) //Farbe des Kreises
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}