export default function App() {
  return (
    // Container utama: memanjang ke kanan (flex), scroll horizontal, dan berwarna dasar biru sangat muda
    <div className="flex h-screen w-screen overflow-x-auto snap-x snap-mandatory no-scrollbar bg-blue-50 text-blue-950 font-sans">
      
      {/* ================= PANEL 1: THE ENGINEER ================= */}
      <section className="min-w-full h-full snap-center flex flex-col md:flex-row justify-center items-center p-10 border-r-2 border-blue-200 relative gap-10">
        <div className="absolute top-8 left-8 text-blue-400 font-mono text-sm tracking-widest uppercase">
          [ Frame 01 ] // The Engineer
        </div>
        
        {/* Sisi Kiri: Teks */}
        <div className="text-left md:w-1/2 flex flex-col items-start pl-8">
          <h1 className="text-6xl md:text-8xl font-black text-blue-600 mb-4 tracking-tighter leading-none">
            Muhammad <br/> Sholahuddin.
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 font-light mb-8 border-l-4 border-blue-400 pl-4">
            Membangun antarmuka yang bersih, interaktif, dan terstruktur.
          </p>
          
          {/* Tombol Call to Action */}
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-300/50">
            Lihat Proyek
          </button>
        </div>

        {/* Sisi Kanan: Placeholder Foto Potret */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-64 h-96 md:w-80 md:h-[30rem] bg-blue-200 rounded-2xl border-4 border-white shadow-2xl flex flex-col justify-center items-center text-blue-500 overflow-hidden relative group">
            {/* Nanti tag <img> bisa ditaruh di sini untuk menggantikan teks */}
            <span className="font-mono text-sm">[ Tempat Foto Potret ]</span>
            
            {/* Efek overlay sinematik tipis */}
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay"></div>
          </div>
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