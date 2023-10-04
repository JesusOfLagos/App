import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [formData, setFormData] = useState<{
    email: string;
    username: string;
    password: string;
  }>({
    email: '',
    username: '',
    password: '',
  });

  const [validations, setValidations] = useState<{
    isEmailValid: boolean;
    isUsernameValid: boolean;
    isPasswordValid: boolean;
  }>({
    isEmailValid: true,
    isUsernameValid: true,
    isPasswordValid: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validations
    let isEmailValid = true;
    let isUsernameValid = true;
    let isPasswordValid = true;

    if (name === 'email') {
      isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === 'username') {
      isUsernameValid = value.length >= 8 && value.length <= 16;
    } else if (name === 'password') {
      isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(value);
    }

    setValidations({
      ...validations,
      isEmailValid,
      isUsernameValid,
      isPasswordValid,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Perform submission logic here
    // You can access the form data using `formData`
  };

  // const handleGoogleSignInSuccess = (
  //   response: GoogleLoginResponse | GoogleLoginResponseOffline
  // ): void => {
  //   // Handle Google Sign-In success here
  //   console.log(response);
  // };

  // const handleGoogleSignInFailure = (error: any): void => {
  //   // Handle Google Sign-In failure here
  //   console.error(error);
  // };

  const isFormValid =
    validations.isEmailValid && validations.isUsernameValid && validations.isPasswordValid;

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md border ${
              validations.isEmailValid ? 'border-gray-300' : 'border-red-500'
            } focus:outline-none focus:border-blue-500`}
          />
          {!validations.isEmailValid && (
            <p className="text-red-500 text-sm mt-1">Invalid email format</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md border ${
              validations.isUsernameValid ? 'border-gray-300' : 'border-red-500'
            } focus:outline-none focus:border-blue-500`}
          />
          {!validations.isUsernameValid && (
            <p className="text-red-500 text-sm mt-1">
              Username must be 8 to 16 characters long
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md border ${
              validations.isPasswordValid ? 'border-gray-300' : 'border-red-500'
            } focus:outline-none focus:border-blue-500`}
          />
          {!validations.isPasswordValid && (
            <p className="text-red-500 text-sm mt-1">
              Password must contain at least one number, one special character, and one
              uppercase letter, and be at least 8 characters long.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className={`bg-blue-500 ${
              isFormValid ? 'hover:bg-blue-600' : 'cursor-not-allowed'
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            disabled={!isFormValid}
          >
            Sign Up
          </button>
        </div>
        <div className="mb-4">
          {/* <GoogleLogin
            clientId= 'YOUR_GOOGLE_CLIENT_ID'
            buttonText="Sign in with Google"
            onSuccess={handleGoogleSignInSuccess}
            onFailure={handleGoogleSignInFailure}
            cookiePolicy={'single_host_origin'}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
