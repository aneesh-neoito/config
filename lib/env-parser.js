"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvParser = void 0;
const env_invalid_error_1 = require("./env-invalid-error");
class EnvParser {
    constructor(env, optional = false) {
        this.env = env;
        this.optional = optional;
    }
    getAsString(key) {
        if (typeof this.env[key] === 'undefined') {
            if (!this.optional) {
                throw new env_invalid_error_1.EnvInvalidError({
                    key,
                    expected: 'string',
                    received: this.env[key],
                });
            }
        }
        return this.env[key];
    }
    getAsInt(key) {
        const val = parseInt(this.getAsString(key), 10);
        if (isNaN(val)) {
            if (!this.optional) {
                throw new env_invalid_error_1.EnvInvalidError({
                    key,
                    expected: 'int',
                    received: this.env[key],
                });
            }
        }
        return val;
    }
    getAsFloat(key) {
        const val = parseFloat(this.getAsString(key));
        if (isNaN(val)) {
            throw new env_invalid_error_1.EnvInvalidError({
                key,
                expected: 'float',
                received: this.env[key],
            });
        }
        return val;
    }
    getAsBoolean(key) {
        const stringVal = this.getAsString(key);
        if (stringVal === '1' || stringVal === 'true') {
            return true;
        }
        if (stringVal === '0' || stringVal === 'false') {
            return false;
        }
        if (!this.optional) {
            throw new env_invalid_error_1.EnvInvalidError({
                key,
                expected: 'boolean',
                received: this.env[key],
            });
        }
        return false;
    }
}
exports.EnvParser = EnvParser;
