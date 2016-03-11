app.controller("SlidesController", function($scope, $timeout, $interval) {
    
    $scope.selectedSlide = 0;

    // Timings d'apparition des div pour chaque slide, en millisecondes
    var timings = [
	[1000, 3000, 6000], 
	[1000, 4000, 6000, 8000, 10000, 12000, 14500, 17000, 19000, 21000],
	[1000, 3000, 5000, 7000, 9000, 11000],
	[1000, 2500, 4000, 6000, 7500, 9000, 12000, 14000],
	[1000, 3000, 5000, 8000, 10000, 12000],
	[1000, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000],
	[1000, 3000, 6000, 10000, 13500, 18000, 20000, 22000, 26000, 28000, 30000, 32000, 34400, 38000, 43000, 46000, 49000, 54000], 
	[1000, 3000, 5000, 7000],
	[1000, 3000, 5000],
	[1000, 3000, 6000], 
	[1000, 3000, 6000, 11000, 14000, 17000, 19000], 
    ];

    var myTimeouts = []; 

    var targetOpacity = timings.map(function(v){return v.map(function(){return 1;});});
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
    targetOpacity[6][7] = .7;
    targetOpacity[6][9] = .7;
    targetOpacity[6][11] = .7;
    targetOpacity[6][13] = .7;
    targetOpacity[6][17] = .6;
    targetOpacity[7][3] = .6;
    targetOpacity[8][2] = .6;
    
    $scope.slides = [
	{position: 0, text:"Poetry", html:"brautigan1.html", thumbnail:"images/headBrautigan.png", color:"#eea", textOpacity: 0},	
	{position: 1, text:"Poetry", html:"brautigan2.html", thumbnail:"images/headBrautigan.png", color:"#eea", textOpacity: 0},
	{position: 2, text:"Poetry", html:"brautigan3.html", thumbnail:"images/headBrautigan.png", color:"#eea", textOpacity: 0},
	{position: 3, text:"Literature", html:"gibson.html", thumbnail:"images/headGibson.png", color:"#eea", textOpacity: 0},
	{position: 4, text:"Philosophy", html:"castoriadis.html", thumbnail:"images/headCastoriadis.png", color:"#eea", textOpacity: 0},
	{position: 5, text:"Science", html:"bacon.html", thumbnail:"images/headBacon.png", color:"#eea", textOpacity: 0},
	{position: 6, text:"Wisdom", html:"elephant.html", thumbnail:"images/headElephant.png", color:"#eea", textOpacity: 0},
	{position: 7, text:"Religion", html:"turing.html", thumbnail:"images/headTuring.png", color:"#eea", textOpacity: 0},
	{position: 8, text:"Research", html:"bachelard.html", thumbnail:"images/headBachelard.png", color:"#eea", textOpacity: 0},
	{position: 9, text:"Mathematics", html:"vonNeumann.html", thumbnail:"images/headVonNeumann.png", color:"#eea", textOpacity: 0},
	{position: 10, text:"Computer Science", html:"hoper.html", thumbnail:"images/headHoper.png", color:"#eea", textOpacity: 1}
    ];

    $scope.selectSlide = function(n) {
	console.log(n+" "+$scope.selectedSlide);
//	if (n > 8 && $scope.selectedSlide != 0 && $scope.selectedSlide != 9) {
//	    return;
//	}

	$scope.opacity = timings.map(function(v){return v.map(function(){return 0;});});
	while (myTimeouts.length) $timeout.cancel(myTimeouts.pop());

	// set timers to set opacities to 1
	timings[n].forEach(function(time, index) {
	    mt = $timeout(function(){$scope.opacity[n][index] = 1;}, time);
	    myTimeouts.push(mt);
	    if (targetOpacity[n][index] != 1) {
		mt = $timeout(function(){$scope.opacity[n][index] = targetOpacity[n][index];}, time+500);
		myTimeouts.push(mt);
	    }
	});
	// Set slide n as the currently displayed one
	$scope.selectedSlide = n;
	
 //       if (n == 0) {setTimeout(function(){ $scope.selectSlide(9)}, timings[n][timings[n].length-1]+4000);}
//	if (n == 9){setTimeout(function(){ $scope.selectSlide(10)}, timings[n][timings[n].length-1]+5000);}
    }	

    // first slide to show
    $scope.selectSlide(6);
});
