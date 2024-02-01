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
exports.deleteClientController = exports.updateClientController = exports.loginController = exports.readAllClientsController = exports.createClientController = void 0;
const clients_services_1 = require("../services/clients.services");
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, clients_services_1.createClientService)(req.body);
    return res.status(201).json(user);
});
exports.createClientController = createClientController;
const readAllClientsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, clients_services_1.readAllClientsService)();
    return res.status(200).json(users);
});
exports.readAllClientsController = readAllClientsController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, clients_services_1.loginService)(req.body);
    return res.status(200).json(token);
});
exports.loginController = loginController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = res.locals;
    const newUser = yield (0, clients_services_1.updateClientService)(req.body, user);
    return res.status(200).json(newUser);
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = res.locals;
    yield (0, clients_services_1.deleteClientService)(user);
    return res.status(204).json();
});
exports.deleteClientController = deleteClientController;
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
