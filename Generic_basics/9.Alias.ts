// Create An aliases 
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine (
    input1: Combinable,
    input2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    let result;

    if ( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ) {
        result = +input1 + +input2; 
        // https://stackoverflow.com/questions/6682997/what-is-the-purpose-of-a-plus-symbol-before-a-variable
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combined = combine( 2, 4, 'as-number' );
console.log(combined);

// More Alias 
type User = { name : string, age: number }
type User2 = { name: string, age: number }
const u1: User = { name: 'Max', age: 30 } 

function greet( user: User ){
    console.log( 'Hi, I\m Alias' + user.name );
}

function isOlder( user: User, checkAge: number ) {
    return checkAge > user.age;
}

console.log( u1 );