// PROJECT: MONTHLY PAYCHECK FOR APRIL ASSUMING I GOT PAID WEEKLY 
// WHAT THE PROJECT DOES: Figures out the week with the paycheck below < 1000 and week with paycheck above 1000 
// INPUT: Weeks , paycheck
// OUTPUT: weeks with paycheck below 1000, weeks with paycheck above 1000, total of paycheck of weeks < 1000,  total of paycheck of weeks > 1000 and The whole total monthly paycheck


// STEPS 
// 1. Create Array of paycheck objects
// 2. Use filter() to find the week with paycheck <1000 and > 1000
// 3. Use reduce() to find total of weeks with paycheck < 1000 and > 1000 and total paycheck for the month

const myAprilPaycheck = [
    {week: "week 1", check: 1200},
    {week: "Week 2", check: 800},
    {week: "Week 3", check: 1200},
    {week: "Week 4", check: 900}
]
const lowPaycheckWks = myAprilPaycheck.filter(function(paycheck){
    return paycheck.check < 1000;
});
const highPaycheckWks = myAprilPaycheck.filter(function(paycheck){
    return paycheck.check >= 1000;
});
const totalOfLowChecks = lowPaycheckWks.reduce(function(total, paycheck){
    return total + paycheck.check;
}, 0);
const totalOfHighChecks = highPaycheckWks.reduce(function(total, paycheck){
    return total + paycheck.check;
}, 0);
const totalMonthlyPaychek = myAprilPaycheck.reduce(function(total, paycheck){
    return total + paycheck.check;
}, 0);
console.log(`These are weeks with the low paychecks:`);
lowPaycheckWks.forEach(function(paycheck){
   console.log(`${paycheck.week}: $${paycheck.check}`);
});
console.log(`Your total paycheck for these weeks is: $${totalOfLowChecks}`);
console.log(`These are the weeks with the highest paychecks:`);
highPaycheckWks.forEach(function(paycheck){
    console.log(`${paycheck.week}: $${paycheck.check}`);
});
console.log(`Your total paycheck for these weeks is: $${totalOfHighChecks}`);
console.log(`Your total monthly paycheck is: $${totalMonthlyPaychek}`);