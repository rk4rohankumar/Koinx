import React from 'react'
import AboutCard from './AboutBitCoinCard'
import { aboutBitcoinCardData } from '../utils/Data'

const AboutBitcoin = () => {
    return (
        <div className='flex flex-col  bg-white rounded-lg font-semibold' >
            <h1 className='text-3xl p-5 font-semibold'>About Bitcoin</h1>
            <div className=' px-5'>
                <h1 className=' font-semibold text-2xl my-3 '>What is Bitcoin</h1>
                <div className='border-b-2 flex pb-5'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time
                    low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</div>

            </div>
            <div className='m-5'>
                <h1 className='text-2xl'>Bitcoin Price</h1>
                <div className=' py-3 '>Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi eum nesciunt vero error architecto libero rerum praesentium minima! Voluptatum, necessitatibus. Provident ipsa ex minus optio tenetur ipsum eligendi officia, dolore maiores dolorem quis facilis atque obcaecati in doloribus culpa, expedita velit, quasi exercitationem aspernatur. Velit voluptate reprehenderit dolorum veritatis qui eius, ex doloremque exercitationem id?
                </div>
                <div className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla reprehenderit tempore possimus perspiciatis deserunt excepturi iste, ipsa illo! Excepturi exercitationem perferendis asperiores ab cum officiis maxime animi amet assumenda, rerum consequuntur reiciendis quis maiores corporis repellat porro iure magni esse, illo placeat distinctio at dignissimos doloribus ad! Ipsam dolor ea sed odit accusantium id necessitatibus adipisci molestias ullam, eum nostrum minima omnis fugiat vitae explicabo excepturi quos sit ratione distinctio nihil. Ipsam ratione consequuntur iure, suscipit aperiam amet, facere ipsa iusto harum sed illo est voluptas aut soluta recusandae! Perspiciatis reprehenderit quaerat voluptatem omnis dolores ab saepe, facilis dicta eius totam placeat odio sequi tenetur, inventore iusto similique numquam accusamus culpa libero facere qui assumenda repellendus itaque? Explicabo unde itaque quo sequi saepe dolores cum accusantium earum laboriosam inventore! Tempore laboriosam necessitatibus harum earum, itaque sint optio alias vero, dolorem odit, voluptatibus illo dicta architecto consectetur neque delectus nemo!
                </div>
                <div className='mb-8  border-b-2 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate temporibus fugiat assumenda quas ad harum id! Consectetur dolores velit alias ratione explicabo debitis, ea consequuntur iste eligendi optio recusandae illum voluptatibus voluptates quam doloremque temporibus, nihil tempore repudiandae exercitationem rem distinctio asperiores adipisci corporis.
                </div>
                <div className='  '>
                    <div className='mx-3 mb-3 '>
                        <h1 className='text-3xl'>Already holding Bitcoin?</h1>
                    </div>
                    <div className='flex border-b-2 pb-3'>
                        <AboutCard props ={aboutBitcoinCardData} />
                        <AboutCard props ={aboutBitcoinCardData}/>
                    </div>
                    <div className='my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod iste placeat id quisquam ad tempore modi enim doloribus fuga ipsa, in vel recusandae reiciendis! Excepturi architecto officiis aliquid dolores ut id voluptates consectetur quis debitis corporis, ea dolorum cupiditate dignissimos, doloremque, natus fuga eius iure reprehenderit alias! Iste totam quia eaque consequatur animi enim aperiam accusamus impedit sit nisi, cupiditate earum architecto magnam laborum voluptas maiores?

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBitcoin
