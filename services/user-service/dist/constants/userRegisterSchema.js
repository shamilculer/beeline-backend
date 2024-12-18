"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userregisterSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(3, 'Full name must be at least 3 characters')
        .max(25, 'Full name must be less than 35 characters'),
    email: zod_1.z
        .string()
        .email('Invalid email address'),
    password: zod_1.z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters')
        .regex(/\d/, 'Password must contain at least one number'),
    userAgent: zod_1.z
        .string()
        .optional()
});
exports.default = userregisterSchema;
