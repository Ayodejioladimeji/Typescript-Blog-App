import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// THE MIDDLEWARES
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// DATABASE
import "./config/database";

// THE SERVER LISTENER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
