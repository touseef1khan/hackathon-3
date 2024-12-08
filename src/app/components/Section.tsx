import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="absolute top-[859px] left-[131px] w-[1183px] h-[530px] bg-white">
        {/* First div for Heading and Paragraph */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Browse The page</h1>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <br />
        </div>

        {/* Second div for Images with Names */}
        <div className="flex space-x-4 justify-center mt-4 rounded-lg">
          {/* First Image with Name */}
          <div className="text-center">
            <Image
              src="/dining.jpg"
              width={381}
              height={480}
              alt="Dining"
            />
            <h2 className="mt-2 ">Dining</h2>
          </div>

          {/* Second Image with Name */}
          <div className="text-center">
            <Image
              src="/living.jpg"
              width={381}
              height={480}
              alt="Living"
            />
            <p className="mt-2">Living</p>
          </div>

          {/* Third Image with Name */}
          <div className="text-center">
            <Image
              src="/bedroom.jpg"
              width={381}
              height={480}
              alt="Bedroom"
            />
            <p className="mt-2">Bedroom</p>
          </div>
        </div>
      </div>
</div>

  );
} 

export default Section1;