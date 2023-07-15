function add(n1: number, n2: number, showResult: Boolean){
    // if ( typeof n1 !== 'number' || typeof n2 !== 'number' ) {
    //     throw new Error('Incorrect input');
    // }
    if ( showResult ) {
        return n1 + n2;
    }

    return 'null';
}

let number1: number;
number1 = 5;
// If the number1 = '5' => result will be 52.8
const number2 = 2.8;

const printResult = true;

const result = add(number1, number2, printResult);
console.log(result); // 7.8