window.onload = function() {

    'use strict';

    var rand = Math.floor(Math.random() * 5 + 1),
        result, message;

    switch(rand) {
    case 1:
        result = "大吉";
        message = "いいわー、すごいいいいわー。";
        break;

    case 2:
        result = "中吉";
        message = "普通だねー。";
        break;

    case 3:
        result = "小吉";
        message = "んー、ちょっとあれだねー。";
        break;

    case 4:
        result = "凶";
        message = "よくないねー。";
        break;

    case 5:
        result = "大凶";
        message = "最悪だねー。";
        break;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("message").innerText = message;
}