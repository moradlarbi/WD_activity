import React from "react";
import HeroSection from "./HeroSection"
import Enigme from "./enigme"

export default function Home() {
  return(
    <div className="overflow-hidden">
      <HeroSection />
      <Enigme />
    </div>
  );
}
