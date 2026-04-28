"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.golfScoreUpdateSchema = exports.golfScoreSchema = void 0;
const zod_1 = require("zod");
exports.golfScoreSchema = zod_1.z.object({
    score: zod_1.z.number().int().min(1, 'Score must be at least 1').max(45, 'Score must not exceed 45'),
    playedOn: zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date format')
});
exports.golfScoreUpdateSchema = exports.golfScoreSchema.partial();
