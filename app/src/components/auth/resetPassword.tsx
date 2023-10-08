import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from './header';

const ResetPassword: React.FC = () => {
const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Emergencies', href: 'emergency' },
    { name: 'Contact Us', href: '/contact' },
  ];


  const test = {
    name: 'Log in',
    href: '/login',
  };

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Perform the POST request to the endpoint with the password data.
    try {
      const response = await fetch('YOUR_RESET_PASSWORD_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Handle successful password reset, e.g., show a success message.
        console.log('Password reset request sent successfully.');
      } else {
        // Handle password reset request error, e.g., display an error message.
        console.error('Password reset request failed.');
      }
    } catch (error) {
      // Handle network or other errors, e.g., display an error message.
      console.error('An error occurred during the password reset request.', error);
    }
  };

  return (
    <>
      <Header navigation={navigation} test={test} />
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 max-w-md">
          <h1 className="text-4xl font-bold mb-6 ml-16 text-black text-center">Reset Password</h1>
          <div className="bg-white w-[550px] h-[300px] p-8 ring-2 ring-black ring-opacity-50 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full px-3 py-2 rounded-md border-2 border-black ${
                    passwordMatchError ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`w-full px-3 py-2 rounded-md border-2 border-black ${
                    passwordMatchError ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500`}
                  required
                />
                {passwordMatchError && (
                  <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-3 py-2 rounded-md border bg-black border-gray-300 text-xl focus:outline-none focus:border-blue-500"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
