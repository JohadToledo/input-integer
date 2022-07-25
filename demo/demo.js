const inputInteger = require('..')

const x = inputInteger()

document.body.innerHTML = `<h1> ${x}</h1>`

document.body.append(x)