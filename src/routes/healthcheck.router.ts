import express from "express";
import { HealthcheckController } from "../controllers/healthcheck.controller.js";

const router = express.Router();
const healthcheckController = new HealthcheckController();

// Define your routes here
router.get("/", healthcheckController.live);
router.get("/ready", healthcheckController.ready);

export default router;
