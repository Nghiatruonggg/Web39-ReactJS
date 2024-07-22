// 1.1. Let and Const
let age = 25;
age = 30;
// console.log(age);

const email = "123@gmail.com";
// email = "abc@gmail.com";
// console.log(email); // Error

// 1.2. Arrow Function ("this")

const person = {
    first: "Web",
    last: "39",
    fullName: function () {
        return this.first + this.last;
    }
};

console.log(person.fullName());

const person_1 = {
    first: "Web",
    last: "39",
    fullName: () => {
        return this.first + this.last;
    }
};

// console.log(person_1.fullName());


// 1.4 Destructuring Array
const array = [1,2,3,4,5];
const [b, d] = array;

console.log(b);
console.log(d);

const user = {
    name_user: "Nguyen Van A",
    age_user: 20,
    email_user: "nguyenvana@gmail.com"
};

const { name_user, age_user, email_user} = user;

console.log(user.age_user);
console.log(age_user);

// 1.5 Default Parameters

const hello = (name = "web39") => {
    console.log(name);
    console.log("Hello 500 ae lop " + name);
}

hello();

// 1.6 Rest Parameters

const printArray = (...numbers) => {
    // return a + b;
    let total = 0;

    numbers.forEach((value) => {
        return total += value;
    })

    return total;
}

console.log(printArray(1, 2, 3, 4, 5, 100));

// 1.7 Spread Operator
const array_2 = [1,2,3,4,5];
const array_3 = [...array_2,6,7];
console.log(array_3);

// -> rest parameters
const [x, y, ...numberArray] = array_2;
console.log(x);
console.log(numberArray);

// 1.8 Modules
import { add } from "./math.js";

console.log(add(1,2));
