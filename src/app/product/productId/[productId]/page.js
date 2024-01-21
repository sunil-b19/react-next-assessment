"use client"
import { useGetproductsByCatagoryQuery, useGetproductsByIdQuery } from '@/redux/productApi';
import Link from 'next/link';
import React, { useEffect } from 'react'


const ProductDetails = ({ params: productId }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const id = productId?.productId

  const { data: product, isLoading } = useGetproductsByIdQuery(id);

  const productCatagoryName = product?.category

  const { data: productCatagory, isLoading: productLoading } = useGetproductsByCatagoryQuery(productCatagoryName);


  console.log("hello", productCatagory);



  return (
    <div className='containers mt-[4rem]'>
      <div className='flex items-center gap-4'>
        <Link href="/product" className='text-[#000] opacity-50 text-sm font-normal'>Product</Link>
        /
        <p className='text-[#000]text-sm font-normal'>{product?.title}</p>
      </div>

      <div className='mt-[4rem]'>
        <div className="grid grid-cols py-4 md:grid-cols-2">
          <img alt="ecommerce" className="w-full h-[400px] object-cover object-center rounded border border-gray-200" src={product?.images[0]} />
          <div className="w-full mt-7 flex flex-col ml-6 gap-[1rem]">
            <h2 className="text-sm font-bold uppercase text-gray-500 tracking-widest">{product?.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center gap-5">
                <span className="text-gray-600">Rating:<b className='font-bold  mx-2'>{product?.rating}/5</b></span>
                <span className="text-gray-600">stock:<b className='font-bold  mx-2'>{product?.stock}</b></span>
              </span>
            </div>
            <p className="m-0 p-0">{product?.description}</p>
            <div className="flex items-center border-b-2 border-gray-200">
              <div className="grid mt-4">
                <span className="mr-3 font-bold">Quantity</span>
                <div className="flex gap-3 mt-2 mb-8">
                  <button >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <input className="rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-2 pr-2 w-[50px]" type="text" value={0} />
                  <button>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>

              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"

              >Add To Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[4rem]'>
        <h3 className='text-[1.25rem] font-bold text-[#DB4444]'>Related Item</h3>
        <div className='mt-7'>
          {
            productLoading ? (
              <div className='h-full flex justify-center items-center'>
                <img src='/images\Spinner-1s-200px.gif' alt='spinner gif image'></img>
              </div>
            ) : (
              <>
                <div className='grid  gap-9 mb-9 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {
                    productCatagory && productCatagory?.products.map((productData) => {
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
    </div>
  );
};

export default ProductDetails