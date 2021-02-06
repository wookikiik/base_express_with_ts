import sample from "./sample";
import { Router } from "express";

const router = Router();
router.use("/sample", sample);

export default router;
