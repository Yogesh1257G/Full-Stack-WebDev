function calculateResult() {

    let name = document.getElementById("studentName").value;
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;
    let sub4 = document.getElementById("sub4").value;
    let sub5 = document.getElementById("sub5").value;

    if (
        name === "" ||
        sub1 === "" ||
        sub2 === "" ||
        sub3 === "" ||
        sub4 === "" ||
        sub5 === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    sub1 = Number(sub1);
    sub2 = Number(sub2);
    sub3 = Number(sub3);
    sub4 = Number(sub4);
    sub5 = Number(sub5);

    if (
        sub1 > 100 ||
        sub2 > 100 ||
        sub3 > 100 ||
        sub4 > 100 ||
        sub5 > 100
    ) {
        alert("Please enter correct values.");
        resetForm();
        return;
    }

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let percentage = total / 5;

    let grade = "";

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let status = percentage >= 50 ? "Pass" : "Fail";

    let gradeClass = "";
    if (grade === "A+") {
        gradeClass = "grade-green";
    }
    else if (grade === "F") {
        gradeClass = "grade-red";
    }

    let statusClass = status === "Pass" ? "pass" : "fail";

    let resultBox = document.getElementById("result");

    resultBox.style.display = "block";

    resultBox.innerHTML = `
        <p>Student Name: ${name}</p>
        <p>Total Marks: ${total}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade:
            <span class="${gradeClass}">${grade}</span>
        </p>
        <p>Status: 
            <span class="${statusClass}">${status}</span>
        </p>
    `;
    document.getElementById("studentName").value = "";
    document.getElementById("sub1").value = "";
    document.getElementById("sub2").value = "";
    document.getElementById("sub3").value = "";
    document.getElementById("sub4").value = "";
    document.getElementById("sub5").value = "";
}

function resetForm() {

    document.getElementById("studentName").value = "";
    document.getElementById("sub1").value = "";
    document.getElementById("sub2").value = "";
    document.getElementById("sub3").value = "";
    document.getElementById("sub4").value = "";
    document.getElementById("sub5").value = "";

    document.getElementById("result").style.display = "";
}