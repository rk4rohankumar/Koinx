import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between items-center shadow-xl p-4 lg:p-8'>
            <div className='m-2 lg:m-5'>
                <img src="https://i.ibb.co/kBjb3Cj/koinx-logo.png" alt="Koinx Logo" className='h-8 lg:h-10' />
            </div>
            <div className='md:flex md:items-center md:space-x-8 hidden'>
                <Link to="/crypto-taxes" className="">
                    Crypto Taxes
                </Link>
                <Link to="/free-tools" className="">
                    Free Tools
                </Link>
                <Link to="/resources" className="">
                    Resources
                </Link>
                <Link to="/get-started">
                    <button className="border px-4 py-2 rounded-md bg-blue-500 text-white">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className="text-blue-600 bg-gray-100 py-2 rounded-md text-black px-4 text-lg hover:text-blue-500">
                <img className="w-[20px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt=""/>
                </button>
                {isOpen && (
                    <div className="fixed top-0 right-0 m-4 z-50">
                        <div className="bg-white rounded-md p-4 shadow-md">
                            <div className="mb-4">
                                <Link to="/crypto-taxes" className="block py-2 hover:text-blue-500">
                                    Crypto Taxes
                                </Link>
                                <Link to="/free-tools" className="block py-2 hover:text-blue-500">
                                    Free Tools
                                </Link>
                                <Link to="/resources" className="block py-2 hover:text-blue-500">
                                    Resources
                                </Link>
                                <Link to="/get-started" className="block py-2">
                                    <button className="border px-4 py-2 rounded-md bg-blue-500 text-white w-full">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                            <button onClick={toggleMenu} className="text-blue-600 bg-gray-100 py-2 rounded-md text-black px-4 text-lg hover:text-blue-500">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;