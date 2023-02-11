//Concept of Map and Set
//Map and Set in JS

//Map is a data structure which holds elements as (key, value) pair, and the keys in a map are unique

let m = new Map();

//Set key,value pairs
m.set(1, "Jeevendra");
m.set(2, "John");
m.set(3, "Jenny");
m.set(1, "Shivam");
m.set("name", "Jeevendra Singh");

console.log(m);

//Get the value with key as 3 in the map m
console.log(m.get(3));

//Check if map contains a key
console.log(m.has("name"));

//Set
//Set is a data structure that holds unique keys
let s = new Set();

s.add(1);
s.add(2);

s.add(2);
console.log(s);

//To check if set contains a key, we use a function called has

console.log(s.has(1));
