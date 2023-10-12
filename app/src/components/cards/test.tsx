// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// interface CardProps {
//   title: string;
//   content: string;
// }

// const cardsData: CardProps[] = [
//   {
//     title: 'Card 1',
//     content: 'Click to reveal contents of Card 1',
//   },
//   {
//     title: 'Card 2',
//     content: 'Click to reveal contents of Card 2',
//   },
//   {
//     title: 'Card 3',
//     content: 'Click to reveal contents of Card 3',
//   },
//   {
//     title: 'Card 4',
//     content: 'Click to reveal contents of Card 4',
//   },
// ];

// const Test = () => {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   const handleCardClick = (index: number) => {
//     setSelectedId(selectedId === index ? null : index);
//   };

//   return (
//     <><div className='bg-black text-center'>
//           <h1 className="text-3xl font-semibold">Cards</h1>
//           <p className="text-gray-500">Click on a card to reveal its contents.</p>
//       </div><div className="flex flex-row mt-20 gap-6">
//               {cardsData.length > 0 ? (
//                   cardsData.map((card, index) => (
//                       <motion.div
//                           key={index}
//                           className={`w-64 h-96 bg-white shadow-lg p-24 grid grid-col-2 gap-10 rounded-lg overflow-hidden cursor-pointer relative ${selectedId === index ? 'bg-blue-500 text-white' : ''}`}
//                           whileHover={{ scale: 1.05 }}
//                           onClick={() => handleCardClick(index)}
//                       >
//                           <motion.h3 className="text-2xl font-semibold" layoutId={`card-title-${index}`}>
//                               {card.title}
//                           </motion.h3>
//                           <motion.p className="mt-2" layoutId={`card-content-${index}`}>
//                               {card.content}
//                           </motion.p>
//                           {selectedId === index && (
//                               <motion.button
//                                   className="mt-4 bg-black text-blue-500 rounded-full px-4 py-2 hover:bg-blue-100"
//                                   onClick={() => handleCardClick(index)}
//                                   layoutId={`card-button-${index}`}
//                               >
//                                   Close
//                               </motion.button>
//                           )}
//                       </motion.div>
//                   ))
//               ) : (
//                   <div className="w-64 h-96 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
//                       <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           className="w-16 h-16 text-gray-300"
//                       >
//                           <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                       </svg>
//                       <p className="text-gray-500">You don't have any cards. Create a card.</p>
//                   </div>
//               )}
//           </div></>
//   );
// };

// export default Test;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ENVDATA } from '../../config';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  content: string;
  type: string; // Added a 'type' property to distinguish card types
}

const cardsData: CardProps[] = [
  // {
  //   title: 'Card 1',
  //   content: 'Click to reveal contents of Card 1',
  //   type: 'information',
  // },
  // {
  //   title: 'Card 2',
  //   content: 'Click to reveal contents of Card 2',
  //   type: 'information',
  // },
  {
    title: 'Card 3',
    content: 'Click to reveal contents of Card 3',
    type: 'health',
  },
  {
    title: 'Card 4',
    content: 'Click to reveal contents of Card 4',
    type: 'payment',
  },
];

const Test = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [fundingAmount, setFundingAmount] = useState(0); // State for the funding amount
  const [showFundingModal, setShowFundingModal] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    const selectedCard = cardsData[index];
    setSelectedId(selectedId === index ? null : index);

    if (selectedCard.type === 'payment') {
      
      // Handle the payment card, show a modal for funding
      // You can use a modal library or create your own modal component
      // In this example, a simple prompt is used to get the funding amount
      setShowFundingModal(true);
    } else if (selectedCard.type === 'health') {
      // Handle health card, display QR code and health information
      // You can use a QR code library to generate and display the QR code
      alert(`Displaying Health Information for ${selectedCard.title}`);
    } else {
      // Handle other card types, fetch data from an endpoint based on the card type
      // You can fetch data and display it in the card
      alert(`Fetching data for ${selectedCard.title} from the backend`);
    }
  };

  const handleFundCard = () => {
    if (fundingAmount) {
      alert(`Funding card with $${fundingAmount}`);
      // Make an API request to fund the card
      const url = ENVDATA.base_url + '/card/payment/fund';
      axios.post(url, {
        amount: fundingAmount,
      }, {
        headers: {
          Authorization: 'Bearer YOUR_AUTH_TOKEN', // Replace with your authentication token
        },
      })
      .then((response) => {
        // Handle the API response here
        alert('Funding successful!');
        console.log('Funding successful:', response.data);
        setShowFundingModal(false);
      })
      .catch((error) => {
        // Handle API request errors
        alert(`Error funding card: ${error}`);
        console.error('Error funding card:', error);
        setShowFundingModal(false);
      });
    } else {
      alert('Please enter a valid funding amount.');
    }
  };

  const goBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-black items-center text-center">
      <div className='flex flex-row gap-20'>
             <button className="text-2xl font-semibold bg-white ml-10 rounded-xl mt-6 p-4 mb-8" onClick={goBack}>Back To Dashboard</button>
      <h1 className="text-3xl bg-white p-4 font-semibold ml-48 rounded-xl mt-6 mb-8">Cards</h1>
      </div>

      <p className="text-gray-500 text-2xl rounded-2xl bg-white ml-[330px] w-[500px]">Click on a card to reveal its contents.</p>
      <div className="flex flex-row mt-20 gap-6">
        {cardsData.length > 0 ? (
          cardsData.map((card, index) => (
            <motion.div
              key={index}
              className={`w-64 h-96 bg-white shadow-lg p-4 grid grid-col-2 gap-4 rounded-lg overflow-hidden cursor-pointer relative ${
                selectedId === index ? 'bg-blue-500 text-white' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCardClick(index)}
            >
              <motion.h3 className="text-2xl font-semibold" layoutId={`card-title-${index}`}>
                {card.title}
              </motion.h3>
              <motion.p className="mt-2" layoutId={`card-content-${index}`}>
                {card.content}
              </motion.p>
              {selectedId === index && card.type === 'payment' && (
                <motion.button
                  className="mt-4 bg-black text-blue-500 rounded-full px-4 py-2 hover:bg-blue-100"
                  onClick={() => handleCardClick(index)}
                  layoutId={`card-button-${index}`}
                >
                  Fund
                </motion.button>
              )}
            </motion.div>
          ))
        ) : (
          <div className="w-64 h-96 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-gray-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-gray-500">You don't have any cards. Create a card.</p>
          </div>
        )}
        {showFundingModal && selectedId !== null && cardsData[selectedId].type === 'payment' && (
        <div className="h-[400] w-[250] border-2 border-black bg-white rounded-2xl">
          <div className="bg-white h-48 w-48">
            <h3 className='bg-black rounded-3xl mt-4 ml-3 mr-3 py-3 text-white text-2xl'>Fund Card</h3>
            <input
            className='bg-white w-full h-10 border-2 border-black justify-center mt-5 px-3 pr-16 rounded-lg text-sm focus:outline-none'
              type="number"
              placeholder="Enter the funding amount"
              value={fundingAmount}
              onChange={(e) => setFundingAmount(parseInt(e.target.value))}
            />
            <p className="text-white bg-black rounded-full mx-3 mt-6 text-center mb-6">Funding amount: ${fundingAmount}</p>
            <div className="flex flex-row gap-4 mx-2 mt-24">
              <button className='bg-black rounded-2xl px-5 py-2 text-white' onClick={() => setShowFundingModal(false)}>Cancel</button>
              <button className='bg-black rounded-2xl px-5 py-2 text-white' onClick={handleFundCard}>Fund</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Test;

