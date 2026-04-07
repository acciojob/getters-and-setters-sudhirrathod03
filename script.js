class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	getName(){
		return this._name;
	}
	
	set age(value) {
		this._age = value;
	}
}

class Student extends Person {
	study(){
		console.log(this._name + " is studying");
	}	
}

class Teacher extends Person {
	teach(){
		console.log(this._name + " is teaching");
	}	
}

const person = new Person("John", 25);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;