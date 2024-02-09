import { z } from 'zod';


export const schedulesSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    phone: z.string().max(50),
    createdAt: z.string(),

})


export const createContactSchema = schedulesSchema.pick({
    name: true,
    email: true,
    phone: true
})

export const createSchedulesSchema = schedulesSchema.omit({ id: true })

export const updateContactSchema = schedulesSchema.partial()
