canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx=5;
cary=225;

function add() {
	background_tag= new Image();
	background_tag.onload=uploadBackground;
	background_tag.src= background_image;

	greencar_tag= new Image();
	greencar_tag.onload=uploadgreencar;
	background_tag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_tag,carx,cary,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if( cary >= 0){
         
		cary=cary-10;
		uploadBackground();
		uploadgreencar();

   }	
}

function down()
{
	if( cary <= 600){
         
		roverY=roverY+10;
		uploadbackground();
		uploadrover();

   }
}

function left()
{
	if( carx >= 0){
         
		carx=carx-10;
		uploadBackground();
		uploadgreencar();

   }
}

function right()
{
	if( carx <= 0){
         
		carx=carx+10;
		uploadBackground();
		uploadgreencar();

   }
}
