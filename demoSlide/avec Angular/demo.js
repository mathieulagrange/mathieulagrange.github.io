/* $timeout est un service Angular qui fonctionne exactement comme le standard setTimeout de Javascript */
/* mais en effectuant automatiquement le "model checking" Angular. Il faut déclarer ic que tu vas utiliser ce service.*/
app.controller ("Demo", function ($scope, $timeout) {

    $scope.selectedSlide = 0;

    // Timings d'apparition des div pour chaque slide, en millisecondes
    var timings = [
	[1000, 3000, 6000], 
	[1000, 4000, 6000, 8000, 10000, 12000, 14500, 17000, 19000, 21000],
	[1000, 3000, 5000, 7000, 9000, 11000],
	[1000, 2500, 4000, 6000, 7500, 9000, 12000, 14000],
	[1000, 3000, 5000, 8000, 10000, 12000],
	[1000, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000],
	[1000, 3000, 5000, 8000, 11500, 14000, 16000, 19000, 22000, 24000, 26000, 29000, 30400, 34000, 39000, 41000], 
	[1000, 3000, 5000, 7000],
	[1000, 3000, 5000],
	[1000, 3000, 6000], 
	[1000, 3000, 6000, 11000, 14000, 17000, 19000], 
    ];

    var targetOpacity = timings.map(function(v){return v.map(function(){return 1;});});
    //opacity.forEach(function(o) {
    //	o.fill(1);
    //});
    targetOpacity[10][6] = .6;
    targetOpacity[0][1] = .5;
    targetOpacity[9][1] = .5;
    targetOpacity[10][1] = .5;
    targetOpacity[1][9] = .6;
    targetOpacity[2][5] = .6;
    targetOpacity[3][7] = .6;
    targetOpacity[4][5] = .6;
    targetOpacity[5][9] = .6;
    targetOpacity[6][1] = .7;
    targetOpacity[6][6] = .7;
    targetOpacity[6][8] = .7;
    targetOpacity[6][10] = .7;
    targetOpacity[6][12] = .7;
    targetOpacity[6][15] = .6;
    targetOpacity[7][3] = .6;
    targetOpacity[8][2] = .6;
    
    $scope.selectSlide = function (n) {
	console.log(n+" "+$scope.selectedSlide);
	if (n > 8 && $scope.selectedSlide != 0 && $scope.selectedSlide != 9) {
	    return;
	}

	$scope.opacity = timings.map(function(v){return v.map(function(){return 0;});});

	// set timers to set opacities to 1
	timings[n].forEach(function(time, index) {
	    $timeout(function(){$scope.opacity[n][index] = 1;}, time);
	    if (targetOpacity[n][index] != 1)
		$timeout(function(){$scope.opacity[n][index] = targetOpacity[n][index];}, time+500);
	});
	// Set slide n as the currently displayed one
	$scope.selectedSlide = n;
	
        if (n == 0) {setTimeout(function(){ $scope.selectSlide(9)}, timings[n][timings[n].length-1]+4000);}
	if (n == 9){setTimeout(function(){ $scope.selectSlide(10)}, timings[n][timings[n].length-1]+5000);}
    }
    // Start with slide 1
    $scope.selectSlide(5);
});
