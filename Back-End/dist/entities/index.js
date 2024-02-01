"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = exports.Client = void 0;
const clients_entity_1 = __importDefault(require("./clients.entity"));
exports.Client = clients_entity_1.default;
const contacts_entity_1 = __importDefault(require("./contacts.entity"));
exports.Contact = contacts_entity_1.default;
