/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, browser: true, */
/*global _:false, $:false, define:false, require:false, */

window.onload = function() {

    'use strict';

    var omikujiResult = [
            {result: "大吉", message: "いいわー、すごいいいいわー。"},
            {result: "中吉", message: "普通だねー。"},
            {result: "小吉", message: "んー、ちょっとあれだねー。"},
            {result: "凶",   message: "よくないねー。"},
            {result: "大凶", message: "最悪だねー。"}
        ][Math.floor(Math.random() * 5)],

        resultElement  = document.getElementById("result"),
        messageElement = document.getElementById("message");

    if (typeof resultElement.textContent !== undefined) {
        // for firefox
        resultElement.textContent  = omikujiResult.result;
        messageElement.textContent = omikujiResult.message;
    } else {
        resultElement.innerText  = omikujiResult.result;
        messageElement.innerText = omikujiResult.message;
    }
};
