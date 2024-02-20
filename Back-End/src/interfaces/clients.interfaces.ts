import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, userLoginSchema, userReturnSchema, userReturnSchemaPatch } from "../schemas/clients.schema";
import { Client } from "../entities";

export type UserCreate = z.infer<typeof createUserSchema>
export type UserBodyUpdate = Omit<UserCreate, 'admin'>
export type UserUpdate = DeepPartial<UserBodyUpdate>
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserReturnPacth = z.infer<typeof userReturnSchemaPatch>
export type UserReadReturn = UserReturn[]
export type UserLogin = z.infer<typeof userLoginSchema>
export type LoginReturn = { token: string }

export type UsersRepo = Repository<Client>
