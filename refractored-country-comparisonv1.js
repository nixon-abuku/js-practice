// PROJECT: COUNTRY COMPARISON
// WHAT THE PROJECT DOES: Compares the poulation, capital city, region ,languages spoken of  USA, Germany & England and prints a comparison summary 
// INPUT : The countries URL 
// OUTPUT : The countries population, capital city, region and languages spoken & summary printed out 

// STEP BY STEP 
// 1. Use await fetch in Async function to fetch data from the countries(population, capital city, region and languages ) - 3 different async function one for each country
// 2. In the function use await response to transform the data into JSON object 
// 3. Print out the data & summary 

async function getCountry(countryName) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    console.log(`COUNTRY: ${countryName}`);
    console.log(`Population: ${data[0].population}`);
    console.log(`Capital City: ${data[0].capital}`);
    console.log(`Region: ${data[0].region}`);
    console.log(`Languages: ${Object.values(data[0].languages)}`);

}
getCountry('USA');
getCountry('United Kingdom');
getCountry('Germany');