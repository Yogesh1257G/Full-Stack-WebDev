function hex() {
    let c = Math.ceil(Math.random() * 16);

    if (c < 10) {
        return c.toString();
    } else {
        return String.fromCharCode(c - 10 + 65);
    }
}

function randomNo() {
    let str = "#";
    for (let i = 0; i < 6; i++) {
        str += hex();
    }
    return str
}

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = randomNo();
    e.style.color = randomNo();
});