const button = document.querySelector('button')!;
const printOutput: (a: number | string) => void = output => console.log(output);

button.addEventListener('click', (e) => {
    console.log(e);
});