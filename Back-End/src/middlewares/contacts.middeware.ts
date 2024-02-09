import { NextFunction, Request, Response } from "express"
import "dotenv/config"
import { AppError } from "../errors/errors";
import {  contactsRepository } from "../repositories";
import { Contact } from "../entities";

export const verifyClientInContactExist = async (req: Request, res: Response, next: NextFunction) => {
    let { sub } = res.locals.decoded
    sub = Number(sub)
    const { hour, date } = req.body

    const schedules: Contact | null = await contactsRepository.findOne({
        where: {
            client: {
                id: sub
            },
            
        }
    })

    if (schedules) {
        throw new AppError('n deixa', 409)
    }

    return next()
}

export const verifyUniqueContactEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body
    const user = await contactsRepository.findOneBy({ email })

    if (user) {
        throw new AppError('Email already exists', 409)
    }

    return next()
}



export const isContacttValidId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const movie = await contactsRepository.findOne({
        where: {
            id: Number(id),
        },
    })

    if (!movie) {
        throw new AppError("Contacts ID not found", 404);
    }
    return next()
}