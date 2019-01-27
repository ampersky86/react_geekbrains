//Задание 1

function loop (times = 0, callback = null) {
  for (i=0; i<times; i++)
    callback();
}


function f1 () {

   document.body.innerHTML += i + 'раз' + '\r\n';
   console.log(i + ' раз');
}


loop (3, f1);


//Задание 2


function calculateArea (figure, ...rest) {
	var area;
	switch (figure) {
		case 'rectangle':
		 area = rest[0] * rest[1];
		break

		case 'sphere':
		 area = 2*3.14*rest[0];
		break
	}

	x = area;
	y = figure;
	z = rest

	return ('{' +x + ',' + y + ',' + z + '}' , {area, figure, rest});


}


var result = calculateArea('rectangle', 6, 5);
console.log(result);
document.body.innerHTML += result;



//Задание 3

class Human {
	constructor (name, age, dateOfBirth /*= new Date(1986, 3, 30)*/ ) {
		this.name = name
		this.age = age
		this.dateOfBirth = dateOfBirth
	}

	displayInfo () {
		console.log (this.name, this.age, this.dateOfBirth);
	}
}


class Employee extends Human {
	constructor (salary, department) {
		super();
		this.salary = salary
		this.department = department
	}

	displayEmplInfo () {
		console.log (this.salary, this.department);
	}

	displayInfo () {
		this.displayEmplInfo();
		super.displayInfo();
	}
}

class Developer extends Employee {
	constructor (expc, spec, manager) {
		super();
		this.expc = expc                  //стаж работы
		this.spec = spec 				 //специализация
		this.manager = manager                
	}
}


class Manager extends Employee {
	constructor (developers = []) {
		super();
		this.developers = developers;
	}
}


const human_1 = new Human('Aleksandr', 32, '30.04.1986');
const human_2 = new Human('Aleksandr', 29, '21.05.1987');
const human_3 = new Human('Aleksandr', 28, '15.06.1989');
const employee_1 = new Employee(70000, 'Tech.support');
const employee_2 = new Employee(100000, 'Tech.support');
const employee_3 = new Employee(100000, 'Tech.support');

const manager_1 = new Manager();
const manager_2 = new Manager();
const manager_3 = new Manager();

const developer_1 = new Developer();
const developer_2 = new Developer();
const developer_3 = new Developer();

