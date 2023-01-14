var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 1,
    mouse: 1,
    pen: 25
}
var perCount = shoppingCart.pen;
// console.log(perCount);

var perCount2 = shoppingCart['pen'];

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
// var propertyValue = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValue);

// console.log(perCount2);



shoppingCart.mouse = 15;
shoppingCart['mouse'] = 5;
shoppingCart.pen = 1;
shoppingCart.mouse = 6;
console.log(shoppingCart);

