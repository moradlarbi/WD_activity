import React from 'react'
import { useField, ErrorMessage } from 'formik'
const InputField = ({type, label,ToggleIcon, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className='flex flex-col my-1 mb-3 text-black w-full'>
            {/* <label className='font-bold my-2' htmlFor={field.name}>{label}</label> */}
            <div className='py-1 pl-3 pr-2 mx-1 border-2 border-solid border-green bg-transparent rounded-md bg-white flex justify-between items-center'>
                <input className='outline-none w-10/12 bg-transparent ' placeholder={label} {...field} {...props} type={type || "text"} autoComplete='off' />
                {ToggleIcon}
            </div>
            <div className='text-xs text-red-500 mt-1'><ErrorMessage name={field.name} /></div>
        </div>
    )
}

export default InputField
