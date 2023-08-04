"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = exports.Config = void 0;
require("reflect-metadata");
const env_parser_1 = require("./env-parser");
const utils_1 = require("@nestjs-nodo/utils");
const constants_1 = require("./constants");
function Config(options) {
    return utils_1.setMetadata(constants_1.CONFIG_OPTIONS_METADATA, options);
}
exports.Config = Config;
function Env(envKeyOrConfig, config) {
    var _a;
    let envKey;
    if (typeof envKeyOrConfig === 'string') {
        envKey = envKeyOrConfig;
    }
    else if (envKeyOrConfig) {
        config = envKeyOrConfig;
    }
    const parser = new env_parser_1.EnvParser(process.env, (_a = config === null || config === void 0 ? void 0 : config.optional) !== null && _a !== void 0 ? _a : false);
    return (target, propertyKey) => {
        if (typeof propertyKey === 'symbol') {
            throw new Error(`Env decorator cannot be used with symbol properties at ${typeof target === 'function' ? target.name : target.constructor.name}`);
        }
        envKey = envKey || propertyKey;
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        switch (type) {
            case String:
                target[propertyKey] = parser.getAsString(envKey);
                break;
            case Number:
                target[propertyKey] = parser.getAsFloat(envKey);
                break;
            case Boolean:
                target[propertyKey] = parser.getAsBoolean(envKey);
                break;
            default:
                throw new Error('Invalid type for config: ' + type.name);
        }
    };
}
exports.Env = Env;
