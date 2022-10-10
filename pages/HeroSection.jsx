import React from 'react';
import Link from 'next/link';
export default function HeroSection(){
  return(
    <div className="w-screen herosection h-screen text-blancTxt bg-noirBG flex flex-col items-end">
      <div className="flex flex-col justify-center pr-[20%] gap-4 pt-32">
       <h1 className="title lg:text-7xl md:text-5xl text-3xl text-left">Marty Got Lost<br />In Time Again</h1>
       <p className="lg:text-2xl mb-48 md:text-xl text-lg">Catch up with him by setting the destination<br />time according to the given clues</p>
       <Link href="/EnigmePage">
        <button className="lg:w-56 md:w-48 sm:w-36 w-24 border-2 lg:text-2xl text-xl self-end py-2 rounded-3xl">
        Find Marty <span className="arrow">{'>'}</span>
        </button>
        </Link>
      </div>
    </div>
  );
}

