(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const inputInteger = require('..')

const x = inputInteger()

document.body.append(x)
},{"..":2}],2:[function(require,module,exports){
module.exports = inputInteger 

const sheet = new CSSStyleSheet
const theme = getTheme()
sheet.replaceSync(theme)

function inputInteger () {
     const el = document.createElement('div')
     const shadow = el.attachShadow({ mode: 'closed' })
     const input = document.createElement('input')
     input.type = 'number'
     input.min = 0
     input.max = 150
     input.onkeyup = (e) => handleOnkeyup(e, input)


     shadow.append(input)
    
     shadow.adoptedStyleSheets = [sheet]
    return el
}

function getTheme () {
    return `
    :host {
        --b: 0, 0%;
        --color-white: var(--b), 100%;
        --color-black: var(--b), 0%;
        --color-grey: var(--b), 85%;
        --bg-color: var(--color-grey);
        --shadow-xy: 0 0;
        --shadow-blur: 8px;
        --shadow-color: var(--color-white);
        --shadow-opacity: 0;
        --shadow-opacity-focus: 0.65;
      }
      input {
        text-align: left;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 200;
        color: hsla(var(--color-black), 1);
        background-color: hsla(var(--bg-color), 1);
        padding: 8px 12px;
        box-shadow: var(--shadow-xy) var(--shadow-blur) hsla( var(--shadow-color), var(--shadow-opacity));
        transition: font-size .3s, color .3s, background-color .3s, box-shadow .3s ease-in-out;
        outline: none;
        border: 1px solid hsla(var(--bg-color), 1);
        border-radius: 8px;
      }
      input:focus {
        --shadow-color: var(--color-black);
        --shadow-opacity: var(--shadow-opacity-focus);
        --shadow-xy: 4px 4px;
        box-shadow: var(--shadow-xy) var(--shadow-blur) hsla( var(--shadow-color), var(--shadow-opacity));
      }
    `
}

function handleOnkeyup(e, input){
    console.log(e.target.value)
    const val = Number(e.target.value)
    if(val > input.max) input.value = 150
    else if( val < input.min) input.value = 0
}
},{}]},{},[1]);
