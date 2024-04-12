"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concatenation_js_1 = require("./concatenation.js");
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        (0, concatenation_js_1.concatenation)(input.value, 'hello!');
    });
}
