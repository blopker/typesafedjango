// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { DemoApiFoodleftData, DemoApiFoodleftError, DemoApiFoodleftResponse, DemoApiFoodError, DemoApiFoodResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Foodleft
 */
export const demoApiFoodleft = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DemoApiFoodleftData, ThrowOnError>) => {
    return (options?.client ?? client).get<DemoApiFoodleftResponse, DemoApiFoodleftError, ThrowOnError>({
        ...options,
        url: '/api/foodleft'
    });
};

/**
 * Food
 */
export const demoApiFood = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<DemoApiFoodResponse, DemoApiFoodError, ThrowOnError>({
        ...options,
        url: '/api/food'
    });
};