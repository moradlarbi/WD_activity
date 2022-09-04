import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=" w-screen">
      <h1 className=' font-bold text-white/75'>Hey</h1>
      <img src="/vercel.svg" alt="vercel" />
    </div>
  )
}
