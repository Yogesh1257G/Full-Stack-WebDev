
const products = [
    {
        name: "Bike",
        price: 250000,
        category: "Automobile"
    },
    {
        name: "iPhone",
        price: 200000,
        category: "Electronics"
    },
    {
        name: "TV",
        price: 52000,
        category: "Home Appliance"
    },
    {
        name: "Bottle",
        price: 3000,
        category: "Daily Usage"
    },
    {
        name: "Pen",
        price: 10,
        category: "Stationary"
    },
    {
        name: "Washing Machine",
        price: 40000,
        category: "Home Appliance"
    }
];

const container = document.getElementById("productContainer");

products.forEach(function(product){

    const card = document.createElement("div");
    card.className = "card";

    let message = "";

    if(product.price > 50000){
        message = "Premium Product";
    }
    else{
        message = "Budget Product";
    }

    card.innerHTML = `
        <h2>${product.name}</h2>
        <p><b>Price:</b> Rs.${product.price}</p>
        <p><b>Category:</b> ${product.category}</p>
    `;

    card.addEventListener("click", function () {
        alert(message);
    });

    container.appendChild(card);

});