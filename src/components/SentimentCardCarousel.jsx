import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCarousel = ({ cards }) => {
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            if (windowWidth >= 769) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        // Initial call to handleResize
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        slidesToShow: slidesToShow,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
    };

    return (
        <div className="max-w-full md:max-w-4xl mx-auto relative">
            <Slider {...carouselSettings} ref={sliderRef}>
                {cards.map((card, index) => (
                    <div key={index} className={`w-full ${slidesToShow === 1 ? 'p-4' : 'p-2'}`}>
                        <div className="max-w-full rounded overflow-hidden shadow-lg relative flex p-4" style={{ backgroundColor: card.bgColor, marginBottom: '16px' }}>
                            <div className="relative">
                                <img className={`rounded-full p-2 max-w-${slidesToShow === 1 ? '20' : '40'} h-auto top-0 left-0`} src={card.image} alt={`Card ${index + 1}`} />
                            </div>
                            <div className={`ml-${slidesToShow === 1 ? '4' : '2'} flex flex-col`}>
                                <div className={`font-bold text-xl mb-2 mt-2 text-${slidesToShow === 1 ? 'md' : 'lg'}`}>{card.title}</div>
                                <p className={`text-gray-700 text-base mt-1 ${slidesToShow === 1 ? 'max-w-xs' : 'max-w-md'}`}>
                                    {card.description}
                                </p>
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

                    .max-w-full {
                        margin-right: 16px;
                    }
                }

                @media (max-width: 767px) {
                    .font-bold {
                        font-size: 16px;
                    }

                    .text-xl {
                        font-size: 18px;
                    }

                    .text-base {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CardCarousel;
