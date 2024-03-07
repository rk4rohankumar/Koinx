import React from 'react';

const TeamCard = ({ imageSrc, personName, designation, text }) => {
    return (
        <div className="flex items-center p-4 rounded-lg shadow-md bg-blue-100 m-5">
            {/* Left side with image and name */}
            <div className="flex flex-col items-center w-4/12">
                <img src={imageSrc} alt="Profile" className="w-16 h-16 rounded-xl mb-2" />
                <h2 className="text-lg font-bold">{personName}</h2>
                <h2 className=" ">{designation}</h2>
            </div>

            {/* Right side with text */}
            <div className="ml-8">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TeamCard;
