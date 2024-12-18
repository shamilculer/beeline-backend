"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    try {
        const conn = await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log(`[User-service :: Database] Estable connection with MongoDB @${conn.connection.host}`);
    }
    catch (error) {
        console.error("[User-service :: Database] Error estable connection with MongoDB");
    }
};
exports.default = connectDb;
