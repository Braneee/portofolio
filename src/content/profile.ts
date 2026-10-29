import { profileSchema } from "./schema";

export const profile = profileSchema.parse({
  name: "Gibran Rais Hilmy Iskandar",
  shortName: "Gibran",
  handle: "gibran.dev",
  photo: "/profile.jpg",
  email: "raishilmy0@gmail.com",
  github: "https://github.com/Braneee",
  linkedin: "https://www.linkedin.com/in/gibranrais/",
  intro:
    "Saya mengembangkan aplikasi mobile dengan Flutter dan menghubungkannya dengan sistem backend yang fungsional dan mudah digunakan.",
  approach:
    "Saya mulai dari kebutuhan pengguna, lalu menyusun alur aplikasi dan integrasi data sebelum membangun antarmuka. Proyek saya mencakup aplikasi mobile, sistem web, dan layanan backend.",
  stack: [
    "Flutter",
    "Dart",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Git",
  ],
});
