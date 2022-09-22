// ! GENERICS
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1)
// const l2 = last(['a', 'b'])
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(['a', 'b']);
var l5 = lastT(['d', 'e']);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m)
// const m2 = makeArr('a') // sai
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT('b');
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY('a', 'b');
var m6 = makeArrXY('a', 3);
// console.log(m6) 
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple('x', 5);
var m8 = makeTuple('y', 'b');
var m9 = makeTuple('g', 123);
var m10 = makeTuple(null, 3);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault('a', 4);
// GENERICS EXTENDS
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: 'henry', lastName: 'webdev' });
// const n2 = makeFullNameConstraint({  firstName: 'henry', lastName: 'web dev', age: 30 })
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n3 = makeFullNameConstraintWithGenerics({ firstName: 'henry', lastName: "Web dev", age: 30, gender: 'male' });
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: 'henry', age: 30 });
// console.log(empOne)
// console.log(empOne.name)
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: 'henry', age: 30 });
// console.log(empTwo)
// console.log(empTwo.name)
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: 'Tien', age: 27 });
var NumberResourceabcd = {
    uid: 2,
    name: 'Numbers',
    data: [1, 2, 3]
};
console.log(NumberResourceabcd);
var resourceOne = {
    uid: 1,
    name: 'Person',
    data: 'hello'
};
var resourceTwo = {
    uid: 1,
    name: 'Developer',
    data: { name: 'Avenger' }
};
var resourceThree = {
    uid: 1,
    name: 'Developer',
    data: ['CSS', 'HTML']
};
