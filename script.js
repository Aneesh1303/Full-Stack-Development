//JSON
//Literal Notation to create an object

const temp = {
    age: 19,
    brand: "BMW",
    getBrand: () => {console.log(temp.brand)}
}

console.log(temp.age)
console.log(temp.brand)
temp.getBrand()

const temp1 = {
    age: 19,
    brand: "BMW",
    getBrand: () => {console.log(this.brand)}   //this is not defined in arrow function. So, it will point to window.
}

temp.getBrand() //it will show window object

const temp2 = {
    age: 19,
    brand: "BMW",
    getBrand: function() {console.log(this.brand)}  //while this is defined in default function while will point to the parent class which is temp2 in this case.
}

temp.getBrand() //it will show temp2 object.

//Array

let arr = [1, 2, 3, "string", 'b']  //array is also an object.

//How to iterate through the array
for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

//Array methods
//1. For each

const callBack = function() {
    console.log('You called me')
}

arr.forEach(callBack)   //It will iterate through the array and for every element print the message.
//OR

arr.forEach(() => {
    console.log("You called me")    //Same as above
})

arr.forEach((e, i) => console.log(e, i)) //It will print element and iteration.

// arr.push(element) It will push element at the end of the array.
// arr.unshift(element) It will push element at the begining of the array.
// arr.pop() remove the element from the end of the array.
// arr.slice(start, end) // To slice the array in the range [start, end - 1].

//map

const Call = (ele, i) => {
    return ele*2
}

let newArray = arr.map(Call)
console.log(newArray)
console.log(arr)

