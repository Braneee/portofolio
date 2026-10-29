# Audit konten pra-publikasi - 29 Oktober 2026

Audit ini memeriksa tautan yang dipakai situs, aset lokal, ringkasan proyek, dan CV PDF yang saat ini diunduh dari halaman `/resume`. Status tautan eksternal adalah hasil pemeriksaan pada tanggal di atas; status dapat berubah.

## Tautan eksternal

| Tautan                              | Hasil                                                                             | Tindakan                                                              |
| ----------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Profil GitHub `Braneee`             | HTTP 200                                                                          | Pertahankan.                                                          |
| Repositori STPI Mobile              | HTTP 200                                                                          | Pertahankan.                                                          |
| Repositori Simple LMS Backend       | HTTP 200                                                                          | Pertahankan.                                                          |
| Repositori Smart Attendance         | HTTP 200                                                                          | Pertahankan.                                                          |
| Repositori Poliklinik Portal        | HTTP 200                                                                          | Pertahankan.                                                          |
| Play Store `id.or.tbindonesia.stpi` | HTTP 404 pada HEAD dan GET. ID paket lokal STPI adalah `com.example.stpi_mobile`. | Tautan dihapus dari katalog sampai URL publik yang benar tersedia.    |
| LinkedIn `gibranrais`               | HEAD 405 dan GET 999 (pembatasan permintaan otomatis).                            | Periksa manual sebelum publikasi. Tidak ada bukti bahwa tautan rusak. |
| Repositori CaterNear di CV PDF      | HTTP 404 pada HEAD dan GET.                                                       | Perbarui atau hapus saat CV PDF direvisi.                             |
| Situs portofolio lama di CV PDF     | HTTP 200.                                                                         | Tentukan apakah perlu diganti dengan domain portofolio baru.          |

## Aset dan isi proyek

- Ketujuh gambar proyek, foto profil, CV PDF, dan enam PDF sertifikat yang dipakai situs ada di `public/`.
- Nama enam sertifikat yang tampil di situs cocok dengan dokumen lokal yang ditautkan.
- Stack STPI Mobile (Flutter, Riverpod, Supabase), WarungKu POS (Flutter, Supabase, SQLite), LMS Backend (Django, PostgreSQL, Redis, Celery), Smart Attendance (Laravel, Flask, MySQL), Poliklinik Portal (Laravel, MySQL, Vite), dan Transaksiku (React, Vite, Tailwind CSS) memiliki dukungan pada manifest proyek lokal. Klaim PostgreSQL pada STPI Mobile belum diperiksa langsung di konfigurasi database.
- Untuk Chick N Fish E-Catering tersedia gambar pratinjau, tetapi kode sumber proyek tersebut tidak ditemukan dalam folder proyek lokal. Stack dan ringkasannya perlu dikonfirmasi sebelum publikasi.

## CV PDF dibandingkan CV web

PDF `public/CV_GRHI.pdf` adalah dokumen A4 satu halaman yang dibuat 17 Juli 2026. Tampilannya terbaca, tetapi sangat padat. PDF memuat klaim yang tidak ada pada CV web: semester ke-6, IPK 3,68, penghargaan akademik, rincian teknis magang, CaterNear, serta IBM AI Engineering Professional Certificate. CV web menampilkan ringkasan yang lebih konservatif dan enam sertifikat pilihan yang tautan dokumennya tersedia.

**Keputusan konten yang perlu ditinjau sebelum PDF diganti:** apakah detail IPK, penghargaan, tanggung jawab magang, dan proyek tambahan di PDF masih akurat serta layak dipublikasikan. Setelah diputuskan, buat PDF baru dari data final dan perbarui tautan unduhan `/resume`. Jangan menganggap perbedaan ini sebagai bukti bahwa klaim lama salah; statusnya belum diverifikasi dalam audit ini.
