"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const userRegisterSchema_1 = __importDefault(require("../constants/userRegisterSchema"));
const http_1 = require("../constants/http");
const age = Number(process.env.TOKEN_EXPIRY || 1000 * 60 * 60 * 24);
const registerUser = async (req, res, next) => {
    try {
        const data = userRegisterSchema_1.default.parse(req.body);
        console.log("req-----", data);
        res.status(http_1.CREATED);
    }
    catch (error) {
        next(error);
    }
};
exports.registerUser = registerUser;
