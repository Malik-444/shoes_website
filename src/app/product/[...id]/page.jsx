import React from "react";
import Productdetail from "../../../../components/Productdetail";
import { IoMdHeartEmpty } from "react-icons/io";
import Relatedproduct from "../../../../components/Relatedproduct";

export const metadata = {
  title: "Product Details | Online Shoes Store",
  description: "This is product details Page",
};

const productDetails = () => {
  return (
    <div className="w-full md:py-20 max-w-[1280px] px-5 md:px-10 mx-auto">
      <div className="flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-[100px]">
        <div className="left w-full md:w-auto flex-[1.5] max-w-[500px] lg:w-full mx-auto lg:mx-0">
          <Productdetail />
        </div>
        <div className="right flex-[1] py-3">
          <div className="title text-[34px] mb-2 font-bold text-black">
            Jordan Retro 6 G
          </div>
          <div className="subTitle text-lg mb-5 font-semibold">
            Men&apos;s Golf Shoes
          </div>
          <div className="price text-lg font-semibold">MRP : $ 200</div>
          <div className="text-xl font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-xl font-medium text-black/[0.5] mb-20">{`(Also include all applicable duties)`}</div>
          {/* sizessssss */}
          <div className="main mb-20">
            <div className="flex mb-2 justify-around">
              <div className="left text-md font-semibold">Select Size</div>
              <div className="right text-md font-semibold cursor-pointer text-black/[0.5]">
                Select Guide
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-50 cursor-not-allowed">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-50 cursor-not-allowed">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-50 cursor-not-allowed">
                UK 6
              </div>
            </div>
            <div className="error text-red-500 mt-2">
              Size Selection is required
            </div>
            <button className="w-full  mb-3 hover:opacity-75 active:scale-95 text-center text-lg  font-medium py-4 rounded-full text-white bg-black transition-transform">
              Add to Cart
            </button>
            <button className="w-full mb-10 flex justify-around items-center hover:opacity-75 active:scale-95 text-center text-lg  font-medium py-4 rounded-full text-white bg-black transition-transform">
              Add to Whishlist <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="title font-bold text-xl">Products Details</div>
              <div className="para text-lg mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptatibus illum repellat! Nulla, nemo ipsa
                expedita aliquam corporis quaerat facilis sequi eum, iste, quia
                illum at suscipit dolor ducimus in. Ratione veniam eaque eos
                corporis!
              </div>
              <div className="para text-lg mt-3 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptatibus illum repellat! Nulla, nemo ipsa
                expedita aliquam corporis quaerat facilis sequi eum, iste, quia
                illum at suscipit dolor ducimus in. Ratione veniam eaque eos
                corporis!
              </div>
            </div>
          </div>
        </div>
      </div>
      <Relatedproduct/>
    </div>
  );
};

export default productDetails;
