import { Client, Contact } from "../entities";
import { AppError } from "../errors/errors";
import { CreateSchedules } from "../interfaces/contacts.interfaces";
import { clientsRepository, contactsRepository } from "../repositories";
import { createContactSchema, schedulesSchema } from "../schemas/contacts.schema";

export const createContactService = async (data: CreateSchedules, userId: number)=> {

    const client: Client | null = await clientsRepository.findOneBy({ id: userId })

    const contact: Contact = contactsRepository.create({ ...data, client: client! })

    await contactsRepository.save(contact)

    return createContactSchema.parse(contact)
}

export const readAllContactsService = async () => {
    const users: Contact[] = await contactsRepository.find()
    return users
}

export const updateContactsService = async (payload: any, id: number) => {
    const contact: Contact | null = await contactsRepository.findOne({
        where: {
            id: id,
        },
    })
    if (!contact) {
        throw new Error("Contact not found.")
    }
    const update = contactsRepository.create({ ...contact, ...payload })
    await contactsRepository.save(update)

    return schedulesSchema.parse(update)
}

export const deleteContactService = async (id: number): Promise<void> => {

    const contact: Contact | null = await contactsRepository.findOne({
        where: {
            id: id,
        },
    })
    if (!contact) {
        throw new Error("Contact not found.")
    }

    await contactsRepository.delete({ id: id })
}


