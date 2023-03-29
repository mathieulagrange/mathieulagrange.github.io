app.controller("SlidesController", function($scope, $timeout, $interval) {

    $scope.selectedSlide = 0;

    // Timings d'apparition des div pour chaque slide, en millisecondes
    var timings = [
	[1000, 3000, 7000], // 0 poetry
	[1000, 4000, 7000, 10000, 13000, 16000, 19000, 22000, 25000, 28000, 30000, 32000], // 1 literature
	[1000, 3000, 5000, 7000, 9000, 11000], // 2 philosophy
	[1000, 3000, 6000, 9000, 12000, 15000], // 3 wisdom
	[1000, 3000, 5000, 7000, 9000, 11000, 13000, 16000, 18000, 20000], // 4 science
	[1000, 3000, 6000, 8000, 10000, 12000, 16000, 18000], // 5 religion
	[1000, 3000, 6000, 8000, 10000, 12000], // 6 research
	[1000, 3000, 5000, 7000, 9000, 11000], // 7 mathematics
	[1000, 3000, 5000, 7000], // 8 cs
	[1000, 3000, 7000], // 9 poetry
	[1000, 3000, 6000, 11000, 14000, 17000, 19000], // 10 poetry
	[1000, 4000, 6000, 9000, 12000, 15000, 18000, 21000], // 11 philosophy
	[1000, 5000, 8000], // 12 philosophy
    ];

    var myTimeouts = [];

    var targetOpacity = timings.map(function(v){return v.map(function(){return 1;});});

    targetOpacity[0][1] = .5;
    targetOpacity[9][1] = .5;
    targetOpacity[10][1] = .5;
    targetOpacity[10][6] = .6;
    targetOpacity[10][9] = .7;
    targetOpacity[10][11] = .7;
    targetOpacity[10][13] = .7;
    targetOpacity[11][1] = .6;
    targetOpacity[11][3] = .6;
    targetOpacity[11][5] = .6;
    targetOpacity[11][7] = .6;

    targetOpacity[1][11] = .6;
    targetOpacity[2][2] = .6;
    targetOpacity[3][1] = .7;
    targetOpacity[3][7] = .7;
    targetOpacity[4][9] = .6;
    targetOpacity[5][7] = .6;
    targetOpacity[6][5] = .6;
    targetOpacity[7][5] = .6;
    targetOpacity[8][3] = .6;


    $scope.slides = [
	{position: [0, 9, 10], text:"Poetry", html:"brautigan1.html", thumbnail:"images/headBrautigan.png", color:"#eea", textOpacity: 0},
	{position: [9], html:"brautigan2.html", color:"#eea", textOpacity: 0},
	{position: [10], html:"brautigan3.html", color:"#eea", textOpacity: 0},
	{position: [1], text:"Literature", html:"gibson.html", thumbnail:"images/headGibson.png", color:"#eea", textOpacity: 0},
	{position: [2], text:"Philosophy", html:"castoriadis.html", thumbnail:"images/headCastoriadis.png", color:"#eea", textOpacity: 0},
	{position: [3, 11, 12], text:"Wisdom", html:"elephant.html", thumbnail:"images/headElephant.png", color:"#eea", textOpacity: 0},
	{position: [11], html:"elephant1.html", color:"#eea", textOpacity: 0},
	{position: [12], html:"elephant2.html", color:"#eea", textOpacity: 0},
	{position: [4], text:"Science", html:"bacon.html", thumbnail:"images/headBacon.png", color:"#eea", textOpacity: 0},
	{position: [5], text:"Religion", html:"turing.html", thumbnail:"images/headTuring.png", color:"#eea", textOpacity: 0},
	{position: [6], text:"Research", html:"bachelard.html", thumbnail:"images/headBachelard.png", color:"#eea", textOpacity: 0},
	{position: [7], text:"Mathematics", html:"vonNeumann.html", thumbnail:"images/headVonNeumann.png", color:"#eea", textOpacity: 0},
	{position: [8], text:"Computer Science", html:"hoper.html", thumbnail:"images/headHoper.png", color:"#eea", textOpacity: 0}
    ];

    $scope.selectSlide = function(n) {
	if (n.constructor === Array)
	    n = n[0];
	console.log(n+" "+$scope.selectedSlide);
	if (n == 9 && $scope.selectedSlide != 0 ||
	    n == 10 && $scope.selectedSlide != 9 ||
	    n == 11 && $scope.selectedSlide != 3 ||
	    n == 12 && $scope.selectedSlide != 11) {
	    return;
	}
	// build opacity array
	$scope.opacity = timings.map(function(v){return v.map(function(){return 0;});});
	// cancel current timeOuts in case of user specified change of slide
	while (myTimeouts.length) $timeout.cancel(myTimeouts.pop());

	// set timers to set opacities to 1
	timings[n].forEach(function(time, index) {
	    mt = $timeout(function(){$scope.opacity[n][index] = 1;}, time);
	    myTimeouts.push(mt);
	    if (targetOpacity[n][index] != 1) {
		mt = $timeout(function(){$scope.opacity[n][index] = targetOpacity[n][index];}, time+900);
		myTimeouts.push(mt);
	    }
	});
	// Set slide n as the currently displayed one
	$scope.selectedSlide = n;

        if (n == 0) {setTimeout(function(){ $scope.selectSlide(9)}, timings[n][timings[n].length-1]+5000);}
	if (n == 9){setTimeout(function(){ $scope.selectSlide(10)}, timings[n][timings[n].length-1]+6000);}
	if (n == 3) {setTimeout(function(){ $scope.selectSlide(11)}, timings[n][timings[n].length-1]+5000);}
	if (n == 11){setTimeout(function(){ $scope.selectSlide(12)}, timings[n][timings[n].length-1]+6000);}
    }
    // first slide to show
    $scope.selectSlide(4);
});
