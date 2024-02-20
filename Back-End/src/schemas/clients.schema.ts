import { z } from 'zod';
import { schedulesSchema } from './contacts.schema';



const usersSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    phone: z.string().max(50),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    contacts: z.array(schedulesSchema),
})

export const createUserSchema = usersSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true,
    phone: true
})


export const userWithoutAdmin = createUserSchema.omit({ admin: true })
export const updateUserSchema = userWithoutAdmin.partial()
export const userReturnSchema = usersSchema.omit({ password: true })
export const userReturnSchemaPatch = usersSchema.omit({ password: true, contacts: true })
export const createReturnSchema = usersSchema.omit({ password: true, contacts: true })
export const userReturnListSchema = userReturnSchema.array()
export const userReadSchema = userReturnSchema.array()

export const userLoginSchema = usersSchema.pick({
    email: true,
    password: true,
})

export { usersSchema }

