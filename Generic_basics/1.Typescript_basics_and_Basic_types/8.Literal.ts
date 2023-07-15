function combine (
    input1: number | string,
    input2: number | string, 
    resultConversion: 'as-number' | 'as-text' // <== Literal and Union
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

const combined = combine( 2, 5, 'as-number' );
console.log(combined);