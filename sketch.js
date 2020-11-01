
var bullet,wall;
var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)
	thinkness=random(22,83)

	bullet=createSprite(50, 200, 30,5);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200,thickness,height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {


 background(0);

if(wall.x-bullet.x < (bullet.width+wall.width)/wall.thickness * wall.thickness * wall.thickness)
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/22500;
	if(damage>180)
	{
		bullet.shapeColor=color(255,0,0);
		}

	if(damage<180 && damage>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(damage<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  
   
bullet.shapeColor = (225)
  hasCollided();
  drawSprites();
 
} 

function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=lbullet.x + lbullet.width;
	wallLeftEdge=wall.x;
	if(bulletRightEdge>=wallLeftEdge)
	{
		return true;
	}
		return false;
}
	if(hasCollided(bullet,wall))
	{
	bullet.velocityX = 0;
	var damage=0.5 * weight * speed * speed/(wall.thickness *wall.thickness *wall.thickness);

	if(damage>10)
	{
		wall.shapeColor=color(225,0,0);
	}

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0)

	}

}
