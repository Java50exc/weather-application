// const obj = {a: 10, b: 12, c: "hello", d: {m:7}};
// let {b, c, d}=obj;
// const {m} = d;
// c = "hello world"
// console.log(b, c);
// console.log(obj);
// const ar = [1, 2, 3, 4, 5];
// const [a, b] = ar;
// let c1 = 10;
// let d1 = 20;
// [c1, d1] = [d1, c1];
// console.log(c1, d1)
// function f() {
//     throw "exception thrown"
// } 
// try {
//    f();
//    console.log('after f call') ;
// } catch(e) {
//     console.log(e)
// }

// console.log("OK");


// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
//   };
//   console.log(shape.diameter());
//   console.log(shape.perimeter());
  
  

    
//   let a = 3;
//   let b = new Number(3);
//   let c = 3;
  
//   console.log(a == b);
//   console.log(a === b);
//   console.log(b === c);

//   function bark() {
//     console.log("Woof!");
//   }
  
//   bark.animal = "dog";

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const lydia = new Person("Lydia", "Hallie");
//   const sarah = Person("Sarah", "Smith");
  
//   console.log(lydia);
//   console.log(sarah);

// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//       console.log("You are still an adult.");
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
// }
 
// function getAge() {
//     "use strict";
//     age = 21;
//     console.log(age);
//   }

//   getAge()

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// console.log([..."Lydia"])

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;

// console.log(a);


// function getInfo(member, year) {
//     member.name = "Lydia";
//     year = "1998";
//   }
  
//   const person = { name: "Sarah" };
//   const birthYear = "1997";
  
//   getInfo(person, birthYear);
  
//   console.log(person, birthYear);


// function greeting() {
//     throw "Hello world!";
//   }
  
//   function sayHi() {
//     try {
//       const data = greeting();
//       console.log("It worked!", data);
//     } catch (e) {
//       console.log("Oh no an error:", e);
//     }
//   }
  
//   sayHi();
  

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);


// const settings = {
//     username: "lydiahallie",
//     level: 19,
//     health: 90
//   };
  
//   const data = JSON.stringify(settings, ["level", "health"]);//considered only // specified keys 
//   console.log(data);


// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = (number) => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);


// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// function addToList(item, list) {
//     return list.push(item);
//   }
  
//   const result = addToList("apple", ["banana"]);
//   console.log(result);

// const list = [1 + 2, 1 * 2, 1 / 2]
// console.log(list)

// function sayHi(name) {
//     return `Hi there, ${name}`
//   }
  
//   console.log(sayHi())
// console.log("I want pizza"[0])

// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young."
//     } else {
//       const message = "Yay! You're old enough!"
//     }
  
//     return message
//   }
//   console.log(checkAge(21))  

// function sum(num1, num2 = num1) {
//     console.log(num1 + num2)
//   }
  
//   sum(10)

// let newList = [1, 2, 3].push(4)

// console.log(newList.push(5))

// const person = { name: "Lydia" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

// function sayHi() {
//     return (() => 0)();
//   }
  
//   console.log(typeof sayHi());

// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();
  

// console.log([[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
//   ))
  
// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res.bind(undefined, 'one'), 500);
//   });
  
  
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
  
  
//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
  
// async function getData() {
//     return await Promise.resolve('I made it!');
//   }
  
  
//   const data = getData();
//   console.log(data);
  

// const myPromise = () => Promise.resolve('I have resolved!');


// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }


// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }


// firstFunction();
// secondFunction();

// const myPromise = Promise.resolve('Woah some cool data');


// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();


// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')


// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]
// }


// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

