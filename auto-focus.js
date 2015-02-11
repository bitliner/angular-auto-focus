'use strict';

angular.module('bitliner.autoFocus', [])
    .directive('autoFocus', function($timeout, $log) {
        return {
            link: function(scope, element, attrs) {

                scope.$watch(function() {
                    return attrs.autoFocus;
                }, function(value) {

                    if (value == 'true') {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });

            }
        };
    });