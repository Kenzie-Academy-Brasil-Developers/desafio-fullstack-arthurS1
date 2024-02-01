"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContacttValidId = exports.verifyUniqueContactEmail = exports.verifyClientInContactExist = void 0;
require("dotenv/config");
const errors_1 = require("../errors/errors");
const repositories_1 = require("../repositories");
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
const verifyClientInContactExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { sub } = res.locals.decoded;
    sub = Number(sub);
    const { hour, date } = req.body;
    const schedules = yield repositories_1.contactsRepository.findOne({
        where: {
            client: {
                id: sub
            },
            // date,
            // hour
        }
    });
    if (schedules) {
        throw new errors_1.AppError('n deixa', 409);
    }
    return next();
});
exports.verifyClientInContactExist = verifyClientInContactExist;
const verifyUniqueContactEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield repositories_1.contactsRepository.findOneBy({ email });
    if (user) {
        throw new errors_1.AppError('Email already exists', 409);
    }
    return next();
});
exports.verifyUniqueContactEmail = verifyUniqueContactEmail;
// import { NextFunction, Request, Response } from "express"
// import { AppError } from "../errors/errors"
// import { AppDataSource } from "../data-source"
// import { Movie } from "../entities"
// import { Repository } from "typeorm"
const isContacttValidId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movie = yield repositories_1.contactsRepository.findOne({
        where: {
            id: Number(id),
        },
    });
    if (!movie) {
        throw new errors_1.AppError("Contacts ID not found", 404);
    }
    return next();
});
exports.isContacttValidId = isContacttValidId;
