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

// const obj = { name: "John", age: 30, city: "New York" };
// const { name, ...rest } = obj;
// console.log(name);
// console.log(rest);

// const nowDate = new Date();
// console.log(nowDate);
// console.log(nowDate.getTime());
// console.log(nowDate.getFullYear());
// console.log(nowDate.getUTCFullYear());
// console.log(nowDate.toLocaleString("en-GB")); //can give options like hour12, weekday, year,month
// console.log(nowDate.toLocaleDateString("en-GB")); //can give options like hour12, weekday, year,month
// // console.log(nowDate.toLocaleTimeString("en-GB")); //can give options like hour12, weekday, year,month
// console.log(nowDate.nowDate);
// console.log(nowDate.Date);

//Arryas
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);
//console.log(arr2);

// console.log(arr[0]); //access
// console.log(arr.length); //length
// console.log(arr[arr.length - 1]); //last element

// console.log(arr.push(14)); //add to end
// console.log(arr.pop()); //remove last element
// console.log(arr.shift()); //remove first element and the array length decreases
// console.log(arr);
//console.log(arr.unshift(98)); //add to start - the array length increases
//console.log(arr);

// console.log(arr.slice(2, 5)); //slice - returns a new array -startIndex nclusive and endIndex exclusive - original array is not affected as it returns a copy of it
// console.log(arr);

// console.log(arr.splice(2, 5)); //slice - returns a new array -startIndex nclusive deletes the provided count in second argument - original array is affected
// console.log(arr);

// const arr3 = [5, 2, 7, 3, 6];
// console.log(arr3.sort()); //sort - sorts the array in place and returns the sorted array - original array is affected
// console.log(arr3.sort((a, b) => b - a)); //descending order

// const arr4 = ["apple", "banana", "cherry"];
// console.log(arr4.join("-")); //join - joins the array elements into a string(default is comma) - original array is not affected, returns a string - Real world case - making csv file

// const nested = [1, [2, 3], [4, [5]]];
// console.log(nested.flat(1)); // [1, 2, 3, 4, 5]
// const names = ["Alice", "Bob", "Alice", "Eve"];
// const dups = [...new Set(names)];
// console.log(dups); // [ 'Alice', 'Bob', 'Eve' ]
