
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import jijiRoutes from './routes/jiji.routes.js';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', jijiRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
