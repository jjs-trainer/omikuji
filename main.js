window.onload = function() {
	var rand = Math.floor(Math.random() * 5 + 1),
	    result, description;

	switch(rand) {
	case 1:
	    result = "大吉";
	    description = "いいわー、すごいいいいわー。";
	    break;

	case 2:
	    result = "中吉";
	    description = "普通だねー。";
	    break;

	case 3:
	    result = "小吉";
	    description = "んー、ちょっとあれだねー。";
	    break;

	case 4:
	    result = "凶";
	    description = "よくないねー。";
	    break;

	case 5:
	    result = "大凶";
	    description = "最悪だねー。";
	    break;
	}
	document.getElementById("result").innerText = result;
	document.getElementById("description").innerText = description;
}