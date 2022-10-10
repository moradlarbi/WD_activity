import React from 'react';


export default function Enigme() {
  return(
    <div className="w-screen h-screen bg-noirBG text-blancTxt justify-center">
      <div className="container flex flex-col items-center w-full gap-4 pt-5">
        <h1 className="text-5xl mb-3">Your clues</h1>
        <p className="text-2xl w-4/5 text-center mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <h2 className="date text-rougeTxt text-7xl">OCT 11 2022   12:58</h2>
        <p className="text-xl">DESTINATION TIME</p>
        <h2 className="date text-bleuTxt text-7xl">OCT 11 2022   12:58</h2>
        <p className="text-xl">PRESENT TIME</p>
        <h2 className="date text-orangeTxt text-7xl">OCT 11 2022   12:58</h2>
        <p className="text-xl mb-6">LAST TIME DEPARTED</p>
        <h2 className="text-rougeTxt date text-4xl">03:00</h2>
      </div>
    </div>
  )
}
