// STEPS 
// 1. Write out the array of shift objects 
// 2. Use .forEach() to print each day and its hours 
// 3. print a summary using template literal

// EXAMPLE OUTPUT 
// Monday: 10 hours 
// Tuesday: 10h hours 
// Wednesday: 10 hours 

const myShifts = [
    {day: "Sunday", hours: 10},
    {day: "Monday", hours: 10},
    {day: "Tuesday", hours: 11},
    {day: "Wednesday", hours: 12}
]
myShifts.forEach(function(shift){
    console.log(`${shift.day}: ${shift.hours} hours`);
});

const wednesday = myShifts.find(function(shift) {
    return shift.day === "Wednesday";
});
console.log(`${wednesday.day}: ${wednesday.hours} hours`);

const totalHours = myShifts.reduce(function(total, shift){
    return total + shift.hours;
}, 0);
console.log(`The total hours worked are: ${totalHours}`);