import React, { useEffect, useState } from 'react';
const greenArrow = 'https://i.ibb.co/V213cpN/upward-green.png';
const redArrow = 'https://i.ibb.co/0ctqGxZ/down-redpreview.png';

const Trending = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await response.json();
                setTrending(data.coins || []);
            } catch (error) {
                console.error('Error fetching trending data:', error);
            }
        };

        fetchTrending();
    }, []);

    // Filtering the first three items with a score from 0 to 2
    const filteredTrending = trending
        .filter((crypto) => crypto.item.score >= 0 && crypto.item.score <= 2)
        .slice(0, 3);

    return (
        <div>
            <div className="flex flex-col bg-white shadow-md rounded-lg my-6 text-black text-xl">
                <div className="flex p-4 font-bold border-gray-300 text-2xl">
                    <div className="flex-1 text-xl my-2">
                        <p className='text-2xl'>Trending Coins (24 Hr)</p>
                    </div>
                </div>
                {filteredTrending.map((crypto, index) => (
                    <div key={index} className="flex py-2 px-4 mb-2 items-center">
                        {crypto.item.small && (
                            <img
                                src={crypto.item.small}
                                alt={crypto.item.name}
                                className="w-8 h-8 object-cover rounded-full mr-2"
                            />
                        )}
                        <div className="flex-1 font-semibold">
                            <div className="flex items-center">
                                <div>{crypto.item.name}</div>
                                <div className="ml-2">({crypto.item.symbol})</div>
                            </div>
                        </div>
                        <div  className={`flex items-center  p-2 mx-1 rounded-lg text-green-700 ${
                            crypto.item.data.price_change_percentage_24h.usd >= 0
                                ? `bg-green-100 text-green-700`
                                : `bg-red-100  text-red-700`
                        }`}>
                            {crypto.item.data.price_change_percentage_24h.usd >= 0 ? (
                                <img src={greenArrow} alt="Upward arrow" className="w-4 h-4 mr-1" />
                            ) : (
                                <img src={redArrow} alt="Downward arrow" className="w-4 h-4 mr-1" />
                            )}
                            <div className="mr-1">
                                {Math.abs(crypto.item.data.price_change_percentage_24h.usd).toFixed(2)}%

                               



                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;