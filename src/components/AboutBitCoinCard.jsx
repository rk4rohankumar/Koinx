import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Card = (props) => {
    const { backgroundColor, imageSrc, heading1, buttonLabel, onClickButton } = props;

    return (
        <div
            className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{
                background: `radial-gradient(ellipse at center, ${backgroundColor} 50%, transparent 100%)`,
                margin: '10px',
            }}
        >
            {/* Card content */}
            <div
                className="flex flex-col md:flex-row items-center p-4 rounded-lg shadow-md"
                style={{
                    background: `linear-gradient(to bottom right, #f0f0f0, ${backgroundColor})`,
                }}
            >
                {/* Left side with image */}
                <div className="md:w-1/2">
                    <img src={imageSrc} alt="Card" className="w-full h-auto rounded-l-lg opacity-100" />
                </div>

                {/* Right side with headings and button */}
                <div className="md:w-1/2 px-4 flex flex-col justify-center mt-4 md:mt-0">
                    <h2 className="text-3xl mb-2 md:mb-4 transition-opacity duration-300 ease-in-out ">
                        {heading1}
                    </h2>
                    <button
                        className="bg-blue-400  text-black py-1 px-4 rounded-lg text-xl md:text-2xl hover:bg-slate-100 transition-background duration-300 ease-in-out flex items-center align-middle justify-center"
                        onClick={onClickButton}
                    >
                        <span>{buttonLabel}</span>
                        <FaArrowRight size={20} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
