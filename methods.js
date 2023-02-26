

const mohon = {
    name: "Mohon Saha",
    money: 5000,
    study: "Math",
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam'
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

const output = mohon.exam();
// console.log(output);
const reExam = mohon.imprroveExam('Phsics');
// console.log(reExam);
const remaining = mohon.treatDey(2000, 500);
console.log(remaining);
const biyeRemaining = mohon.treatDey(1000, 500);
console.log(biyeRemaining);