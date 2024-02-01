"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactSchema = exports.createSchedulesSchema = exports.createContactSchema = exports.schedulesSchema = void 0;
const zod_1 = require("zod");
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
exports.schedulesSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    // date: z.string(),
    name: zod_1.z.string().max(45),
    email: zod_1.z.string().email().max(45),
    phone: zod_1.z.string().max(50),
    createdAt: zod_1.z.string(),
    // clientId: z.number().int().positive()
});
exports.createContactSchema = exports.schedulesSchema.pick({
    name: true,
    email: true,
    phone: true
});
exports.createSchedulesSchema = exports.schedulesSchema.omit({ id: true });
exports.updateContactSchema = exports.schedulesSchema.partial();
