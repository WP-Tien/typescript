const button = document.querySelector('button')!;
const printOutput: (a: number | string) => void = output => console.log(output);

button.addEventListener('click', (e) => {
    console.log(e);
});

// const add = (a: number, b: number = 1) => { // <== Default function Parameters
//     return a + b;
// }
// console.log(add(2,5));