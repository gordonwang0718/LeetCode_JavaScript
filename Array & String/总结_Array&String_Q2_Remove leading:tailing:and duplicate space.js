====> input: _ _ _you_ _ _get_ _ _offer_ _
             you_get_offer_

// S1: Always keep the space after word

var removeSpaces = function(str) {
	if(str === null || str.length === 0) return str;

	var charArr = str.split("");
	var slow = 0;
	for(var fast = 0; fast < charArr.length; fast++){
		if(!charArr[fast] === ' ' && (fast === 0 || charArr(fast - 1) === '')) {
			charArr[slow++] = charArr[fast];
		}
	}
	if (slow === 0) return "";

	charArr[slow - 1] === ' ' ? charArr.splice(slow - 1, charArr.length - slow - 1) : charArr.splice(slow, charArr.length - slow);
	return charArr.join("");
}

// S2: Always keep the space before word
var removeSpaces = function(str) {
	if(str === null || str.length === 0) return str;

	var charArr = str.split("");
	var slow = 0;

	for (var fast = 0; fast < charArr.length; fast++) {
		if (!(charArr[fast] === '' && (fast === charArr.length - 1 || charArr[fast + 1] === ' '))) {
			charArr[slow++] = charArr[fast];
		}
	}
	if (slow === 0) return "";
	if (charArr[0] === ' ') {
		charArr.splice(0, 1);
		
	} else {
		charArr.splice(slow, charArr.length - slow);
		return charArr.join("");
	}
}