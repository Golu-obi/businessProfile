import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Import the contact route

dotenv.config();

const app = express();
const Port = process.env.Port || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Specify frontend origin if needed
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Use the contact route

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
