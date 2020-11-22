//console.log(‘hi’)

const express = require("express");

//INIT EXPRESS

const app = express();

//CREATE ROUTE

app.get("/", (req, res) => {
  res.send("hello");
});

// Customers API Routes
app.use("/customers", require("./controllers/customer"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
