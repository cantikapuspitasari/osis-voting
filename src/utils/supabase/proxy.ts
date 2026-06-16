import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: any) {
          // 1. Update cookies di sisi Request (Sesuai spek Supabase SSR terbaru)
          cookiesToSet.forEach(({ name, value, options }: any) =>
            request.cookies.set(name, value)
          );
          
          supabaseResponse = NextResponse.next({
            request,
          });
          
          // 2. Update cookies di sisi Response agar tertulis di browser user
          cookiesToSet.forEach(({ name, value, options }: any) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    },
  );

  // Verifikasi token / session yang aktif saat ini
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // ALUR LOGIKA PELINDUNG RUTE (THE "PROXY")
  const path = request.nextUrl.pathname;
  const isAdminRoute = path.startsWith("/admin");
  const isLoginRoute = path === "/admin/login";

  // 1. Jika mencoba akses /admin/... (selain halaman login) TAPI belum login
  if (isAdminRoute && !isLoginRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  // 2. Jika sudah login TAPI mencoba akses halaman /admin/login lagi
  if (isAdminRoute && isLoginRoute && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}