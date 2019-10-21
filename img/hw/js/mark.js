var canvas = document.getElementById("carImage");

var context = canvas.getContext("2d");

var mouseClickPositions = [];

var imageObj = new Image();
imageObj.onload = function(){
	renderGraphics();	
}


// var urls = [
// 	"http://beforapps.com/img/cars/1.jpeg",
// 	"http://beforapps.com/img/cars/2.jpeg",
// 	"http://beforapps.com/img/cars/3.jpeg",
// 	"http://beforapps.com/img/cars/4.jpeg",
// 	"http://beforapps.com/img/cars/5.jpeg"
// ]
// // for (var i = 0; i < urls.length; i++) {
// //        imageObj.src = urls[i];
 
// //  }

// var i=0;

// imageObj.src = urls[i];

var imagePath = turkGetParam('image');
imageObj.src = imagePath;
turkSetAssignmentID();

function foo()
{
	if (mouseClickPositions.length > 0 ) {
		alert("Submit Successful!");
		// i++;
 	    // imageObj.src = urls[i];		
	}

	else {
		alert("You should mark the image before submition!");
	}	

context.clearRect(0,0, canvas.width,canvas.height);
// 	document.getElementById("coordinates").value = JSON.stringify{coordinates};


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




