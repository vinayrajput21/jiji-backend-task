import express from 'express';
import { askJiji } from '../controllers/jiji.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validateQuery } from '../middlewares/validate.middleware.js';

const router = express.Router();
console.log(" jiji routes loaded 1 ");

router.post('/askjiji', authenticate, validateQuery, askJiji);

console.log("✅ jiji routes loaded 2 ");

export default router;
