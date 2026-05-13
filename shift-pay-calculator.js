// PROJECT: Shift Pay Calculator with Live Currency Conversion to Kenyan Shillings.
// WHAT THE PROJECT DOES: takes the money paid and converts it into kenyan shillings using a public api money converter
// INPUT : shifts, pay in usd, url for conversion
// OUTPUT: 
// May 1st: 8 hrs → $160 → 20,800 KSH
// Total: $900 → 117,000 KSH


// STEPS 
// 1. Create an array of shift objects 
// 2. Fetch exchange rate from API first
// 3. Use .forEach() to print each shift — day, hours, USD pay, KSH pay
// 4. Use .reduce() to get total USD
// 5. Convert total to KSH
// 6.Print final summary


//PAY RATE/ HR
const payRatePerHour = 20;

// LIST OF SHIFTS
const myShifts = [
    {day: "May 1st", hours: 8},
    {day: "May 2nd", hours: 9},
    {day: "May 3rd", hours: 10},
    {day: "May 4th", hours: 8},
    {day: "May 9th", hours: 10}
]

//
async function getConversion(rateCode){
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    
    //EXCHANGE RATE
    const exchangeRate = data.rates[rateCode];

    // 
    myShifts.forEach(function(shift){
        console.log(`${shift.day}: --> ${shift.hours}hrs-->$${payRatePerHour*shift.hours}-->${Math.round(shift.hours * payRatePerHour * exchangeRate)}ksh`);
    });
    
    const totalUSD = myShifts.reduce(function(total, shift){
        return total + (shift.hours * payRatePerHour);
    },0);
    const totalKenya = myShifts.reduce(function(total, shift){
        return total + (shift.hours * payRatePerHour) * (exchangeRate);
    }, 0);
    console.log(`The total you made in USD is: ${totalUSD}`);
    console.log(`The total you made in Kenyan Shillings is : ${Math.round(totalKenya)}`);
}

getConversion('KES');