const body = document.body
//body.append('Hi there', 'short yellow bus')

const div = document.createElement('div')
const strong = document.createElement("strong")
strong.innerText = "Hi there"

div.append(strong)
//const div = document.createElement('div')
//div.innerText = 'Annie'
//div.textContent = 'It\'s me Uri again'

//div.innerHTML = "<strong>Short yellow bus</strong>"

body.append(div)

// const div = document.querySelector("div")

// console.log(div.textContent)
// console.log(div.innerText)