"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectConfig = exports.getConfigProvider = exports.getConfigToken = exports.getConfigYMLProvider = void 0;
const utils_1 = require("@nestjs-nodo/utils");
const config_service_1 = require("./config.service");
const constants_1 = require("./constants");
const utils_2 = require("./utils");
const getConfigYMLProvider = (fileName) => {
    return {
        provide: constants_1.CONFIG_YML_TOKEN,
        useFactory: async () => {
            return await utils_2.buildConfigYML(fileName);
        },
    };
};
exports.getConfigYMLProvider = getConfigYMLProvider;
_a = utils_1.ProviderUtils.createDynamicProvider({
    namespace: 'CONFIG',
    mapper: (param) => {
        if (typeof param === 'function') {
            const { name } = utils_2.getConfigMetadata(param);
            return name;
        }
        return param.name;
    },
    provider: (param) => {
        return {
            inject: [config_service_1.ConfigService],
            useFactory: (configService) => {
                if (typeof param === 'function') {
                    const { name } = utils_2.getConfigMetadata(param);
                    return configService.get({
                        type: param,
                        name,
                    });
                }
                return configService.get(param);
            },
        };
    },
}), exports.getConfigToken = _a.getToken, exports.getConfigProvider = _a.getProvider, exports.InjectConfig = _a.getInjector;
