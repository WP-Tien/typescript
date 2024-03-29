function combine(input1: number | string, input2: number | string) { // <== Union types |
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedAges2 = combine(30, '2muoi6');
console.log(combinedAges2);