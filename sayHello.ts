import { log } from "console";
import { stat } from "fs";

function sayHello(firstName: string){
	console.log("Hello" + firstName);
}

let firstName: string = "Jukiya";
let age: number = 24;
// sayHello(firstName);

const array: string[] = [];
array.push("jukiya");
// array.push(1);

const mixedArray = ["foo", 1];
const mixedArrayU: (string|number)[] = ["foo", 1];
const mixedArrayT: [string, number, number] = ["foo", 1, 2];


const user: {name:string; age:number} = {
	name:"jukiya",
	age:12
};

console.log(user.name);
console.log(user.age);

function printName(obj: {firstName: string; lastName?:string}){
	console.log(obj.firstName);
	console.log(obj.lastName);

}


printName({"firstName":"hykitya"});
printName({"firstName":"hykitya", lastName:"äaaa"});

let user1:any = {firstName:"jjj"};
// user1.hello();
// user1();
// user1.age = 100;

// const elem = document.getElementById("test");
// const elem2 = document.getElementById("test") as HTMLCanvasElement;



interface Point {
	x: number,
	y:number,
};


function printPoint(point:Point){
	console.log(point.x);
	console.log(point.y);
	console.log(point.z);

}


interface Point {
	z:number
}

printPoint({x:100, y:100, z:100});

interface Point2 {
	x:number,
	y:number,
	z?:number
}


// class MyPoint implements Point2{
// 	x:number;
// 	y:number;
// }

interface Colorful {
	color:string;
}

interface Circle{
	radius:number;
}

interface ColorfulCircle extends Colorful, Circle {};


const cc:ColorfulCircle = {
	color :"赤",
	radius:10
};


enum Direction {
	Up,
	Down,
	Left,
	Right
};


let direction: Direction = Direction.Up;

console.log(direction);


enum Direction2 {
	Up = "上",
	Down = '下',
	Left = "左",
	Right = "右"
};


const value = '下';

const enumValue = value as Direction2;
console.log(enumValue);

if(enumValue == Direction2.Down)
{
	console.log("äaa");
}


let status : "OK" | "NO";
status = "OK";
// status = "tes";

