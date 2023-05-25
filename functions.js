"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
function createUser(name, age) {
    const id = (0, uuid_1.v4)();
    return {
        id,
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function createItem(name, price, description) {
    const id = (0, uuid_1.v4)();
    return {
        id,
        name,
        price,
        description,
    };
}
exports.createItem = createItem;
function addToCart(item, user) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
exports.removeFromCart = removeFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log(`User: ${user.name}`);
    console.log('Cart Items:');
    user.cart.forEach((item) => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}
exports.printCart = printCart;
const user = createUser('YY', 26);
const shampoo = createItem('shampoo', 10, 'Bed, bath, and beyond');
const toothpaste = createItem('toothpaste', 15, 'Crescent Toothpaste');
const snickers = createItem('Snickers', 20, 'Chocolate Bar');
addToCart(shampoo, user);
printCart(user);
addToCart(toothpaste, user);
addToCart(toothpaste, user);
addToCart(toothpaste, user);
printCart(user);
addToCart(snickers, user);
addToCart(snickers, user);
addToCart(snickers, user);
console.log('User\'s Cart after adding 3 Snickers:');
printCart(user);
console.log('Cart Total:', cartTotal(user));
removeFromCart(toothpaste, user);
printCart(user);
