import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use("/", globalRouter);

export default app;
