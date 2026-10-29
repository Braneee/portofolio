# Portofolio Gibran Rais Hilmy Iskandar

Portofolio personal berbasis Next.js App Router, React, TypeScript, Tailwind CSS, dan pnpm.

## Menjalankan lokal

Gunakan Node.js 22 LTS sesuai `.nvmrc`, lalu jalankan:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Buka `http://localhost:3000`.

## Pemeriksaan

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
pnpm exec playwright install chromium
pnpm audit:a11y
```

Audit axe memeriksa beranda, arsip proyek, contoh detail proyek, CV, blog, contoh artikel, kontak, dan kondisi filter tanpa hasil pada desktop serta lebar 360 px. Hasil audit otomatis tidak menggantikan pengujian keyboard dan pembaca layar. CI menjalankan pemeriksaan yang sama pada pull request. Husky menjalankan lint-staged sebelum commit.

Formulir `/contact` menyiapkan tautan `mailto:` dari isian pengunjung. Situs tidak mengirim pesan atau menyimpan data formulir; pengunjung perlu meninjau dan mengirim draf melalui aplikasi emailnya.

## Konten beranda

Ubah identitas, proyek, pendidikan, pengalaman, dan sertifikat di `src/content/`. Data divalidasi saat diimpor melalui skema Zod di `src/content/schema.ts`. Beranda, arsip dan detail proyek, serta halaman CV membaca sumber yang sama. Blog masih memakai data terpisah di `src/data/blog.ts`.

Logo, foto, tangkapan layar proyek, dan PDF sertifikat berada di `public/`. Jangan menambahkan statistik proyek tanpa hasil pengukuran yang dapat diverifikasi.

Tautan Play Store STPI Mobile dihilangkan karena mengembalikan 404; tambahkan lagi setelah URL publiknya dipastikan.

## Status renovasi

Fondasi dan halaman portofolio sudah diperbarui. Arsip proyek memiliki filter platform dan teknologi yang dapat digabung. Audit aksesibilitas otomatis sudah berjalan di desktop dan mobile. Interaksi lanyard, tilt, kursor khusus, dan pengujian end-to-end yang lebih luas masih menunggu fase berikutnya. Belum ada deployment yang dibuat dari pekerjaan ini.
