import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from './header';
import { ENVDATA } from '../../config';

interface SignInProps {
  onSignInSuccess: any
}

const SignIn: React.FC<SignInProps> = ({ onSignInSuccess }) => {
const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Emergencies', href: 'emergency' },
    { name: 'Contact Us', href: '/contact' },
  ];


  const test = {
    name: 'Sign Up',
    href: '/register',
  };

  // Initialize state for form data and validation
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const [validations, setValidations] = useState<{
    isEmailValid: boolean;
    isPasswordValid: boolean;
  }>({
    isEmailValid: true,
    isPasswordValid: true,
  });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform input validations
    let isEmailValid = true;
    let isPasswordValid = true;

    if (name === 'email') {
      isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === 'password') {
      isPasswordValid = value.length >= 4; // Modify as per your password requirements
    }

    // Update the validation state
    setValidations({
      ...validations,
      isEmailValid,
      isPasswordValid,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Check if the form data is valid
    const isFormValid = validations.isEmailValid && validations.isPasswordValid;

    if (!isFormValid) {
      return;
    }

    try {
      // Replace 'YOUR_SIGNIN_API_ENDPOINT' with your actual signin API endpoint
      const url = ENVDATA.base_url + '/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // onSignInSuccess( () => {
        //   alert('Sign in successful');
        // }
        // );
        const data = await response.json();
        console.log(data)
      } else if (response.ok === false) {
        console.log(url)
        console.log(response)
        console.log(response.status)
        console.log(response.statusText)
        console.log(FormData)
        alert(response.status + " " + response.statusText + " " + response.url + " " + response.body + " " + response.formData);
      }
    } catch (error) {
      console.log(`Sign in failed due to network error ${error}`)
    }
  };

  const isFormValid = validations.isEmailValid && validations.isPasswordValid;

  return (
    <>
      <div className='flex flex-col space-y-20 items-center justify-center min-h-screen h-[300px] bg-white text-black'>
        <Header navigation={navigation} test={test} />
        <div className="flex justify-center items-center h-screen mr-16">
          <div className="w-3/4 max-w-md">
            <div className="bg-white w-[550px] mt-12 h-[400px] p-8 ring-2 ring-black ring-opacity-50 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-6 text-black text-center">Sign In</h1>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-md border-2 border-black ${
                      validations.isEmailValid ? 'border-white' : 'border-red-500'
                    } focus:outline-none focus:border-blue-500`}
                    required
                  />
                  {!validations.isEmailValid && (
                    <p className="text-red-500 text-sm mt-1">Invalid email format</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-md border-2 border-black ${
                      validations.isPasswordValid ? 'border-white' : 'border-red-500'
                    } focus:outline-none focus:border-blue-500`}
                    required
                  />
                  {!validations.isPasswordValid && (
                    <p className="text-red-500 text-sm mt-1">Invalid password format</p>
                  )}
                </div>
                <p className="text-gray-700 mt-4 text-right">
                  Don't have an account?{' '}
                  <a href="/register" className="text-blue-500 hover:underline">Register</a>
                </p>

                <div className="flex justify-center items-center mt-4">
                  <button
                    type="submit"
                    className={`w-full px-3 py-2 rounded-md border text-white bg-black border-gray-300 text-xl focus:outline-none focus:border-blue-500`}
                    disabled={!isFormValid}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

