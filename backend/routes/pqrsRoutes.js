import express from 'express';
import { createPQRS, getPQRS } from '../controllers/pqrsController.js';
const router = express.Router();
router.post('/pqrs', createPQRS);
router.get('/pqrs', getPQRS);
export default router;