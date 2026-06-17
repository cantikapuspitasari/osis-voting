"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LogOut,
  Target,
  CheckCircle2,
  Gavel,
  Info,
  Check,
  GraduationCap,
  BookOpen,
} from "lucide-react";

// Struktur data tunggal disesuaikan dengan instruksi form Kelompok Obsidian
const schoolData = {
  name: "SMK Budi Bakti Ciwidey",
  headline: "Siap raih Masa Depan Seru Bareng SMK Budi Bakti Ciwidey !",
  subheadline: "Daftar sekarang dan raih masa depan terbaikmu !",
  ctaButton: "Lihat Jurusan & Gabung Sekarang",
  // Ganti file ini dengan foto sekolah asli kamu di folder public, atau link eksternal yang diizinkan
  image: "/hero-school.png", 
  vision: "Mewujudkan lembaga pendidikan kejuruan yang menghasilkan lulusan berkarakter, kompeten, mandiri, dan siap bersaing di era global.",
  missions: [
    "Menyelenggarakan pembelajaran berbasis Teaching Factory yang selaras dengan kebutuhan industri.",
    "Membentuk karakter peserta didik yang disiplin, beriman, dan bertaqwa kepada Tuhan Yang Maha Esa.",
    "Meningkatkan kompetensi keahlian siswa melalui program sertifikasi profesi nasional.",
    "Mengembangkan jiwa wirausaha dan kemandirian melalui inkubator bisnis sekolah."
  ]
};

export default function VotePage() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleLogout = () => router.push("/");
  const handleViewDetail = () => setIsDrawerOpen(true);
  const handleRegistrationConfirmation = () => {
    setIsDrawerOpen(false);
    setIsConfirmOpen(true);
  };
  const finalSubmitRegistration = () => {
    setIsConfirmOpen(false);
    router.push("/success");
  };

  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen relative flex flex-col">
      {/* Header - Menggunakan warna dasar kelompok Obsidian */}
      <header className="fixed top-0 w-full bg-[#151b54] border-b border-blue-900 z-40 shadow-md">
        <div className="flex justify-between items-center h-16 px-4 max-w-md mx-auto">
          <h1 className="text-xl font-bold text-[#f4a340] tracking-tight flex items-center gap-2">
            <GraduationCap className="w-6 h-6" /> Portal PPDB
          </h1>
          <button onClick={handleLogout} className="text-white hover:bg-blue-900 hover:text-[#f4a340] active:scale-95 transition-all p-2 rounded-full">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-md pt-24 px-4 flex flex-col gap-6 grow w-full">
        {/* Teks Atas Sesuai Form */}
        <section className="text-center mt-2">
          <h2 className="text-2xl font-extrabold text-[#151b54] mb-2 tracking-tight leading-tight">
            {schoolData.headline}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed px-2">
            {schoolData.subheadline}
          </p>
        </section>

        {/* Card Utama Tunggal (Fokus ke Foto Sekolah, Bukan Multi-User Calon Ketua Lagi) */}
        <article className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden shadow-sm">
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative shadow-inner">
            <Image 
              src={schoolData.image} 
              alt={schoolData.name} 
              fill 
              unoptimized 
              priority 
              className="object-cover" 
            />
            <div className="absolute top-3 left-3 bg-[#151b54] text-[#f4a340] text-xs font-bold px-3 py-1 rounded-full shadow">
              Obsidian Cluster
            </div>
          </div>

          <div className="mt-1">
            <h3 className="text-xl font-bold text-[#151b54] leading-tight">
              {schoolData.name}
            </h3>
            <p className="text-xs text-slate-400 mt-1">Kabupaten Bandung, Jawa Barat</p>
            
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Mulai langkah suksesmu bersama fasilitas belajar Teaching Factory terlengkap dan ekosistem digital yang modern.
            </p>

            {/* Tombol Aksi Utama */}
            <button 
              onClick={handleViewDetail} 
              className="mt-5 w-full py-3.5 rounded-xl bg-[#151b54] hover:bg-blue-900 text-white font-semibold active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-900/20"
            >
              <BookOpen className="w-5 h-5 text-[#f4a340]" />
              {schoolData.ctaButton}
            </button>
          </div>
        </article>
      </main>

      {/* Footer sesuai data sekolah identitas Ciwidey */}
      <footer className="mt-8 py-8 w-full border-t border-slate-200/60 bg-slate-50/50">
        <div className="max-w-md mx-auto text-center px-4">
          <p className="text-xs text-slate-500 font-semibold">&copy; 2026 {schoolData.name}</p>
          <p className="text-[10px] text-slate-400 mt-1.5 tracking-wide">Dikembangkan oleh Tim IT Kelompok Obsidian</p>
        </div>
      </footer>

      {/* Drawer Informasi Detail Visi Misi */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsDrawerOpen(false)} />
          <div className="relative bg-white border-t border-slate-200 max-h-[90vh] rounded-t-2xl flex flex-col z-10">
            <div className="mx-auto w-full max-w-md flex flex-col h-full">
              <div className="text-left border-b border-slate-100 p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#151b54]">
                    <GraduationCap className="w-6 h-6 text-[#f4a340]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#151b54]">Profil &amp; Keunggulan</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{schoolData.name}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 overflow-y-auto space-y-6 flex-1">
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f4a340]" />
                    <h4 className="font-bold text-slate-900">Visi Sekolah</h4>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed italic text-center">&quot;{schoolData.vision}&quot;</p>
                  </div>
                </section>
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-[#151b54]" />
                    <h4 className="font-bold text-slate-900">Misi Utama</h4>
                  </div>
                  <div className="space-y-3">
                    {schoolData.missions.map((mission, idx) => (
                      <div key={idx} className="flex gap-3 items-start bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-[#151b54] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{idx + 1}</span>
                        <p className="text-sm text-slate-600 leading-relaxed">{mission}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="border-t border-slate-100 p-4 bg-white">
                <button onClick={handleRegistrationConfirmation} className="w-full py-4 bg-[#f4a340] text-[#151b54] rounded-xl font-bold active:scale-[0.98] transition-all shadow-md shadow-orange-500/20 flex justify-center items-center gap-2">
                  Konfirmasi Gabung Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Dialog Konfirmasi Final */}
      {isConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsConfirmOpen(false)} />
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-xl p-6 shadow-xl z-10 flex flex-col gap-6">
            <div className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Info className="w-5 h-5 text-[#f4a340]" />
              </div>
              <h2 className="text-lg font-bold text-[#151b54]">Konfirmasi Pendaftaran</h2>
            </div>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-white shadow-sm relative">
                <Image src={schoolData.image} alt="Logo" fill unoptimized className="object-cover" />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#f4a340] text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <Check className="w-3 h-3 text-[#151b54]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1 font-medium">Institusi Pilihan</p>
                <p className="text-base font-bold text-slate-900">{schoolData.name}</p>
                <p className="text-xs text-gray-500">Grup Belajar: Obsidian</p>
              </div>
            </div>
            <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100 flex gap-2 items-start">
              <Gavel className="w-5 h-5 text-[#151b54] shrink-0 mt-0.5" />
              <span className="text-xs text-slate-600 leading-relaxed block">
                Dengan menekan tombol konfirmasi di bawah, formulir minat data pendaftaran kamu akan langsung diverifikasi oleh sistem data server pusat.
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={finalSubmitRegistration} className="w-full py-4 bg-[#151b54] text-white rounded-xl font-medium active:scale-[0.98] transition-transform duration-200 shadow-md flex items-center justify-center gap-2">
                Kirim Formulir Sekarang
              </button>
              <button onClick={() => setIsConfirmOpen(false)} className="w-full py-4 bg-transparent border-2 border-[#151b54] text-[#151b54] rounded-xl font-medium active:scale-[0.98] transition-transform duration-200">
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}