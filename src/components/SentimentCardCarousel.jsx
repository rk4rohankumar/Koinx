import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCarousel = ({ cards }) => {
  const sliderRef = useRef(null);

  const CustomArrow = ({ direction, ...props }) => (
    <div {...props} className={`slick-arrow-custom slick-${direction}-custom`}>
      {direction === 'prev' ? '<' : '>'}
    </div>
  );

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-full md:max-w-4xl mx-auto relative">
      <Slider {...carouselSettings} ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <div className="max-w-full rounded overflow-hidden shadow-lg bg-green-100 relative flex p-4">
              <div className="relative">
                <img className="rounded-full p-2 max-w-20 h-auto  top-0 left-0" src={card.image} alt={`Card ${index + 1}`} />
              </div>
              <div className="ml-4 flex flex-col">
                <div className="font-bold text-xl mb-2 mt-2">{card.title}</div>
                <p className="text-gray-700 text-base mt-1">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slick-arrow-custom {
          color: black;
          font-size: 24px;
          line-height: 1;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          z-index: 1;
          background-color: white;
          border-radius: 50%;
          padding: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slick-prev-custom {
          left: 20px;
        }

        .slick-next-custom {
          right: 20px;
        }

        @media (min-width: 768px) {
          .slick-arrow-custom {
            font-size: 32px;
          }

          .slick-slide {
            display: flex;
            align-items: flex-start;
          }

          .slick-active .slick-slide {
            margin-right: 16px; /* Adjust the margin as needed */
          }

          .slick-active .max-w-full {
            margin-right: 0; /* Reset margin for active slide */
          }
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;
