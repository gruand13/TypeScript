class User<T, S>{
	name: T;
	age: S;

	constructor (name: T, age: S) {
		this.name = name;
		this.age = age;
	
	}

	sayMyFullName<T>(surname: T): string {
		if (typeof surname !== 'string'){
			return `I have only name: ${this.name}`;
		} else {
			return `${this.name} ${surname}`;
		}
	}
}

class AdminUser<T> extends User<string, number> {
	rules: T;
}
const ivan = new User("Ivan", 37);

console.log(ivan.sayMyFullName("Ivanov"));
const nameData = 'Alex';
const ageData = 34;

const alex = new User <string,number>(nameData, ageData);