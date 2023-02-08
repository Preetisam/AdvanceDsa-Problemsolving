// 1. Using object literal

const person = {
	name: 'Jayesh',
	age: '22',
	hobbies: [ 'software', 'sports', 'philosophy' ],
	greet: function() {
		console.log('Hello');
	}
};

console.log(person.name);
console.log(person.greet());

// 2. By creating instance of Object directly
const book = new Object({
	name: 'The Seeker',
	author: 'Karan Bajaj'
});
console.log(book.author);

// 3. By using the constructor funtion
function River() {
	(this.name = 'Ganga'),
		(this.state = 'Uttar Pradesh'),
		(this.printName = function() {
			console.log('welcome to river' + this.name);
		});
}

const river1 = new River();
console.log(river1.printName());

class Phone {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

const phone1 = new Phone('iphone 14', 70000);
const phone2 = new Phone('iphone 12', 65000);
