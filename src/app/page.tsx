"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, CircleHelp, Loader2, AlertCircle } from "lucide-react";
import { verifyVoterPin } from "@/app/actions/auth";

export default function LoginPage() {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length !== 6) return;
    setIsLoading(false);
    setErrorMessage(null);
    setIsLoading(true);
    const result = await verifyVoterPin(pin);
    if (!result.success) {
      setErrorMessage(result.error || "Gagal masuk.");
      setIsLoading(false);
      setPin("");
    } else {
      router.push("/vote");
    }
  };

  const handlePinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setPin(value);
  };

  return (
    <main className="bg-slate-50 min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl top-[-100px] -left-[100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl bottom-[50px] -right-[50px]"></div>
      </div>

      <div className="w-full max-w-md mx-auto z-10">
        <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-xl p-8 shadow-sm flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <GraduationCap className="text-blue-600 w-8 h-8" strokeWidth={1.5} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center tracking-tight">
            Masuk ke Portal Suara
          </h1>

          <p className="text-sm text-slate-500 mb-8 text-center max-w-[280px] leading-relaxed">
            Masukkan 6 digit kode OTP yang telah diberikan oleh panitia pemilihan.
          </p>

          <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-12 h-14 text-xl font-semibold bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-900 shadow-sm">
                    {pin[i] ? "•" : ""}
                  </div>
                ))}
              </div>
              <span className="text-slate-400 font-bold mx-1">—</span>
              <div className="flex gap-2">
                {[3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-14 text-xl font-semibold bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-900 shadow-sm">
                    {pin[i] ? "•" : ""}
                  </div>
                ))}
              </div>
            </div>

            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={pin}
              onChange={handlePinInput}
              disabled={isLoading}
              className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 text-center text-2xl tracking-widest font-semibold focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none transition-all shadow-sm disabled:opacity-60"
              placeholder="______"
            />

            {errorMessage && (
              <div className="w-full bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-2 text-red-600 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-normal">{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={pin.length !== 6 || isLoading}
              className="w-full py-4 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed mt-2 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  <span>Memvalidasi...</span>
                </>
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2">
            <CircleHelp className="text-slate-500 w-4 h-4" />
            <span className="text-xs font-medium text-slate-500">Butuh bantuan? Hubungi panitia.</span>
          </div>
        </div>
      </div>
    </main>
  );
}