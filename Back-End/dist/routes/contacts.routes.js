"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRouter = void 0;
const express_1 = require("express");
const globals_middeware_1 = require("../middlewares/globals.middeware");
const contacts_schema_1 = require("../schemas/contacts.schema");
const contacts_middeware_1 = require("../middlewares/contacts.middeware");
const contacts_controllers_1 = require("../controllers/contacts.controllers");
exports.contactsRouter = (0, express_1.Router)();
exports.contactsRouter.post("/", globals_middeware_1.validateToken, (0, globals_middeware_1.validateBody)(contacts_schema_1.createContactSchema), contacts_middeware_1.verifyUniqueContactEmail, contacts_controllers_1.createContactController);
// contactsRouter.post("/", validateToken, validateBody(createContactSchema), verifyClientInContactExist, createContactController)
exports.contactsRouter.get("/", globals_middeware_1.validateToken, globals_middeware_1.verifyPermissions, contacts_controllers_1.readAllContactsController);
// contactsRouter.get("/:id", isProjecttValidId, devControllers.idMovies)
exports.contactsRouter.patch("/:id", contacts_middeware_1.isContacttValidId, (0, globals_middeware_1.validateBody)(contacts_schema_1.updateContactSchema), globals_middeware_1.validateToken, globals_middeware_1.verifyPermissions, contacts_controllers_1.updateContactsController);
// contactsRouter.patch("/:id", isProjecttValidId, validateBody(coursesSchemaPatch), nameValidation, devControllers.editMovies)
exports.contactsRouter.delete("/:id", contacts_middeware_1.isContacttValidId, globals_middeware_1.validateToken, globals_middeware_1.verifyPermissions, contacts_controllers_1.deleteContactsController);
// contactsRouter.delete("/:id", isProjecttValidId, devControllers.deleteMovies)
