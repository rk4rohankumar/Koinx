import React from 'react';
import CardCarousel from './SentimentCardCarousel';
import { SentimentCards } from '../utils/Data';
import BarGraph from './BarGraph';

const Sentiment = () => {
    return (
        <div className='col-span-full md:col-span-1 mb-8 md:mb-0'>
            <div className='mx-4 md:mr-16 mt-16 md:rounded-xl'>
                <div className='m-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl pt-5'>Sentiment</h1>
                </div>
                <div className='m-5'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>Key Events</h1>
                </div>
                <div>
                    <CardCarousel cards={SentimentCards} />

                    <div className='font-bold text-left px-5 text-gray-600 text-lg'>Analyst Estimates</div>
                    <div className='flex'>
                        {/* Circle */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='w-36 h-36 text-green-500 fill-green-800'
                        >
                            <circle cx='12' cy='12' r='10' className='fill-green-100' />
                            <text
                                x="45%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className='fill-green-600 font-semibold'
                                fontSize="6"
                            >
                                76
                            </text>
                            <text
                                x='65%'
                                y='50%'
                                dominantBaseline='middle'
                                textAnchor='middle'
                                className='fill-green-600 font-semibold'
                                fontSize='3'
                            >
                                %
                            </text>
                        </svg>
                        <BarGraph />
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Sentiment;
