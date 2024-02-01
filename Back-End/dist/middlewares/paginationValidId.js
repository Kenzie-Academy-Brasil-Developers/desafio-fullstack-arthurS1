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
exports.paginationValidId = void 0;
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const paginationValidId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let order = 'ASC';
    if (req.query.order) {
        order = `${req.query.order}`;
    }
    const sort = req.query.sort;
    let sort2 = {};
    if (sort == "price") {
        sort2 = { price: order };
    }
    else if (sort == "duration") {
        sort2 = { duration: order };
    }
    const movieRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const movieCount = yield movieRepository.find();
    let page = Number(req.query.page) || 1;
    let perPage = Number(req.query.perPage) || 5;
    if (page <= 0) {
        page = 1;
    }
    if (perPage <= 0 || perPage > 5) {
        perPage = 5;
    }
    let prevPage = `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`;
    let nextPage = `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`;
    if (page <= 1) {
        prevPage = null;
    }
    if (movieCount.length < (page * perPage)) {
        nextPage = null;
    }
    const pagination = {
        page,
        perPage,
        prevPage,
        nextPage,
        sort2,
        order,
        movieCount
    };
    res.locals = Object.assign(Object.assign({}, res.locals), { pagination });
    return next();
});
exports.paginationValidId = paginationValidId;
