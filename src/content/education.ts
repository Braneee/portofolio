import { educationSchema } from "./schema";

export const education = educationSchema.array().parse([
  {
    period: "2023–sekarang",
    type: "Pendidikan formal",
    title: "Teknik Informatika",
    institution: "Universitas Dian Nuswantoro · Semarang",
    description:
      "Menempuh studi informatika dengan fokus pada pengembangan perangkat lunak, web, dan aplikasi mobile.",
  },
  {
    period: "2020–2023",
    type: "Pendidikan formal",
    title: "Matematika dan Ilmu Pengetahuan Alam",
    institution: "SMAN 02 Brebes · Brebes",
    description: "Pendidikan menengah pada peminatan MIPA.",
  },
]);
