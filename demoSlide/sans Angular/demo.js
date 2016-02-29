var selectedSlide = 0;

// Timings d'apparition des div pour chaque slide, en millisecondes
var timings = [
    [1000, 3000, 6000], 
    [1000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
    [1000, 3000, 5000, 7000],
    [1000, 3000, 5000, 7000, 9000, 11000],
   [1000, 3000, 5000, 8000],
       [1000, 3000, 5000, 7000, 9000, 11000, 13000, 15000],
      [1000, 6000, 10000, 15000, 19000, 23000, 27000, 33000],
      [1000, 3000],
      [1000],
        [1000, 3000, 6000], 
    [1000, 3000, 6000, 10000, 13000],
  
];

function selectSlide (n) {
    var old = selectedSlide;
    selectedSlide = n;
    // Initialize all opacities to 0
    timings[old].forEach(function(t, index){
	// Au lieu de manipuler des données, on accède manuellement aux éléments du DOM
	document.getElementById("slide-"+old+"-part-"+index).style.opacity = 0;
    });
    timings[n].forEach(function(t, index){
	document.getElementById("slide-"+n+"-part-"+index).style.opacity = 0;
    });
    // Set timers to set opacities to 1
    timings[n].forEach(function(time, index) {
	setTimeout(function(){
	    document.getElementById("slide-"+n+"-part-"+index).style.opacity = 1;
	}, time);
    });

  document.getElementById("author"+old).style.opacity = 0;
	setTimeout(function(){		
	     document.getElementById("author"+n).style.opacity = 0.7;
	},timings[n][timings[n].length-1]+2000);


    
    // Set slide n as the currently displayed one
    document.getElementById("slide-"+old).style.opacity = 0;
    document.getElementById("slide-"+n).style.opacity = 1;
    
    if (n == 0) {setTimeout(function(){selectSlide(9)}, timings[n][timings[n].length-1]+4000);}
    if (n == 9){setTimeout(function(){selectSlide(10)}, timings[n][timings[n].length-1]+5000);}
    


}

// Start with slide 1 when document is loaded :
window.addEventListener ("load", function(){selectSlide(0)});
