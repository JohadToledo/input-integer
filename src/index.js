module.exports = inputInteger 

function inputInteger () {
     const el = document.createElement('div')
     const shadow = el.attachShadow({ mode: 'closed' })
     shadow.innerHTML =  `
     <input></input>
     `
    return el
}