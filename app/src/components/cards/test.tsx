import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
}

const cardsData: CardProps[] = [
  {
    title: 'Card 1',
    content: 'Click to reveal contents of Card 1',
  },
  {
    title: 'Card 2',
    content: 'Click to reveal contents of Card 2',
  },
  {
    title: 'Card 3',
    content: 'Click to reveal contents of Card 3',
  },
  {
    title: 'Card 4',
    content: 'Click to reveal contents of Card 4',
  },
];

const Test = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedId(selectedId === index ? null : index);
  };

  return (
    <><div className='bg-black text-center'>
          <h1 className="text-3xl font-semibold">Cards</h1>
          <p className="text-gray-500">Click on a card to reveal its contents.</p>
      </div><div className="flex flex-wrap gap-4">
              {cardsData.length > 0 ? (
                  cardsData.map((card, index) => (
                      <motion.div
                          key={index}
                          className={`w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative ${selectedId === index ? 'bg-blue-500 text-white' : ''}`}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleCardClick(index)}
                      >
                          <motion.h3 className="text-2xl font-semibold" layoutId={`card-title-${index}`}>
                              {card.title}
                          </motion.h3>
                          <motion.p className="mt-2" layoutId={`card-content-${index}`}>
                              {card.content}
                          </motion.p>
                          {selectedId === index && (
                              <motion.button
                                  className="mt-4 bg-black text-blue-500 rounded-full px-4 py-2 hover:bg-blue-100"
                                  onClick={() => handleCardClick(index)}
                                  layoutId={`card-button-${index}`}
                              >
                                  Close
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
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <p className="text-gray-500">You don't have any cards. Create a card.</p>
                  </div>
              )}
          </div></>
  );
};

export default Test;
