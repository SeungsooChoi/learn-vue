import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import cors from "cors";

const app = express();
const logger = morgan("dev");

app.use(cors());
app.use(logger);
app.use("/", globalRouter);

export default app;
