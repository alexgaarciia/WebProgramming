const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.get("/users", (req, res) => {
    res.send("Users List!");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});