import { experienceSchema } from "./schema";

export const experience = experienceSchema.array().parse([
  {
    role: "Mobile & Web Developer Intern",
    organization: "Decodes Media · Semarang",
    period: "Februari–Mei 2026",
    summary:
      "Terlibat dalam pengembangan aplikasi mobile dan web selama masa magang.",
  },
]);
