# OSIS Voting - E-Voting System

Sistem E-Voting OSIS berbasis Next.js + Supabase untuk SMK Budi Bakti Ciwidey.

## Tech Stack

- **Next.js 14** (App Router + TypeScript)
- **Tailwind CSS** (Styling)
- **Supabase** (Database + Auth)
- **Lucide React** (Icons)

## Struktur Halaman

| Route | Keterangan |
|---|---|
| `/` | Halaman Login OTP Pemilih |
| `/vote` | Halaman Pilih Kandidat |
| `/success` | Halaman Sukses Vote |
| `/admin/login` | Login Admin |
| `/admin/dashboard` | Dashboard Admin |
| `/admin/kelas` | Manajemen Data Kelas |

## Cara Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Supabase

1. Buat proyek baru di [supabase.com](https://supabase.com)
2. Jalankan SQL di file `supabase-schema.sql` melalui SQL Editor Supabase
3. Buat akun admin di **Authentication > Users > Add user**:
   - Email: `admin@budibakti.sch.id`
   - Password: `AdminBBC2026!`
4. Salin UUID user yang baru dibuat
5. Jalankan INSERT ke tabel `admins` (lihat komentar di `supabase-schema.sql`)

### 3. Konfigurasi Environment

Salin file `.env.local.example` menjadi `.env.local`:

```bash
cp .env.local.example .env.local
```

Isi dengan kredensial Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=https://[PROJECT_ID].supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=[YOUR_ANON_KEY]
ADMIN_PASSPHRASE=OsisBisa2026
```

Nilai URL dan Key bisa didapat dari: **Project Settings > API** di dashboard Supabase.

### 4. Jalankan Dev Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Testing

- **Login Pemilih**: Gunakan PIN `123456` (mode simulasi)
- **Login Admin**: `admin@budibakti.sch.id` / `AdminBBC2026!`

## Catatan Penting

- File `src/middleware.ts` bertanggung jawab melindungi rute `/admin/*`
- Halaman voting masih menggunakan mock data (TODO: integrasikan Supabase)
- Server Action `verifyVoterPin` masih mode simulasi (TODO: query ke tabel `tokens`)
