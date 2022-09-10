import React from 'react'
import logo from "../../assets/images/wlogo.png"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"
import twitter from "../../assets/images/twitter.png"
const Footer = () => {
    return (
        <div class="w-full flex justify-between mt-20 px-12 py-12 bg-tc-purple-a text-white items-center">
            <div>
                <img src={logo} className=' w-60' alt='social media' ></img>
            </div>
            <div>
                <h1 className=' text-2xl '>Get in touch:</h1>
                <div className=' my-2 ml-4 flex'>
                    <img src={facebook} className=' mr-4' alt='social media'></img>
                    <img src={instagram} className='' alt='social media'></img>
                </div>
                <div className=' ml-4 flex'>
                    <img src={linkedin} className=' mr-4' alt='social media'></img>
                    <img src={twitter} alt='social media'></img>
                </div>
            </div>
            <div>
                <h1 className=' text-lg'>Contact us :</h1>
                <div>Sharecode@gmail.com</div>
                <div>+213 554 758 449</div>
            </div>
    </div>
    )
}

export default Footer
