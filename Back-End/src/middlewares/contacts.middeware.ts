import { NextFunction, Request, Response } from "express"
import "dotenv/config"
import { AppError } from "../errors/errors";
import { clientsRepository, contactsRepository } from "../repositories";
import { Contact } from "../entities";
// import {  realEstateRepository, schedulesRepository } from "../repositories";
// import { Schedule } from "../entities";


// export const verifyRealEstateExist = async (req: Request, res: Response, next: NextFunction) => {
//     const { realEstateId } = req.body
//     const realEstate = await realEstateRepository.findOne({
//         where: {
//             id: Number(realEstateId)
//         }
//     })
//     if (!realEstate) {
//         throw new AppError('RealEstate not found', 404)
//     }

//     return next()
// }

// export const verifyRealEstateSchedulesExist = async (req: Request, res: Response, next: NextFunction) => {
//     const { realEstateId, hour, date } = req.body

//     const schedules = await schedulesRepository.findOne({
//         where: {
//             realEstate: {
//                 id: Number(realEstateId)
//             },
//             hour,
//             date
//         }
//     })

//     if (schedules) {
//         throw new AppError('Schedule to this real estate at this date and time already exists', 409)
//     }

//     return next()
// }

export const verifyClientInContactExist = async (req: Request, res: Response, next: NextFunction) => {
    let { sub } = res.locals.decoded
    sub = Number(sub)
    const { hour, date } = req.body

    const schedules: Contact | null = await contactsRepository.findOne({
        where: {
            client: {
                id: sub
            },
            // date,
            // hour
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

// import { NextFunction, Request, Response } from "express"
// import { AppError } from "../errors/errors"
// import { AppDataSource } from "../data-source"
// import { Movie } from "../entities"
// import { Repository } from "typeorm"

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