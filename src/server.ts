import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express from "express";

import { v1Routes } from "./api/http/v1Routes";
import ErrorMiddleware from "./api/middlewares/error";
import "./shared/container";

const app = express();
app.use(express.json());
app.use(cors());

app.use(v1Routes);
app.use(ErrorMiddleware);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
