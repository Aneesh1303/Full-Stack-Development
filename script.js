let value = 9

const myFirstResponse = new Promise((resolve, reject) => {
    if(value > 10) {
        resolve([{id:1, data: "this is data"}])
    }
    else {
        reject({error: "error fetching data"})
    }
})

myFirstResponse.then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
})

fetch('https://google.com')
    .then(response => response.data)
    .then(data => {
    console.log(data)
    }).catch(err => {
        console.log(err)
    })

const getData1 = async () => {    //async and await are used in place of then keyword for larger api calls it would be better to use async and await.
    console.log(1)

    const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await resp.json();
    console.log(data)

    console.log(2)
}

getData1()

console.log(3)


const getData = async () => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await resp.json();
        
        data.forEach(ele => {
            const {userId, title} = ele;    //This is called as destructring which is an ES6 method.
            //We can same do this to an array also
            // const arr = ["Aneesh", "Aneesh", "Aneesh"]
            // const [s1, s2, s3] = arr;
            // console.log(s1, s2, s3)
            console.log(`${userId} ${title}`)
        });
    }
    catch (err) {
        console.log(err)
    }
    finally {
        console.log('I will be executed no matter what!!')
    }
}

getData()

console.log(1)

clonning

let a1 = {
    brand: "mercedes"
}

let b = a1

b.brand = "BMW"

console.log(a)
console.log(b)

let a = {
    brand: "mercedes"
}

let b = {...a}  //... is a spread operator which is removing brackets like {-...{-brand: "mercedes"-}-} it is going to remove brackets between '-'.

b.brand = "BMW"

console.log(a)
console.log(b)