import express from "express";

const app = express();      // creates an express app

app.get("/api/health", (req, res) => {
    res.json({ message: "Backend is working!" });
});

export default app;
