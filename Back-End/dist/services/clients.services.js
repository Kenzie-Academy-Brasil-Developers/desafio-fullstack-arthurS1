"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientService = exports.updateClientService = exports.loginService = exports.readAllClientsService = exports.createClientService = void 0;
const bcryptjs_1 = require("bcryptjs");
const clients_schema_1 = require("../schemas/clients.schema");
const repositories_1 = require("../repositories");
const errors_1 = require("../errors/errors");
const jsonwebtoken_1 = require("jsonwebtoken");
const createClientService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const client = repositories_1.clientsRepository.create(data);
    yield repositories_1.clientsRepository.save(client);
    return clients_schema_1.userReturnSchema.parse(client);
});
exports.createClientService = createClientService;
const readAllClientsService = () => __awaiter(void 0, void 0, void 0, function* () {
    // : Promise<UserReadReturn> 
    // const users: Client[] = await clientsRepository.find()
    const users = yield repositories_1.clientsRepository.find({
        relations: {
            contacts: true
        }
    });
    return clients_schema_1.userReturnListSchema.parse(users);
    // *************
    // return users
    // return userReturnListSchema.parse(users)
    // return readAllClientSchema.parse(users)
});
exports.readAllClientsService = readAllClientsService;
const loginService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = data;
    const user = yield repositories_1.clientsRepository.findOneBy({ email });
    if (!user) {
        throw new errors_1.AppError('Invalid credentials', 401);
    }
    const comparePass = yield (0, bcryptjs_1.compare)(data.password, user.password);
    if (!comparePass) {
        throw new errors_1.AppError('Invalid credentials', 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ email: user.email, admin: user.admin }, process.env.SECRET_KEY, { subject: String(user.id), expiresIn: process.env.EXPIRES_IN });
    return { token };
});
exports.loginService = loginService;
const updateClientService = (data, user) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdate = repositories_1.clientsRepository.create(Object.assign(Object.assign({}, user), data));
    yield repositories_1.clientsRepository.save(userUpdate);
    return clients_schema_1.userReturnSchema.parse(userUpdate);
});
exports.updateClientService = updateClientService;
const deleteClientService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield repositories_1.clientsRepository.remove(user);
});
exports.deleteClientService = deleteClientService;
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
