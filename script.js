//1. number
let age = 19 // Declaring and initializing of a variable in javascript
console.log(age) //to print
//float double negative short long are same

//2. string 
//can be within single quotes or double qoutes
let Name1 = "Aneesh"
let Name2 = "Aneesh"
//chars and string are same even special characters

console.log(Name1)
console.log(Name2)

//3. Boolean
let isTrue = true

console.log(isTrue)

//4. Type
console.log(typeof 19)          //number
console.log(typeof 19.333)      //number
console.log(typeof -123)        //number
console.log(typeof 's')         //string
console.log(typeof "string")    //string
console.log(typeof true)        //boolean
console.log(typeof null)        //object
console.log(typeof undefined)   //undefined

//5. Assignment Operators
let age1 = 19
age1 = 20
console.log(age1)

const age2 = 20  //if we don't wanna change the value of var we declare the var with const data type.
age2 = 21        
console.log(age2)   //It will throw an error on the console.

age1 += 8;
age1 -= 8;
age1 *= 8;
age++ //post-increment
++age1  //pre-increment

//6. Comparison operators
//>
//<
//>=
//<=
//==

let a = 10
let b = '10'

console.log(a == b)     //It will return true   here we are just compairing the values.
console.log(a === b)    //It will return false  bcz it will check their data type as well.

//7. Arithmetic operators
//+
//-
//*
//**
//%
//'/'

//8. Logocal operators
//&&
//||

//Function

function greet(Name) {  //Function Definition
    console.log(Name)   //It will print undefined not an error bcz Name is already defined in the function block but has not initilized any value.
}

greet() //Function call

function greet2(Name = "Default") {
    console.log(Name)   //It will print Default
}

greet2()

function greet3(Name = "Default") {
    console.log(Name)   //It will print Aneesh
}

greet3("Aneesh")

function add(a=0, b=0) {
    const c = a+b
    return c
}

const sum = add(10, 23) // Store value returned by function add in the sum var.
console.log(sum)    //print 33

function g1() {
    console.log("Good Morning")
}

let g2 = function() {
    console.log("Bonjour")
}

console.log(g1)
console.log(g2)

g1()
g2()

//or

let g3 = () => {    //Arrow function frequently used
    console.log("Bonjour")  //It will also print Bonjour.
}

let g4 = function(Name) {
    return Hi + Name
}

let g5 = () => Hi `$(Name)`

console.log(g4(Aneesh))
console.log(g5(Aneesh)) //Both will return same output.



