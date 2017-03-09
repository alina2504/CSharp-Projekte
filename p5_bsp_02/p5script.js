var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600); //Verändert Größe des Fensters
    colorMode(RGB, 200);
    background(50);//Verändert Hintergrundfarbe
    smooth();
    frameRate(100);
}

function draw() {
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}//Kreis wird an der stelle gezeichnet an der die Maus ist 