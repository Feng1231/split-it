import React, { useState } from 'react';
import FormField from '@/components/general/molecules/FormField';
import Button from '@/components/general/atoms/Button';
import Link from '../atoms/Link';
import { signUpUser } from '@/dataAccess/userApi';
import { nameValidator, emailValidator, passwordValidator, newPasswordValidator } from '@/utils/authUtils';

const SignUpForm = () => {
    const [username, setUsername] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = nameValidator(username.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordEmptyError = passwordValidator(confirmPassword.value);
    const confirmPasswordMismatchError = newPasswordValidator(password.value, confirmPassword.value);

    if (emailError || passwordError || nameError || confirmPasswordEmptyError || confirmPasswordMismatchError) {
      setUsername({ ...username, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordEmptyError || confirmPasswordMismatchError });
      return;
    }

    try {
      await signUpUser(email.value, password.value, username.value);
      alert('You have successfully signed up.');
    } catch (error: any) {
      alert(error.message);
    } 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-100">
      <div className="bg-white shadow-lg shadow-gray-500 rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-black mb-4 text-gray-900">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Username"
            placeholder="Username"
            type="text"
            id="username"
            value={username.value}
            onChange={(e) => setUsername({ value: e.target.value, error: '' })}
            error={username.error}
          />
          
          <FormField
            label="Email"
            placeholder='Email'
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
          <FormField
            label="Confirm Password"
            placeholder='Confirm Password'
            type="password"
            id="confirmPassword"
            value={confirmPassword.value}
            onChange={(e) => setConfirmPassword({ value: e.target.value, error: '' })}
            error={confirmPassword.error}
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Sign Up
          </Button>
        </form>
        <div className="text-sm mt-4">
          <p className="text-gray-700"> {`Ready to sign in?${' '}`}
            <Link href="/signIn" className=" text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
