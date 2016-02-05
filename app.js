
var app = angular.module('researchWebSite', []);

app.config(['$compileProvider',
		 function($compileProvider) {   
		     $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob|file):/);
		 }]);
