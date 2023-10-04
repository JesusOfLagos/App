import { useState, ChangeEvent } from 'react';

interface OTPInputProps {}

function OTPInput(props: OTPInputProps): JSX.Element {
  const [otp, setOTP] = useState<string[]>(['', '', '', '', '', '']); // An array to store OTP digits

  // Function to handle OTP input change
  const handleOTPChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const value = e.target.value;
    if (value.length === 1 && !isNaN(Number(value))) {
      // Allow only single numeric digit
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);
      if (index < otp.length - 1) {
        // Move focus to the next input field
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else if (value.length === 0) {
      // Clear the current input field and move focus to the previous input field
      const updatedOTP = [...otp];
      updatedOTP[index] = '';
      setOTP(updatedOTP);
      if (index > 0) {
        const previousInput = document.getElementById(`otp-input-${index - 1}`);
        if (previousInput) {
          previousInput.focus();
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Enter OTP</h2>
        <div className="flex justify-center space-x-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              className="w-12 h-12 text-4xl border border-gray-300 rounded-md text-center focus:outline-none"
            />
          ))}
        </div>
        <p className="mt-4 text-gray-600">We've sent a 6-digit OTP to your email.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OTPInput;
