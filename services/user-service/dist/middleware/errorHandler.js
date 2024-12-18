"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../constants/http");
const zod_1 = __importDefault(require("zod"));
const handleZodError = (res, error) => {
    return res.status(http_1.BAD_REQUEST).json({
        message: error.message,
    });
};
const errorHandler = (error, req, res, next) => {
    if (error instanceof zod_1.default.ZodError) {
        handleZodError(res, error);
        next();
    }
    res.status(500).json({ message: "Internal server error" });
    next();
};
exports.default = errorHandler;
