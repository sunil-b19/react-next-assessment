"use client"

import { useGetproductsByCatagoryQuery } from '@/redux/productApi'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ProductCatagory = ({ params: catagory }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryName = catagory?.categoryName

  const { data: productCatagoryName, isLoading } = useGetproductsByCatagoryQuery(categoryName);


  return (
    <div>
      <>
        <div className='containers my-9'>
          <h2 className='text-[1.25rem] font-bold text-[#DB4444]'>All {categoryName} Products</h2>

          <div className='mt-7'>
            {
              isLoading ? (
                <div className='h-full flex justify-center items-center'>
                  <img src='/images\Spinner-1s-200px.gif' alt='spinner gif image'></img>
                </div>
              ) : (
                <>
                  <div className='grid  gap-9 mb-9 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                      productCatagoryName && productCatagoryName?.products.map((productData) => {
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
                </>
              )
            }
          </div>
        </div>
      </>

    </div>
  )
}

export default ProductCatagory

