class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	// getter for name
	get name() {
		return this._name;
	}

	getName(){
		return this._name;
	}

	// getter + setter for age
	get age() {
		return this._age;
	}
	
	set age(value) {
		this._age = value;
	}
}

class Student extends Person {
	study(){
		console.log(this.name + " is studying");
	}	
}

class Teacher extends Person {
	teach(){
		console.log(this.name + " is teaching");
	}	
}

const person = new Person("John", 25);

// Do not change below
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;