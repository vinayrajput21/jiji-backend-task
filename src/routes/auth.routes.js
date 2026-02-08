
// this only to generate access token easily for further authentication purpose
import express from 'express';
import { getJwtToken } from '../controllers/getJwtToken.controller.js';

const router = express.Router();
router.post('/token', getJwtToken);

export default router;
