function add( n1: number, n2: number ) {
    return n1 + n2;
}

function print( number: number ): void {
    console.log( 'Result: ' + number );
}

// let combineValues: Function;
let combineValues: ( a: number, b: number ) => number // functions type

combineValues = add;
// combineValues = print; //  Type 'void' is not assignable to type 'number'.
// combineValues = 5; // Type 'number' is not assignable to type 'Function'.

console.log( combineValues( 2, 4) );