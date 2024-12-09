import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function slides() {
  return (
    <>
  
      <div className="flex slideSection bg-[#FCF8F3] mt-28 pl-32 gap-10">

            <div className="slideText mt-52 ml-20 mr-10">
                <h4 className=" font-extrabold text-[2rem] mb-4">50+ Beautiful rooms <br /> inspiration</h4>
                <p>
                    Our designer already made a lot of beautiful <br /> prototipe of rooms that
                    inspire you
                </p>
                <button className="bg-[#B88E2F] p-2 text-white mt-4">Exlore More</button>
            </div>

            <div className="slideImages my-10 bg-transparent text-black">
                <Image src="/InnerPeace.png" width={404} height={582}  alt="Picture of the author" />
                <div className="w-[217px] h-[130px] absolute top-[3200px] left-[660px] bg-white bg-opacity-65">
                    <div className="mt-10 gap-2 font-medium flex items-center ml-8">01 --- Bed Room</div>
                    <div className="font-semibold text-[28px] flex items-center justify-center">Inner Peace</div>
                </div>
                <button className="w-12 h-12 absolute top-[3284px] left-[877px] bg-[#B88E2F]">
                    <ArrowRight className="ml-3"/>
                </button>
            </div>

            <div className="slideImages mt-10">
                <Image src="/SideInner.png" width={372} height={486} alt="Picture of the author" />
            </div>

      </div>
    </>
  );
}