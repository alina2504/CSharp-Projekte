var ellipseRadius = 100; //Größe des Kreises

function setup() {
    createCanvas(800, 600); //Fenstergröße
    colorMode(RGB, 255);
    background(0); //Hintergrundfarbe
    smooth();
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 25); // ( R, G, B, A )
   //Farbe des Kreises
    stroke(255, 255, 100, 25); //Umfang des Kreises (Farbe)
    strokeWeight(2); //Breite des Umfanges
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}