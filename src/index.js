module.exports = inputInteger 

const sheet = new CSSStyleSheet
const theme = getTheme()
sheet.replaceSync(theme)

function inputInteger () {
     const el = document.createElement('div')
     const shadow = el.attachShadow({ mode: 'closed' })
     shadow.innerHTML =  `
     <input></input>
     `
     shadow.adoptedStyleSheets = [sheet]
    return el
}

function getTheme () {
    return `
    input{
        padding: 6px 8px;
        background-color: #5da267;
        border-radius: 8px;
    }
    input:focus{
        background-color: #5d9ba2;
    }
    `
}