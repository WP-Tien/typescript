# Typescript basics and Basic types

Core Types

| Types             | Values            | Description                                                          |
| ----------------- | ----------------- | -------------------------------------------------------------------- |
| number            | 1, 5.3, -10       | All numbers, no differentiation between integers or floats |
| string            | 'Hi', "Hi", `Hi`  | All text values |
| boolean           | true, false       | Just these two, no "truthy" or "falsy" values |
| object            | {age:30}          | Any JavaScript object, more specific types (type of object) are possible |
| Array             | [1, 2, 3]         | Any JavasScript array, type can be flexible or strict (regarding the element types) |
| Tuple             | [1, 2]            | Added by TypeScript: Fixed-length array |
| Enum              | enum { NEW, OLD } | Added by TypeScript: Automatically enumerated global constant identifiers |
| Any               | *                 | Any kind of value, no specific type assignment |


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


## Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:
```typescript
    type User = { name: string; age: number };
    const u1: User = { name: 'Max', age: 30 }; // this works!
```
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:
```typescript
    function greet(user: { name: string; age: number }) {
      console.log('Hi, I am ' + user.name);
    }
     
    function isOlder(user: { name: string; age: number }, checkAge: number) {
      return checkAge > user.age;
    }
```
To:
```typescript
    type User = { name: string; age: number };
     
    function greet(user: User) {
      console.log('Hi, I am ' + user.name);
    }
     
    function isOlder(user: User, checkAge: number) {
      return checkAge > user.age;
    }
```


## Typescript có 3 loại types chính đó là ( Xem cách sử dụng Type and Interface )
- Any type
- Built in type
- User defined type

Interface và Type thuộc loại thứ 3 - User defined type.

1. Declaration
Type 
```typescript
type Shape = {
  name: string;
  color: string;
};
```
Interface
```typescript
interface Shape {
   name: string;
  color: string;
}
```

2. Interface có thể merge còn Type thì không
Trong cùng 1 file chúng ta khai báo như sau
```typescript
interface Shape {
   name: string;
}

interface Shape {
  color:string;
}

const Circle:Shape = {
  name:'circle',
  color:'blue'
}
```

Mọi thì đều ổn,còn với Type thì sao
```typescript
type Shape {
   name: string;
}

type Shape {
  color:string;
}

const Circle:Shape = {
  name:'circle',
  color:'blue'
}
```
Ở đây chúng ta sẽ nhận được lỗi : "Duplicate identifier 'Shape."

[Readmore...](https://viblo.asia/p/type-vs-interface-trong-typescript-gGJ599Gp5X2)