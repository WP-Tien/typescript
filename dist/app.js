"use strict";
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Vincent');
user1.greet('Hi there - I am');
console.log(user1);
//# sourceMappingURL=app.js.map