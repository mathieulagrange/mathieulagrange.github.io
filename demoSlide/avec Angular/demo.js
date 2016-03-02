/* $timeout est un service Angular qui fonctionne exactement comme le standard setTimeout de Javascript */
/* mais en effectuant automatiquement le "model checking" Angular. Il faut déclarer ic que tu vas utiliser ce service.*/
app.controller ("Demo", function ($scope, $timeout) {

    $scope.selectedSlide = 0;

// Timings d'apparition des div pour chaque slide, en millisecondes
var timings = [
    [1000, 3000, 6000], 
    [1000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
    [1000, 3000, 5000, 7000, 9000, 11000],
    [1000, 3000, 5000, 7000, 9000, 11000, 13000, 15000],
    [1000, 3000, 5000, 8000, 1000, 12000],
    [1000, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000],
    [1000, 6000, 10000, 15000, 19000, 23000, 27000, 33000, 35000, 37000],
    [1000, 3000, 5000, 7000],
    [1000, 3000, 5000],
    [1000, 3000, 6000, 8000, 10000], 
    [1000, 3000, 6000, 10000, 13000, 15000, 17000], 
];

 /*   $scope.opacity = [
	[0, 0, 0],
	[0, 0, 0]
    ];
    
    */

    $scope.selectSlide = function (n) {
      console.log(n+" "+$scope.selectedSlide);
       if (n > 8 && $scope.selectedSlide != 0 && $scope.selectedSlide != 9) return;


	$scope.opacity = timings.map(function(v){return v.map(function(){return 0;});});

	// set timers to set opacities to 1
	timings[n].forEach(function(time, index) {
	    $timeout(function(){$scope.opacity[n][index] = 1;}, time);
	});
	// Set slide n as the currently displayed one
	$scope.selectedSlide = n;
       
        if (n == 0) {setTimeout(function(){ $scope.selectSlide(9)}, timings[n][timings[n].length-1]+4000);}
	if (n == 9){setTimeout(function(){ $scope.selectSlide(10)}, timings[n][timings[n].length-1]+5000);}
    }

    // Start with slide 1
    $scope.selectSlide(0);

});
