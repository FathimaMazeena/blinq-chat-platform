require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");

const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const messageRoutes = require("./src/routes/messageRoutes");


const errorMiddleware = require("./src/middleware/errorMiddleware");
const notFoundMiddleware = require("./src/middleware/notFoundMiddleware");


const app = express();


connectDB();

app.use(express.json());


app.use(cors());



app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/messages", messageRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(notFoundMiddleware);

app.use(errorMiddleware);

module.exports = app;

