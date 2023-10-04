
import { ENVDATA } from '../../config';

import React, { useState } from 'react';
import axios from 'axios';

interface SignInResponse {
  accessToken: string;
  userId: string;
}


export namespace Jesus {}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<SignInResponse>(
        ENVDATA.base_url + '/auth/signin'
        , {
        email,
        password,
      });

      const { accessToken, userId } = response.data;

      // Save the access token to local storage or a secure storage mechanism
      localStorage.setItem('accessToken', accessToken);

      // Optionally, you can save the user ID as well
      localStorage.setItem('userId', userId);

      // Handle success, e.g., redirect to the user's dashboard
      // Replace '/dashboard' with your actual dashboard route
      window.location.href = '/dashboard';
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response } = err;

        if (response && response.status === 401) {
          setError('Invalid email or password');
        } else {
          setError('An error occurred while signing in');
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
