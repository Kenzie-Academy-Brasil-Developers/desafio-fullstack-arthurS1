import { Request, Response } from "express"
import { createClientService, deleteClientService, loginService, readAllClientsService, updateClientService } from "../services/clients.services"

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const user = await createClientService(req.body)
    return res.status(201).json(user)
}

export const readAllClientsController = async (req: Request, res: Response): Promise<Response> => {
    console.log(res.locals)
    const users = await readAllClientsService(res.locals.decoded.sub)
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

