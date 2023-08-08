import React from 'react'
import ProductCard from '../../../../components/ProductCard'

export const metadata = {
  title: "Category Page | Online Shoes Store",
  description: "This is Product Category Page",
};

const Carddetails = () => {
  return (
    <div className='text-center mt-8 md:mt-0 mx-auto max-w-[800px] '>
        <div className='text-[30px] md:text-[40px] my-8 p-5 font-semibold leading-tight'> 
            Running Shoes
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

      </div>
    </div>
  )
}

export default Carddetails