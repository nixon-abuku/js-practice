// PROJECT: MONTHLY PAYCHECK CALCULATOR
// WHAT THE PROJECT DOES: Displays weeks with paychecks < 1000 and finds theiir total, displays weeks with paycheck >= 1000 and finds their total and calculates the total monthly paycheck 
// INPUT: Weeks, checks 
// OUTPUT:Weeks with paycheck < 1000 and >=1000 , total of each and total combined with summary

// STEPS
// 1. Array of paycheck objects
// 2. Use .filter() to filter out checks <1000 and checks >= 1000
// 3. Use .reduce() to find total of checks < 1000 and checks >= and the whole total combined 
// 4. Print a summary of the totals

// ARRAY OF PAYCHECK OBJECTS
const myAprilPaychecks = [
    {week: "Week 1", check: 1200},
    {week: "Week 2", check: 800},
    {week: "Week 3", check: 1400},
    {week: "Week 4", check: 900}
]

// RETURNS PAYCHECKS over or equal 1000
const highAprilChecks = myAprilPaychecks.filter(function(myCheck){
    return myCheck.check >= 1000;
});

// RETURNS PAYCHECKS below 1000
const lowAprilChecks = myAprilPaychecks.filter(function(myCheck){
    return myCheck.check < 1000;
});

// TOTAL OF HIGH APRIL CHECKS
const totalOfHighChecks = highAprilChecks.reduce(function(total, myCheck){
    return total + myCheck.check;
}, 0);

// TOTAL OF LOW APRIL CHECKS 
const totalOfLowChecks = lowAprilChecks.reduce(function(total, myCheck){
    return total + myCheck.check;
}, 0)

// WHOLE MONTHLY TOTAL 
const monthlyTotal = myAprilPaychecks.reduce(function(total, myCheck){
    return total + myCheck.check;
}, 0);

// DISPLAY  WEEKS  WITH CHECKS >= 1000 
console.log(`These are the weeks with checks over 1000: `);
highAprilChecks.forEach(function(myCheck){
    console.log(`${myCheck.week}: $${myCheck.check}`);
});
// TOTAL  OF  CHECK >= 1000
console.log(`The total of these weeks are: $${totalOfHighChecks}`);

// DISPLAY WEEKS CHECKS < 1000 
console.log(`These are the weeks with checks below 1000: `);
lowAprilChecks.forEach(function(myCheck){
    console.log(`${myCheck.week}: $${myCheck.check}`);
});

// TOTAL OF CHECKS < 1000
console.log(`The total of these weeks are: $${totalOfLowChecks}`);

//TOTAL MONTHLY PAYCHECK 
console.log(`The total monthly paycheck is: $${monthlyTotal}`);