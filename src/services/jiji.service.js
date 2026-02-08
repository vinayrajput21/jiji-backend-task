import { supabase } from '../config/supabaseClient.js';

export const processQuery = async (userId, query) => {
  // Save query
  await supabase.from('queries').insert({
    user_id: userId,
    query_text: query
  });

  // Fetch matching resources
  const keyword = query.toLowerCase();

  const { data: resources } = await supabase
    .from('resources')
    .select('*')
    .ilike('tags', `%${keyword}%`);

  // Mocked AI answer
  const answer = `Here is a simple explanation of "${query}". 
This content is curated from our learning resources.`;

  return {
    answer,
    resources: resources || []
  };
};
