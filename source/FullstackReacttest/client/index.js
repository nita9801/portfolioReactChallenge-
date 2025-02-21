const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json()); // Parses JSON request bodies

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(5000, () => console.log("Server started on port 5000"));


const pool = new Pool({
    user: "yourusername",
    host: "localhost",
    database: "mydatabase",
    password: "yourpassword",
    port: 5432,
});

pool.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.log(err));
