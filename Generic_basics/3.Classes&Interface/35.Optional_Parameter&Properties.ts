// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number,
        b: number): number; // return type number, anonymous function, watch function greet
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string; // Optional
    outputName?: string; // Optional properties
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {  // Optional
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user: Greetable;

user = new Person(); // Dont need n