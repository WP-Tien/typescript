interface Greetable {
    name: string,

    greet(phrase: string): void;
}

// class Person implements Greetable, AnotherInterface {}
class Person implements Greetable {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }   
}

let user1: Greetable;

user1 = new Person('Vincent');
user1.greet('Hi there - I am');
console.log(user1);