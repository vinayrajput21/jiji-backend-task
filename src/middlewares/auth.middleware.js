import { supabase } from '../config/supabaseClient.js';

export const authenticate = async (req, res, next) => {
  console.log("reached to auth")
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = data.user;
  next();
};
