// 1. Parsons
function isEven(n) { // A
    return n % 2 === 0; // B
} // C
console.log(isEven(4)); // D
console.log(isEven(7)); // E


// 2. Function

function isGoodTip(percent) {
    if(percent >= 15){
        return true;
    }
    return false;
}
const percent = 100;
console.log(isGoodTip(percent) ? "Generous" : "Standard");


// isGoodTip returns true or false because those are the only two options it can return given that it returns a boolean. 
// Because of that, we have to convert the output to words with extra code