import { z } from 'zod';
import { schedulesSchema } from './contacts.schema';

// const coursesSchema = z.object({
//     name: z.string().max(50),
//     description: z.string().optional().nullish(),
//     duration: z.number().positive(),
//     price: z.number().int(),
// })

// const coursesSchemaPatch = z.object({
//     name: z.string().max(50).optional(),
//     description: z.string().optional().nullish(),
//     duration: z.number().positive().optional(),
//     price: z.number().int().optional(),
// })

// const coursesSchemaId = z.object({
//     id: z.number(),
//     name: z.string().max(50),
//     description: z.string().optional().nullish(),
//     duration: z.number(),
//     price: z.number(),
// })


// export { coursesSchema, coursesSchemaId, coursesSchemaPatch }

const usersSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    // date: z.string(),
    phone: z.string().max(50),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    contacts: z.array(schedulesSchema),
    // updatedAt: z.string(),
    // deletedAt: z.string().nullish(),
})

export const createUserSchema = usersSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true,
    phone: true
    // date: true,
})


export const userWithoutAdmin = createUserSchema.omit({ admin: true })
export const updateUserSchema = userWithoutAdmin.partial()
export const userReturnSchema = usersSchema.omit({ password: true })
export const createReturnSchema = usersSchema.omit({ password: true, contacts: true })
export const userReturnListSchema = userReturnSchema.array()
export const userReadSchema = userReturnSchema.array()

export const userLoginSchema = usersSchema.pick({
    email: true,
    password: true,
})

export { usersSchema }

// export const readAllClientSchema = z.object({
//     id: z.number(),
//     name: z.string().max(45),
//     email: z.string().email().max(45),
//     phone: z.string().max(50),
//     password: z.string().max(120),
//     admin: z.boolean().default(false),
//     createdAt: z.string(),
//     contacts: z.object({
//         id: z.number(),
//         name: z.string().max(45),
//         email: z.string().email().max(45),
//         phone: z.string().max(50),
//         createdAt: z.string(),
//     }),

// })
// export const clientReturnSchema = readAllClientSchema.omit({ password: true })
// export const clientReturnListSchema = clientReturnSchema.array()