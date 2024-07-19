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

export const signUpUser = async (email: string, password: string, username: string) => {
  // Step 1: Check if email or username exists in the 'profiles' table
  const { data: emailCheck, error: emailError } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', email)
    .single();
  
  const { data: usernameCheck, error: usernameError } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (emailCheck && usernameCheck) {
    throw new Error('Username and email exist');
  } else if (emailCheck) {
    throw new Error('Email exists');
  } else if (usernameCheck) {
    throw new Error('Username exists');
  } else {
    // Step 2: Proceed with sign up if checks pass
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
          email: email,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return 'Sign up successful';
  }
};

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return null;
  }
};