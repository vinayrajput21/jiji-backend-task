import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import jijiRoutes from './routes/jiji.routes.js';
import authRoutes from './routes/auth.routes.js';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);// only to get access token for further process 
app.use('/api', jijiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
