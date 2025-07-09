import React from "react";
import Logo from "../components/logo";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white font-mono animate-flicker px-4">
      {/* Skull Logo Centered */}
      <div className="w-full flex justify-center items-center">
        <Logo />
      </div>

      {/* Heading + Text */}
      <h1 className="text-4xl mt-8 mb-4 animate-glitch tracking-widest text-center">
        BRAINDᴇAD STUDIOS
      </h1>

      <p className="text-base text-gray-300 mb-2 text-center">
        Independent game studio based in Australia.
      </p>
      <p className="text-base text-gray-300 mb-6 text-center">
        We make freakshit playable.
      </p>

      <a
        href="#work"
        className="border-2 border-cyan-400 px-6 py-2 hover:bg-cyan-400 hover:text-black transition hover:scale-105"
      >
        SEE OUR WORK
      </a>
    </section>
  );
}
