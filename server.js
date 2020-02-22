const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();
// add endpoint
app.get("/", (req, res) => res.json({ meg: "Welcome to Contact keeper API" }));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port${PORT}`));
