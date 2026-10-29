import { z } from "zod";

const internalPath = z.string().startsWith("/");

export const profileSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  handle: z.string().min(1),
  photo: internalPath,
  email: z.email(),
  github: z.url(),
  linkedin: z.url(),
  intro: z.string().min(1),
  approach: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  platform: z.enum(["Mobile", "Web", "Backend", "Fullstack"]),
  image: internalPath,
  summary: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
  githubUrl: z.url().optional(),
  storeUrl: z.url().optional(),
});

export const educationSchema = z.object({
  period: z.string().min(1),
  type: z.string().min(1),
  title: z.string().min(1),
  institution: z.string().min(1),
  description: z.string().min(1),
});

export const certificateSchema = z.object({
  title: z.string().min(1),
  issuer: z.string().min(1),
  url: internalPath,
});

export const experienceSchema = z.object({
  role: z.string().min(1),
  organization: z.string().min(1),
  period: z.string().min(1),
  summary: z.string().min(1),
});
