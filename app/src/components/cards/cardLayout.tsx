// // Example usage in your application
// import React from 'react';
// import Card from './paymentCard';
// import CardPage from './cardPage';

// function CardLayout() {
//     return (
//         <>
//         <CardPage>
//                 <Card title="Payment Card" content="Click to reveal contents" />
//                 <Card title="Health Card" content="Click to reveal contents" />
//         </CardPage>
//         </>
//     );
// }


// export default CardLayout


import React from 'react';
import Card from './paymentCard';
import CardPage from './cardPage';

function CardLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">Cards</h1>
      </header>
      <div className="container mx-auto p-6">
        {/* Additional information related to cards */}
        <div className="mb-4">
          {/* Add your additional information here */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card title="Payment Card" content="Click to reveal contents" />
          {/* <Card title="Health Card" content="Click to reveal contents" /> */}
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
