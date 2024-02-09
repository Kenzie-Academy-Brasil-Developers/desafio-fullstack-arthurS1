import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Client, Contact } from "./entities";
import { UsersRepo } from "./interfaces/clients.interfaces";
import { SchedulesRepo } from "./interfaces/contacts.interfaces";



export const clientsRepository: UsersRepo = AppDataSource.getRepository(Client)

export const contactsRepository: SchedulesRepo = AppDataSource.getRepository(Contact)

