import express from "express";
import { HealthcheckController } from "../controllers/healthcheck.controller.js";

const router = express.Router();

// Define your routes here
router.get("/", HealthcheckController.live);
router.get("/ready", HealthcheckController.ready);

export default router;
