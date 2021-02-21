var tot = 0;
var buenos = 0;
function setup() {
 createCanvas(530, 700);
 background(200);
 fill(240);
 quad(0,500,0,700,530,700,530,500);
 button1 = createButton("agrega 1");
 button1.position(500,200 );
 button1.mousePressed(agrega1);

 button5 = createButton("agrega 5");
 button5.position(500,240 );
 button5.mousePressed(agrega5);

 button10 = createButton("agrega 10");
 button10.position(500,280 );
 button10.mousePressed(agrega10);

 button100 = createButton("agrega 100");
 button100.position(500,320 );
 button100.mousePressed(agrega100);

 button500 = createButton("agrega 500");
 button500.position(500,360 );
 button500.mousePressed(agrega500);

 button5000 = createButton("agrega 5000");
 button5000.position(500,380 );
 button5000.mousePressed(agrega5000);
}

function draw() {
 stroke(0)
 for (var i=0; i<5; i++){
  line(0,100*i+50,width,100*i+50);
 }

 //for (var k = 0; k < x.legth; k++){
    //x[k].display();
  //}
}


function Lineas(posx,posy,angu){
  this.x = posx;
  this.y = posy;
  this.angle = angu;
  this.esquina1x = posx - 50 *cos(angu);
  this.esquina1y = posy - 50 *sin(angu);
  this.esquina2x = posx + 50 *cos(angu);
  this.esquina2y = posy + 50 *sin(angu);
  //this.colors = function(){
    //if floor(this.esquina2x / 100) > floor(this.esquina1x / 100){
      //return color(0,255,0);
    //} else{
      //return color(255,0,0);
    //}
  //}
  this.display = function() {
    if (floor((this.esquina2y+50)/100) > floor((this.esquina1y+50)/100)) {
      stroke(0,150,50);
      line(this.esquina1x, this.esquina1y, this.esquina2x, this.esquina2y);
    } else {
      stroke(200,0,50);
      line(this.esquina1x, this.esquina1y, this.esquina2x, this.esquina2y);
    }
    fill(240);
    stroke(240);
    quad(0,500,0,700,530,700,530,500);

    fill(0);
    stroke(0);

    text("Total de agujas lanzadas:",330,520);
    text(tot,480,520);

    text("Agujas que cortan un renglón:",310,540);
    text(buenos,480,540);

    text("Aproximación de Pi",310,560);
    text(2*tot/buenos,480,560);
  };
}

function agrega1(){
  for (var p = 0; p < 1; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega5(){
  for (var p = 0; p < 5; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega10(){
  for (var p = 0; p < 10; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega100(){
  for (var p = 0; p < 100; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega500(){
  for (var p = 0; p < 500; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega5000(){
  for (var p = 0; p < 5000; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
