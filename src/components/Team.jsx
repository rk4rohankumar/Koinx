import React from 'react';
import TeamCard from './TeamCard';


const Team = ({ teamData }) => {
  return (
    <div className='bg-white rounded-lg'>
      <div className='m-5 py-5 font-semibold'>
        <h1 className='text-3xl font-bold'>Team</h1>
        <p className='mt-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus voluptatem aut molestias doloremque
          ipsam harum facere doloribus error et nihil ut ea cum, enim animi iure eaque dignissimos magni illum
          quisquam blanditiis dolore?
        </p>
      </div>
      <div className='flex flex-col font-semibold'>
        {teamData.map(({ imageSrc, personName, designation, text }, index) => (
          <TeamCard
            key={index}
            imageSrc={imageSrc}
            personName={personName}
            designation={designation}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
