// NORMAL & LONGER SHIFTS
// > 8 hrs: Longer shift 
// < 8hrs : Normal shift

// STEPS
// 1. create a variable to store hours worked in shift  using let 
// 2. Use if statement to tell if the shift was long or normal

let hrsWorked = 6;
if (hrsWorked > 8){
    console.log(`The shift was ${hrsWorked} hrs so it was a long shift`)
}else if(hrsWorked === 8){
    console.log(`The shift was ${hrsWorked} hrs so it was a standard shift`)
}
else{
    console.log(`The shift was ${hrsWorked} hrs so it was a normal shift`)
}