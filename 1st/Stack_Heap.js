let userOne ={
    name: 'X',
    score: 4,
}

let userTwo = userOne;
userTwo.name = 'abcd';


console.log(userOne.name)
console.log(userTwo.name);// both userOne and userTwo will have the same name 'abcd' as they are pointing to the same memory location

console.log(userOne, userTwo);  // both userOne and userTwo will have the same name 'abcd' as they are pointing to the same memory location