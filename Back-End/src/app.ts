import express, { Application, json } from 'express'
import "dotenv/config"
import "express-async-errors"
import { clientsRouter } from './routes/clients.routes'
import { handleErros } from './middlewares/handleErros'
import { contactsRouter } from './routes/contacts.routes'


const app: Application = express()
app.use(json())

app.use("/", clientsRouter)

app.use("/contacts", contactsRouter)

app.use(handleErros)

export default app
