// // Card.tsx
// import React, { useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const Card = ({ title, content, onCardClick }: CardProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const cardControls = useAnimation();

//   const handleCardClick = () => {
//     setIsModalOpen(!isModalOpen);
//     cardControls.start({ rotateY: isModalOpen ? 0 : 180 });
//   };

//   return (
//     <motion.div
//       className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
//       initial={{ rotateY: 0 }}
//       animate={cardControls}
//       onClick={handleCardClick}
//     >
//       {/* Card Front */}
//       <div className="flex flex-col justify-center items-center h-full p-6">
//         <h3 className="text-2xl font-semibold">{title}</h3>
//         <p className="mt-2">{content}</p>
//       </div>

//       {/* Card Back */}
//       <div className="bg-blue-500 text-white flex flex-col justify-center items-center h-full p-6 transform rotate-y-180">
//         {/* Add content for the back of the card here */}
//       </div>
//     </motion.div>
//   );
// };

// export default Card;



import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardVariants = {
    open: { rotateY: 180 },
    closed: { rotateY: 0 },
  };

  const handleCardClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <motion.div
      className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative"
      variants={cardVariants}
      animate={isModalOpen ? 'open' : 'closed'}
      onClick={handleCardClick}
    >
      {/* Card Front */}
      <div className="w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center p-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-blue-600">{content}</p>
      </div>

      {/* Card Back */}
      <div className="w-full h-full bg-white text-black flex flex-col justify-center items-center p-6 absolute top-0 left-0 transform rotate-y-180">
        {/* Add content for the back of the card here */}
      </div>
    </motion.div>
  );
};

export default Card;
