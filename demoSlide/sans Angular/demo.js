var selectedSlide = 0;

// Timings d'apparition des div pour chaque slide, en millisecondes
var timings = [
    [1000, 3000, 5000],
    [1000, 4000, 7000]
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
    // Set slide n as the currently displayed one
    document.getElementById("slide-"+old).style.opacity = 0;
    document.getElementById("slide-"+n).style.opacity = 1;
}

// Start with slide 1 when document is loaded :
window.addEventListener ("load", function(){selectSlide(0)});
