import {z} from "zod";

export const multipartSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .regex(/^[A-Za-z\s]+$/, "Name must contain only letters"),

    email: z
        .string()
        .trim()
        .email("Invalid Email Address"),

    password: z
        .string()
        .trim()
        .min(6, "Password must be at least 6 characters"),
});