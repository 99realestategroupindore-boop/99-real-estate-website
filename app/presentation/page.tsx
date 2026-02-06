"use client";

export default function PresentationCover() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction Architecture"
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Yellow Diagonal Strip */}
      <div className="absolute top-0 right-[35%] w-32 h-full bg-yellow-400 transform -skew-x-12 z-10"></div>
      <div className="absolute top-0 right-[40%] w-3 h-full bg-yellow-400 transform -skew-x-12 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-10 py-32 text-white">

        {/* Logo Box */}
        <div className="mb-10">
          <div className="bg-black/80 p-4 inline-block rounded-lg border border-zinc-800">
            <img
              src="/logo.png"   // ⚠️ replace with your real logo file in /public
              alt="99 Real Estate Group"
              className="h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
          <span className="text-yellow-400">99</span> Real
          <br />
          Estate Group
        </h1>

        {/* Tagline */}
        <div className="flex items-center mt-10">
          <div className="h-16 w-1 bg-yellow-400 mr-6"></div>
          <div>
            <p className="text-2xl md:text-4xl font-light tracking-widest uppercase">
              Design. Build. Deliver.
            </p>
            <p className="text-zinc-400 mt-2 text-sm tracking-wider">
              PREMIUM CONSTRUCTION SERVICES
            </p>
          </div>
        </div>
      </div>

      {/* Year Badge */}
      <div className="absolute bottom-10 right-10 bg-yellow-400 px-6 py-2 z-20">
        <p className="text-black font-bold text-xl">2026</p>
      </div>

    </section>
  );
}
