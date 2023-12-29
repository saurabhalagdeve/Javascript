// for (let i = 0; i < 3; i++) {
//   alert(i);
// }
// alert(i);

// let sum = 0;

// while (true) {
//     let value = +prompt("Enter a number", "");

//     if(!value) break;

//     sum += value;
// }
// alert('Sum: ' + sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;

//   alert(i); // 1, then 3, 5, 7, 9
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");
//   }
// }

// alert("Done!");

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     if (!input) break outer;
//   }
// }

// let i = 0;
// while (++i < 5) alert(i);

// let i = 0;
// while (++i < 5) alert(i);

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too Small");
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }

// let arg = prompt("Enter a value?");
// switch (arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
//     break;

//   case "2":
//     alert("Two");
//     break;

//   case 3:
//     alert("Never executes!");
//     break;
//   default:
//     alert("An unknown value");
// }

// function showMessage() {
//   alert("Hello everyone!");
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too small");
//   case 4:
//     alert("Exactly!");
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too small");
//   case 4:
//     alert("Exactly!");
//   case 5:
//     alert("Too big");
//   default:
//     alert("I don't know such values");
// }

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// function showMessage() {
//   alert("Hello everyone!");
// }

// showMessage();

// function showMessage() {
//   let message = "Hello, I'm JavaScript!";

//   alert(message);
// }

// showMessage();

// alert(message);

// let userName = "John";

// function showMessage() {
//   let message = "Hello, " + userName;
//   alert(message);
// }

// showMessage();

// let userName = "John";

// function showMessage() {
//   userName = "Bob";

//   let message = "Hello, " + userName;
//   alert(message);
// }

// alert(userName);

// showMessage();

// alert(userName);

// let userName = "John";

// function showMessage() {
//   let userName = "Bob";

//   let message = "Hello, " + userName; // Bob
//   alert(message);
// }

// showMessage();

// alert(userName);

// function showMessage(from, text) {
//   alert(from + ": " + text);
// }

// showMessage("Ann", "Hello!");
// showMessage("Ann", "What's up?");

// function showMessage(from, text) {
//   from = "*" + from + "*";
//   alert(from + ": " + text);
// }

// let from = "Ann";

// showMessage(from, "Hello");

// alert(from);

// showMessage("Ann");

// function showMessage(from, text) {
//   alert(from + ": " + text);
// }

// // showMessage("Ann");

// showMessage("Ann", undefined);

// function showMessage(from, text = anotherFunction()) {}

// let text = "How";
// function showMessage(from, text) {
//   if (text === undefined) {
//     text = "no text given";
//   }

//   alert(from + ": " + text);
// }

// showMessage();

// let text = "";
// function showMessage(text) {
//   if (text === undefined) {
//     text = "empty message";
//   }
//   alert(text);
// }

// showMessage();

// function showMessage(from, text) {
//   text = text || "no text given";
// }
// alert(from + ": " + text);

// showMessage(hello);

// function showMessage(from, text) {
//     if (text === undefined) {
//       text = 'no text given';
//     }

//     alert( from + ": " + text );
//   }

// function showMessage(text) {
//   if (text === undefined) {
//     text = "empty message";
//   }
//   alert(text);
// }
// showMessage();

// function checkAge(age) {
//   if (age <= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = this.prompt("How old are you?", 18);

// if (checkAge(age) == true) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }

//   alert("Showing you the movie");
// }
// alert(showMovie());

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// alert(showPrimes());

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// let sayHi = function () {
//   alert("Hello");
// };

// let func = sayHi;

// func();
// sayHi();

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("you agreed.");
// }

// function showCancel() {
//   alert("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel);

// function ask(question, yes, no){
//     if(confirm(question)) yes() else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution.");}
// );

// sayHi("John");

// function sayHi(name) {
//   alert(`Hello, ${name}`);
// }
// sayHi(2);

// let age = prompt("What is your age?", 18);

// if (age < 18) {
//   function welcome() {
//     alert("Greetings!");
//   }
// } else {
//   function welcome() {
//     alert("Hello!");
//   }
// }

// welcome();

// let age = 20;

// if (age < 18) {
//   welcome();

//   function welcome() {
//     alert("Hello!");
//   }

//   welcome();
// } else {
//   function welcome() {
//     alert("Greetings!");
//   }
// }

// welcome();

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {
//   welcome = function () {
//     alert("Hello!");
//   };
// } else {
//   welcome = function () {
//     alert("Greetings!");
//   };
// }

// welcome();

// let age = prompt("What is your age?", 18);

// let welcome =
//   age < 18
//     ? function () {
//         alert("Hello");
//       }
//     : function () {
//         alert("Greetings!");
//       };

// welcome();

// let sum = (a, b) => a + b;

// alert(sum(1, 2));

// let sayHi = () => alert("Hello!");

// sayHi();

// let age = prompt("What is your age?", 18);

// let welcome = (age<18)?
// () => alert("Hello!"):
// () => alert("Greetings!");

// welcome();

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// alert(sum(1, 2));

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );
