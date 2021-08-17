import express from 'express';
import ApiRepo from '../ApiRepo';

const router = express.Router();

const repo = new ApiRepo();
router.post('/health-check', repo.healthCheck);

export default router;
