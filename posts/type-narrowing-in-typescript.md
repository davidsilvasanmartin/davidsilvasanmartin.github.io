---
"title": "Type narrowing in Typescript"
"created": "2020-10-01T12:34:56Z"
"published": "2020-10-01T12:34:56Z"
"location": "posts/01.html"
"category": "Programming"
---

Very often we need to be able to differentiate between Typescript interfaces
which have some properties in common. This is known as "type narrowing". We
are going to cover 3 basic ways of performing type narrowing in Typescript.

Let's start with the following example:

```typescript
interface Vehicle {
    weight: number;
    wheels?: number;
    class_?: 'A' | '1' | '2' |'3';
}
```

In our application we have different vehicles. For trucks, for example, we
want to keep track of their weight, and their number of wheels. However, other
vehicles (like a yacht) have no wheels, but have other attributes we want to
know, like for instance their class, which we have written in the examples
as `class_` so that it does not get highlighted as a keyword.
It is a string that can take values 'A', '1', '2', or '3'. 

## Option 1: Create a new `type` property on each of the interfaces and use discriminated unions

This is the recommended approach.

```typescript
interface Truck {
    weight: number;
    wheels: number;
    type: 'truck';
}

interface Yacht {
    weight: number;
    class_: 'A' | '1' | '2' | '3';
    type: 'yacht';
}

export type Vehicle = Truck | Yacht;
```

This is known as [discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
in Typescript.

If we are using classes instead of interfaces for our types, the following
alternative syntax produces the exact same result:

```typescript
class Truck {
  weight: number;
  wheels: number;
  readonly type = 'truck';
}

class Yacht {
  weight: number;
  class_: 'A' | '1' | '2' | '3';
  readonly type = 'yacht';
}

export type Vehicle = Truck | Yacht;
```

 ## Option 2: Use type guards

[Type guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
are functions that help with type narrowing.

```typescript
interface Truck {
  weight: number;
  wheels: number;
}

interface Yacht {
  weight: number;
  class_: 'A' | '1' | '2' | '3';
}

export type Vehicle = Truck | Yacht;

export function isTruck(arg: any): arg is Truck {
  return !!arg.weight && !!arg.wheels;
}

export function isYacht(arg: any): arg is Yacht {
  return !!arg.weight && !!arg.class_;
}
```

However, there is a small problem with this setup: we can still build
`Vehicle` objects which are not `Truck` nor
`Yacht`. The following code is valid and will pass either of the type guards:

```typescript
const wrong: Vehicle = {
    weight: 550,
    wheels: 6,
    class_: '1'
}
```

## Option 3: Use `never`

In order to fix this last problem we can use
[the `never` type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#the-never-type),
introduced in Typescript 2.0. If an interface has a property of type `never`,
then that property can not be defined on any object which follows that interface.

```typescript
interface Truck {
  weight: number;
  wheels: number;
  class_?: never;
}

interface Yacht {
  weight: number;
  wheels?: never;
  class_: 'A' | '1' | '2' | '3';
}

export type Vehicle = Truck | Yacht;
```

Type guards work exactly as they previously did, but now we can't create
`Vehicle` objects which have at the same time both the
`wheels` and `class` properties. The following code:
```typescript
const wrong: Vehicle = {
  weight: 550,
  wheels: 6,
  class_: '1'
}
```
Produces the following error:
```
Type 'string' is not assignable to type '"A" | "1" | "2" | "3" | undefined'.
The expected type comes from property 'class_' which is declared here on type 'Vehicle'.
```

---

**Final tip:** don't forget to check out
[Typescript's own narrowing guide](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
for more advanced forms of type narrowing!
