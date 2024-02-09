import { Request, Response } from "express"
import { createContactService, deleteContactService, readAllContactsService, updateContactsService } from "../services/contacts.services"



export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const { sub } = res.locals.decoded
    const contact = await createContactService(req.body, sub)

    return res.status(201).json(contact)
}

export const readAllContactsController = async (req: Request, res: Response): Promise<Response> => {
    const users = await readAllContactsService()
    return res.status(200).json(users)
}

export const updateContactsController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)

    const newUser = await updateContactsService(req.body, id)
    return res.status(200).json(newUser)
}

export const deleteContactsController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)

    await deleteContactService(id)
    return res.status(204).json()
}