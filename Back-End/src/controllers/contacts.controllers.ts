import { Request, Response } from "express"
import { UserReturn } from "../interfaces/clients.interfaces"
import { createClientService, deleteClientService, loginService, readAllClientsService, updateClientService } from "../services/clients.services"
import { createContactService, deleteContactService, readAllContactsService, updateContactsService } from "../services/contacts.services"

// export const createContactController = async (req: Request, res: Response): Promise<Response> => {
// const user: UserReturn = await createClientService(req.body)
// return res.status(201).json(user)
// }


export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const { sub } = res.locals.decoded
    // console.log(sub , "-----------------")
    // sub = id (client id)
    const contact = await createContactService(req.body, sub)

    return res.status(201).json(contact)
}

export const readAllContactsController = async (req: Request, res: Response): Promise<Response> => {
    const users = await readAllContactsService()
    return res.status(200).json(users)
}

export const updateContactsController = async (req: Request, res: Response): Promise<Response> => {
    // const { user } = res.locals
    const id = Number(req.params.id)

    const newUser = await updateContactsService(req.body, id)
    return res.status(200).json(newUser)
}

export const deleteContactsController = async (req: Request, res: Response): Promise<Response> => {
    // const { user } = res.locals
    const id = Number(req.params.id)
    console.log(id, "------------------------")

    await deleteContactService(id)
    return res.status(204).json()
}