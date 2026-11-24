// Expense Tracker — your app for the whole course.
//
// Part 1 (session 6): data + functions, console only.
// Part 2 (session 9): a screen, and add / mark paid / delete.
// Part 3 (session 11): survives a refresh, and fetches live data.
//
// Start here, after session 4:
//
// Design check — answer these in a comment before writing any code.
//   1. What shape is an expense? Write one example.
//      An expense is an object that has multiple variables describing different properties such as price (amount), type or label, and whatever other information is required
//   2. What do you want to find out about your expenses?
//          I would want to know the price, the name of it, the type/category it falls under, and whether I have paid it off yet or not

// Example of the shape, from the brief:
//   { label: "Internet", amount: 45, category: "home", isPaid: false }

// ---------- data ----------
const expenses = [
    { label: "Doordash", amount: 40, category: "food", isPaid: false},
    { label: "Gas", amount: 40, category: "utilities", isPaid: true},
    { label: "Cat treats", amount: 20, category: "food", isPaid: true},
    { label: "Nintendo switch 2", amount: 450, category: "entertainment", isPaid: false},
    { label: "Phone bill", amount: 55, category: "utilities", isPaid: false}
]
// ---------- functions ----------
function describeExpense(expense){
    if(expense.isPaid){
    return `${expense.label} - ${expense.amount} (${expense.category}, paid)`;
    }
    else{
        return `${expense.label} - ${expense.amount} (${expense.category}, unpaid)`;
    }
}

    // Checks are in this order because it doesn't matter whether an amount is > 100 if its paid, so paid takes top prio, 
    // then for the rest of the expenses that are unpaid the ones with an amnt > 100 take next prio, then the rest would be unpaid
function getStatus(expense){
    if(expense.isPaid === true){
        return "Paid";
    }
    else if(expense.amount > 100){
        return "Pay First";
    }
    return "Unpaid";
}

function getTotal(expenses){
    let total = 0;
    for(expense of expenses){
        const {amount} = expense;
        total += amount;
    }
    return total;
}

function getUnpaidTotal(expenses){
    let unpaidTotal = 0;
    for(expense of expenses){
        const {amount, isPaid} = expense;
        if(!isPaid){
            unpaidTotal += amount;
        }
    }
    return unpaidTotal;
}
// ---------- output ----------
/* Stage 1
console.log(describeExpense(expenses[0]));
console.log(describeExpense(expenses[1]));
console.log(describeExpense(expenses[2]));

console.log(getStatus(expenses[0])); // should be unpaid
console.log(getStatus(expenses[1])); // should be paid
console.log(getStatus(expenses[2])); // should be paid
console.log(getStatus(expenses[3])); // should be pay first
*/

// Stage 2
for(const expense of expenses){
    console.log(describeExpense(expense));
}

console.log("Total: " + getTotal(expenses));

console.log("Unpaid total: " + getUnpaidTotal(expenses));