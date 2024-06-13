import React, { useState } from 'react';

const SearchBar = ({setSearchInput,handleButtonClick,setType,type}) => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 flex justify-center items-center my-4 mx-4">
      <div className="container mx-auto bg-indigo-500 dark:bg-indigo-700 rounded-lg p-8 sm:p-14">
          <h1 className="text-center font-bold text-white text-3xl sm:text-4xl mb-4">Find Your Result Below !</h1>
          <p className="mx-auto font-normal text-sm text-gray-200 dark:text-gray-300 my-6 text-center">
            Enter your Registration Number or FullName to find your result. Note:- The result is only for the reference purpose, the original marksheet will be provided by the university. (For finding by name enter your full name in the search box.)
          </p>
          <div className="sm:flex items-center bg-white  rounded-lg overflow-hidden px-2 py-1 justify-between shadow-md">
            <input 
              className="text-base text-gray-800 flex-grow outline-none px-2 py-3 font-medium" 
              type="text" 
              placeholder="Search your domain name"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="flex items-center px-2 space-x-4 mt-4 sm:mt-0 sm:ml-4">
              <select 
                id="Com" 
                onChange={(e)=>{setType(e.target.value)}}
                value={type}
                className="text-base text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 outline-none border-2 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg"
              >
                <option value="btech4" selected>B.TECH - SEM 4 </option>
                <option value="btech6" selected>B.TECH - SEM 6 </option>
                
              </select>
              <button 
                className="bg-indigo-500 dark:bg-indigo-600 text-white text-base rounded-lg px-4 py-2 font-semibold transition-transform transform hover:scale-105 "
                onClick={handleButtonClick}
              >
                Search
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SearchBar;
