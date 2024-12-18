"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../constants/env");
const connectDb = async () => {
    try {
        const conn = await mongoose_1.default.connect(env_1.MONGO_URI);
        console.log(`[User-service :: Database] Established connection with MongoDB @${conn.connection.host}`);
    }
    catch (error) {
        console.error("[User-service :: Database] Error establishing connection with MongoDB");
        process.exit(1);
    }
};
exports.default = connectDb;
