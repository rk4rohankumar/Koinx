import { useEffect, useState } from 'react';
import CoinCard from './CoinCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TrendingCoins = () => {
    const [trendingData, setTrendingData] = useState(null);
    const [slides, setSlides] = useState(1);

    const fetchTrendingData = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
                .then(response => response.json())
            const coins = await response.coins;
            console.log("fetched data: ", coins)
            setTrendingData(coins);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchTrendingData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let newSlides;

            if (windowWidth <= 480) {
                newSlides = 1;
            } else if (windowWidth < 845) {
                newSlides = 2;
            } else if (windowWidth < 992) {
                newSlides = 3;
            } else if (windowWidth < 1200) {
                newSlides = 4;
            } else {
                newSlides = 5;
            }

            setSlides(newSlides);
        };

        // Initial call to setSlides based on the initial window width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <div>
                {trendingData && (
                    <div>
                        <Slider {...settings}>
                            {trendingData.map((coin) => (
                                <div key={coin.item.coin_id} className="slick-slide">
                                    <CoinCard coin={coin} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </>
    );
}

export default TrendingCoins;