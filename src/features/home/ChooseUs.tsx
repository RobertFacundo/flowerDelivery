type responseType = {
    title: string;
    p: string;
}

const responses: responseType[] = [
    { title: "Stylish bouquets by florists", p: "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service." },
    { title: "On-time delivery", p: "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably." },
    { title: "Safe payment", p: "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence." },
    { title: "Subscription by your needs", p: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs." },
]

const ChooseUs = () => {
    return (
        <div className="grid grid-cols-2 ">
            <div className=" p-15 font-semibold text-4xl">
                <h1>Why Choose us?</h1>
            </div>
            <div className="flex flex-col">
                {responses.map((response) => (
                    <div key={response.title} className="flex flex-col p-12 gap-3 border-l border-b">
                        <h3 className="text-3xl">{response.title}</h3>
                        <p>{response.p}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ChooseUs;