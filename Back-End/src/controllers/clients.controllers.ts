import { Request, Response } from "express"
import { UserReturn } from "../interfaces/clients.interfaces"
import {  createClientService, deleteClientService, loginService, readAllClientsService, updateClientService } from "../services/clients.services"

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await createClientService(req.body)
    return res.status(201).json(user)
}

export const readAllClientsController = async (req: Request, res: Response): Promise<Response> => {
    const users = await readAllClientsService()
    return res.status(200).json(users)
}

export const loginController = async (req: Request, res: Response): Promise<Response> => {
    const token = await loginService(req.body)
    return res.status(200).json(token)
}

export const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals
    const newUser = await updateClientService(req.body, user)
    return res.status(200).json(newUser)
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals
    await deleteClientService(user)
    return res.status(204).json()
}

// const createMovie = async (req: Request, res: Response): Promise<Response> => {
//     // const dev = await devServices.createMovie(req.body)
//     // const dev = await createMovie()
//     return res.status(201).json(dev)
// }

// const idMovies = async (req: Request, res: Response): Promise<Response> => {
//     const { id } = req.params

//     const dev = await devServices.idMovies(id)
//     return res.status(200).json(dev)
// }

// const allMovies = async (req: Request, res: Response): Promise<Response> => {

//     const pagination = res.locals.pagination
//     const movie = await devServices.allMovies(pagination)

//     return res.status(200).json(movie)
// }

// const deleteMovies = async (req: Request, res: Response): Promise<Response> => {
//     const { id } = req.params

//     const dev = await devServices.deleteMovies(id)
//     return res.status(204).json(dev)
// }

// const editMovies = async (req: Request, res: Response): Promise<Response> => {
//     const { body } = req;
//     const { id } = req.params

//     const dev = await devServices.editMovies(id, body)
//     return res.status(200).json(dev)
// }


// export default {  createMovie, idMovies, allMovies, deleteMovies, editMovies }