// Parsons
// Goal output: `Grade: B` when `score` is `85`.
const score = 85; // B
let grade = ""; // E
if (score >= 90) { // C
    grade = "A"; // F
}
else if(score >= 80){ // A
    grade = "B"; // D
}
else { // G
    grade = "C"; // H
}
console.log(`Grade: ${grade}`); // J


// Modify Shipping Calc
let orderTotal = 333;
let country = "international";
let isMember = false;

let shippingCost;

if (isMember || orderTotal > 500) {
  shippingCost = 0;
} else if (country === "local" && orderTotal > 50) {
  shippingCost = 0;
} else if (country === "local") {
  shippingCost = 5;
} else {
  shippingCost = 15;
}

let label = shippingCost === 0 ? "Free shipping" : `Shipping: $${shippingCost}`;

console.log(label);

// i just added it on the same line as isMember and it should work the same in my mind