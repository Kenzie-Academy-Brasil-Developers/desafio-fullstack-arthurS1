import { NextFunction, Request, Response } from "express"
import "dotenv/config"
import { AppError } from "../errors/errors";
import {  clientsRepository } from "../repositories";


export const verifyUniqueClientEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body
    const user = await clientsRepository.findOneBy({ email })

    if (user) {
        throw new AppError('Email already exists', 409)
    }

    return next()
}

export const verifyClientExists = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const user = await clientsRepository.findOneBy({ id: Number(id) })

    if (!user) {
        throw new AppError('Client not found', 404)
    }

    res.locals = { ...res.locals, user }

    return next()
}

// ;;;;;;;;;;
// export const isClienttValidId = async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params

//     const movie = await clientsRepository.findOne({
//         where: {
//             id: Number(id),
//         },
//     })


//     if (!movie) {
//         throw new AppError("Client ID not found", 404);
//     }
//     return next()
// }