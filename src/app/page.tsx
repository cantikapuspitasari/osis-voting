import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#000000] font-sans">
      {/* Hero Section */}
      <section className="bg-[#151b54] text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#f4a340] leading-tight">
            Siap raih Masa Depan Seru Bareng SMK Budi Bakti Ciwidey !
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Daftar sekarang dan raih masa depan terbaikmu !
          </p>
          <div className="mt-4">
            <button className="bg-[#f4a340] hover:bg-[#db8b2b] text-[#151b54] font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Lihat Jurusan & Gabung Sekarang
            </button>
          </div>
        </div>

        {/* Komponen Visual / Foto Pengganti Vercel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden border-4 border-[#f4a340] bg-gray-100 flex items-center justify-center">
            {/* Ganti '/hero-school.png' dengan path foto sekolah kamu di folder public atau URL eksternal */}
            <Image 
              src="/hero-school.png" 
              alt="SMK Budi Bakti Ciwidey"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Bagian Keunggulan / Social Proof */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#151b54] text-center mb-8">Tentang Sekolah Kami</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed">
          SMK Budi Bakti Ciwidey adalah sekolah kejuruan swasta terakreditasi "A" yang berlokasi di Jl. Babakan Tiga No. 82, Ciwidey, Kabupaten Bandung, Jawa Barat. Sekolah ini membekali siswanya dengan keterampilan kerja yang relevan melalui berbagai program kejuruan dan fasilitas pembelajaran yang aktif dan menyeluruh.
        </p>
      </section>
    </main>
  );
}