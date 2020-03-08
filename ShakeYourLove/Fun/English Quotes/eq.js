var quotes = [
"Two people in love, alone, isolated from the world, that's beautiful.",
"The greatest victory in life is to rise above the material things that we once valued most.",
"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
"When you love something it loves you back in whatever way it has to love.",
"But there is only one thing that has power completely, and this is love."
]

randomData = Math.floor(Math.random()*5);

document.getElementById("myPoem").innerHTML = quotes[randomData];

var i = 0;

function changePoem(){
	if (i<quotes.length) {
	   i++;
       document.getElementById("myPoem").innerHTML = quotes[i] ;
	}
	else{
		alert("You are going to the end of poems.")
	}

}

var date = new Date();
var n = date.toDateString();
document.getElementById('time').innerHTML = n;

