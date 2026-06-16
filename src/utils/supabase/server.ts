import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: any) {
          try {
            // Menggunakan parameter 'cookie: any' untuk menghindari error destructuring implicit any
            cookiesToSet.forEach((cookie: any) =>
              cookieStore.set(cookie.name, cookie.value, cookie.options),
            );
          } catch {
            // Abaikan jika dipanggil dari Server Component yang hanya membaca data
          }
        },
      },
    },
  );
}