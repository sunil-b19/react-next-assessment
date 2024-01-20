"use client"

import { useGetproductsQuery } from '@/redux/productApi';
import Link from 'next/link';
import React from 'react'

const Product = () => {

  // Assuming your useGetproductsQuery looks like this
  // Assuming your useGetproductsQuery looks like this
  const { data, isLoading } = useGetproductsQuery({ skip: 0, take: 8, limit: 8 });
  // Assuming data.products is an array of products
  const productData = data?.products || [];


  return (
    <>
      <div className='mt-[5rem]'>
        <p className='text-[1rem] text-[#DB4444] font-semibold mt-6'>Our Products</p>
      </div>
      <h2 className='text-[1.5rem] text-black font-semibold my-3'> Explore Our Products </h2>

      <div className='mt-7'>
        {
          isLoading ? (
            <div className='h-full flex justify-center items-center'>
              <img src='/images\Spinner-1s-200px.gif' alt='spinner gif image'></img>
            </div>
          ) : (
            <>
              <div className='grid grid-cols-4 gap-9 mb-9'>
                {
                  productData && productData.map((productData) => {
                    return <div key={productData.id} className='h-[300px] relative group'>
                      <div className='bg-[#F5F5F5] relative rounded overflow-hidden'>
                        <Link href={`/product/productId/${productData.id}`}>
                          <img
                            src={productData?.images[0]}
                            alt="image"
                            className='p-[2rem] w-[290px] h-[200px] object-cover bg-transparent hover:scale-150 transform transition-transform duration-300 ease-in-out cursor-pointer'
                          />
                        </Link>

                        <div className='hidden group-hover:flex absolute bottom-0 w-full py-3 items-center justify-center bg-black transition-opacity'>
                          <button className='text-white text-[1rem] font-semibold'>Add to Cart</button>
                        </div>
                        <i className="fa-regular fa-heart text-[1.25rem] pt-2 absolute right-4 top-1"></i>
                      </div>
                      <div className='p-2 py-4 border-[#F5F5F5] border'>
                        <h3 className='text-black text-[1rem] font-medium'>{productData.title}</h3>
                        <div className='flex justify-between items-center gap-2'>
                          <span className='flex items-center gap-2 pt-3'>
                            <i className="fa-solid fa-dollar-sign text-[#DB4444]"></i>
                            <p>{productData.price}</p>
                          </span>
                          <span className='flex items-center gap-2'>
                            <p>{productData.rating}</p>
                            <i className="fa-solid fa-star text-[#DB4444]"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>

              <div className='mb-9 flex justify-center'>
                <Link href="/product" className='bg-[#DB4444] text-white text-[1rem] font-medium px-5 py-2'> View All Products</Link>
              </div>

            </>
          )
        }
      </div>

    </>
  )
}

export default Product