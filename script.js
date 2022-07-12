const button = document.querySelector('button')
const input = document.querySelector('input#todo-input')
const list = document.querySelector('ol')

input.addEventListener('keydown', e => {
    const key = e.key
    if(key == 'Enter') {
        addItem()
    }
})

const addItem = (e) => {
    const textToAdd = input.value
    
    if(textToAdd != '') {
        const element = document.createElement('li')
        const text = document.createTextNode(textToAdd)

        element.appendChild(text)
        list.appendChild(element)

        const button = document.createElement('button')
        button.innerHTML = "Delete"

        button.addEventListener('click', (e) => {
            element.remove()
        })
        element.appendChild(button)

        input.value = ""
    }
    else {
        window.alert("Task Can't be empty!!!")
    }
}

button.addEventListener('click', addItem)

const button1 = document.querySelector('button')
const div = document.querySelector('div.first')
const body = document.querySelector('body')

body.classList.add('light')     // To add class to an element
body.classList.remove('light')  //To remove a class from the element