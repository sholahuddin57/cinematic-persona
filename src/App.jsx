import React from 'react';

export default function App() {
  return (
    // Container utama: memanjang ke kanan (flex), scroll horizontal, dan berwarna dasar biru sangat muda
    <div className="flex h-screen w-screen overflow-x-auto snap-x snap-mandatory no-scrollbar bg-blue-50 text-blue-950 font-sans">
      
      {/* ================= PANEL 1: THE ENGINEER ================= */}
      <section className="min-w-full h-full snap-center flex flex-col justify-center items-center p-10 border-r-2 border-blue-200 relative">
        {/* Dekorasi penanda frame film */}
        <div className="absolute top-8 left-8 text-blue-400 font-mono text-sm tracking-widest uppercase">
          [ Frame 01 ] // The Engineer
        </div>
        
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black text-blue-600 mb-6 tracking-tighter">
            Muhammad Sholahuddin.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-800 font-light">
            Membangun antarmuka yang bersih, interaktif, dan terstruktur.
          </p>
        </div>
      </section>

      {/* ================= PANEL 2: THE STRATEGIST ================= */}
      <section className="min-w-full h-full snap-center flex flex-col justify-center items-center p-10 border-r-2 border-blue-200 bg-white relative">
        <div className="absolute top-8 left-8 text-blue-400 font-mono text-sm tracking-widest uppercase">
          [ Frame 02 ] // The Strategist
        </div>
        
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500 mb-6 tracking-tighter">
            Management Trainee.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-700 font-light">
            Menghubungkan visi bisnis dengan eksekusi teknis melalui perencanaan yang presisi.
          </p>
        </div>
      </section>

      {/* ================= PANEL 3: BEHIND THE LENS ================= */}
      <section className="min-w-full h-full snap-center flex flex-col justify-center items-center p-10 bg-blue-100 relative">
        <div className="absolute top-8 left-8 text-blue-500 font-mono text-sm tracking-widest uppercase">
          [ Frame 03 ] // Behind The Lens
        </div>
        
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-blue-700 mb-6 tracking-tighter">
            Kehidupan di Luar Kode.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-800 font-light">
            Menangkap momen keseharian lewat lensa analog, menikmati udara pegunungan, hingga menyusun strategi di arena turnamen esports.
          </p>
        </div>
      </section>

    </div>
  );
}