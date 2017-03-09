var ellipseRadius = 100; //Größe des Kreises

function setup() {
    createCanvas(800, 600); //Fenster wird erstellt
    colorMode(RGB, 255);
    background(0); //Hintergrundfarbe
    smooth();
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    noStroke();
    fill( (mouseX/width)*100, (mouseY/height)*0, 100, 100); // ( R, G, B, A )
   //Farbbereich des Kreises
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); 
}