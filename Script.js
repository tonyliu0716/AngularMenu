/*global angular*/
'use strict';
var app = angular.module("myModel", [])
    .controller("myController", ["$scope", "$location", function ($scope) {
        var employees = [
            {
                name: "Ben",
                dateOfBirth: new Date("November 23, 1981"),
                gender: "Male",
                email: "ben@gmail.com",
                salary: 55000.789,
                city: "Chicago"
            },
            {
                name: "Sara",
                dateOfBirth: new Date("May 03, 1982"),
                gender: "Female",
                email: "sara@gmail.com",
                salary: 68000,
                city: "Peoria"
            },
            {
                name: "Mark",
                dateOfBirth: new Date("July 12, 1983"),
                gender: "Male",
                email: "mark@gmail.com",
                salary: 57000,
                city: "Beijing"
            },
            {
                name: "Pam",
                dateOfBirth: new Date("October 11, 1984"),
                gender: "Male",
                email: "pam@gmail.com",
                salary: 9900.111,
                city: "GuangZhou"
            },
            {
                name: "Todd",
                dateOfBirth: new Date("June 09, 1982"),
                gender: "Female",
                email: "todd@gmail.com",
                salary: 980231,
                city: "Fairfield"
            },
            {
                name: "rlnta",
                dateOfBirth: new Date("June 09, 1988"),
                gender: "Male",
                salary: 980231,
                city: "Iowa"
            },
            {
                name: "fannie",
                dateOfBirth: new Date("June 09, 1986"),
                gender: "Female",
                email: "fannie@gmail.com",
                salary: 980231,
                city: "Beijing"
            },
            {
                name: "Apple",
                dateOfBirth: new Date("June 09, 1988"),
                gender: "Male",
                email: "apple@gmail.com",
                salary: 980231,
                city: "San Jose"
            },
            {
                name: "Mac",
                dateOfBirth: new Date("June 09, 1981"),
                gender: "Male",
                email: "mac@gmail.com",
                salary: 980231,
                city: "Beijing"
            },
            {
                name: "logitech",
                dateOfBirth: new Date("June 09, 1981"),
                gender: "Female",
                email: "logitech@gmail.com",
                salary: 980231,
                city: "Beijing"
            },
            {
                name: "filco",
                dateOfBirth: new Date("June 09, 1981"),
                gender: "Male",
                email: "filco@gmail.com",
                salary: 980231,
                city: "Beijing"
            },
            {
                name: "kindle",
                dateOfBirth: new Date("June 09, 1981"),
                gender: "Male",
                email: "kindle@gmail.com",
                salary: 980231,
                city: "Beijing"
            },
            {
                name: "Nokia",
                dateOfBirth: new Date("June 09, 1989"),
                gender: "Male",
                email: "nokia@gmail.com",
                salary: 980231,
                city: "ShenZhen"
            }
                     ];

        $scope.employees = employees;
        $scope.search = "";
        $scope.flag = false;

        $scope.selectedEmp = function (index, employee) {
            $scope.selectedIndex = index;
            $scope.flag = true;
            $scope.selectedEmployee = employee;
        };

        $scope.changeTo = function () {
            $scope.flag = false;
            $scope.search = "";
        };
    }]);