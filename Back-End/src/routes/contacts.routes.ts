import { Router } from "express";
// import { isProjecttValidId } from "../middlewares/isProjectValidId";
// import { nameValidation } from "../middlewares/nameValidation";
// import { coursesSchema, coursesSchemaPatch } from "../schemas/clients.schema";
import { paginationValidId } from "../middlewares/paginationValidId";
import { validateBody, validateToken, verifyPermissions } from "../middlewares/globals.middeware";
import { createContactSchema, createSchedulesSchema, updateContactSchema } from "../schemas/contacts.schema";
import { isContacttValidId, verifyClientInContactExist, verifyUniqueContactEmail } from "../middlewares/contacts.middeware";
import { createContactController, deleteContactsController, readAllContactsController, updateContactsController } from "../controllers/contacts.controllers";

export const contactsRouter = Router()

contactsRouter.post("/", validateToken, validateBody(createContactSchema), verifyUniqueContactEmail, createContactController)
// contactsRouter.post("/", validateToken, validateBody(createContactSchema), verifyClientInContactExist, createContactController)

contactsRouter.get("/", validateToken, verifyPermissions, readAllContactsController)

// contactsRouter.get("/:id", isProjecttValidId, devControllers.idMovies)

contactsRouter.patch("/:id", isContacttValidId, validateBody(updateContactSchema), validateToken, verifyPermissions, updateContactsController)
// contactsRouter.patch("/:id", isProjecttValidId, validateBody(coursesSchemaPatch), nameValidation, devControllers.editMovies)

contactsRouter.delete("/:id", isContacttValidId, validateToken, verifyPermissions, deleteContactsController)
// contactsRouter.delete("/:id", isProjecttValidId, devControllers.deleteMovies)



