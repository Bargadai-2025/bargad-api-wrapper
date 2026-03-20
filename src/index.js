import express from "express";
import { PORT } from "./config/env.config.js";
import connectToDatabase from "./db/db.js";
import cors from "cors";
import CreateApiRouter from "./routes/createapi.route.js";
import ipqsRouter from "./routes/ipqs.routes.js";
import ongridRouter from "./routes/ongrid.route.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use("/api/v1/firstservice", ipqsRouter);
app.use("/api/v1/secondservice", ongridRouter);
app.use("/api/v1/createapi", CreateApiRouter);

app.get("/", (req, res) => {
  res.json({ message: "backend api ready!" });
});

app.listen(PORT, "0.0.0.0", async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
  console.log(`Server is running on port ${PORT}`);
});
