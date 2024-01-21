"use client"
import { useGetproductsByCategoriesQuery } from '@/redux/productApi';
import Link from 'next/link';
import React from 'react';

const SliderNav = () => {
  const { data, isLoading } = useGetproductsByCategoriesQuery();

  return (
    <div className=' grid grid-flow-col md:flex md:flex-col gap-5 pr-4 border-r-2 pt-[2rem] md:w-[250px] md:overflow-y-auto md:overflow-x-hidden md:h-[400px] w-full h-auto overflow-x-auto overflow-y-hidden'>
      {data &&
        data.map((category, i) => {
          return <Link key={i} className='uppercase hover:font-bold cursor-pointer w-[165px]' href={`product/category/${category}`}>{category}</Link>;
        })}
    </div>
  );
};

export default SliderNav;
