// WHAT THE SCRIPT DOES: Goes into the websites collecs data about nigeria and transforms them into JSON object
// WHAT GOES IN : URL 
// WHAT COMES OUT: Data about nigeria 

// STEP BY STEP LOGIC
// use async function 
// use await fetch to collect population, region, capital and languages of nigeria
// use await response to transform and print  the data into json format

async function getData() {
    const response = await fetch('https://restcountries.com/v3.1/name/nigeria');
    const data = await response.json();
    console.log(`Capital City: ${data[0].capital}`);
    console.log(`Language: ${data[0].languages.eng}`);
    console.log(`Region: ${data[0].region}`);
    console.log(`Population: ${data[0].population}`);
}
getData();