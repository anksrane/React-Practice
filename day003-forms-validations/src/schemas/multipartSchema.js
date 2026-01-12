// signupSchemas.ts
import { z } from "zod";

export const step1Schema = z.object({
  email: z.string().trim().email("Invalid Email Address"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export const step2Schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50)
    .regex(/^[A-Za-z\s]+$/, "Only letters allowed"),
  city: z
    .string()
    .trim()
    .min(2, "City must be at least 2 characters")
    .max(50)
    .regex(/^[A-Za-z\s]+$/, "Only letters allowed"),
});

export const multipartSchema = step1Schema.merge(step2Schema);