//import React from 'react';

const CoinCard = ({ coin }) => {
    return (
        <div className="flex flex-col text-left items-left ml-1 p-4 border border-gray-300 rounded-xl">
            <div className="flex items-left mb-2 flex-row">
                <img src={coin.item.thumb} alt={coin.item.symbol} className='w-8 h-8 object-cover rounded-full mr-2' />
                <span className="text-lg mr-2">{coin.item.symbol}</span>
                <div>
                    {coin.item.data.price_change_percentage_24h.aed < 0 ? (
                        <div className="text-red-500 bg-red-50 rounded p-0.5">{Number(coin.item.data.price_change_percentage_24h.aed).toFixed(2)}%</div>
                    ) : (
                        <div className="text-green-500 bg-green-50 rounded p-0.5">+ {Number(coin.item.data.price_change_percentage_24h.aed).toFixed(2)}%</div>
                    )}
                </div>
            </div>

            <div>
                {coin.item.data.price.length > 15 ? (
                    <span className="text-gray-700 text-[0.625rem] ml-2 font-bold flex flex-col items-left text-left">{coin.item.data.price}</span>
                ) : (
                    <span className="text-gray-700 text-lg ml-2 font-bold flex flex-col items-left text-left">{coin.item.data.price}</span>
                )}
            </div>

            <div className='flex justify-center px-1 items-center text-center'> {/* Updated styles for centering */}
                <img src={coin.item.data.sparkline} alt={coin.item.symbol} />
            </div>
        </div>
    );
}

export default CoinCard;    