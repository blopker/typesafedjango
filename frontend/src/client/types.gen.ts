// This file is auto-generated by @hey-api/openapi-ts

export type FoodLeftSchema = {
    food: string;
    foodleft: number;
};

export type FoodSchema = {
    food: Array<(string)>;
};

export type DemoApiFoodleftData = {
    query: {
        food: string;
    };
};

export type DemoApiFoodleftResponse = (FoodLeftSchema);

export type DemoApiFoodleftError = unknown;

export type DemoApiFoodResponse = (FoodSchema);

export type DemoApiFoodError = unknown;