// Parsons — count
// Goal output: `2` (how many scores are 60 or above)


const scores = [72, 55, 91, 40]; // A
let count = 0;                   // B
for (const score of scores) {    // C
    if (score >= 60) {           // D
        count = count + 1;       // E
    }                            // F
}                                // G
console.log(count);              // H