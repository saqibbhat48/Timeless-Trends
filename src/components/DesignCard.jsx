import React from 'react';

const DesignCard = ({title, desc, price, discount, btn}) => {
  return (
    <div className="w-72 bg-opacity-70 backdrop-filter backdrop-blur-lg mx-auto bg-green-100 font-serif p-6 rounded-lg shadow-lg">
      <div className="text-right">
        <span className="inline-block bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
          45% OFF
        </span>
      </div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="mt-2 text-gray-700">{desc}</p>
      <div className="mt-4">
        <p className="text-lg">
          Starting at
        </p>
        <div className='flex gap-4 items-center'>
        <p className="text-3xl font-bold line-through text-gray-500">${price}</p>
        <p className="text-3xl font-bold text-red-600">${discount}</p>
        </div>
        <p className="text-sm text-gray-900 mt-2">
          plus ${discount} for each additional room
        </p>
      </div>
      <div className='flex justify-center'>
      <button className="mt-6 bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition duration-300">
        {btn}
      </button>
      </div>
    </div>
  );
};

export default DesignCard;
