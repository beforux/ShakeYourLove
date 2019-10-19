var canvas = document.getElementById("carImage");

var context = canvas.getContext("2d");

var mouseClickPositions = [];

var imageObj = new Image();
imageObj.onload = function(){
	renderGraphics();	
}

// var urls = [
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLWFkDXvnuoLoMcroxmfpKdlnkA1m81FfcmGnzrgTPqDfnlcUWA",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtElevgGUDMyG2AIxxbLa3U9askmXEJ3Bk30RjxofAuopJuEqrEg",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MeuXZs5eFiPmHclqtKqvlN4omZjBtAdYu7e6f7Hz9o9neT2d9w",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFosgS-I6KR5UCk4Xg1AyIieqB5Dc9b0PWbbaS9u-QYwngUrHN",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3np7uKCVNk9u_f2v9LzQfxPp6ml7J4RtxKrPTGAMERiRjVh5X5A",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9sbjeDr1rq8EFCMPztywOknuKuSiNx3mAhxyYamd6I7DLFLjNQ"
// ]
// for (var i = 0; i < urls.length; i++) {
//        imageObj.src = urls[i];
 
// }

function foo()
{
	if (mouseClickPositions.length > 0 ) {
		alert("Submit Successful!");
 		imageObj.src = urls[i+1];
 		
	}
	else {
		alert("You should mark the image before submition!");
	}		 

}


function getMousePos(evt){

	var mousePosX = evt.clientX;
	var mousePosY = evt.clientY;
	var rect = canvas.getBoundingClientRect();
	var xCoord = mousePosX - rect.left;
	var yCoord = mousePosY - rect.top;

	return{xCoord,yCoord};

}

function renderGraphics(){

    context.clearRect(0,0, canvas.width,canvas.height);
    context.drawImage(imageObj,0,0);
	var width = 10;
	var height = 10;
	context.fillStyle = "red";

	if (mouseClickPositions.length > 0){
		for(i = 0; i < mouseClickPositions.length; i++){
			var curMousePos = mouseClickPositions[i];
		    context.fillRect(curMousePos.xCoord,curMousePos.yCoord,width,height);
            
            if (i == 0){
			context.beginPath();
		}
		if(i>0){
			context.moveTo(mouseClickPositions[i-1].xCoord,mouseClickPositions[i-1].yCoord);
			context.lineTo(curMousePos.xCoord,curMousePos.yCoord);
			context.strokeStyle = "blue";
			context.stroke();
		}


		}



	}


}

canvas.addEventListener("mousedown", function(evt){
	var mousePos = getMousePos(evt);
	mouseClickPositions.push(mousePos);	
    renderGraphics();
	
},false);

window.addEventListener("keypress" , function(evt){
	mouseClickPositions.pop();
	renderGraphics();
}

	);




