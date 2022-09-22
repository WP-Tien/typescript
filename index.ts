// ! GENERICS

// khai báo trước dạng của biến
type strArray = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length -1]

const l1 = last([1,2,3])
// console.log(l1)

// const l2 = last(['a', 'b'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l3 = lastT([1,2,3])
const l4 = lastT(['a', 'b'])
const l5 = lastT<string>(['d', 'e'])

const makeArr = (x: number) => [x]

const m = makeArr(5)
// console.log(m)
// const m2 = makeArr('a') // sai

const makeArrT = <T>(x: T) => [x]
const m3 = makeArrT('b') 

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]
const m4 = makeArrXY(5, 6)
const m5 = makeArrXY('a', 'b')
const m6 = makeArrXY('a', 3)

// console.log(m6) 
const makeTuple = <X, Y>(x: X, y: Y): [X, Y]  => [x, y]
const m7 = makeTuple('x', 5)
const m8 = makeTuple('y', 'b')
const m9 = makeTuple<string, number>('g', 123)
const m10 = makeTuple<string | null, number>( null, 3 )

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]
const m11 = makeTupleWithDefault<string | null>('a', 4)


// GENERICS EXTENDS
const makeFullName = obj => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const makeFullNameConstraint = (obj: {
    firstName: string
    lastName: string 
}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({ firstName: 'henry', lastName: 'webdev' })
// const n2 = makeFullNameConstraint({  firstName: 'henry', lastName: 'web dev', age: 30 })

const makeFullNameConstraintWithGenerics = <T extends {firstName: string, lastName: string}>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameConstraintWithGenerics({ firstName: 'henry', lastName: "Web dev", age: 30, gender: 'male' })

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee, 
        uid
    }
}
const empOne = addNewEmployee({ name: 'henry', age: 30 })
// console.log(empOne)
// console.log(empOne.name)

const addNewEmployeeT = <T extends object >( employee: T ) => {
    const uid = Math.floor(Math.random() * 100 )
    return {
        ...employee,
        uid
    }
}

const empTwo = addNewEmployeeT({ name: 'henry', age: 30 })
// console.log(empTwo)
// console.log(empTwo.name)

const addNewEmployeeTWithConstraint = <T extends {name: string}>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const empThree = addNewEmployeeTWithConstraint({name: 'Tien', age: 27})
// console.log( empThree );

// ! GENERICS IN INTERFACE
interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

type NumberResource = Resource<number[]> 

const NumberResourceabcd: NumberResource = {
    uid: 2,
    name: 'Numbers',
    data: [1,2,3]
} 

console.log( NumberResourceabcd );

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'hello'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'Developer',
    data: { name: 'Avenger' }
} 

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'Developer',
    data: [ 'CSS', 'HTML' ]
}
