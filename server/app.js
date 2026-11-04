const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res)=>{
    res.status(200).json({
        status: "ok"
    })
})

// Home route
app.get("/", (req, res) => {
    res.send("Show QUIZ Home");
});

// React home page
app.get("/home", (req, res) => {
    const user = {
        "name": "Akshay",
        "age": 21,
        "marks": 98
    }

    res.status(200).json({
        data: user,
        success: true
    })
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