import React from 'react'
import Link from 'next/dist/client/link'
const Footer = () => {
  return (
    <div className='w-full bg-green text-white flex flex-col md:flex-row items-center justify-between md:px-32 py-2'>
        <Link href="/"><a><img src="/assets/logo.svg" alt="logo img" className=' w-24 md:w-32' /></a></Link>
        <ul className=' flex flex-col md:flex-row items-center gap-11 py-3 md:py-0'>
            <li><Link href=""><a><img src="/assets/whatsapp.svg" alt="whatsapp" className='w-6 md:w-9' /></a></Link></li>
            <li><Link href=""><a><img src="/assets/facebook.svg" alt="facebook" className='w-6 md:w-9' /></a></Link></li>
            <li><Link href=""><a><img src="/assets/instagram.svg" alt="instagram" className='w-6 md:w-9' /></a></Link></li>
            <li><Link href=""><a><img src="/assets/linkedin.svg" alt="linkedin" className='w-6 md:w-9' /></a></Link></li>
            <li><Link href=""><a><img src="/assets/twitter.svg" alt="twitter" className='w-6 md:w-9' /></a></Link></li>
        </ul>
    </div>
  )
}

export default Footer