// let calcNum = function () {
//   for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }
// };
// calcNum();

/////////////////////////////////

// let printText = function () {
//   let arrText = ["a", "b", "c", "d", "e", "f", "g"];
//   for (let i = 0; i <= arrText.length; i++) {
//     console.log(arrText[i]);
//   }
// };
// printText();

///////////////////////////////////

// let allNum = [4, 7, 2, 9, 11, 14, 17, 15, 18];

// let numbeven = [];
// for (let i = 0; i <= allNum.length; i++) {
//   if (allNum[i] % 2 == 0) numbeven.push(allNum[i]);
// }

// console.log(numbeven);

/////////////////////////////////////////

// let numb = 4;

// let power = 4;

// console.log(Math.pow(numb, power));

/////////////////////////////////////////

// for (let i = 1; i <= 6; i++) {
//   let num = "";
//   for (let j = 1; j <= i; j++) {
//     num += j;
//   }
//   console.log(num);
// }

/////////////////////////////////////////

// let numb = 123456;

// let calcnumb = numb.toString().length;
// console.log(calcnumb);

/////////////////////////////////////////

// let n = parseInt(prompt("enter any number"));
// let rem = 0;
// let sum = 0;

// while (n != 0) {
//   rem = n % 10;
//   sum = sum + rem;
//   n = parseInt(n / 10);
// }
// alert("sum of disit is" + sum);

/////////////////////////////////////////

// let arr = [5, 8, 9, 75, 23, 56, 3];
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(max);
// console.log(min);

/////////////////////////////////////////

// let arr = [
//   [0, 1, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
//   console.log("");
// }

// let students = [
//   { name: "ram", age: 12, location: "kolkata" },
//   { name: "shyam", age: 14, location: "delhi" },
//   { name: "jodu", age: 11, location: "mumbai" },
// ];

// const bestStudent = students.filter((m) => m.age > 12);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelarate = function () {
//   this.speed += 10;
//   console.log(`${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed}`);
// };

// const carOne = new Car("BMW", 120);
// const carTwo = new Car("Mercedes", 95);

// carOne.accelarate();
// carOne.accelarate();
// carOne.accelarate();
// carTwo.brake();
// Task 1
// var dairy = [
//   "cheese",
//   "sour cream",
//   "milk",
//   "yogurt",
//   "ice cream",
//   "milkshake",
// ];
// function logDairy() {
//   for (let item of dairy) {
//     console.log(item);
//   }
// }
// logDairy();

// // Task 2

// function birdCan() {
//   const animal = {
//     canJump: true,
//   };

//   const bird = Object.create(animal);

//   bird.canFly = true;

//   bird.hasFeathers = true;

//   for (prop of Object.keys(bird)) {
//     console.log(prop + ":" + " " + bird[prop]);
//   }
// }
// birdCan();
// // Task 3

// function animalCan() {
//   const animal = {
//     canJump: true,
//   };

//   const bird = Object.create(animal);

//   bird.canFly = true;

//   bird.hasFeathers = true;

//   for (const prop in bird) {
//     //loops over all properties in the object,  including the prototype's properties.
//     console.log(prop + ":" + " " + bird[prop]);
//   }
// }

// animalCan();

// function letterFinder(word, match) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] == match) {
//       console.log("Found the >", match, "at", i);
//     } else {
//       console.log("Found the", match, "at", i);
//     }
//   }
// }

// letterFinder("test", "t");
// var car = {};
// car.color = "red";
// car["color"] = "green";
// car["speed"] = 200;
// car.speed = 100;
// car["number of doors"] = 4;
// console.log(car);
// let car = ["speed", "altitude", "color"];
// let drone = {
//   speed: 100,
//   altitude: 200,
//   color: "red",
// };
// for (var i = 0; i < car.length; i++) {
//   console.log(drone[car[i]]);
// }
// function arrayBuilder(one, two, three) {
//   var arr = [];
//   arr.push(one);
//   arr.push(two);
//   arr.push(three);
//   return arr;
// }
// var simpleArr = arrayBuilder("apple", "pear", "plum");
// console.log(simpleArr);

// let decimal = Math.random() * 10;
// let rounded = Math.ceil(decimal);
// console.log(rounded);
// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);
// car.turnTheKey = function () {
//   console.log("The engine is running");
// };
// car.lightsOn = function () {
//   console.log("The lights are on.");
// };
// console.log(car);
// car.turnTheKey();
// car.lightsOn();

// try {
//   const res = prompt("are you robot");
//   if (res == "yes") {
//     throw new Error("Robot found");
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("finally showing this message");
// }
// function addTwoNums(a, b) {
//   try {
//     if (typeof a != "number") {
//       throw new ReferenceError("the first argument is not a number");
//     } else if (typeof b != "number") {
//       throw new ReferenceError("the second argument is not a number");
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log;
//     "error!", err;
//   }
// }
// addTwoNums(5, "5");
// console.log("it still works");
// function letterFinder(word, match) {
//   var condition1 = typeof word == "string" && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
//   var condition2 = typeof match == "string" && match.length == 1; //if the match is a string and the length is equal to 1
//   if (condition1 && condition2) {
//     //if both condition matches
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] == match) {
//         //check if the character at this i position in the word is equal to the match
//         console.log("Found the", match, "at", i);
//       } else {
//         console.log("---No match found at", i);
//       }
//     }
//   } else {
//     //if the requirements don't match
//     console.log("Please pass correct arguments to the function");
//   }
// }
// letterFinder([], []);
// letterFinder("cat", "c");

// function abc(numSides = 20) {
//   return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(abc());

// document.getElementById("textput").setAttribute("value", "address");
// const tryOne = document.createElement("div");
// tryOne.setAttribute("class", "midbox");
// tryOne.innerText = "I am Archita";
// document.body.appendChild(tryOne);

// const h2 = document.createElement("h2");
// h2.innerText = "I am Archita";
// h2.setAttribute("id", "abc");
// h2.setAttribute("class", "mytext");
// document.body.appendChild(h2);

// document.getElementById("bg-change").onmouseenter = abc;
// function abc() {
//   document.getElementById("bg-change").style.background = "yellow";
// }

// const h1 = document.createElement("h1");
// h1.innerText = "My name is Archita";
// let input = document.createElement("input");
// input.setAttribute("type", "text");
// document.body.innerText = "";
// document.body.appendChild(h1);
// document.body.appendChild(input);
// input.addEventListener("change", function () {
//   h1.innerText = input.value;
// });

// const h1 = document.querySelector("h1");

// let arr = ["Archita", "ram", "shyam", "jodu"];

// function abc() {
//   switch (h1.innerText) {
//     case arr[0]:
//       h1.innerText = arr[1];
//       break;
//     case arr[1]:
//       h1.innerText = arr[2];
//       break;
//     case arr[2]:
//       h1.innerText = arr[3];
//       break;
//     default:
//       h1.innerText = arr[0];
//   }
// }
// h1.addEventListener("click", abc);

var x = 2;
x += 5;
console.log(x);
