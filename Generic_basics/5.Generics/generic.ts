// Generic type: Xác định loại trong loại
// Main type is Arr store string and number
const names: Array<string | number> = [];
const names2: Array<any> = []; // any[]

// Main type is Promise
// Type to returns 
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})