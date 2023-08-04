import { Type } from '@nestjs/common';
export interface IConfigOptions {
    name: string;
}
export interface IEnvInvalidError {
    key: string;
    received: any;
    expected: string;
}
export interface IEnvConfig {
    optional?: boolean;
}
export interface IConfigMap<T = any> {
    name: string;
    type: Type<T>;
}
export declare type TConfigMap<T = any> = IConfigMap<T> | Type<T>;
export interface IConfigYML {
    extends?: string;
    configs: {
        [key: string]: object;
    };
}
export interface IConfigCoreOptions {
    env?: {
        ymlEnvKey: string;
    };
}
