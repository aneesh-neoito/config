import { DynamicModule, Type } from '@nestjs/common';
import { IConfigMap } from './types';
export declare class ConfigModule {
    static forRoot(configFile: string): DynamicModule;
    static forFeature(...configs: (IConfigMap | Type<any>)[]): DynamicModule;
}
