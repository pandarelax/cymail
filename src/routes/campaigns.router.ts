import express from 'express';
import { CampaignsController } from '../controllers/campaigns.controller.js';

const router = express.Router();

// Define your routes here
router.get('/', CampaignsController.get);

export default router;
