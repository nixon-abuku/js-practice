const companies = ["Google", "Amazon", "Microsoft", "Apple"];
companies.pop();
let count = 0;
for (const company of companies){
    count++;
    console.log(`${count}. ${company}`);

}

const jobApplication = {
    title: "Software Engineer",
    company: "Google",
    status: "Pending",
    dateApplied: "May 6 2026"
};
console.log(`Company: ${jobApplication.company}`);
console.log(`Title: ${jobApplication.title}`);
console.log(`Status: ${jobApplication.status}`);

const applications = [
    {title: "Software Engineer", company: "Google", status: "Pending"},
    {title: "Backend Developer", company: "Amazon", status: "Applied"},
    {title: "DevOps Engineer", company: "Microsoft", status: "Rejected"}
];

for( const app of applications){
    console.log(`Title: ${app.title} | Company: ${app.company} | Status: ${app.status}`);
}