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
            <h3 className="text-xl mb-2">High or Die</h3>
            <p className="text-sm text-gray-400">A stylized urban action RPG with surreal elements. Explore, survive, and uncover a deeper truth.</p>
          </div>
          <div className="border p-6 transition-transform duration-300 transform hover:scale-105 hover:border-cyan-400">
            <h3 className="text-xl mb-2">The Clear</h3>
            <p className="text-sm text-gray-400">Escape the compound. Reclaim your mind. A psychological survival FPS.</p>
          </div>
          <div className="border p-6 transition-transform duration-300 transform hover:scale-105 hover:border-cyan-400">
  <h3 className="text-xl font-bold mb-2">Coolabah Boys</h3>
  <p className="text-sm text-gray-300">
    Fast-paced endless runner with a unique Australian flair. High-energy and highly replayable.
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
