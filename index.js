
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comments.js";
import cookieParser from "cookie-parser";
import { dbConnection } from "./connection/config.js";

const app = express();

// Establish DB connection
dbConnection();


// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(cors({  
    origin:'https://ubackend.vercel.app', // Replace with your frontend origin
    credentials: true,
}));
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
  });
// Route setup
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes); 
app.use("/api/comments", commentRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    // Check if headers are already sent
    if (!res.headersSent) {
        res.status(status).json({
            success: false,
            status,
            message,
        });
    } else {
        next(err);
    }
});

// Start the server
app.listen(8000, () => {
    console.log("Server connected on port 8000");
});
