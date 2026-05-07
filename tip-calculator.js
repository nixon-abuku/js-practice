//Tip calculator 
//Input : bill amount , tip percantage
//Output: Total bill
//Steps: Multiply tipPercantage(in decimals) to billAmount then add it to the billAmount


function calculateTip(billAmount, tipPercantage){
    return (tipPercantage /100) * billAmount;
}

function calculateTotal(billAmount, tip){
    return billAmount + tip;
}
const billAmount = 50;
const tip = calculateTip(50, 20);
const total = calculateTotal(50, tip);

console.log(`Bill: $${billAmount}`);
console.log(`Tip 20%: $${tip}`);
console.log(`Total: $${total}`);