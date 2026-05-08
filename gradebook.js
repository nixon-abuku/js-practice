//GRADEBOOK
//Input : name & score
//Output: name & score 
//task: create a for loop that will print all the students and their scores

const gradeBook = [
    {name: "Nixon", score: 95},
    {name: "John", score: 87},
    {name: "Sarah", score: 92},
    {name: "Kevin", score: 88}
]
for (const grade of gradeBook){
    console.log(`Student: ${grade.name} | Score: ${grade.score}`);
    }