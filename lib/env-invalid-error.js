"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvInvalidError = void 0;
class EnvInvalidError extends Error {
    constructor(params) {
        const message = `expected env variable "${params.key}" to be a ${params.expected}. Got "${params.received}"`;
        super(message);
    }
}
exports.EnvInvalidError = EnvInvalidError;
