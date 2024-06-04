import { LoginDataType, RegisterDataType } from '@/types/types'
import { z, ZodType } from 'zod'

export const LoginSchema: ZodType<LoginDataType> = z.object({
    username: z
        .string()
        .min(4, {
            message: 'Username must be at least 4 chars long.',
        })
        .max(255),
    password: z.string().min(4, {
        message: 'Password must be at least 4 chars long.',
    }),
})

export const RegisterSchema: ZodType<RegisterDataType> = z.object({
    username: z
        .string()
        .min(4, {
            message: 'Username must be at least 4 chars long.',
        })
        .max(255),
    name: z.string().min(4, {
        message: 'Name must be at least 4 chars long.',
    }),
    email: z
        .string({
            message: 'Email must not be empty.',
        })
        .email(),
    password: z.string().min(4, {
        message: 'Password must be at least 4 chars long.',
    }),
})
