import { IConfigMap, IConfigOptions, IConfigYML } from './types';
import { Type } from '@nestjs/common';
export declare function getConfigMetadata(tClass: Type<any>): IConfigOptions;
export declare function buildConfigYML(configFile: string): IConfigYML;
export declare function getConfig<T extends object>(yml: IConfigYML, map: IConfigMap<T>): T;
