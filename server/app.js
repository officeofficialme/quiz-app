const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const ai = require("./config/gemini");

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  }),
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("Show QUIZ Home");
});

// React home page
app.get("/home", (req, res) => {
  const user = {
    name: "Disha",
    age: 21,
    marks: 98,
  };

  res.status(200).json({
    data: user,
    success: true,
  });
});

app.get("/api/ai", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: "Create 5 JavaScript quiz questions with answers give it a proper json format only the array of json",
        });

        res.json({ answer: response.text });

    } catch (error) {
        console.error("Gemini Error:", error.message);
        console.error("Cause:", error.cause);

        res.status(500).json({
            error: error.message,
            cause: error.cause?.message
        });
    }
});

// Authentication routes
app.use(authRoutes);

// Start server
async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
