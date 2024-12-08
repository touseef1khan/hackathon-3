export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/Product 1.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: "/Product 2.jpeg",
          description: 'Stylish Cafe Chair',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 3.png',
          description: 'Luxury Big Sofa',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 4.png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 5.png',
          description: 'Night Lamp',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 6.png',
          description: 'Small mug',
        },
        {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            image: '/Product 7.png',
            description: 'Cute bed set',
            age: 0
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 8.png',
          description: 'Minimalist flower pot',
        },
      ];
    
    return (
        <>
            <div className="product mt-40">
                <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>

            <div className="cardsContainer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-32 ">
                {data.map((card, index) => (
              
                <div className="card" key={index} style={{ width: "15rem" }}>
                    <img
                    src={card.image}
                    style={{ width: "18rem", height: "18rem" }}
                    className="card-img-top"
                    //   alt={card.title}
                    />

                    <div className="card-body text-left pl-2 bg-gray-100">
                        <h5 className="card-title font-semibold">
                        {card.name} 
                        </h5>
                        <p className="card-text">{card.description}</p>
                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {card.price}
                        </h5>
                    </div>
                </div>
))}

            </div>

            <div className="flex items-center justify-center mt-12 ml-5">
                <button className="productBtn text-[#B88E2F] px-8 p-2 border-2 border-[#B88E2F]">Show More</button>
            </div>
        </>
    )
}