const inputInteger = require('..')

const input1 = inputInteger()
const input2 = inputInteger()

const title = 'My demo form'
const subTitle = 'Please fill out the form'

const page = document.createElement('div')
page.innerHTML = `
<h1>${title}</h1>
<h2>${subTitle}</h2>
<h3>Enter your age</h3>
<x></x>
<h3>Enter your year of birth</h3>
<y></y>
`

page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)

document.body.append(page)