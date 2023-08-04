import { IConfigMap, IConfigYML } from './types';
export declare class ConfigService {
    private readonly yml;
    private readonly context;
    private readonly parser;
    constructor(yml: IConfigYML);
    getContext(): import("cls-hooked").Namespace | undefined;
    get<T extends object>(configMap: IConfigMap<T>): T;
    getAsString(name: string): string;
    getAsInt(name: string): number;
    getAsFloat(name: string): number;
    getAsBoolean(name: string): boolean;
}
