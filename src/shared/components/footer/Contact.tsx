type contactDataType = {
    title: string,
    p: string,
}

const contactData: contactDataType[] = [
    { title: 'Address', p: "15/4 Khreshchatyk Street, Kyiv " },
    { title: 'Phone', p: "+380980099777" },
    { title: "General Enquiry:", p: "Kiev.Florist.Studio@gmail.com" }
]

const Contact = () => {
    return (
        <div className="flex flex-col p-12  border-r border-t gap-6">
            <h1 className="text-2xl text-gray-500">Contact us</h1>
            {contactData.map(data => (
                <div key={data.title}>
                    <h3 className="text-xl text-gray-400">{data.title}</h3>
                    <p>{data.p}</p>
                </div>
            ))}
        </div>
    )
};

export default Contact;