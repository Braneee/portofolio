import { certificateSchema } from "./schema";

export const certificates = certificateSchema.array().parse([
  {
    title: "IBM Machine Learning Specialization",
    issuer: "IBM / Coursera",
    url: "/sertifikat/SERTIFIKAT IBM MACHINE LEARNING.pdf",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM / Coursera",
    url: "/sertifikat/Coursera Sertifikat DataMining - Exploratory Data Analysis For Machine Learning - Gibran.pdf",
  },
  {
    title: "Supervised Machine Learning: Classification",
    issuer: "IBM / Coursera",
    url: "/sertifikat/Coursera Sertifikat DataMining - Supervised Machine Learning Classification - Gibran.pdf",
  },
  {
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM / Coursera",
    url: "/sertifikat/Coursera Sertifikat DataMining - Supervised Machine Learning Regression - Gibran.pdf",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM / Coursera",
    url: "/sertifikat/Coursera Sertif Machine Learning With Python.pdf",
  },
  {
    title: "Introduction to Neural Networks and PyTorch",
    issuer: "IBM / Coursera",
    url: "/sertifikat/Coursera Sertif Introduction to Neural Networks and PyTorch.pdf",
  },
]);
