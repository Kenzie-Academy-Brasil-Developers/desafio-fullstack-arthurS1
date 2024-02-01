import { compare } from "bcryptjs";
import { Client } from "../entities";
import {   userReturnListSchema, userReturnSchema } from "../schemas/clients.schema";
import { LoginReturn, UserCreate, UserLogin, UserReadReturn, UserReturn, UserUpdate } from "../interfaces/clients.interfaces";
import { clientsRepository } from "../repositories";
import { AppError } from "../errors/errors";
import { sign } from "jsonwebtoken";


export const createClientService = async (data: UserCreate): Promise<UserReturn> => {
    const client: Client = clientsRepository.create(data)
    
    await clientsRepository.save(client)
    
    return userReturnSchema.parse(client)
}

export const readAllClientsService = async ()  => {
    // : Promise<UserReadReturn> 
    // const users: Client[] = await clientsRepository.find()
    const users: Client[] = await clientsRepository.find({
        relations:{
            contacts:true
        }
    })

    return userReturnListSchema.parse(users)
    // *************
    // return users
    // return userReturnListSchema.parse(users)
    // return readAllClientSchema.parse(users)
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

// export const createMovie99 = async (payload: any) => {
//     const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
//     const movie = movieRepository.create(payload)
//     await movieRepository.save(movie)
//     const movieComplet = coursesSchemaId.parse(movie)

//     return movieComplet
// }

// export const idMovies = async (payload: any) => {
//     const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
//     const movie = await movieRepository.findOne({
//         where: {
//             id: Number(payload),
//         },
//     })

//     return movie
// }

// export const allMovies = async ({ nextPage, page, perPage, movieCount, prevPage, sort2 }: any) => {
//     const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
//     const movie = await movieRepository.find({
//         take: perPage,
//         skip: perPage * (page - 1),
//         order: sort2
//     })

//     return {
//         prevPage: prevPage,
//         nextPage: nextPage,
//         count: movieCount.length,
//         data: movie
//     }
// }

// export const deleteMovies = async (payload: any) => {
//     const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
//     const movie = await movieRepository.delete({ id: Number(payload) })

//     return movie
// }

// export const editMovies = async (id: any, payload: any) => {
//     const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
//     const movie = await movieRepository.update({ id: Number(id) }, payload)
//     const movieFind = await movieRepository.findOne({
//         where: {
//             id: Number(id),
//         },
//     })
    
//     return movieFind
// }

