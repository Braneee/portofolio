import { projectSchema } from "./schema";

export const projects = projectSchema.array().parse([
  {
    slug: "stpi-mobile",
    title: "STPI Mobile",
    platform: "Mobile",
    image: "/projects/stpi-mobile.png",
    summary:
      "Aplikasi Flutter untuk membantu proses skrining tuberkulosis dan pencatatan oleh petugas lapangan.",
    stack: ["Flutter", "Riverpod", "Supabase", "PostgreSQL"],
    featured: true,
    githubUrl: "https://github.com/Braneee/stpi-mobile",
  },
  {
    slug: "warungku-pos",
    title: "WarungKu POS",
    platform: "Mobile",
    image: "/projects/warungku-pos.png",
    summary:
      "Aplikasi kasir untuk transaksi dan pengelolaan stok pada usaha kecil.",
    stack: ["Flutter", "Supabase", "SQLite"],
    featured: true,
  },
  {
    slug: "lms-backend",
    title: "Simple LMS Backend",
    platform: "Backend",
    image: "/projects/lms-backend.png",
    summary:
      "Layanan backend untuk pengelolaan pembelajaran, tugas latar belakang, dan caching.",
    stack: ["Django", "PostgreSQL", "Redis", "Celery"],
    featured: true,
    githubUrl: "https://github.com/Braneee/final-project-pss",
  },
  {
    slug: "chick-n-fish-catering",
    title: "Chick N Fish E-Catering",
    platform: "Fullstack",
    image: "/projects/chick-n-fish-catering.png",
    summary:
      "Aplikasi pemesanan katering berbasis web dengan pengelolaan menu dan pesanan.",
    stack: ["PHP", "MySQL", "Tailwind CSS"],
    featured: false,
  },
  {
    slug: "transaksiku",
    title: "Transaksiku Dashboard",
    platform: "Web",
    image: "/projects/transaksiku.png",
    summary:
      "Simulasi transaksi digital di sisi klien untuk mencoba alur transfer dan riwayat transaksi.",
    stack: ["React", "Vite", "Tailwind CSS"],
    featured: false,
  },
  {
    slug: "attendance-system",
    title: "Smart Attendance Portal",
    platform: "Fullstack",
    image: "/projects/attendance-system.png",
    summary:
      "Portal presensi yang menghubungkan aplikasi Laravel dengan layanan analitik Flask.",
    stack: ["Laravel", "Flask", "Python", "MySQL"],
    featured: false,
    githubUrl: "https://github.com/Braneee/sistem-presensi-ooad",
  },
  {
    slug: "poliklinik-app",
    title: "Poliklinik Portal",
    platform: "Web",
    image: "/projects/poliklinik-app.png",
    summary:
      "Aplikasi Laravel untuk data klinik, jadwal dokter, dan pendaftaran pasien.",
    stack: ["Laravel", "MySQL", "Vite"],
    featured: false,
    githubUrl: "https://github.com/Braneee/poliklinik-app",
  },
]);

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
