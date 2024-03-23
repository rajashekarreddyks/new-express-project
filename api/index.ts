const express = require("express");
const app = express();

let port = 3001

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(port, () => console.log("Server ready on port 3001."));

module.exports = app;