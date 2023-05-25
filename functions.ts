import { v4 as uuidv4 } from 'uuid';

export interface Item {
    id: string;
    name: string;
    price: number;
    description: string;
  }

  export interface User {
    id: string;
    name: string;
    age: number;
    cart: Item[];
  }

  export function createUser(name: string, age: number): User {
    const id = uuidv4();
    return {
      id,
      name,
      age,
      cart: [],
    };
  }

  export function createItem(name: string, price: number, description: string): Item {
    const id = uuidv4();
    return {
      id,
      name,
      price,
      description,
    };
  }

  export function addToCart(item: Item, user: User): void {
    user.cart.push(item);
  }

  export function removeFromCart(item: Item, user: User): void {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
  }

  export function cartTotal(user: User): number {
    return user.cart.reduce((total, item) => total + item.price, 0);
  }

  export function printCart(user: User): void {
    console.log(`User: ${user.name}`);
    console.log('Cart Items:');
    user.cart.forEach((item) => {
      console.log(`- ${item.name}: $${item.price}`);
    });
  }

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
