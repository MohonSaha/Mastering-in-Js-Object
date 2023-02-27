


const mohon = {
    name: "Mohon Saha",
    money: 5000,
    study: "Math",
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam'
    },
    // We can call a method from another method:
    imprroveExam: function(subjects){
        this.exam();
        return `${this.name} is taking imorovement exam on ${subjects}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}


const result = mohon.exam();
// console.log(result);

const badam = {
    name: 'Kacha Badam',
    money: 8000,
}

// Borrow method from object and use it on another object
const result2 = mohon.exam.call(badam);
// console.log(result2);

const badamMoney = mohon.treatDey.call(badam, 7000, 800);
console.log(badamMoney);

// Apply method do the same task like call
const badamMoney2 = mohon.treatDey.apply(badam, [100, 50]);
console.log(badamMoney2);


// Bind method do the same task like call. The only difference is that it creates a function
const badamMoney3 = mohon.treatDey.bind(badam);
const reamining = badamMoney3(20, 20);
console.log(reamining);

