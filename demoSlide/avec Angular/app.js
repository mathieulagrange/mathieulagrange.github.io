app = angular.module('demoMathieu', []);

/* Ceci sert à configurer certaines fonctions d'angular, et n'est pas utile ici, mais bon, je le laisse toujours */

app.config(['$compileProvider',
	    function($compileProvider) {   
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob|file):/);
	    }]);
