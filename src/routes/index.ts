import express from 'express';
import campaignsRouter from './campaigns.router.js';
import healthCheckRouter from './healthcheck.router.js';
import targetsRouter from './targets.router.js';

const router = express.Router();

router.use('/campaigns', campaignsRouter);
router.use('/healthcheck', healthCheckRouter);
router.use('/targets', targetsRouter);

export default router;
