"use client"
import { useUserLoginMutation, useUserSignUpMutation } from '@/redux/userApi';
import { setUser } from '@/redux/userSilce';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from "yup";

const LoginPage = () => {

  const router = useRouter()

  const dispatch = useDispatch();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const valSchema = Yup.object().shape({

    username: Yup.string().required(),
    password: Yup.string().min(5, 'too short').max(20, 'max character 20').required(),

  });


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',

    },
    onSubmit: async (val) => {
      try {
        const response = await userLogin({
          "username": val.username,
          "password": val.password

        }).unwrap();
        console.log(response);
        toast.success("Login Sucess")
        dispatch(setUser(response))
        router.push('/')
      } catch (err) {
        // Handle specific error messages from the server
        if (err.data) {
          if (err.data.error === 'InvalidUsername') {
            formik.setErrors({ username: 'Invalid username' });
          } else if (err.data.error === 'InvalidPassword') {
            formik.setErrors({ password: 'Invalid password' });
          }
        }
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
            <h2 className='text-[2.5rem] text-[#000] font-medium'>Log in to Exclusive</h2>
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
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password" size="lg" label="Password"
                  placeholder='password'
                  className='w-full p-2 border-b-2 border-[#7f7f7f] bg-transparent outline-none'
                />
                {formik.errors.password && formik.touched.password ? <h1 className='mt-1 text-red-600'>{formik.errors.password}</h1> : null}
              </div>
            </div>
            <div className='flex justify-between items-center gap-4'>
              <button type='submit' className="mt-6 bg-[#db4444] py-2 px-[3rem] text-white text-[1rem] font-medium">
                Login
              </button>
              <button className="mt-6 text-[#db4444] py-[1rem] text-[1rem] font-medium">Forget Password?</button>
            </div>
            <div color="gray" className="mt-4 text-center font-normal">
              Don't have an account?
              <Link href="/user/signup" className='ml-2 text-blue-900 font-bold'> Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage