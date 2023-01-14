
// Array VS Object
// var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen','shoes'] //Array

// var friendsAge = [12,45,78,12,32,14]; // Array
// var friendsAge = { // object
//     rahim:12,
//     karim: 78,
//     samad: 45,
//     jamal: 12,
//     robi:32,
//     kazi: 14
// }

var shoppingCart = { // objects
    books: 3,
    sunglass: 4,
    keyboard: 5,
    mouse: 1,
    pen: 10,
    shoes:2,
    
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i=0; i< keys.length; i++ ){
    var propertyName = keys[i]
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);

}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}

/*
  So What is Object in JS?
  Ans: An unordered collection of key-value pairs. Each key-value pair is called a property.
       An entity having state and behavior (properties and method)

*/

/*
    Arra[]] VS Object{}
    *Different syntax
    *Array collection data in ordered (Sequential) collection. This is not true for object.
    *Data can be accessed in array using numerical index. [0], [1],...[n]. For object values are accessed calling keys 

*/
