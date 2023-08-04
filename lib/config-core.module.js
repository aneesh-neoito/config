"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConfigCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCoreModule = void 0;
const common_1 = require("@nestjs/common");
const providers_1 = require("./providers");
let ConfigCoreModule = ConfigCoreModule_1 = class ConfigCoreModule {
    static forRoot(configFile) {
        const providers = [providers_1.getConfigYMLProvider(configFile)];
        return {
            module: ConfigCoreModule_1,
            providers: [...providers],
            exports: [...providers],
        };
    }
};
ConfigCoreModule = ConfigCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], ConfigCoreModule);
exports.ConfigCoreModule = ConfigCoreModule;
