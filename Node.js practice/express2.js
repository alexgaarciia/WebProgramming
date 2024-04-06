const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.post("/submit", (req, res) => {
    // Handle form submission here
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});