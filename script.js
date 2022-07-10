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
