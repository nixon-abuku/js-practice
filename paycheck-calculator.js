//Paycheck calculator:
//Input: hourly rate, hrs worked in a week
//Output: weekly pay, monthly pay
//Steps: Take hourly rate multiply it by hrs worked in a week to find weekly pay then take the weekly pay and multiply by 4.3 to find monthly pay estimate
function weekPay(hourlyRate, hoursWorked){
    return hourlyRate * hoursWorked;
}

function monthlyPay(weekPay, numberOfWeeks){
    return weekPay * numberOfWeeks;
}

const hourlyRate = 18;
const hoursWorked = 40;
const weeklyPay = weekPay(18, 40);
const monthPay = monthlyPay(weeklyPay, 4.3);

console.log(`Hourly Rate: $${hourlyRate}`);
console.log(`Hours worked: ${hoursWorked} hrs`);
console.log(`Weekly pay: $${weeklyPay}`);
console.log(`Monthly pay: $${monthPay}`);
