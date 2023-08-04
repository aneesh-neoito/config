"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.buildConfigYML = exports.getConfigMetadata = void 0;
const fs = require("fs");
const YAML = require("yaml");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const util_1 = require("util");
const utils_1 = require("@nestjs-nodo/utils");
const constants_1 = require("./constants");
const _ = require("lodash");
const path = require("path");
// const readFile = util.promisify(fs.readFile);
function getConfigMetadata(tClass) {
    const options = utils_1.getMetadata(constants_1.CONFIG_OPTIONS_METADATA, tClass);
    if (!options) {
        throw new Error(`Missing config metadata at "${tClass.name}"`);
    }
    return options;
}
exports.getConfigMetadata = getConfigMetadata;
function buildConfigYML(configFile) {
    var _a;
    const previous = {
        configs: {},
    };
    let fileName = configFile;
    const deps = new Set();
    do {
        if (deps.has(fileName)) {
            throw new Error('Cyclic config file: ' + [...deps, fileName].join(' -> '));
        }
        deps.add(fileName);
        const str = fs.readFileSync(fileName, 'utf8');
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        const template = _.template(str);
        const yml = template(process.env);
        const current = YAML.parse(yml);
        fileName =
            current.extends && path.join(path.dirname(fileName), current.extends);
        Object.keys((_a = current.configs) !== null && _a !== void 0 ? _a : {}).forEach((key) => {
            var _a, _b;
            previous.configs[key] = Object.assign((_a = current.configs[key]) !== null && _a !== void 0 ? _a : {}, (_b = previous.configs[key]) !== null && _b !== void 0 ? _b : {});
        });
    } while (fileName);
    return previous;
}
exports.buildConfigYML = buildConfigYML;
function getConfig(yml, map) {
    const { name, type } = map;
    const config = yml.configs[name];
    if (!config) {
        throw new Error(`Could not find config with name ${name}`);
    }
    const parsed = class_transformer_1.plainToClass(type, config);
    const errors = class_validator_1.validateSync(parsed);
    if (errors === null || errors === void 0 ? void 0 : errors.length) {
        // tslint:disable-next-line:no-console
        console.error(`Configuration validation error. Config "${name}" doesnt pass validation ${type.name}`);
        // tslint:disable-next-line:no-console
        console.error(`Details: ${util_1.inspect(errors, false, null)}`);
        process.exit(400);
    }
    return parsed;
}
exports.getConfig = getConfig;
