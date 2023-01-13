// objectName.propertyName একটি object এর প্রপাটি access করে
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25
}

// when you know the specific property name, use dot notation the property value
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue)

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);


// console.log(propertyValues);

console.log(shoppingCart);



// set property values
shoppingCart.mouse = 15;

shoppingCart['mouse'] = 29;
console.log(shoppingCart)