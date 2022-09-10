import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Formik, Form } from 'formik'
import Link from 'next/link'
import InputField from '../components/shared/InputField'
import * as Yup from "yup"
import usePassword from '../components/shared/usePassword'
const Signup = () => {
  const validate = Yup.object({
    email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    username: Yup.string()
        .required("username is required"),
    phone: Yup.string()
        .required("phone number is required"),
    remember: Yup.bool()
})
const [PassInputType, ToggleIcon] = usePassword();
  return (
    <Formik
    initialValues={{
        username: '',
        email: '',
        phone: '',
        password: '',
        remember: false,
    }}
    validationSchema={validate}
    onSubmit={values => {
        console.log(values)
    }}
    >
        {formik => (
            <div className='w-full flex flex-col bg-bg min-h-screen md:h-screen'>
                <Header />
                <div className='flex-auto items-center w-full flex flex-col md:flex-row px-6 md:px-14 py-6'>
                    <div className=' w-fit'>
                        <h1 className=' text-green text-5xl text-center'>Welcome back!</h1>
                        <Form className=' w-full flex flex-col items-start px-16 py-4 text-black'>
                            <InputField label="Username" name="username" type="text" />
                            <InputField label="Email adress" name="email" type="email" />
                            <InputField label="Phone number" name="phone" type="text" />
                            <InputField label="Password" name="password" type={PassInputType} ToggleIcon={ToggleIcon} />
                            <button className='text-white bg-green w-full py-2 my-3 px-14 md:px-28 border-none rounded-sm' type='submit'>
                                <Link href="/Signup">Register</Link>
                            </button>
                            <button>
                                <Link href="/Signup">Forgot your password ?</Link>
                            </button>
                            <div>
                                Already have an account ? <button className=' text-green font-bold cursor-pointer'><Link href="/Login">Sign in now</Link></button>
                            </div>
                            
                            <button className='text-white bg-green w-full py-2 my-3 px-14 md:px-28 border-none rounded-sm' type='submit'>
                                <Link href="/Signup">Register with google</Link>
                            </button>
                        </Form>
                    </div>
                    <div className=' flex-auto flex justify-end'>
                        <div className=" w-fit rounded-lg border-solid border-green border-4 mt-7 md:mt-0">
                            <img src="/assets/login.png" alt="hero img" className=" w-[350px] md:w-[500px]" />
                        </div>
                    </div>
                </div>
            </div>
            
        )}
    </Formik>
  )
}

export default Signup