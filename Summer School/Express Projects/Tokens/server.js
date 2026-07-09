const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const port = 3000;
const secretKey = 'my_secret_key'; // replace with your own secret key
const users = [];

app.get("/", function (request, response) {
    response.send("Authentication server is running");
});

app.post("/register", function (request, response) {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;
    if (!name || !email || !password) {
        return response.status(400).json({
            message: "Name, email, and password are required",
        });
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});