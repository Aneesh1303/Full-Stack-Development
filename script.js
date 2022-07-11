console.log(document)   //document is an object which is bridge betweem javascript and html.

const ele = document.getElementById("temp");
console.log(ele);
console.log(typeof ele);     //It will return type of ele which is object.
console.log(ele.innerHTML)   //innerHTML whill give us the inner html elements.  
console.log(ele.innerText)   //innerText will only give us the text present.

//Similarly style is an another object through which we can change csss properties of the elements.
console.log(ele.style)
ele.style = "background-color: red; color: white"   //It will change the background-color and color property of element with id temp.

//getElementsByClassName()    It will select elements with same class name
//get ElementsByTagName()     It will select according to a specified tag like <button> <p> etc.
//querySelector()             It will select elements same way we did in stles.css.

let element = document.getElementsByClassName('temp')   //getElementsByClassName has a html collection to store the elements which does not support various methods like below one.
//similar for the case in getElementsByTagName both do not support forEach method and other methods as well which are provided by an array.
// element.forEach((el, i) => {    
//     el.innerHTML = `Element ${i}`   //it will prduce an error
// });

let element2 = document.querySelectorAll('div.tmp')  //while in case of querySelector it store elements in node list which does support some of the methods of array
element2.forEach((el, i) => {    
    el.innerHTML = `Element ${i}`   //while it doesn't
});

const body = document.querySelector('body')

const task = ["Coding", "coding", "Web Dev"]

const ol = document.createElement('ol')

task.forEach(el => {
    const li = document.createElement('li')
    const textNode = document.createTextNode(el)
    li.appendChild(textNode)
    ol.appendChild(li)
})

body.appendChild(ol)

//Event Listener
const button = document.querySelector('button')

const eventListener = () => {
    console.log('Hi')
}

button.addEventListener('click', eventListener)     //Accepts type of event and a fucntion.
