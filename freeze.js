

const bottol = {color: 'white', price: 200, isCleaned: true, capasity: 1};
const keys = Object.keys(bottol);
// console.log(keys);
const values = Object.values(bottol);
// console.log(values);
const pair = Object.entries(bottol);
// console.log(pair);


// Delete the property and value:
console.log(bottol);
// Object.seal(bottol);  // seal helps us to protect property from delete but we can modify the proprty value and do not create new property.

Object.freeze(bottol); // Freeze helps us not to delete, modify and create the property on a object.

delete bottol.isCleaned;  // Delete
bottol.price = 1000;      // Upgrade
bottol.capasity = 20;     // Create
console.log(bottol);