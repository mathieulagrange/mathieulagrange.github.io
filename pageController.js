app.controller("PageController", function($scope, $timeout, $interval) {

    $scope.panels = [
	{"name":"Expertise", "page":"pages/research.html", "anchor":"investigation"},
	{"name":"ExpLanes", "page":"pages/explanes.html", "anchor":"explanes"},
	{"name":"Reproducible Research", "page":"pages/reproducible.html", "anchor":"reproducible"},
	{"name":"Contributions", "page":"pages/contributions.html", "anchor":"contributions"},
	{"name":"Publications", "page":"pages/publications.html", "anchor":"publications"},
   ];

    var scrollSpeedMult = 0;
    var progressiveScrollTo = function (y, lastY) {
	if (lastY == window.scrollY) return;
	scrollSpeedMult++;
	var delta = Math.round(scrollSpeedMult*(y-window.scrollY)*scrollSpeedMult/150);
	if (Math.abs(delta) < 5) window.scrollTo(0, y);
	else {
	    lastY = window.scrollY;
	    window.scrollTo(0, window.scrollY+delta);
	    setTimeout(progressiveScrollTo.curry(y, lastY), 50);
	}
    }
    
    $scope.scrollTo = function (id) {
	var coords = pageCoordinates(document.getElementById(id));
	scrollSpeedMult = 3;
	//window.scrollTo(0, coords.y - 50);
	progressiveScrollTo(coords.y - 50);
    }

    $scope.isAbsolute = true;
    $scope.absoluteStyle = {position:"absolute", top: "100px", left:"10px"};
    $scope.fixedStyle = {position:"fixed", top: "0px", left:"10px"};
    window.addEventListener("optimizedScroll", function () {
	if (window.scrollY > 180 && $scope.isAbsolute)
	    $scope.$apply("isAbsolute = false");
	else if (window.scrollY <= 180 && !$scope.isAbsolute)
	    $scope.$apply("isAbsolute = true");
    });
    
});
