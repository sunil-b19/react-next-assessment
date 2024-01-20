"use client"

import React from 'react'
import ProductDistributionChart from '@/components/ProductDistributionChart ';
import { useGetproductsQuery } from '@/redux/productApi';



const ProductData = () => {

  const { data, isLoading } = useGetproductsQuery({
    skip: 0,
    take: 100,
    limit: 100,
  });

  const products = data?.products;

  const productCatagory = products?.map((product) => product?.category) || [];

  // Count occurrences of each category
  const categoryCount = productCatagory.reduce((countMap, category) => {
    countMap[category] = (countMap[category] || 0) + 1;
    return countMap;
  }, {});

  console.log(categoryCount)
  return (
    <div className='containers'>
      <ProductDistributionChart data={categoryCount} />
    </div>
  )
}

export default ProductData