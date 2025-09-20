const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// makes sure .env variables are available
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // Allows to parse JSON

// --- DATABASE CONNECTION ---
const uri = process.env.MONGO_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// -------------------------

app.use("/api/todos", require("./routes/todoRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
