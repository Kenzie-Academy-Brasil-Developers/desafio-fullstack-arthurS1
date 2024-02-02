import "express-async-errors"
import express, { Application, json } from 'express'
import "dotenv/config"
import { clientsRouter } from './routes/clients.routes'
import { handleErros } from './middlewares/handleErros'
import { contactsRouter } from './routes/contacts.routes'
import cors from 'cors'

const app: Application = express()
app.use(json())

app.use(cors())

app.use("/", clientsRouter)

app.use("/contacts", contactsRouter)

app.use(handleErros)

export default app



