// PROJECT: COUNTRY COMPARISON 
// WHAT IT DOES: Reads country(Kenya, Nigeria, Uganda) data (population, captital city, languages ) through api transforms them into json object 
// INPUT: The countries  url 
//OUTPUT: Countries dara printed out (population, captital city, languages ) 

// STEPS 
// 1. create an async function with a parameter so  that will accommodate the 3 countries in one script 
// 2. Use await fetch to collect data from the internet(url),then to store the data and  then to transform the data to json object using .json() 
// 5. Use console.log with template literals to print out the data (population, captital city, languages ) 
// 6. Call out the function to print the data for each country

async function getCountryData(countryName) {
   const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}/`);
   const data = await response.json();
   console.log(`${countryName}`);
   console.log(`Population: ${data[0].population}`);
   console.log(`Capital City: ${data[0].capital}`);
   console.log(`Languages: ${Object.values(data[0].languages)}`);
}

getCountryData('Kenya');
getCountryData('Nigeria');
getCountryData('Uganda');