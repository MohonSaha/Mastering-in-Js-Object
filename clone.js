//1) Shallow Copy: 

const mohon = {name: 'Mohon', age: 30};
const mohonSaha = {...mohon, job: 'web Developer'};
mohon.age = 90;
// console.log(mohon);
// console.log(mohonSaha);



// 2) Deep Copy: use JSON parsing

const data = {name: 'shanto', job: 'student', age: 20};
const dataCopy = JSON.parse(JSON.stringify(data));

data.age = 40;
console.log(data);
console.log(dataCopy);


