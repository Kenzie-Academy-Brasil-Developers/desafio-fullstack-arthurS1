import { compare } from "bcryptjs";
import { Client } from "../entities";
import {   createReturnSchema, userReturnListSchema, userReturnSchema } from "../schemas/clients.schema";
import { LoginReturn, UserCreate, UserLogin, UserReadReturn, UserReturn, UserUpdate } from "../interfaces/clients.interfaces";
import { clientsRepository } from "../repositories";
import { AppError } from "../errors/errors";
import { sign } from "jsonwebtoken";


export const createClientService = async (data: UserCreate)=> {
    const client: Client = clientsRepository.create(data)
    await clientsRepository.save(client)
    return createReturnSchema.parse(client)
}

export const readAllClientsService = async (id:number)  => {
    const users: Client| null = await clientsRepository.findOne({
        where:{
            id:id
        },
        relations:{
            contacts:true
        }
    })

    return userReturnSchema.parse(users)
}

export const loginService = async (data: UserLogin): Promise<LoginReturn> => {
    const { email } = data
    const user: Client | null = await clientsRepository.findOneBy({ email })

    if (!user) { throw new AppError('Invalid credentials', 401) }

    const comparePass = await compare(data.password, user.password)

    if (!comparePass) { throw new AppError('Invalid credentials', 401) }

    const token = sign(
        { email: user.email, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: String(user.id), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token }
}

export const updateClientService = async (data: UserUpdate, user: Client): Promise<UserReturn> => {
    const userUpdate: Client = clientsRepository.create({ ...user, ...data })
    
    await clientsRepository.save(userUpdate)
   
    return userReturnSchema.parse(userUpdate)
}

export const deleteClientService = async (user: Client): Promise<void> => {
    await clientsRepository.remove(user)
}

