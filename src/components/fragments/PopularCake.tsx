import { CardExclusive } from "../widgets/Card"

const cardData = [
    {
      url: "https://via.placeholder.com/372x372",
      title: "Exclusive Product 1",
      desc: "This is a description for product 1.",
      price: "$29.99"
    },
    {
      url: "https://via.placeholder.com/372x372",
      title: "Exclusive Product 2",
      desc: "This is a description for product 2.",
      price: "$39.99"
    },
    {
      url: "https://via.placeholder.com/372x372",
      title: "Exclusive Product 3",
      desc: "This is a description for product 3.",
      price: "$49.99"
    }
]

const PopularCake =() => {
    
  return (
    <div className="w-full h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-poppins font-light">
                Most Popular
            </div>
            <div className="text-4xl text-poppins">
                Our Exclusive Cakes
            </div>
        </div>
        <div className="flex gap-12">
            {cardData.map((item, index) => (
                <CardExclusive
                key={index}
                url={item.url}
                title={item.title}
                desc={item.desc}
                price={item.price}
                />
            ))}
        </div>
    </div>
  )
}

export default PopularCake
