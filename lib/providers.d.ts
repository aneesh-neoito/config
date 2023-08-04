import { FactoryProvider, Type } from '@nestjs/common';
import { IConfigMap } from './types';
export declare const getConfigYMLProvider: (fileName: string) => FactoryProvider;
export declare const getConfigToken: import("@nestjs-nodo/utils").TokenFactory<Type<any> | IConfigMap<any>>, getConfigProvider: import("@nestjs-nodo/utils").ProviderFactory<Type<any> | IConfigMap<any>, any>, InjectConfig: import("@nestjs-nodo/utils").InjectorFactory<Type<any> | IConfigMap<any>>;
