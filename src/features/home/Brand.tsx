import hero from '../../assets/hero.png'

const Brand = () => {
    return (
        <div className='flex flex-col gap-10 p-10 '>
            <div className='flex flex-col border-b gap-5 max-max-w-[560px] mt-8'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-6xl'>Kyiv </h1>
                    <h1 className='font-bold text-6xl'>LuxeBouquets</h1>
                </div>
                <p className='text-xl font-light pb-20 pt-7'>
                    Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
                </p>
            </div>
            <div className='flex flex-row gap-8 p-4 '>
                <img src={hero} alt="" className='md:w-[280px] w-[155px]' />
                <div className='border-l flex items-end justify-bottom'>
                    <p className='pl-5 md:text-l text-sm'>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
            </div>
        </div>
    )
};

export default Brand;