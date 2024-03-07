import TrendingCoins from './TrendingCoins'


const Footer = () => {
    return (
        <div className='px-32'>
            <h1 className='my-5 text-left text-xl font-bold'>You May Also Like</h1>
            <TrendingCoins />
            <h1 className='my-5 text-left text-xl font-bold'>Trending Coins</h1>
            <TrendingCoins />
        </div>
    )
}

export default Footer