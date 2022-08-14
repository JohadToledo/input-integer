const inputInteger = require("integer-input1");

const opts1 = { min: 1, max: 150 };
const opts2 = { min: 1872, max: 2022 };

const input1 = inputInteger(opts1);
const input2 = inputInteger(opts2);

const title = "My demo form";
const subTitle = "Please fill out the form";

const page = document.createElement("div");
page.innerHTML = `
<h1>${title}</h1>
<h2>${subTitle}</h2>
<h3>Enter your age</h3>
<x></x>
<h3>Enter your year of birth</h3>
<y></y>
`;

page.querySelector("x").replaceWith(input1);
page.querySelector("y").replaceWith(input2);

document.body.append(page);
