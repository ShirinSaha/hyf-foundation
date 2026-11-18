
const express = require("express");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const app = express();

const PORT = 3000;

const dbPath = path.join(__dirname, "database", "tasks.sqlite3");
const db = new DatabaseSync(dbPath);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/user-count", (req, res) => {
    const result = db.prepare("SELECT COUNT(*) AS count FROM user").get();
    res.json({ count: result.count });
});

app.get("/about", (req, res) => {
    res.send("This is my assignment!");
});

app.get("/err-404", (req, res) => {
    res.send("PAGE NOT FOUND!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
