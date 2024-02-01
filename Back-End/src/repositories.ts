import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Client, Contact } from "./entities";
import { UsersRepo } from "./interfaces/clients.interfaces";
import { SchedulesRepo } from "./interfaces/contacts.interfaces";
// import Category from "./entities/categories.entity";
// import Address from "./entities/addresses.entity";
// import Schedule from "./entities/schedules.entity";
// import RealEstate from "./entities/realEstates.entity";
// import { SchedulesRepo } from "./interfaces/schedules.interface";
// import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";
// import { CategoriesRepo } from "./interfaces/categories.interface";
// import { UsersRepo } from "./interfaces/users.interface";
// import User from "./entities/users.entity";


export const clientsRepository: UsersRepo = AppDataSource.getRepository(Client)

export const contactsRepository: SchedulesRepo = AppDataSource.getRepository(Contact)

// export const clientsRepository: Repository<Clients> = AppDataSource.getRepository(Clients)

// export const contactsRepository: Repository<Contacts> = AppDataSource.getRepository(Contacts)