console.log('Hello from script file!');

const myVar = 'Hello';

let myLet = "Let";
myLet = "hello";

const myNiceVariable = 10;

const x = 10;
const y = 10.56565;
console.log(typeof x, typeof y);
const bool = true;
console.log(typeof bool);
const str = "hello";
const str2 = "'hello'";
console.log(str2);

const person = {
    firstName: "Jes",
    lastName: "juu"
}

let meIn;
console.log(typeof meIn);

let n = null;
console.log(n);

const firstName = "Clint";
const lastName = "Eastwood";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.replace('Clint', 'John'));

const myName = "Peter";
const age = 24;
const message = `Hello ${myName}, are you ${age}?`;
console.log(message)

//splice
//slice
//substr
//toLowerCase
//toUpperCase
//replace

let meDoItForYou = 10;
let meIn2 = 15;

console.log(meDoItForYou - meIn2);

console.log(meDoItForYou *= meIn2);

for(let i = 0; i<2000; i++)
{

   rndmNum = Math.floor(Math.random() * 100);
   if(rndmNum == 5)
   {
    console.log(rndmNum);
   }

}

let count = 0;
while(count<10)
{
    console.log(count);
    count++;
}

let age5 = 18;
let message5 = age5 >= 18 ? "jees" : "jees2";
console.log(message5);

switch(age5)
{
    case(15):
    console.log("1");
    case(16):
    console.log("2");
    case(17):
    console.log("3");
    case(18):
    console.log("4");
}

function sayHello()
{
    console.log("Ciao bello" + fullName)
}

sayHello();

function square(x)
{
    return x*x;
}

console.log(square(155));

const add = function(a,b)
{
    return a+ b;
}
function call(f,a,b)
{
    return f(a,b);
}
console.log(add(5,4))
console.log(call(add, 6,11))

//arrow function
const sum = (a,b) => a**b;

console.log(sum(10,100));
