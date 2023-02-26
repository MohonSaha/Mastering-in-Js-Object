//1. Create object using object literals:

/*
const mohon = {};
mohon.name = 'Mohon Saha';
mohon.job = 'student';
mohon.passion = function(){
    console.log("Programming is my everything");
}

console.log(mohon);
mohon.passion();
*/


//2. Direct rule: 

/*
const sakib = {
    name: "Sakib",
    birthPlace: "Magura",
    job: "cricketer",
    ball: function(){
        console.log("Throw the ball");
    },
    salary: 2000000
}
console.log(sakib);
*/

// 3. Object constructor:

/*
const tamim = new Object();
console.log(tamim);
*/


// 4. Object create method:

/*
const shanto = Object.create(null);
console.log(shanto);

//It creates prototypical chain to the sakib object.
const sishir = Object.create(sakib);
console.log(sakib.name);
*/

// 5. Class:

/*
class Person {
    name= 'Abul Khan';
    job = 'Web Development';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
const person2 = new Person(20);
const person3 = new Person(10);
const person4 = new Person(60);
console.log(person1, person2, person3, person4);
*/


// 6. Function:

/*
function Car(modal, price){
    this.modal = modal;
    this.price = price;
}

const tesla = new Car('Tesla', 35);
*/


