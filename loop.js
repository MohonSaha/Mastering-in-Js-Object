/*
3 Ways to read object properties:

1) object.propertyName
2) object['propertyName']
3) object[propertyName]

*/

const bottol = {color: 'white', price: 200, isCleaned: true, capasity: 1};

// First option:  to loop thrrough an Object. Because all the keys behaves like an array.

/*
const keys = Object.keys(bottol);
for(const key of keys){
    console.log(key, bottol[key]);
}
*/

// Second Option: for

/*
for(const key in bottol){
    console.log(key, bottol[key]);
}

*/


// Third options: Advance two dymentional array destructuring 

for(const [key, value] of Object.entries(bottol)){
    console.log(key, value);
}
