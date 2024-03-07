import React from 'react';
import CardCarousel from './SentimentCardCarousel';
import { SentimentCards } from '../utils/Data';

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
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
