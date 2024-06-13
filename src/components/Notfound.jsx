import React from 'react';
import Link from 'next/link';
const NotFound = () => {
  return (
    <div className="my-12 bg-gray-100 dark:bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-bounce">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! The result you're looking for doesn't exist.
        </p>
        <div className="flex justify-center">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-transform transform hover:scale-105 dark:bg-indigo-600">
            <Link href={"/result"}>Search Again</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
