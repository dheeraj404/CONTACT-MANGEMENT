const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const contactsRouter = require("./routes/contacts");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.send("Contact Management API is running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An unexpected error occurred!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
