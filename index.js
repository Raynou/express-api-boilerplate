const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const app = express();

const startUp = () => "Welcome to the API!";


// Middleware.
app.use(express.json());
app.use(cors())
app.use("/api", router);

// Startup endpoint.
app.get("/", (req, res) => res.send(startUp()));

app.listen(3000, () => {
  console.log("App on port 3000");
});
