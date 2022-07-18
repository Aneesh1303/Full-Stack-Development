const response = fetch('https://jsonplaceholder.typicode.com/photos')

response.then(res => {
    console.log(res)
    const data = res.json()
    console.log(data)
    data.then(val => {
        console.log(val)
    })
})

const list = document.querySelector('ol')

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        data.forEach((post) => {
            console.log(post.title)
            const ele = document.createElement('li')
            ele.innerHTML = `${post.title}`
            list.appendChild(ele)
        })
    })

let val = 15

const myFirstPromise = new Promise((Resolve, Reject) => {
    if(val > 10) {
        Resolve("Value greater than 10")
    }
    else {
        Reject("Value less than 10")
    }
})

myFirstPromise.then(val => {

    console.log(val)
})