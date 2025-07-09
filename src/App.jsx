import React from 'react';
import Logo from '/assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 pt-10">
      {/* Logo */}
      <div className="w-[420px] h-auto mx-auto mb-6">
        <img
          src={Logo}
          alt="Braindead Studios Logo"
          className="w-full block drop-shadow-lg"
        />
      </div>

      {/* Title and Intro */}
      <h1 className="text-5xl font-mono mt-6 mb-4 text-center">BRAINDEAD STUDIOS</h1>
      <p className="text-lg max-w-xl text-gray-300 mb-6 text-center mx-auto">
        Creating memorable interactive experiences.
      </p>

      {/* Our Work Section */}
      <section id="work" className="py-16">
        <h2 className="text-2xl mb-6 text-center">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border p-6 transition-transform duration-300 transform hover:scale-105 hover:border-cyan-400">
            <h3 className="text-lg font-bold mb-2">Active Project</h3>
<p className="text-sm text-gray-400">
  Explore one of our public works-in-progress.
</p>
<a 
  href="https://highordie.io" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-cyan-400 hover:underline text-sm mt-1 inline-block"
>
  highordie.io
</a></div>
          <div className="border p-6 transition-transform duration-300 transform hover:scale-105 hover:border-cyan-400">
            <h3 className="text-lg font-bold mb-2">Classified</h3>
<p className="text-sm text-gray-400 italic">
  We can't show you this one yet... but it's cooking.
</p></div>
          <div className="border p-6 transition-transform duration-300 transform hover:scale-105 hover:border-cyan-400">
  <h3 className="text-lg font-bold mb-2">Project Three</h3>
<p className="text-sm text-gray-400">
  Currently in development. Details coming soon.
</p>
</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl mb-4">Who We Are</h2>
        <p className="text-gray-300">
         We’re an independent game development team based in Australia.
We focus on original concepts, strong visual identity, and gameplay that resonates.
Our goal is to build distinctive, memorable experiences with care, creativity, and technical precision.</p>
      </section>

      {/* Contact Section */}
      <footer className="mt-16 text-sm text-gray-500 text-center">
  Contact:{' '}
  <a
    href="mailto:social@braindeadstudios.io"
    className="text-cyan-400 hover:underline"
  >
    social@braindeadstudios.io
  </a>
</footer>

    </div>
  );
}

export default App;
