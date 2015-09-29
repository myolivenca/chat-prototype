(function () {
    angular.module("app")
    .controller('ChatCtrl', ['$http', '$interval', function ($http, $interval) {
        vm = this;
        vm.text = '';
        vm.error = false;
        vm.chat = [
            {
                'type': 'agent',
                'name': 'Joe',
                'timedate': moment().subtract({ minutes: 6 }).format(),
                'message': 'Hi, I\'m Joe and I\'ll be helping you open your new account today.<br />To begin with, we will need your registered student number from UCAS please - do you have this to hand?'
            },
            {
                'type': 'user',
                'name': 'You',
                'timedate': moment().subtract({ minutes: 4 }).format(),
                'message': 'No probs -  my student number is 453746736. My email address is ellie@mail.com'
            }
        ];

        vm.addMessage = function () {
            if (vm.text != '') {
                vm.chat.push({
                    'type': 'user',
                    'name': 'You',
                    'timedate': moment().format(),
                    'message': vm.text
                });
                vm.error = false;
                vm.text = '';
            }
            else {
                vm.error = true;
            }
        };
    }])
    .directive('chatMessage', ['$interval', function ($interval) {
        return {
            restrict: "A",
            scope: {
                block: "="
            },
            templateUrl: 'Scripts/App/Chat/message.html',
            link: function (scope, element) {
                scope.block.humantime = moment(scope.block.timedate).fromNow();
                $interval(function () {
                    scope.block.humantime = moment(scope.block.timedate).fromNow();
                }, 5000);
            }
        };
    }]);
}());
