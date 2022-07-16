console.log(1)
console.log(2)
setTimeout(() => {          //setTimeout is a part of web API which will run only after excuting all the stuff which can be a part of call stack.
    console.log("5")        //Similarly document and window are part of web API.
}, 1000)
console.log(3)
console.log(4)

const response = fetch('https://jsonplaceholder.typicode.com/photos')
console.log(response)

setTimeout(() => {
    console.log(response)
}, 150)