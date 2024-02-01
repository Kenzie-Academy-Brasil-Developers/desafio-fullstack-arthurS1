"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRepository = exports.clientsRepository = void 0;
const data_source_1 = require("./data-source");
const entities_1 = require("./entities");
// import Category from "./entities/categories.entity";
// import Address from "./entities/addresses.entity";
// import Schedule from "./entities/schedules.entity";
// import RealEstate from "./entities/realEstates.entity";
// import { SchedulesRepo } from "./interfaces/schedules.interface";
// import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";
// import { CategoriesRepo } from "./interfaces/categories.interface";
// import { UsersRepo } from "./interfaces/users.interface";
// import User from "./entities/users.entity";
exports.clientsRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
exports.contactsRepository = data_source_1.AppDataSource.getRepository(entities_1.Contact);
// export const clientsRepository: Repository<Clients> = AppDataSource.getRepository(Clients)
// export const contactsRepository: Repository<Contacts> = AppDataSource.getRepository(Contacts)
