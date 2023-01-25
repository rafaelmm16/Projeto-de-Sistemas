import express from "express";
import "dotenv/config";
import "express-async-errors";
import "./database/connection";
import routes from "./routes";
import path from "path";
import cors from "cors";
import errorHandler from "./errors/handler";

// Basic Setup
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => {
  console.log(`server started on port ${process.env.PORT || 3333}`);
});