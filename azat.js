////FUNCTIONS////
// function checkDriverAge() {
//   console.log(checkDriverAge);
// }
// {
//   var age = prompt("Kanachadasun Kashkaldak");
// }
// if (Number(age) < 21) {
//   alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) > 21) {
//   alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 21) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
//   console.log("checkDriverAge");
// }
// var checkDriverAge2 = function () {
//   console.log(checkDriverAge2);
// };
// {
//   var age = prompt("Kanachadasun Kashkaldak");
// }
// if (Number(age) < 21) {
//   alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 21) {
//   alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 21) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// checkDriverAge2(2);

////ARRAYS////
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift();
// array.sort();
// array.push("kiwi");
// array.shift();
// array.reverse();

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// array2[1][1][0];

///Data Structures: Objects///
// var user = {
//   name: "Azat",
//   age: 29,
//   hobby: "Football",
//   isMarried: false,
//   spells: ["shazam", "abdulkadur", "Noo"],
//   shout: function () {
//     console.log("EEHHHYYYYYY");
//   },
// };

// var list = [
//   {
//     username: "Azat",
//     password: "Manas",
//   },
//   {
//     username: "Izat",
//     password: "Manasov",
//   },
// ];

///Data Structures: EXERCISE///
// var database = [
//   {
//     username: "Azat",
//     password: "Manas",
//   },
// ];
// var newsfeed = [
//   {
//     username: "Azat",
//     timeline: "JS is FUN",
//   },
//   {
//     username: "Izat",
//     timeline: "JS is FUN",
//   },
//   {
//     username: "Rinat",
//     timeline: "JS is FUN",
//   },
// ];

///Exercise: Build Facebook///

// var database = [
//   {
//     username: "Azat",
//     password: "Manasson",
//   },
//   {
//     username: "Izat",
//     password: "Izatov",
//   },
//   {
//     username: "Rinat",
//     password: "Manassov",
//   },
// ];
// var newsFeed = [
//   {
//     username: "Azat",
//     timeline: "So tired working with toxic people",
//   },
//   {
//     username: "Izat",
//     timeline: "Super lazy in hes life",
//   },
// ];

// var userNamePrompt = prompt("Whats your user name?");
// var passwordPrompt = prompt("Whats your password?");

// function IsUserValid(username, password) {
//   for (var i = 0; i < database.length; i++) {
//     if (
//       database[i].username === username &&
//       database[i].password === password
//     ) {
//       return true;
//     }
//     return false;
//   }
// }
// function signIn(username, password) {
//   if (IsUserValid(username, password)) {
//     console.log(newsFeed);
//   } else {
//     alert("Sorry wrong username or password");
//   }
// }

// function signIn(username, password) {
//   for (var i = 0; i < database.length; i++) {
//     if (
//       database[i].username === username &&
//       database[i].password === password
//     ) {
//       console.log(newsFeed);
//     } else {
//       alert("Wrong password or username");
//     }
//   }

//   if (user === database[0].username && pass === database[0].password) {
//     console.log(newsFeed);
//   } else {
//     alert("Wrong password or username");
//   }
// }
// signIn(userNamePrompt, passwordPrompt);

///Loops///

// var todos = [
//   "Wake up early",
//   "Brush teeth",
//   "eat healthy",
//   "sleep well",
//   "Study JS",
// ];
// var todosImportant = [
//   "Wake up early",
//   "Brush teeth",
//   "eat healthy",
//   "sleep well",
//   "Study JS",
// ];
// var todosLenght = todos.length;
// // for (var i = 0; i < todos.length; i++) {
// //   console.log(todos[i], i);
// // }
// function logToDos(todo, i) {
//   console.log(todo, i);
// }

// todos.forEach(logToDos);
// todosImportant.forEach(logToDos);

// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--;
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);
// var button = document.getElementsByTagName("button"[0]);
// addEventListener("mouseleave", function () {
//   console.log("PRESSSSSS");
// });

////DOM Events////
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
//   return input.value.length;
// }

// function createListElement() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
// }

// function addListAfterClick() {
//   if (inputLength() > 0) {
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputLength() > 0 && event.keyCode === 13) {
//     createListElement();
//   }
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);
////Exercise: Background Generator////
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
//   body.style.background =
//     "linear-gradient(to right," + color1.value + "," + color2.value + ")";
//   css.textContent = body.style.background + ";";
// }
// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);

///Advanced Control Flow///

// function moveCommand(direction) {
//   var whatHappens;
//   switch (direction) {
//     case "forward":
//       whatHappens = "You went wrong way";
//       break;
//     case "back":
//       whatHappens = "You reach the home";
//       break;
//     case "right":
//       whatHappens = "Youre going to beach";
//       break;
//     case "left":
//       whatHappens = "You enter the private villa";
//       break;
//     default:
//       whatHappens = "Please enter valid direction";
//   }
//   return whatHappens;
// }

// const name = "Azat";
// const age = 39;
// const pet = "dog";

// const greetingBest = `Hello ${Azat} you\re still young ${
//   age - 10
// } and you have a lovely ${pet}`;

///Arrow function///

// function add(a, b) {
//   return a + b;
// }

// // const add2 = (a, b) => a + b;

// // let a = "test";
// // const b = true;
// // const = 789;
// // a = "test2";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// const { firstName, lastName, age, eyeColor } = person;

// const a = "test";
// const b = true;
// const c = 789;

// const okObj = { a, b, c };

// const firstName1 = "Izat";
// const city = "Moscow";

// const message = `Hello ${firstName1} have I met you before? I think we met in ${city} last summer no???`;

// function isValidAge(age =10) => 10;

// let sym1 = Symbol();
// let sym2 = Symbol("G");
// let sym3 = Symbol("h");

// function map(username, location) {
//   if (Azat && Cayman) {
//     return "Im not lost";
//   } else {
//     return "you are lost my friend ";
//   }
// }

// const first = () => {
//   const greet = "Kashkaldak";
//   const second = () => {
//     const name = "Rinat";
//     alert(greet);
//   };
//   return second;
// };

// const newFunc = first();
// newFunc();

// ///CURRYING

// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy7 = curriedMultiply(7);

//COMPOSE

///Advanced Arrays///

// const array = [5, 7, 8, 18];
// const Azat = [];
// const newArray = array.forEach((num) => {
//   Azat.push(num * 3);
// });
// console.log(`forEach`, Azat);

// ///MAP,FILTERS,REDUCE///
// ///MAP///
// const mapArray = array.map((num) => num * 3);

// console.log(`map`, mapArray);
// ////FILTER///
// const filterArray = array.filter((num) => num === 5);
// console.log("filter", filterArray);
// ///REDUCE///

// const reduceArray = array.reduce((accumulator, num) => {
//   return (accumulator = num);
// });
// 5;

// console.log("reduce", reduceArray);

//EXERCIES////
// const array = [
//   {
//     username: "john",
//     team: "red",
//     score: 5,
//     items: ["ball", "book", "pen"],
//   },
//   {
//     username: "becky",
//     team: "blue",
//     score: 10,
//     items: ["tape", "backpack", "pen"],
//   },
//   {
//     username: "susy",
//     team: "red",
//     score: 55,
//     items: ["ball", "eraser", "pen"],
//   },
//   {
//     username: "tyson",
//     team: "green",
//     score: 1,
//     items: ["book", "pen"],
//   },
// ];

// let janyArray = [];
// janyArray.forEach((user) => {
//   let { username } = user;
//   username = username + "!";
//   janyArray.push(username);
// });
// console.log(janyArray);

// const mapArray = array.map((user) => {
//   let { username } = user;
//   return username + "?";
// });
// console.log(mapArray);

// const filterArray = array.filter((user) => {
//   return user.team === "red";
// });
// console.log(filterArray);

// const total = array.reduce((acc, user) => {
//   return acc + user.score;
// }, 5);
// console.log(total);

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   return num * 2;
// });
// const answer = array.map((user) => {
//   user.items = user.items.map((item) => {
//     return item + "!";
//   });
//   return user;
// });
// console.log(answer);

////Advanced Objects///
///refernce type///
// var object = { value: 10 };
// var object1 = object;
// var object2 = { value: 10 };

// ///context vs scoope///

// const object4 = {
//   a: function () {
//     console.log(this);
//   },
// };
// class Player {
//   constructor(name, type) {
//     console.log("player", this);
//     this.name = name;
//     this.type = type;
//   }
//   intorduce() {
//     console.log(`Hi im ${this.name} im a ${this.type}`);
//   }
// }
// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard", this);
//   }
//   Play() {
//     console.log(`weeeeee im ${this.type}`);
//   }
// }
// const wizard1 = new Wizard("Atai", "Tali");
// const wizard2 = new Wizard("Vicash", "Keneshbek");

///ES7 (ES2016)///

// const dragons = ["Erjan", "Bakut", "Erkin", "Baha"];
// dragons.includes("Azat");
// dragons.filter((name) => name.includes("Azat") || ["Bakut"]);
// const power100 = (num) => num ** 100;

//ES8 (ES2017)///

// padStart();
// padEnd();

// const fun = (a, b, c, d, e) => {
//   console.log(a);
// };
// fun(1, 2, 3, 4);

// Object.values;
// Object.entries;
// Object.keys;

// let obj = {
//   username0: "Azat",
//   username1: "Izat",
//   username2: "Rinat",
// };

// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key]);
// });
// Object.values(obj).forEach((value) => {
//   console.log(value);
// });
// Object.entries(obj).forEach((value) => {
//   console.log(value);
// });

///EXERCIES///

// const startLine = "     ||<- Start line";
// let turtle = "🐢";
// let rabbit = "🐇";

// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);

// turtle = turtle.padStart(10);
// rabbit = rabbit.padStart(10);

// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, "=");
// ("     ||<- Start line");
// ("🐢=======");
// ("       🐇");

// // #3) Get the below object to go from:
// let obj = {
//   my: "name",
//   is: "Rudolf",
//   the: "raindeer",
// };
// // to this:
// ("my name is Rudolf the raindeer");

// Object.entries(obj)
//   .map((value) => value.join(" "))
//   .join(" ");

///ES10 (ES2019)///

// try {
//   bob + "hi";
// } catch {
//   ("Something wrong");
// }

// userProfiles = [
//   ["capitanAzat", 29],
//   ["starshinaJanar", 40],
//   ["moloiRinat", 21],
// ];
// Object.fromEntries(userProfiles);

// const jurassicPark = ["🐸", "🦁", "🦊"];
// jurassicPark.flat(50);

// const entries = ["Abai", "Nurjigit", , , , , , , , , , , "Saky"];
// entries.flat();

// const jurassicParkChoas = jurassicPark.flatMap((frog) => frog + "🦊");

// const userEmail1 = ` .         hkdgiuhgubhnef`;
// const userEmail2 = `gsabjhvgebrsvhs@gmail.com          `;
// console.log(userEmail1.trimStart());
// console.log(userEmail2.trimEnd());

///ES10 EXERCIES////
// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1], [2], [3], [[[4]]], [[[5]]]];
// array.flat(2);
// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [
//   ["Hello", "young", "grasshopper!"],
//   ["you", "are"],
//   ["learning", "fast!"],
// ];
// console.log(greeting.flatMap((x) => x.join()));
// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// console.log(greeting.flatMap((x) => x.join(" ")).join(" "));
// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// console.log(trapped.flat(Infinity));

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
// console.log(userEmail3.trimStart().trimEnd());
// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const usersArray = Object.entries(users);

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// updatedUsers = usersArray.map((user) => [user[0]], user[1] * 2);
// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// //Solution
// const updatedUsers = Object.fromEntries(updatedUsersArray);
// console.log(updatedUsers);
////Advanced Loops////
// const basket = ["apples", "oranges", "grapes"];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000,
// };
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }
// basket.forEach((item) => {
//   console.log(item);
// });

///FOR OF ///
////ITERATING ARRAYS,STRINGS
// for (item of basket) {
//   console.log(item);
// }
// ///ENUMERATING///
// for (item in detailedBasket) {
//   console.log(item);
// }
// ///EXERCIES////
// const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
// const array2 = ["a", 3, 4, 2]; // should return 4
// const array3 = []; // should return 0

// function biggestNumberInArray(arr) {
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (highest < arr[i]) {
//       highest = arr[i];
//     }
//   }
//   return highest;
// }
// function biggestNumberInArray2(arr) {
//   let highest = 0;
//   arr.forEach((item) => {
//     if (highest < item) {
//       highest = item;
//     }
//   });
//   return highest;
// }

// function biggestNumberInArray3(arr) {
//   let highest = 0;
//   for (item of arr) {
//     if (highest < item) {
//       highest = item;
//     }
//   }
//   return highest;
// }

// biggestNumberInArray3(array3);

// // Question #2:
// // Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100,
// };

// function checkBasket(basket, lookingFor) {
//   for (item in basket) {
//     if (item === lookingFor) {
//       return `${lookingFor} is in your basket`;
//     }
//   }
//   return "that does not exist in your basket";
// }
///ES2020 Part 2///
// let azat_pokemon = {
//   pickachu: {
//     species: "Mouse Pokemon",
//     height: 0.8,
//     weight: 30,
//   },
// };
// let weight3 = azat_pokemon?.pickachu?.weight;
// console.log(weight3);
// let azat_pokemon1 = {
//   pickachu: {
//     species: "Mouse Pokemon",
//     height: 0.8,
//     weight: 30,
//     power: "",
//   },
// };
// let power = azat_pokemon?.pickachu?.power ?? "no power";
// console.log(power);

///Debugging///

// const flattend = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((accumulator, array) => {
//   console.log("accumulator", accumulator);
//   console.log("array", array);
//   return accumulator.concat(array);
// }, []);
///How Javascript Works///
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
