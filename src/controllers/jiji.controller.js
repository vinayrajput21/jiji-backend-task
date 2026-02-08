import { processQuery } from '../services/jiji.service.js';

export const askJiji = async (req, res) => {
  try {
    console.log("reached to controller")
    const { query } = req.body;
    const userId = req.user.id;

    const result = await processQuery(userId, query);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: 'Something went wrong'
    });
  }
};
