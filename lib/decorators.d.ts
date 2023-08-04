import 'reflect-metadata';
import { IConfigOptions, IEnvConfig } from './types';
export declare function Config(options: IConfigOptions): ClassDecorator;
export declare function Env(config?: IEnvConfig): PropertyDecorator;
export declare function Env(envKey?: string, config?: IEnvConfig): PropertyDecorator;
