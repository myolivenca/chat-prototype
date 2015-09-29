(function () {
    angular.module("app")
    .config(["$routeProvider",
    function ($routeProvider, $location) {
        $routeProvider.
        when("/", {
            templateUrl: "/Partials/home.html",
            controller: "routeCtrl"
        }).
        when("/:name*", {
            templateUrl: function (urlattr) {
                return "/Partials/" + urlattr.name + ".html";
            },
            controller: "routeCtrl"
        }).
        otherwise({
            redirectTo: "/"
        });
    }])
    .controller("routeCtrl", [ "$routeParams", "$timeout", function ($routeParams, $timeout) {
    }]);
}());
