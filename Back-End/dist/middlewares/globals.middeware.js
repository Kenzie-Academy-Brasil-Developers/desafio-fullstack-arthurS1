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
exports.verifyPermissions = exports.verifyAdmin = exports.validateToken = exports.validateBody = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const errors_1 = require("../errors/errors");
const validateBody = (schema) => (req, res, next) => {
    const validated = schema.parse(req.body);
    req.body = validated;
    return next();
};
exports.validateBody = validateBody;
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (authorization == undefined) {
        throw new errors_1.AppError("Missing bearer token", 401);
    }
    const token = authorization.split(" ")[1];
    const decoded = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
    res.locals = Object.assign(Object.assign({}, res.locals), { decoded });
    return next();
});
exports.validateToken = validateToken;
const verifyAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin } = res.locals.decoded;
    if (!admin) {
        throw new errors_1.AppError("Insufficient permission", 403);
    }
    return next();
});
exports.verifyAdmin = verifyAdmin;
const verifyPermissions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { sub, admin } = res.locals.decoded;
    if (admin) {
        return next();
    }
    if (id !== sub) {
        throw new errors_1.AppError("Insufficient permission", 403);
    }
    return next();
});
exports.verifyPermissions = verifyPermissions;
