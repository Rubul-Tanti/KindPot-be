"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const emailValidation = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
});
exports.default = emailValidation;
