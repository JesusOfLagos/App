import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from './header';

const ForgotPassword: React.FC = () => {
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
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform the POST request to the endpoint with the email data.
    try {
      const response = await fetch('YOUR_RESET_PASSWORD_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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
    <><Header navigation={navigation} test={test} /><div className="flex justify-center items-center h-screen">
      <div className="w-3/4 max-w-md">
        <h1 className="text-4xl font-bold mb-6 ml-16 text-black text-center">Forgot Password</h1>
        <div className="bg-white w-[550px] h-[250px] p-8 ring-2 ring-black ring-opacity-50 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 rounded-md border-2 border-black focus:outline-none focus:border-blue-500"
                required />
              <p className="text-gray-700 mt-4 text-right">
                Remember your password? <a href="/login" className="text-blue-500 hover:underline">Login</a>
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 rounded-md border bg-black border-gray-300 text-xl focus:outline-none focus:border-blue-500"
            >
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default ForgotPassword;
