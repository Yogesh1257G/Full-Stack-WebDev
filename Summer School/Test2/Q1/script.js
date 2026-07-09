
const students = [
    {
        name: "Tushar",
        course: "BCA",
        semester: 2
    },
    {
        name: "Yogesh Soni",
        course: "B.Tech",
        semester: 4
    },
    {
        name: "Rahul",
        course: "B.Sc",
        semester: 1
    },
    {
        name: "Shubham Sangwan",
        course: "MCA",
        semester: 3
    },
    {
        name: "Rohan Nara",
        course: "B.Com",
        semester: 5
    }
];

const container = document.getElementById("studentContainer");

students.forEach(function(s){

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${s.name}</h2>
        <p>Course: ${s.course}</p>
        <p>Semester: ${s.semester}</p>
    `;

    container.appendChild(card);
});