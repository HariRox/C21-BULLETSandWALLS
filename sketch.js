var bullet, wall, gameState, thickness, speed, weight, zone, damageAmp, damage, deformation;

function setup() {
  createCanvas(1200,400);
  gameState = 0;
  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));
  thickness = Math.round(random(22,83));
  bullet = createSprite(100, 175, 30, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1100,175, thickness, 300);
  wall.shapeColor = "blue";
  zone = createSprite(600,375, 1200, 50);
  
  damage = Math.round((0.5 * weight * speed * speed)/(thickness * thickness * thickness));
  
  if(damage >= 10){
    damageAmp = "HIGH";
  }
  else{
    damageAmp = "LOW";
  }
  
  console.log("bulletWeight = " + weight);
  console.log("bulletSpeed = " + speed);
  console.log("wallThickness = " + thickness);
  console.log("damage amplitude = " + damageAmp + " (" + damage + ")");
  console.log(gameState);
}

function draw() {
  if(gameState === 1 && damage >= 10){
    zone.shapeColor = "red";
  }
  else if(gameState === 1 && damage < 10){
    zone.shapeColor = "green";
  }
  else{
    zone.shapeColor = "white";
  }
  background(0);
  bullet.velocityX = speed/15;
  if(bullet.collide(wall)){
    gameState = 1;
  }
  drawSprites();
}