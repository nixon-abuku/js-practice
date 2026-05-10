// PROJECT: LONG NIGHT SHIFT LOG
// WHAT IT DOES: Loops through a list of shift and filters out the short shifts , displays the days long shifts were worked & calculate the total hours 
// INPUT: Days & hrs worked
// OUTPUT: List of days of long shifts & total hours worked 

// STEPS
// 1. Create an array of shift object
// 2. Use filter and function to filter out all the short shifts
// 3. Use map and function to map out the days
// 4. Calculate the total hours worked on the long shift days  
// 5. print out the summary of the days and total hours of the long shifts 

//LIST OF SHIFT OBJECT 
const myShifts = [
    {day: "Sunday", hrs: 10},
    {day: "Monday", hrs: 12},
    {day: "Tuesday", hrs: 8},
    {day: "Wednesday", hrs: 6},
    {day: "Thursday", hrs: 8}
]
//FILTER OUT SHORT SHIFT
const longShift = myShifts.filter(function(shift){
    return shift.hrs >= 10;
});
//MAP OUT DAYS OF LONG SHIFTS
const daysWorked = longShift.map(function(dayWorked){
    return dayWorked.day;
});
// CALCULATE TOTAL HRS OF LONG SHIFT DAYS
function totalHrs(longShift){
    let count = 0;
    for (const hours of longShift){
        count = count + hours.hrs
    }
    return count;
}
const totalHrsWorked = totalHrs(longShift);
console.log(`These are the days you had long shifts: ${daysWorked} and you worked a total of ${totalHrsWorked} `);
