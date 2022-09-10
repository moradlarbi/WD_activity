import { useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
const HeaderAuth = () => {
    const [navRespo, setNavRespo] = useState(false)
    const [username, setUsername] = useState("kamel brouthen")
  const router = useRouter();
  return (
    <header className='w-full flex md:flex-row md:items-center flex-col bg-green text-white md:px-14'>
      <nav className=' flex py-6 px-4 md:px-0'>
            <div className='md:mr-12 cursor-pointer '>
              <Link href="/"><a><img src="/assets/logo.svg" alt="logo" /></a></Link>
            </div>
            <div className="flex-auto flex justify-end">
                <div className=" md:hidden relative cursor-pointer flex gap-1 flex-col justify-center" onClick={() => {
                    setNavRespo(!navRespo)
                }}>
                    <div className=' w-7 h-1 bg-white rounded'></div>
                    <div className=' w-7 h-1 bg-white rounded'></div>
                    <div className=' w-7 h-1 bg-white rounded'></div>
                </div>
            </div>
        </nav>
        <div className={navRespo === true ? "absolute top-[120px] left-0 z-50 w-full overflow-hidden md:relative bg-green":"absolute top-[120px] w-full flex items-center overflow-hidden md:relative md:top-0"}>
            <ul className={navRespo === true ? "flex flex-col justify-center w-full gap-8 p-5 transition-transform md:flex-row md:flex translate-y-0 ":"flex flex-col justify-center md:bg-background bg-green w-full gap-8 p-5 transition-transform md:flex-row md:flex -translate-y-full md:translate-y-0 "}>
                <li className={router.pathname == "/" ? "font-bold" : ""}>
                  <Link href="/">
                    <a><h1 className='cursor-pointer text-2xl'>Home</h1></a></Link>
                </li>
                <li className={router.pathname == "/worksheets" ? "font-bold" : ""}>
                  <Link href="/worksheets"><a><h1 className='text-2xl cursor-pointer'>Worksheets</h1></a></Link>
                </li>
                <li className={router.pathname == "/quizes" ? "font-bold" : ""}>
                  <Link href="/quizes"><a><h1 className='text-2xl cursor-pointer'>Quizes</h1></a></Link>
                </li>
                <li className={router.pathname == "/articles" ? "font-bold" : ""}>
                  <Link href="/articles"><a><h1 className='text-2xl cursor-pointer'>Articles</h1></a></Link>
                </li>
                <li className={router.pathname == "/exams" ? "font-bold" : ""}>
                  <Link href="/exams"><a><h1 className='text-2xl cursor-pointer'>Exams</h1></a></Link>
                </li>
                <li className={router.pathname == "/books" ? "font-bold" : ""}>
                  <Link href="/books"><a><h1 className='text-2xl cursor-pointer'>Books</h1></a></Link>
                </li>
            </ul>
            <div className=' flex flex-col md:flex-row gap-x-4 md:items-center w-fit'>
              <button className={navRespo === true ? 'capitalize md:translate-y-0 bg-white m-5 h-fit px-4 py-2 rounded-lg transition-transform translate-y-0 text-green ':'capitalize transition-transform -translate-y-full bg-white text-green md:translate-y-0 h-fit px-4 py-1 rounded-lg md:block hidden'}><Link href="/Signup"><a className=' flex text-xs'> <img src="/assets/profil.svg" alt="profil icon" /> {username} </a></Link></button>
            </div>
            </div>
        </header>
  )
}

export default HeaderAuth