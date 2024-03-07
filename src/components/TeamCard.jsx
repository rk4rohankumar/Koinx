import React from 'react';

const TeamCard = ({ imageSrc, personName, designation, text }) => {
    return (
        <div className="items-center p-4 rounded-lg shadow-md bg-blue-100 m-5 grid sm:grid-cols-5 sm:grid-rows-9 lg:grid-col-3">
            {/* Left side with image and name */}
            <div className="flex flex-col items-center w-4/12 justify-center sm:col-start-1 sm:col-end-2 sm:row-start-0 sm:row-end-1 lg:col-start-0 lg:col-end-1">
                <img src={imageSrc} alt="Profile" className="w-16 h-16 rounded-xl mb-2  " />
                <h2 className="text-lg font-bold">{personName}</h2>
                <h2 className=" ">{designation}</h2>
            </div>
  
            {/* Right side with text */}
            <div className="ml-4 lg:col-start-2 lg:col-end-9">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TeamCard;
