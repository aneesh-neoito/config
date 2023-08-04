export declare class EnvParser {
    protected env: any;
    protected optional: boolean;
    constructor(env: any, optional?: boolean);
    getAsString(key: string): string;
    getAsInt(key: string): number;
    getAsFloat(key: string): number;
    getAsBoolean(key: string): boolean;
}
