

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import Header from './header'; // Import your Header component

// interface SignUpProps {
//   onSignUpSuccess: () => void;
// }

// const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
//   const navigation = [
//     { name: 'About', href: '#' },
//     { name: 'Reviews', href: '#' },
//     { name: 'Emergencies', href: '#' },
//     { name: 'Contact Us', href: '#' },
//   ];

//   const [formData, setFormData] = useState<{
//     email: string;
//     password: string;
//     firstname: string;
//     lastname: string;
//   }>({
//     email: '',
//     password: '',
//     firstname: '',
//     lastname: '',
//   });

//   const [validations, setValidations] = useState<{
//     isEmailValid: boolean;
//     isPasswordValid: boolean;
//     isFirstnameValid: boolean;
//     isLastnameValid: boolean;
//   }>({
//     isEmailValid: true,
//     isPasswordValid: true,
//     isFirstnameValid: true,
//     isLastnameValid: true,
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     let isEmailValid = true;
//     let isPasswordValid = true;
//     let isFirstnameValid = true;
//     let isLastnameValid = true;

//     if (name === 'email') {
//       isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     } else if (name === 'password') {
//       isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(value);
//     } else if (name === 'firstname') {
//       isFirstnameValid = value.length >= 2 && value.length <= 16;
//     } else if (name === 'lastname') {
//       isLastnameValid = value.length >= 2 && value.length <= 16;
//     }

//     setValidations({
//       ...validations,
//       isEmailValid,
//       isPasswordValid,
//       isFirstnameValid,
//       isLastnameValid,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();

//     const isFormValid =
//       validations.isEmailValid &&
//       validations.isFirstnameValid &&
//       validations.isPasswordValid &&
//       validations.isLastnameValid;

//     if (!isFormValid) {
//       return;
//     }

//     try {
//       const response = await fetch('YOUR_SIGNUP_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         onSignUpSuccess();
//       } else {
//         // Handle signup error
//       }
//     } catch (error) {
//       // Handle network or other errors
//     }
//   };

//   const isFormValid =
//     validations.isEmailValid &&
//     validations.isFirstnameValid &&
//     validations.isPasswordValid &&
//     validations.isLastnameValid;

//   return (
//     <>
//     <div className='flex flex-col items-center justify-center min-h-screen h-[300px] bg-white text-black'>
//       <Header navigation={navigation} />
//       {/* <div className="flex flex-col items-center justify-center min-h-screen h-[300px] bg-white text-black"> */}
//         <div className="flex justify-center items-center h-screen">
//           <div className="w-3/4 max-w-md">
//             {/* <h1 className="text-4xl font-bold mb-6 ml-16 text-black text-center">Sign Up</h1> */}
//             <div className="bg-white w-[550px] h-[350px] p-8 ring-2 ring-black ring-opacity-50 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                 <h1 className="text-2xl font-bold mb-6 ml-16 text-black text-center">Sign Up</h1>
//                   <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2 rounded-md border ${
//                       validations.isEmailValid ? 'border-white' : 'border-red-500'
//                     } focus:outline-none focus:border-blue-500`}
//                     required
//                   />
//                   {!validations.isEmailValid && (
//                     <p className="text-red-500 text-sm mt-1">Invalid email format</p>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="firstname" className="block text-gray-700 font-semibold mb-2">
//                     Firstname
//                   </label>
//                   <input
//                     type="text"
//                     id="firstname"
//                     name="firstname"
//                     value={formData.firstname}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2 rounded-md border ${
//                       validations.isFirstnameValid ? 'border-white' : 'border-red-500'
//                     } focus:outline-none focus:border-blue-500`}
//                   />
//                   {!validations.isFirstnameValid && (
//                     <p className="text-red-500 text-sm mt-1">Invalid firstname format</p>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-2">
//                     Lastname
//                   </label>
//                   <input
//                     type="text"
//                     id="lastname"
//                     name="lastname"
//                     value={formData.lastname}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2 rounded-md border ${
//                       validations.isLastnameValid ? 'border-white' : 'border-red-500'
//                     } focus:outline-none focus:border-blue-500`}
//                   />
//                   {!validations.isLastnameValid && (
//                     <p className="text-red-500 text-sm mt-1">Invalid lastname format</p>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//                   Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2 rounded-md border ${
//                       validations.isPasswordValid ? 'border-white' : 'border-red-500'
//                     } focus:outline-none focus:border-blue-500`}
//                   />
//                   {!validations.isPasswordValid && (
//                     <p className="text-red-500 text-sm mt-1">Invalid password format</p>
//                   )}
//                 </div>
//                 <p className="text-gray-700 mt-4 text-right">
//               Have an account?{' '}
//               <a href="/login" className="text-blue-500 hover:underline">
//                 Login
//               </a>
//             </p>

//                 <div className="flex justify-center items-center mt-4">
//                   <button
//                     type="submit"
//                     className={`w-full px-3 py-2 rounded-md border text-white bg-black border-gray-300 text-xl focus:outline-none focus:border-blue-500`}
//                     disabled={!isFormValid}
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//               </form>
//             </div>
            
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default SignUp;



import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from './header';

interface SignUpProps {
  onSignUpSuccess: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Emergencies', href: 'emergency' },
    { name: 'Contact Us', href: '/contact' },
  ];


  const test = { name: 'Login', href: '/login' }

  // Initialize state for form data and validation
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  }>({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const [validations, setValidations] = useState<{
    isEmailValid: boolean;
    isPasswordValid: boolean;
    isFirstnameValid: boolean;
    isLastnameValid: boolean;
  }>({
    isEmailValid: true,
    isPasswordValid: true,
    isFirstnameValid: true,
    isLastnameValid: true,
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
    let isFirstnameValid = true;
    let isLastnameValid = true;

    if (name === 'email') {
      isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === 'password') {
      isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(value);
    } else if (name === 'firstname') {
      isFirstnameValid = value.length >= 2 && value.length <= 16;
    } else if (name === 'lastname') {
      isLastnameValid = value.length >= 2 && value.length <= 16;
    }

    // Update the validation state
    setValidations({
      ...validations,
      isEmailValid,
      isFirstnameValid,
      isLastnameValid,
      isPasswordValid,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Check if the form data is valid
    const isFormValid =
      validations.isEmailValid &&
      validations.isFirstnameValid &&
      validations.isPasswordValid &&
      validations.isLastnameValid;

    if (!isFormValid) {
      return;
    }

    try {
      // Replace 'YOUR_SIGNUP_API_ENDPOINT' with your actual signup API endpoint
      const response = await fetch('YOUR_SIGNUP_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSignUpSuccess();
      } else {
        // Handle signup error
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  const isFormValid =
    validations.isEmailValid &&
    validations.isFirstnameValid &&
    validations.isPasswordValid &&
    validations.isLastnameValid;

  return (
    <>
      <div className='flex flex-col space-y-20 items-center justify-center min-h-screen h-[300px] bg-white text-black'>
        <Header navigation={navigation} test={test} />
        <div className="flex justify-center items-center h-screen mr-16">
          <div className="w-3/4 max-w-md">
            <div className="bg-white w-[550px] mt-12 h-[550px] p-8 ring-2 ring-black ring-opacity-50 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
              <div className="mb-4">
  <h1 className="text-2xl font-bold mb-6 text-black text-center">Sign Up</h1>
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
  <label htmlFor="firstname" className="block text-gray-700 font-semibold mb-2">
    Firstname
  </label>
  <input
    type="text"
    id="firstname"
    name="firstname"
    value={formData.firstname}
    onChange={handleChange}
    className={`w-full px-3 py-2 rounded-md border-2 border-black ${
      validations.isFirstnameValid ? 'border-white' : 'border-red-500'
    } focus:outline-none focus:border-blue-500`}
  />
  {!validations.isFirstnameValid && (
    <p className="text-red-500 text-sm mt-1">Invalid firstname format</p>
  )}
</div>

<div className="mb-4">
  <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-2">
    Lastname
  </label>
  <input
    type="text"
    id="lastname"
    name="lastname"
    value={formData.lastname}
    onChange={handleChange}
    className={`w-full px-3 py-2 rounded-md border-2 border-black ${
      validations.isLastnameValid ? 'border-white' : 'border-red-500'
    } focus:outline-none focus:border-blue-500`}
  />
  {!validations.isLastnameValid && (
    <p className="text-red-500 text-sm mt-1">Invalid lastname format</p>
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
  />
  {!validations.isPasswordValid && (
    <p className="text-red-500 text-sm mt-1">Invalid password format</p>
  )}
</div>


                <p className="text-gray-700 mt-4 text-right">
                  Have an account?{' '}
                  <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>

                <div className="flex justify-center items-center mt-4">
                  <button
                    type="submit"
                    className={`w-full px-3 py-2 rounded-md border text-white bg-black border-gray-300 text-xl focus:outline-none focus:border-blue-500`}
                    disabled={!isFormValid}
                  >
                    Sign Up
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

export default SignUp;

