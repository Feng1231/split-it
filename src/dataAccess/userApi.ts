import supabase from '@/config/supabaseClient';

export const fetchTest = async () => {
  const { data, error } = await supabase
    .from('test')
    .select('*');

    if (error) {
      throw new Error(error.message);
    }

  return data || [];
}