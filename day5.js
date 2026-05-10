// NORMAL & LONGER SHIFTS
// > 8 hrs: Longer shift 
// < 8hrs : Normal shift

// STEPS
// 1. create a variable to store hours worked in shift  using let 
// 2. Use if statement to tell if the shift was long or normal

const myShifts = [
    {day: "Sunday", hrs: 10},
    {day: "Monday", hrs: 10},
    {day: "Tuesday", hrs: 8},
    {day: "Wednesday", hrs: 12}
]
const longShifts = myShifts.filter(function(shift){
    return shift.hrs >= 10;

});
const daysWorked = myShifts.map(function(shift){
    return shift.day;
});
console.log(daysWorked);
console.log(longShifts);


//Why didnt we do function Myshifts(shift)
/*
let hrsWorked = 6;
if (hrsWorked > 8){
    console.log(`The shift was ${hrsWorked} hrs so it was a long shift`)
}else if(hrsWorked === 8){
    console.log(`The shift was ${hrsWorked} hrs so it was a standard shift`)
}
else{
    console.log(`The shift was ${hrsWorked} hrs so it was a normal shift`)
}*/