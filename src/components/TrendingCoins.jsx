import { useEffect, useState } from 'react';
import CoinCard from './CoinCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TrendingCoins = () => {
    const [trendingData, setTrendingData] = useState(null);

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

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
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