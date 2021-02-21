var sliderx;
var slidery;
var d;
var sliderang;

function setup(){
  createCanvas(530,700);
  background(200);
  fill(240);
  quad(0,500,0,700,530,700,530,500);
  sliderx = createSlider(50, 450, 210);
  sliderx.position(300, 520);
  slidery = createSlider(100, 400, 250);
  slidery.position(300, 540);
  sliderang = createSlider(0, 360, 100);
  sliderang.position(300, 560);
}

function draw() {
 angleMode(DEGREES);
 background(200);
 fill(240);
 quad(0,500,0,700,530,700,530,500);
 stroke(0)
 for (var i=0; i<5; i++){
  line(0,100*i+50,width,100*i+50);
 }

 var esquina1x = sliderx.value() - 50 *cos(sliderang.value());
 var esquina1y = slidery.value() - 50 *sin(sliderang.value());
 var esquina2x = sliderx.value() + 50 *cos(sliderang.value());
 var esquina2y = slidery.value() + 50 *sin(sliderang.value());

 if (floor((esquina2y+50)/100) != floor((esquina1y+50)/100)) {
      stroke(0,150,50);
      line(esquina1x, esquina1y, esquina2x, esquina2y);
    } else {
      stroke(200,0,50);
      line(esquina1x, esquina1y, esquina2x, esquina2y);
    }

}
