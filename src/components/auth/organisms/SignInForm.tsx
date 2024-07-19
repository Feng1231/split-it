import React, { useState } from 'react';
import FormField from '@/components/general/molecules/FormField';
import Button from '@/components/general/atoms/Button';
import Link from '../atoms/Link';
import supabase from '@/config/supabaseClient';
import { emailValidator, passwordValidator } from '@/utils/authUtils';

const SignInForm = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    console.log(email, password)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value});
    if (error) {
      alert(error.message);
    } else {
      if (data) {
        localStorage.setItem('session', JSON.stringify(data.session));
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-100">
      <div className="bg-white shadow-lg shadow-gray-500 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-black mb-4 text-gray-900">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <FormField
            label="Email"
            placeholder="Email"
            
            type="email"
            id="email"
            value={email.value}
            onChange={(e) => setEmail({ value: e.target.value, error: '' })}
            error={email.error}
            
          />
          <FormField
            label="Password"
            placeholder='Password'
            type="password"
            id="password"
            value={password.value}
            onChange={(e) => setPassword({ value: e.target.value, error: '' })}
            error={password.error}
            
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Sign In
          </Button>
        </form>
        <div className="font-medium text-sm mt-4">
          <p className="text-gray-700"> {`Don't have an account?${' '}`}
            <Link href="/signUp" className=" text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
