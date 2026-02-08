import { createClient } from '@supabase/supabase-js';

export const processQuery = async (userId, query, token) => {
  const cleanToken = token.replace('Bearer ', '').trim();
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      },
    }
  );

  console.log("Checking RLS for User:", userId);
  const { data, error: insertError } = await supabase
    .from('queries')
    .insert({
      user_id: userId,
      query_text: query
    })
    .select(); 

  if (insertError) {
    console.error("RLS/Database Error:", insertError.message);
    return { error: insertError.message, resources: [] };
  }

  console.log("Successfully passed RLS check:", data);

  const keyword = query.toLowerCase().includes('rag') ? 'rag' : query.toLowerCase().trim();

  const { data: resources, error: fetchError } = await supabase
    .from('resources')
    .select('*')
    .contains('tags', [keyword]);

  if (fetchError) {
    console.error('Resource fetch error:', fetchError.message);
  }

  return {
    answer: `Here is a curated explanation of "${query}".`,
    resources: resources || []
  };
};