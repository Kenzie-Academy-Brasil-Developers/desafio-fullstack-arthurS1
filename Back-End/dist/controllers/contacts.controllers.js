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
exports.deleteContactsController = exports.updateContactsController = exports.readAllContactsController = exports.createContactController = void 0;
const contacts_services_1 = require("../services/contacts.services");
// export const createContactController = async (req: Request, res: Response): Promise<Response> => {
// const user: UserReturn = await createClientService(req.body)
// return res.status(201).json(user)
// }
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sub } = res.locals.decoded;
    // console.log(sub , "-----------------")
    // sub = id (client id)
    const contact = yield (0, contacts_services_1.createContactService)(req.body, sub);
    return res.status(201).json(contact);
});
exports.createContactController = createContactController;
const readAllContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, contacts_services_1.readAllContactsService)();
    return res.status(200).json(users);
});
exports.readAllContactsController = readAllContactsController;
const updateContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { user } = res.locals
    const id = Number(req.params.id);
    const newUser = yield (0, contacts_services_1.updateContactsService)(req.body, id);
    return res.status(200).json(newUser);
});
exports.updateContactsController = updateContactsController;
const deleteContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { user } = res.locals
    const id = Number(req.params.id);
    console.log(id, "------------------------");
    yield (0, contacts_services_1.deleteContactService)(id);
    return res.status(204).json();
});
exports.deleteContactsController = deleteContactsController;
