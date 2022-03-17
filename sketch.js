let zombies = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let j = 0; j < 20; j++){
  zombies.push( new Walker());
  }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

function draw() {
  background(251,244,225);
  
  for (let j = 0; j < zombies.length; j++){
  zombies[j].tampilan();
  zombies[j].gerak();
  zombies[j].cekBatas();
  }
}


class Walker {
  constructor(){
    this.location = createVector(random (width/4), random(height/4));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(-0.01,0.01);

  }
  
  tampilan(){
    strokeWeight(2);
    fill(random(251),random(180),random(209));
    arc(this.location.x, this.location.y,45,45,radians(380),radians(random(290-340)));
    fill('black');
    ellipse(this.location.x-2, this.location.y-15,4,4)
  }
  
  gerak(){
    var mouse = createVector(mouseX, mouseY);
  fill(0,191,255);
  ellipse (mouse.x,mouse.y,80,70);
  fill (255,255,255);
  ellipse (mouse.x,mouse.y+5,76,60);
  //mata
  fill (255,255,255);
  ellipse(mouse.x-8,mouse.y-21,16,20);
  ellipse(mouse.x+9,mouse.y-21,16,20);
  fill (20);
  ellipse(mouse.x-4,mouse.y-20,6,12);
  ellipse(mouse.x+4,mouse.y-20,6,12);
  //hidung
  fill(255,0,0)
  ellipse(mouse.x,mouse.y-8,12,11.2);
  //bibir
  fill(255,255,255);
  arc (mouse.x,mouse.y+7,60,40,0,600);
  line (mouse.x,mouse.y-3,mouse.x,mouse.y+26);
  //kumis
  strokeWeight(1)
  line (mouse.x+4,mouse.y+1,mouse.x+17,mouse.y-2);
  line (mouse.x+4,mouse.y+3,mouse.x+19,mouse.y+1);
  line (mouse.x+4,mouse.y+5,mouse.x+18,mouse.y+5);
  line (mouse.x-4,mouse.y+1,mouse.x-17,mouse.y-2);
  line (mouse.x-4,mouse.y+3,mouse.x-19,mouse.y+1);
  line (mouse.x-4,mouse.y+5,mouse.x-18,mouse.y+5);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (1,8);
    
    arahMouse.normalize();
    arahMouse.mult(0.3); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}



