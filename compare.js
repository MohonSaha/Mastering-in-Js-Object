// first and second will not same because the are indicate different rereence. But third and second willbe same because they are assigned and that's way thre are indicating the same reference.

const first = {a: 2};
const second = {a: 2};
const third = second;

if(first === second){
    console.log("They are same");
}
else if(third === second){
    console.log("They are friend");
}
else{
console.log("They are not same");
}




// Compare Rule: Fokira rule not recommended
const firstValue = {a: 27};
const secondValue = {a: 27};
const firstString = JSON.stringify(firstValue);
const secondString = JSON.stringify(secondValue);


if(firstString === secondString){
    console.log("They are same by string");
}
else{
console.log("They are not same");
}



//Compare rule: by function

const forth = {a: 2, b: 4, d: 6};
const fifth = {b: 4, d: 6, a: 2};

function compareObject(forth, fifth){
    const forthKeys = Object.keys(forth);
    const fifthKeys = Object.keys(fifth);
    if(forthKeys.length === fifthKeys.length){
        for(const key of forthKeys){
            if(forth[key] !== fifth[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}


const isSame = compareObject(forth, fifth);
console.log(isSame);


