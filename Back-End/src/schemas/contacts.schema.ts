import { z } from 'zod';

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


export const schedulesSchema = z.object({
    id: z.number().positive(),
    // date: z.string(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    phone: z.string().max(50),
    createdAt: z.string(),
    // clientId: z.number().int().positive()

})


export const createContactSchema = schedulesSchema.pick({
    name: true,
    email: true,
    phone: true
})

export const createSchedulesSchema = schedulesSchema.omit({ id: true })

export const updateContactSchema = schedulesSchema.partial()
