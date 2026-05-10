// PROJECT: NIGHT SHIFT LOG 
// WHAT IT DOES: Loops through a list of shifts and calculates total hourse worked in a week 
// Input: Array of shift objects .each with a day and hours property
// Output : A summary printed to the console showing the total hours worked 

// STEPS 
// 1. Create an array of shift objects
// 2. Create a function that receives the whole arrau
// 3. Create a variable to store the running total 
// 4. Loop through eve`ry shift and add its hours to the total
// 5. Return the total and print a summary using a template literal 

const shifts = [
    {day: "Sunday", hours: 10},
    {day: "Monday", hours: 10},
    {day: "Tuesday", hours: 10},
    {day: "Wednesday", hours: 10}
];
function myShifts(shifts){
    let count = 0;
    for (const shift of shifts){
        count = count + shift.hours
    }
    return count;
}
const totalHrsWorked = myShifts(shifts);
console.log(`The total hours worked for the week are: ${totalHrsWorked} hrs`)