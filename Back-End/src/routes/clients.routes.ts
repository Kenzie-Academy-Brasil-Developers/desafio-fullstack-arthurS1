import { Router } from "express";
import { createUserSchema, updateUserSchema, userLoginSchema } from "../schemas/clients.schema";
import { paginationValidId } from "../middlewares/paginationValidId";
import { validateBody, validateToken, verifyAdmin, verifyPermissions } from "../middlewares/globals.middeware";
import { verifyClientExists, verifyUniqueClientEmail } from "../middlewares/clients.middeware";
import { createClientController, deleteClientController, loginController, readAllClientsController, updateClientController } from "../controllers/clients.controllers";

export const clientsRouter = Router()

clientsRouter.post("/clients", validateBody(createUserSchema), verifyUniqueClientEmail, createClientController)

clientsRouter.get("/clients", validateToken, readAllClientsController)

clientsRouter.patch("/clients/:id", validateBody(updateUserSchema), verifyClientExists, validateToken, verifyPermissions, updateClientController)

clientsRouter.delete("/clients/:id", verifyClientExists, validateToken, verifyPermissions, deleteClientController)

clientsRouter.post("/login", validateBody(userLoginSchema), loginController)
