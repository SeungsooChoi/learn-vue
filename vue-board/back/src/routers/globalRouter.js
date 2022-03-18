import express from "express";

import { home, upload } from "../controllers/postController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.post("/post", upload);

export default globalRouter;
