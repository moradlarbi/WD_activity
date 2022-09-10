import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
export default function Home() {
   const [categories, setCategories] = useState([{
    "title": "Worksheets",
    "description": "Useful files to boost your work flow",
    "path":"/assets/worksheets.svg"
   },
   {
    "title": "Quiz",
    "description": "Effective way to learn new skills",
    "path":"/assets/quizes.svg"
   },
   {
    "title": "Articles",
    "description": "Tips and tricks only minutes away",
    "path":"/assets/articles.svg"
   },
   {
    "title": "Exam preparation",
    "description": "IELTS and TOEFL best preparation",
    "path":"/assets/exams.svg"
   },
   {
    "title": "Books",
    "description": "Learn English from the best",
    "path":"/assets/books.svg"
   },
   {
    "title": "Donations",
    "description": "We believe in shared value with you",
    "path":"/assets/donation.svg"
   },
  ])
  return (
    <div className=" max-w-screen overflow-hidden bg-bg">
      <Header />
      <div className=" bg-green md:px-14 w-full py-20">
        <div className=" flex flex-col md:flex-row w-full justify-between items-center">
          <div className=" flex flex-col gap-6 items-center md:items-start">
            <h1 className=" text-grey uppercase text-3xl text-center md:text-left md:text-5xl">Easy English <br></br> As a Second Language</h1>
            <h2 className=" text-grey/90 text-lg md:text-xl text-center md:text-left">All you need in a single platform.<br></br> English ressources as it has never been closer!</h2>
            <button className="bg-grey h-fit text-green px-4 py-2 rounded-lg font-bold w-fit">Subscribe for free</button>
          </div>
          <div className=" rounded-lg border-solid border-white border-4 mt-7 md:mt-0"><img src="/assets/hero.png" alt="hero img" className=" w-[350px] md:w-[500px]" /></div>
        </div>
        <div className=" bg-bg rounded-lg flex mt-6 w-3/4 md:w-1/2 mx-auto">
          <span className=" text-green bg-white px-4 py-2 border-r-2 border-solid border-green rounded-l-lg">Worksheets</span>
          <div className=" flex items-center px-3 w-full">
            <img src="/assets/search.svg" alt="search icon" className="text-green w-6" />
            <input type="text" className=" bg-transparent outline-none px-2 py-2 text-green w-full" placeholder="Search among numerous ressources you need" />
          </div>
        </div>
      </div>
      <div className=" py-24 w-full">
        <h1 className=" text-green text-3xl md:text-6xl text-center">Valuable Ressources</h1>
        <h2 className=" text-black text-center text-lg md:text-2xl w-1/2 mx-auto mt-4">English is more accessible with our variety of freely shared ressources to help you through.</h2>
        <div className='grid gap-x-24 gap-y-8 grid-cols-minMax mt-7 mb-7 px-12'>
            {
                categories.map((categorie,index) => {
                    return <div key={index} className={index === 5 ? " rounded-lg text-white border-solid border-2 border-green flex flex-col justify-center items-center py-7 bg-green":"rounded-lg border-solid border-2 border-green flex flex-col justify-center items-center py-7"}>
                        <img src={categorie.path} alt="icon pic" className=" pb-4 w-20 md:w-auto" />
                        <h1 className={index === 5 ?"text-xl md:text-2xl" :"text-green text-xl md:text-2xl"}>{categorie.title}</h1>
                        <h2 className={index === 5 ?"text-base md:text-lg":" text-base md:text-lg text-black"}>{categorie.description}</h2>
                    </div>
                })
            }
        </div>
      </div>
      <div className=" w-full">
            <h1 className=" text-green text-center text-5xl font-bold">About The Author</h1>
            <div className=" flex flex-col gap-4 md:flex-row items-center px-14 py-16 ">
              <h2 className=" md:px-8 md:w-2/3 text-center text-xl text-black">Kamel Brouthen dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.</h2>
              <div className=" rounded-lg border-solid border-green border-4 md:mt-0">
                <img src="/assets/footer.png" alt="about img"  className="w-[350px] md:w-[500px]"/>
              </div>
            </div>
      </div>
      <Footer />
    </div>
  )
}
