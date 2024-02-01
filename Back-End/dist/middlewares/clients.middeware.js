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
exports.verifyClientExists = exports.verifyUniqueClientEmail = void 0;
require("dotenv/config");
const errors_1 = require("../errors/errors");
const repositories_1 = require("../repositories");
const verifyUniqueClientEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield repositories_1.clientsRepository.findOneBy({ email });
    if (user) {
        throw new errors_1.AppError('Email already exists', 409);
    }
    return next();
});
exports.verifyUniqueClientEmail = verifyUniqueClientEmail;
const verifyClientExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield repositories_1.clientsRepository.findOneBy({ id: Number(id) });
    if (!user) {
        throw new errors_1.AppError('Client not found', 404);
    }
    res.locals = Object.assign(Object.assign({}, res.locals), { user });
    return next();
});
exports.verifyClientExists = verifyClientExists;
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
