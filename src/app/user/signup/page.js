"use client"
import { useUserSignUpMutation } from '@/redux/userApi';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import * as Yup from "yup";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


const SignInPage = () => {
  const router = useRouter(); // Initialize useRouter
  console.log(router); // Log the router object


  const [registerUser, { isLoading }] = useUserSignUpMutation();

  const valSchema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().min(5, 'too short').max(30, 'max character 20').required(),
    password: Yup.string().min(5, 'too short').max(20, 'max character 20').required(),

  });


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',

    },
    onSubmit: async (val) => {
      try {
        const response = await registerUser({
          "username": val.username,
          "email": val.email,
          "password": val.password,
          "image": "https://api.lorem.space/image/face?w=640&h=480&r=867"

        }).unwrap();
        router.push('/user/login');
        console.log(response);
      } catch (err) {
        console.log(err);
      }

    },
    validationSchema: valSchema
  });

  return (
    <div className='containers mt-[4rem]'>
      <div className='h-[40vh] grid md:grid-cols-2'>
        <img src='/images/sign-login-image.png' alt='sign in image' className='w-full h-full'></img>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h2 className='text-[2.5rem] text-[#000] font-medium'>Create an account</h2>
            <p className='text-[1.15rem] font-medium mt-4'>Enter your details below</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-8 mb-16 md:w-[360px]">
            <div className="mb-4 flex flex-col item-start space-y-4">
              <div>
                <input
                  name='username'
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  size="lg" label="Name"
                  placeholder='username'
                  className='w-full p-2 border-b-2 border-[#7f7f7f] bg-transparent outline-none'
                />
                {formik.errors.username && formik.touched.username ? <h1 className='mt-1 text-red-600'>{formik.errors.username}</h1> : null}
              </div>

              <div>
                <input
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  size="lg" label="Email"
                  placeholder='email'
                  className='w-full p-2 border-b-2 border-[#7f7f7f] bg-transparent outline-none'
                />
                {formik.errors.email && formik.touched.email ? <h1 className='mt-1 text-red-600'>{formik.errors.email}</h1> : null}
              </div>
              <div>
                <input
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password" size="lg" label="Password"
                  placeholder='password'
                  className='w-full p-2 border-b-2 border-[#7f7f7f] bg-transparent outline-none'
                />
                {formik.errors.email && formik.touched.email ? <h1 className='mt-1 text-red-600'>{formik.errors.email}</h1> : null}
              </div>
            </div>

            {isLoading ? <button disabled className="mt-6 relative py-2 flex justify-center items-center w-full">
              <div className='h-7 w-7 border-2  rounded-full border-t-gray-900 animate-spin'>
              </div>
            </button> : <button type='submit' className="mt-6 bg-[#db4444] w-full py-[1rem] text-white text-[1rem] font-medium">
              Create Account
            </button>}
            <div color="gray" className="mt-4 text-center font-normal">
              Already have an account?
              <Link href="/user/login" className='ml-2 text-blue-900 font-bold'> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage