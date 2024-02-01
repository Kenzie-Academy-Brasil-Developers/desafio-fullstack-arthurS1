"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRouter = void 0;
const express_1 = require("express");
const clients_schema_1 = require("../schemas/clients.schema");
const globals_middeware_1 = require("../middlewares/globals.middeware");
const clients_middeware_1 = require("../middlewares/clients.middeware");
const clients_controllers_1 = require("../controllers/clients.controllers");
exports.clientsRouter = (0, express_1.Router)();
exports.clientsRouter.post("/clients", (0, globals_middeware_1.validateBody)(clients_schema_1.createUserSchema), clients_middeware_1.verifyUniqueClientEmail, clients_controllers_1.createClientController);
exports.clientsRouter.get("/clients", globals_middeware_1.validateToken, globals_middeware_1.verifyAdmin, clients_controllers_1.readAllClientsController);
// clientsRouter.get("/clients", paginationValidId, devControllers.allMovies)
// clientsRouter.get("/clients/:id", isProjecttValidId, devControllers.idMovies)
exports.clientsRouter.patch("/clients/:id", (0, globals_middeware_1.validateBody)(clients_schema_1.updateUserSchema), clients_middeware_1.verifyClientExists, globals_middeware_1.validateToken, globals_middeware_1.verifyPermissions, clients_controllers_1.updateClientController);
// clientsRouter.patch("/clients/:id", isProjecttValidId, validateBody(coursesSchemaPatch), nameValidation, devControllers.editMovies)
exports.clientsRouter.delete("/clients/:id", clients_middeware_1.verifyClientExists, globals_middeware_1.validateToken, globals_middeware_1.verifyPermissions, clients_controllers_1.deleteClientController);
// clientsRouter.delete("/clients/:id", isProjecttValidId, devControllers.deleteMovies)
exports.clientsRouter.post("/login", (0, globals_middeware_1.validateBody)(clients_schema_1.userLoginSchema), clients_controllers_1.loginController);
