// const express = require('express');
// const app = express();

// const students = [
//   { id: 1, name: 'Alice Johnson', age: 18, grade: '12', major: 'Mathematics' },
//   { id: 2, name: 'Bob Smith', age: 17, grade: '11', major: 'Science' },
//   { id: 3, name: 'Carla Davis', age: 18, grade: '12', major: 'English' },
//   { id: 4, name: 'Daniel Lee', age: 16, grade: '10', major: 'History' }
// ];

// app.get("/", function (request, response) {
//   response.send("student management system api is running");
// });

// app.get("/students", function (request, response) {
//   response.send(students);
// });

// app.get("/students/:id", function (request, response) {
//     const studentId = Number(request.params.id);
//     const student = students.find(s => s.id === studentId);
//     if(student) {
//         response.send(student);
//     } else {
//         response.status(404).send ({
//             Message : "student not found"
//         });
//     }
// });

// app.listen(3000, function () {
//   console.log("Server is running on port 3000");
// });

// -- API key making by get --




// const express = require('express');
// const app = express();
// app.use(express.json());

// const students = [
//   { id: 1, name: 'Alice Johnson', age: 18, grade: '12', major: 'Mathematics' },
//   { id: 2, name: 'Bob Smith', age: 17, grade: '11', major: 'Science' },
//   { id: 3, name: 'Carla Davis', age: 18, grade: '12', major: 'English' },
//   { id: 4, name: 'Daniel Lee', age: 16, grade: '10', major: 'History' }
// ];

// app.get("/", function (request, response) {
//   response.send("student management system api is running");
// });

// app.get("/students", function (request, response) {
//   response.send(students);
// });

// app.get("/students/:id", function (request, response) {
//     const studentId = Number(request.params.id);
//     const student = students.find(s => s.id === studentId);
//     if(student) {
//         response.send(student);
//     } else {
//         response.status(404).send ({
//             Message : "student not found"
//         });
//     }
// });

// app.post("/students", function(request,response) {
//   const newStudent = {
//     id: students.length + 1,
//     name: request.body.name,
//     age: request.body.age,
//     grade: request.body.grade,
//     major: request.body.major
//   };
//   students.push(newStudent);
//   response.status(201).send(newStudent);
// });

// app.listen(3000, function () {
//   console.log("Server is running on port 3000");
// });


// -- API key making by post --





const express = require('express');
const app = express();
app.use(express.json());

const students = [
  { id: 1, name: 'Alice Johnson', age: 18, grade: '12', major: 'Mathematics' },
  { id: 2, name: 'Bob Smith', age: 17, grade: '11', major: 'Science' },
  { id: 3, name: 'Carla Davis', age: 18, grade: '12', major: 'English' },
  { id: 4, name: 'Daniel Lee', age: 16, grade: '10', major: 'History' }
];

app.get("/", function (request, response) {
  response.send("student management system api is running");
});

app.get("/students", function (request, response) {
  response.send(students);
});

app.get("/students/:id", function (request, response) {
    const studentId = Number(request.params.id);
    const student = students.find(s => s.id === studentId);
    const updateData = request.body || {};
    if(student) {
        response.send(student);
    } else {
        response.status(404).send ({
            Message : "student not found"
        });
    }
});

app.post("/students", function(request,response) {
  const newStudent = {
    id: students.length + 1,
    name: request.body.name,
    age: request.body.age,
    grade: request.body.grade,
    major: request.body.major
  };
  students.push(newStudent);
  response.status(201).send(newStudent);
});

app.put("/students/:id", function(request, response) {
  const studentId = Number(request.params.id);
  const student = students.find(s => s.id === studentId);

  if (!student) {
    return response.status(404).send({
      Message: "student not found"
    });
  }
  student.name = request.body.name || student.name;
  student.age = request.body.age ?? student.age;
  student.grade = request.body.grade || student.grade;
  student.major = request.body.major || student.major;
  response.send(student);
});

app.delete("/students/:id", function(request, response) {
  const studentId = Number(request.params.id);
  const studentIndex = students.findIndex(s => s.id == studentId);
  if (studentIndex !== -1) {
    const deletedStudent = students.splice(studentIndex, 1);
    response.send({ Message: "student deleted successfully", DeletedStudent: deletedStudent[0] });
  } else {
    response.status(404).send({ Message: "student not found" });
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// -- API key making by put --