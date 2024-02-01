"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErros = void 0;
const errors_1 = require("../errors/errors");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
const handleErros = (error, req, res, next) => {
    if (error instanceof errors_1.AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
    }
    // ****************************
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        return res.status(401).json({ message: error.message });
    }
    console.log(error);
    return res.status(500).json('Internal server error.');
};
exports.handleErros = handleErros;
