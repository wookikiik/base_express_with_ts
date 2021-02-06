import { Router } from "express";

const router = Router();
router.get("/", (_request, response) => {
  return response.json({ sample: true });
});

export default router;
