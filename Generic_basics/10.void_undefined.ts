function add( n1: number, n2: number ) {
    return n1+ n2;
}

function printResult( num: number ) :void {
    console.log( num );
}

function printResult2( num: number ) :undefined {
    return;
}

printResult(add(5, 12));
printResult2(add(5, 12));