import express from "express";
import { TargetsController } from "../controllers/targets.controller.js";

const router = express.Router();
const targetsController = new TargetsController();

// Define your routes here
router.get("/", targetsController.get);
router.get("/:id", targetsController.getById);
router.post("/", targetsController.create);
router.put("/:id", targetsController.update);
router.delete("/:id", targetsController.delete);

export default router;
