const fs = require('fs');
var fil = fs.readFileSync('words.txt','utf-8');
console.log("The text in words.txt is :\n",fil)

console.log("Total Word Count is ",wordCount(fil))

function wordCount (str) {
	var words = str.split(" ").length;
	return words;
}