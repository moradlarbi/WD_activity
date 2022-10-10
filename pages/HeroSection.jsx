import React from 'react';
import Image from 'next/image';

export default function HeroSection(){
  return(
    <div className="w-screen herosection h-screen text-blancTxt bg-noirBG flex flex-col items-end">
      <div className="flex flex-col items-center justify-center pr-80 gap-4 pt-32">
       <h1 className="title text-7xl">Marty Got Lost<br />In Time Again</h1>
       <p className="text-2xl mb-48">Catch up with him by setting the destination<br />time according to the given clues</p>
       <button className="w-56 border-2 text-2xl self-end py-2 rounded-3xl">Find Marty <span className="arrow">{'>'}</span></button>
      </div>
    </div>
  );
}

