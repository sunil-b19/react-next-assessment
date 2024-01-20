import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/"
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({

    userSignUp: builder.mutation({
      query: (q) => ({
        url: 'users/add',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: q
      }),
      invalidatesTags: ['User']
    }),


    userLogin: builder.mutation({
      query: (q) => ({
        url: '/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: q,

      }),
      invalidatesTags: ['User']

    }),

    authUser: builder.mutation({
      query: (token) => ({
        url: '/auth/me',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['User']

    }),

  })
})

export const { useUserLoginMutation, useUserSignUpMutation, useAuthUserMutation } = authApi
