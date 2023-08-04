"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const env_parser_1 = require("./env-parser");
const cls_hooked_1 = require("cls-hooked");
const utils_1 = require("./utils");
cls_hooked_1.createNamespace(constants_1.DEFAULT_CONFIG_CONTEXT);
let ConfigService = class ConfigService {
    constructor(yml) {
        this.yml = yml;
        this.context = cls_hooked_1.getNamespace(constants_1.DEFAULT_CONFIG_CONTEXT);
        this.parser = new env_parser_1.EnvParser(process.env);
    }
    getContext() {
        return this.context;
    }
    get(configMap) {
        return utils_1.getConfig(this.yml, configMap);
    }
    getAsString(name) {
        return this.parser.getAsString(name);
    }
    getAsInt(name) {
        return this.parser.getAsInt(name);
    }
    getAsFloat(name) {
        return this.parser.getAsFloat(name);
    }
    getAsBoolean(name) {
        return this.parser.getAsBoolean(name);
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.CONFIG_YML_TOKEN)),
    __metadata("design:paramtypes", [Object])
], ConfigService);
exports.ConfigService = ConfigService;
