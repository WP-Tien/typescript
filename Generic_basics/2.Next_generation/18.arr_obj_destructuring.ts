const hobbies = ['Sports', 'Cooking'];
const person = {
    firstName: 'Max',
    age: 30
};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName2, age } = person;
console.log(userName2, age, person);