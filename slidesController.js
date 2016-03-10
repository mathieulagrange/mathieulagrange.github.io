app.controller("SlidesController", function($scope, $timeout, $interval) {

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

    var currentSlide = 0;

    

});
