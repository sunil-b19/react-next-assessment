"use client"
import { useGetproductsByCategoriesQuery } from '@/redux/productApi';
import Link from 'next/link';
import React from 'react';

const SliderNav = () => {
  const { data, isLoading } = useGetproductsByCategoriesQuery();

  return (
    <div className='flex flex-col gap-5 pr-4 border-r-2 pt-[2rem] w-[min(250px)] overflow-y-auto overflow-x-hidden h-[400px]'>
      {data &&
        data.map((category, i) => {
          return <Link key={i} className='uppercase hover:font-bold cursor-pointer' href={`product/category/${category}`}>{category}</Link>;
        })}
    </div>
  );
};

export default SliderNav;
