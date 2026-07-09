function calculateSI() {

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);

    if (principal <= 0 || rate <= 0 || time <= 0) {
        alert("Please enter valid values.");
        return;
    }

    let si = (principal * rate * time) / 100;
    let totalAmount = principal + si;

    document.getElementById("si").textContent =
        `Simple Interest: ₹${si.toFixed(2)}`;

    document.getElementById("total").textContent =
        `Total Amount: ₹${totalAmount.toFixed(2)}`;
}