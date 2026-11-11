// Goal output: `Cart: 2 items, total 30`
const itemPrice = 15;
const itemCount = 2;
const cartTotal = itemCount * itemPrice;
console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);


// Modify
const name = "Notebook"; 
let price = "10"; // will change later
let stock = 12; // will change later
const isOnSale = false;

stock = stock - 2; // 10

console.log(`NoteBook: Only ${stock} left`);
console.log(typeof name, typeof price, typeof stock, typeof isOnSale);


console.log(price * 2); // i think that the price will be converted to an int and will show 20
console.log(price + 2); // I think that the 2 will be treated as a string and will show 102