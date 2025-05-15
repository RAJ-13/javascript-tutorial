console.log("Hello, World!");
// var x=5;
// x=6;
// console.log(x);
// console.log(x);
// let x = 5;
//x = 6;

// let y = BigInt(10);
// let zs = Number(10);
// console.log(zs);
// console.log(y);
// let name = "John";
// let isTrue = true;
// let z = null;
// let a = undefined;
// let b = Symbol("symbol");

// let str1 = "hi";
// let str2 = "hiii";

// console.log(1 + 2 + "3" + 4 + 5);

// const obj = { name: "John", age: 30, city: "New York" };
// console.log(obj);

// const obj2 = [1, 2, 3];
// console.log(obj2);

//type comparasions - == vs ===
// console.log(null == undefined);
// console.log(null === undefined);

//strings

// const names = `John`;
// console.log(names);
// const str = `Hello, ${names}`;
// console.log(str);

// function tag(strings, ...value) {
//   return strings[1] + value[0].toUpperCase();
// }

// const name = "alice";
// console.log(tag`Hello, ${name}, welcome!`);

//numbers

// const num = 10;
// const num2 = new Number(100.68786212);
// console.log(num2.toFixed(3));
// console.log(num2.toPrecision(4));
// const num3 = 1000000;
// console.log(num3.toLocaleString());

// console.log(Math.round(4.6));
// const nums = [1, 2, 3, 4, 5];
// console.log(Math.min(...nums));

const obj = { name: "John", age: 30, city: "New York" };
const { name, ...rest } = obj;
console.log(name);
console.log(rest);
