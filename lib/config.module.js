"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_core_module_1 = require("./config-core.module");
const config_service_1 = require("./config.service");
const providers_1 = require("./providers");
const utils_1 = require("./utils");
let ConfigModule = ConfigModule_1 = class ConfigModule {
    static forRoot(configFile) {
        return {
            module: ConfigModule_1,
            imports: [config_core_module_1.ConfigCoreModule.forRoot(configFile)],
        };
    }
    static forFeature(...configs) {
        const providers = configs.map((config) => {
            if (typeof config === 'function') {
                const options = utils_1.getConfigMetadata(config);
                return providers_1.getConfigProvider({
                    type: config,
                    name: options.name,
                });
            }
            return providers_1.getConfigProvider(config);
        });
        return {
            module: ConfigModule_1,
            providers: [config_service_1.ConfigService, ...providers],
            exports: [config_service_1.ConfigService, ...providers],
        };
    }
};
ConfigModule = ConfigModule_1 = __decorate([
    common_1.Module({
        providers: [config_service_1.ConfigService],
        exports: [config_service_1.ConfigService],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;
