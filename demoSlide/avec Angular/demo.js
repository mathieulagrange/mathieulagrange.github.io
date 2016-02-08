/* $timeout est un service Angular qui fonctionne exactement comme le standard setTimeout de Javascript */
/* mais en effectuant automatiquement le "model checking" Angular. Il faut déclarer ic que tu vas utiliser ce service.*/
app.controller ("Demo", function ($scope, $timeout) {

    $scope.selectedSlide = 0;

    // Timings d'apparition des div pour chaque slide, en millisecondes
    var timings = [
	[1000, 3000, 5000],
	[1000, 4000, 7000]
    ];

    $scope.opacity = [
	[0, 0, 0],
	[0, 0, 0]
    ];

    $scope.selectSlide = function (n) {
	// Initialize all opacities to 0
	$scope.opacity[n] = [];
	$scope.opacity[$scope.selectedSlide] = [];
	// Note que la fonction "forEach" est souvent préférable à une boucle for
	timings[n].forEach(function(){
	    $scope.opacity[n].push(0);
	});
	timings[$scope.selectedSlide].forEach(function(){
	    $scope.opacity[$scope.selectedSlide].push(0);
	});
	// set timers to set opacities to 1
	timings[n].forEach(function(time, index) {
	    $timeout(function(){$scope.opacity[n][index] = 1;}, time);
	});
	// Set slide n as the currently displayed one
	$scope.selectedSlide = n;
    }

    // Start with slide 1
    $scope.selectSlide(0);

});
