/**
 * Important: Often, you'll see enums with all-uppercase values but that's not a "must-do". You can go with ANY value names.
 */

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };

const person = {
    name: 'Vincent',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if (person.role !== Role.AUTHOR) {
    console.log('is admin');
}

enum Month {
    JAN,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC
}

console.log(Month);