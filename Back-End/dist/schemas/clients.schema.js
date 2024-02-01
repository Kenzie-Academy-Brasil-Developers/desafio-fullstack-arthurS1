"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSchema = exports.userLoginSchema = exports.userReadSchema = exports.userReturnListSchema = exports.userReturnSchema = exports.updateUserSchema = exports.userWithoutAdmin = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const contacts_schema_1 = require("./contacts.schema");
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
const usersSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(45),
    email: zod_1.z.string().email().max(45),
    // date: z.string(),
    phone: zod_1.z.string().max(50),
    password: zod_1.z.string().max(120),
    admin: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.string(),
    contacts: zod_1.z.array(contacts_schema_1.schedulesSchema),
    // updatedAt: z.string(),
    // deletedAt: z.string().nullish(),
});
exports.usersSchema = usersSchema;
exports.createUserSchema = usersSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true,
    phone: true
    // date: true,
});
exports.userWithoutAdmin = exports.createUserSchema.omit({ admin: true });
exports.updateUserSchema = exports.userWithoutAdmin.partial();
exports.userReturnSchema = usersSchema.omit({ password: true });
exports.userReturnListSchema = exports.userReturnSchema.array();
exports.userReadSchema = exports.userReturnSchema.array();
exports.userLoginSchema = usersSchema.pick({
    email: true,
    password: true,
});
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
