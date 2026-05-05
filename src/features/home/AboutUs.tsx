const AboutUs = () => {
    return (
        <div className="grid grid-cols-2 h-[581px] border-b">
            <div className="border-t p-15 font-semibold text-4xl">
                <h1>About Us</h1>
            </div> 
            <div className="flex flex-col gap-8 p-16 text-left border-l">
                <h3>OUR STORY</h3>
                <h1 className="font-regular text-3xl">Kyiv LuxeBouquets</h1>
                <p>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                <button className="self-start border px-8 py-4">Learn more</button>
            </div>
        </div>
    )
};

export default AboutUs; 