app.controller("SlidesController", function($scope, $timeout, $interval) {

    $scope.slides = [
	{position: 0, text:"Poetry", html:"poetry.html", thumbnail:"images/headBrautigan.png", color:"#eea", textOpacity: 0},
	{position: 1, text:"Literature", html:"literature.html", thumbnail:"images/headGibson.png", color:"#eea", textOpacity: 0}
    ];

    var targetSlide = null;

    $scope.cycleTo = function (slide) {
	targetSlide = slide;
	$scope.cycleSlides();
    }
 
    $scope.cycleSlides = function(dir) {
	if (targetSlide) {
	    $interval.cancel($scope.profileInterval);
	    if (targetSlide.position == 0) {
		targetSlide = null;
		return;
	    } else {
		dir = targetSlide.position / Math.abs(targetSlide.position);
	    }
	} else if (dir) {
	    if (dir<0) dir = -1;
	    else dir = 1;
	    $interval.cancel($scope.profileInterval);
	} else {
	    dir = 1;
	}
	for (var s=0, nbSlides = $scope.slides.length; s<nbSlides; s++) {
	    var slide = $scope.slides[s];
	    slide.position -= dir;
	    slide.opacity = (!slide.position || dir*slide.position==-1) ? 1 : 0;
	    if (dir*slide.position <= -2)
		slide.position += dir*nbSlides;
	}
	if (targetSlide) $scope.cycleSlides();
    }
    $scope.profileInterval = $interval($scope.cycleSlides.curry(0), 10000);
});
