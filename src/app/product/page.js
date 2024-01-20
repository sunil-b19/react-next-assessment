"use client"
import { useGetproductsQuery } from '@/redux/productApi'
import Link from 'next/link';
import React, { useState } from 'react'


const ProductPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading } = useGetproductsQuery({
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
    limit: 30,
  });

  const productData = data?.products || [];

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  console.log(totalPages)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // You can also add logic here to scroll to the top of the page if needed
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          className={`cursor-pointer mx-2 ${currentPage === i ? 'font-bold text-red-500' : 'text-gray-500'
            }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <>
      <div className='containers my-9'>
        <h2 className='text-[2rem] font-bold text-[#DB4444]'>All Products</h2>

        <div className='mt-7'>
          {
            isLoading ? (
              <div className='h-full flex justify-center items-center'>
                <img src='/images\Spinner-1s-200px.gif' alt='spinner gif image'></img>
              </div>
            ) : (
              <>
                <div className='grid grid-cols-4 gap-9 '>
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
                <div className='flex justify-center mt-4'>{renderPaginationNumbers()}</div>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ProductPage