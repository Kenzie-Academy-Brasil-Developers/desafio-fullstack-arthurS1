import { Router } from "express";
import { validateBody, validateToken, verifyPermissions } from "../middlewares/globals.middeware";
import { createContactSchema, createSchedulesSchema, updateContactSchema } from "../schemas/contacts.schema";
import { isContacttValidId, verifyClientInContactExist, verifyUniqueContactEmail } from "../middlewares/contacts.middeware";
import { createContactController, deleteContactsController, readAllContactsController, updateContactsController } from "../controllers/contacts.controllers";

export const contactsRouter = Router()

contactsRouter.post("/", validateToken, validateBody(createContactSchema), verifyUniqueContactEmail, createContactController)

contactsRouter.get("/", validateToken, verifyPermissions, readAllContactsController)

contactsRouter.patch("/:id", isContacttValidId, validateBody(updateContactSchema), validateToken, updateContactsController)

contactsRouter.delete("/:id", isContacttValidId, validateToken, deleteContactsController)



