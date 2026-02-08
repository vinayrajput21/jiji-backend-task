// this only for generate accesss token which o can copy and use ad header in the header 

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export const getJwtToken = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(401).json({
        error: error.message
      });
    }

    return res.json({
      access_token: data.session.access_token,
      token_type: 'Bearer',
      expires_in: data.session.expires_in,
      user_id: data.user.id
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
};
