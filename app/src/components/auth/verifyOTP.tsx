import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from './header';

interface VerifyOTPProps {
  onVerificationSuccess: () => void;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({ onVerificationSuccess }) => {
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

  // Initialize state for OTP input and validation
  const [otp, setOTP] = useState<string>('');
  const [isOTPValid, setIsOTPValid] = useState<boolean>(true);

  // Handle OTP input change
  const handleOTPChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setOTP(value);
    setIsOTPValid(true); // Reset validation on change
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Check if OTP is valid (you can add your validation logic here)
    const isValid = otp.length === 6; // Modify this validation as per your requirement

    if (!isValid) {
        setIsOTPValid(false);
        return;
      }
  
      try {
        // Replace 'YOUR_VERIFICATION_API_ENDPOINT' with your actual verification API endpoint
        const response = await fetch('YOUR_VERIFICATION_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ otp }), // Send OTP to the server for verification
        });
  
        if (response.ok) {
          onVerificationSuccess();
        } else {
          // Handle verification error
        }
      } catch (error) {
        // Handle network or other errors
      }
    };
  
    return (
      <>
        <div className='flex flex-col space-y-20 items-center justify-center min-h-screen h-[300px] bg-white text-black'>
          <Header navigation={navigation} test={test} />
          <div className="flex justify-center items-center h-screen mr-16">
            <div className="w-3/4 max-w-md">
              <div className="bg-white w-[550px] mt-12 h-[350px] p-8 ring-2 ring-black ring-opacity-50 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-6 text-black text-center">Verify OTP</h1>
                    <label htmlFor="otp" className="block text-gray-700 font-semibold mb-2">
                      OTP (6-digit)
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={otp}
                      onChange={handleOTPChange}
                      className={`w-full px-3 py-2 rounded-md border-2 border-blue-600 ${
                        isOTPValid ? 'border-white' : 'border-red-500'
                      } focus:outline-none focus:border-blue-500`}
                      required
                    />
                    {!isOTPValid && (
                      <p className="text-red-500 text-sm mt-1">Invalid OTP format</p>
                    )}
                  </div>
  
                  <div className="flex justify-center items-center mt-4">
                    <button
                      type="submit"
                      className={`w-full px-3 py-2 rounded-md border text-white bg-black border-gray-300 text-xl focus:outline-none focus:border-blue-500`}
                      disabled={!isOTPValid}
                    >
                      Verify OTP
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
  
  export default VerifyOTP;
  
