import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbconnect.js";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js"

dotenv.config();
dbConnect();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://ice-cream-xi-lac.vercel.app",
    ],
    credentials: true,
  })
);


/* Middleware */
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

/* Routes */
app.use("/api/auth", authRoute);
app.use("/api", productRoute);


app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);
  console.error(JSON.stringify(err, null, 2));
  res.status(500).json({ message: err.message || "Server error" });
});
