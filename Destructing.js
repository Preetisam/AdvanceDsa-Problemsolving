// destructuring of Objects and Arrays

// 1. Destructuring of arrays
// ... => spread operator
// , , => to skip the element

let names = [ 'jayesh', 'jitandra', 'jaswant' ];
// let name1 = names[0];
// console.log(name1);

let [ name1, , name2 ] = names;
console.log(name1, name2);
let [ name3, ...other ] = names;
console.log(other);

// Destructuring of objects

let person = {
	name: 'Jayesh',
	city: 'BulandShahr',
	age: '22',
	hobbies: [ 'software', 'sports', 'philosophy' ],
	greet: function() {
		console.log('Hello');
	}
};

let { name, city, age, hobbies, greet } = person;
console.log(city);

let { nameNew, ...otherkeys } = person;
console.log(city);
