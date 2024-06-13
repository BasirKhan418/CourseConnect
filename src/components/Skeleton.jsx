import React from 'react';

const Skeleton = () => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto animate-pulse p-9">
        <div className="space-y-6">
          <h1 className="h-8 bg-gray-300 rounded-lg w-3/4 dark:bg-gray-600"></h1>
          <div className="space-y-4">
            <p className="w-1/2 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-3/4 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
          <div className="space-y-4">
            <p className="w-1/2 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-3/4 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
          <div className="space-y-4">
            <p className="w-1/2 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-3/4 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
