const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.js");

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "API is running..." }); 
});

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
