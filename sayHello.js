"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(firstName) {
    console.log("Hello" + firstName);
}
var firstName = "Jukiya";
var age = 24;
// sayHello(firstName);
var array = [];
array.push("jukiya");
// array.push(1);
var mixedArray = ["foo", 1];
var mixedArrayU = ["foo", 1];
var mixedArrayT = ["foo", 1, 2];
var user = {
    name: "jukiya",
    age: 12
};
console.log(user.name);
console.log(user.age);
function printName(obj) {
    console.log(obj.firstName);
    console.log(obj.lastName);
}
printName({ "firstName": "hykitya" });
printName({ "firstName": "hykitya", lastName: "äaaa" });
var user1 = { firstName: "jjj" };
;
function printPoint(point) {
    console.log(point.x);
    console.log(point.y);
    console.log(point.z);
}
printPoint({ x: 100, y: 100, z: 100 });
;
var cc = {
    color: "赤",
    radius: 10
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
var direction = Direction.Up;
console.log(direction);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "\u4E0A";
    Direction2["Down"] = "\u4E0B";
    Direction2["Left"] = "\u5DE6";
    Direction2["Right"] = "\u53F3";
})(Direction2 || (Direction2 = {}));
;
var value = '下';
var enumValue = value;
console.log(enumValue);
if (enumValue == Direction2.Down) {
    console.log("äaa");
}
