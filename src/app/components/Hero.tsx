import Image from "next/image";

export default function Hero() {
  return (
    <div className="overflow-x-hidden relative">
    {/* Container for the image */}
    <div className="relative w-full">
      {/* Responsive image */}
      <Image
        src="/Hero Image.png"
        alt="Hero Section Image"
        width={1440}
        height={100}
        priority
        className="w-full h-auto"
        
      />
      {/* Hero Text Section */}
      <div className="heroText bg-[#FFF3E3] hidden  md:block  absolute top-[25%] left-[50%] rounded-[6px] p-[4rem]  ">
          <h6 className="font-bold">New Arrival</h6>
          <h3 className="text-[#B88E2F] font-poppins font-extrabold text-[3.25rem] ">Discover Our <br /> New Collection</h3>
          <p className="leading-loose  font-poppins font-medium text-[1rem] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore</p>
            <button className="bg-[#B88E2F] pt-4 pr-12 pb-4 pl-12 text-white">BUY NOW</button>
        </div>
    </div>
  </div>
  );
}