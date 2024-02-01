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
exports.deleteContactService = exports.updateContactsService = exports.readAllContactsService = exports.createContactService = void 0;
const repositories_1 = require("../repositories");
const contacts_schema_1 = require("../schemas/contacts.schema");
const createContactService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield repositories_1.clientsRepository.findOneBy({ id: userId });
    const contact = repositories_1.contactsRepository.create(Object.assign(Object.assign({}, data), { client: client }));
    yield repositories_1.contactsRepository.save(contact);
    // return contact
    return contacts_schema_1.createContactSchema.parse(contact);
});
exports.createContactService = createContactService;
const readAllContactsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield repositories_1.contactsRepository.find();
    return users;
    // return schedulesSchema.parse(users)
});
exports.readAllContactsService = readAllContactsService;
const updateContactsService = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    // const userUpdate: Contact[] = contactsRepository.create({ ...user, ...data })
    const contact = yield repositories_1.contactsRepository.findOne({
        where: {
            id: id,
        },
    });
    if (!contact) {
        throw new Error("Contact not found.");
    }
    const update = repositories_1.contactsRepository.create(Object.assign(Object.assign({}, contact), payload));
    yield repositories_1.contactsRepository.save(update);
    return contacts_schema_1.schedulesSchema.parse(update);
});
exports.updateContactsService = updateContactsService;
const deleteContactService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield repositories_1.contactsRepository.findOne({
        where: {
            id: id,
        },
    });
    if (!contact) {
        throw new Error("Contact not found.");
    }
    yield repositories_1.contactsRepository.delete({ id: id });
});
exports.deleteContactService = deleteContactService;
