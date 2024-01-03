import express from 'express';
import { CampaignsController } from '../controllers/campaigns.controller.js';

const router = express.Router();
const campaignsController = new CampaignsController();

// Define your routes here
router.get("/", campaignsController.get);
router.get("/:id", campaignsController.getById);
router.post("/", campaignsController.create);
router.put("/:id", campaignsController.update);
router.delete("/:id", campaignsController.delete);
router.post("/launch", campaignsController.launch);
router.post("/schedule", campaignsController.schedule);

export default router;
