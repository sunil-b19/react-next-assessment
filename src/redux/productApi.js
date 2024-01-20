"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: (builder) => ({

    getproducts: builder.query({
      query: ({ skip, take, limit }) => ({
        url: 'products',
        params: { skip, take, limit }, // Include the take parameter in the query
      }),
    }),

    getproductsByCatagory: builder.query({
      query: (q) => ({
        url: `products/category/${q}`
      })
    }),


    getproductsByCategories: builder.query({
      query: (q) => ({
        url: `products/categories`
      })
    }),

    getproductsById: builder.query({
      query: (q) => ({
        url: `products/${q}`
      })
    }),

    getSearchProducts: builder.query({
      query: (q) => ({
        url: 'products/search',
        params: {
          q: q
        }
      })
    }),

    // addReview: builder.mutation({
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     body: 'This makes all sense to me!',
    //     postId: 3,
    //     userId: 5,
    //   })
    // })

  })

})


export const { useGetproductsQuery, useGetproductsByCatagoryQuery, useGetproductsByIdQuery, useGetSearchProductsQuery, useGetproductsByCategoriesQuery } = productApi