# Typescript basics and Basic types

Core Types

| Types             | Values            | Description                                                          |
| ----------------- | ----------------- | -------------------------------------------------------------------- |
| number            | 1, 5.3, -10       | All numbers, no differentiation between integers or floats |
| string            | 'Hi', "Hi", `Hi`  | All text values |
| boolean           | true, false       | Just these two, no "truthy" or "falsy" values |
| object            | {age:30}          | Any JavaScript object, more specific types (type of object) are possible |



## Important: Type Casing
- In TypeScript, you work with types like string or number all the times.
- Important: It is string and number (etc.), NOT String, Number etc.
- The core primitive types in TypeScript are all lowercase!

## Nested Objects & Types
Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:
```typescript
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
    }
}
```
This would be the type of such an object:
```typescript
{
    id: string;
    price: number;
    tags: string[];
    details: {
    title: string;
    description: string;
    }
}
```
So you have an object type in an object type so to say.