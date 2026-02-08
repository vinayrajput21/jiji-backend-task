import { processQuery } from '../services/jiji.service.js';

export const askJiji = async (req, res) => {
  try {
    const { query } = req.body;
    const userId = req.user.id; 
  
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const result = await processQuery(userId, query, authHeader);
    
    console.log("result", result);
    res.status(200).json(result);
  } catch (err) {
    console.error("Controller Error:", err);
    res.status(500).json({
      error: 'Something went wrong'
    });
  }
};