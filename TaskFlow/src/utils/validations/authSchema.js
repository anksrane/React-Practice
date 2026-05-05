import { z } from 'zod';

const email = z
    .string()
    .min(1, 'Email is Required')
    .email('Invalid email address');
const password = z
        .string()
        .min(6, 'Password must be at least 6 characters');


// Login Schema
export const loginSchema = z.object({
    email, password
})

// SignUp Schema
export const signupSchema = z.object({
    fullName: z
        .string()
        .min(2, 'Full name is required'),
    email,
    password,
    confirmPassword: z
        .string()
        .min(6, 'Confirm your password'),

    terms: z
        .boolean()
        .refine((val)=> val === true,{
            message: 'You must accept terms & conditions',
        }),
})
.refine((data)=> data.password === data.confirmPassword,{
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})