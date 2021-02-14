import { ruswords } from "./words.js"
let okButton = document.querySelector("#okButton");
let userLetter = document.querySelector("#userLetter");
// let words=["слово","карикатура","реклама","тур","лопата","лось"];
let words = ruswords;
let secretWord = words[Math.floor(Math.random() * words.length)];
let newButton = document.querySelector("#newButton");
let cypher = document.querySelector("#cypher");
let imgNumber = 7;
let h2 = document.querySelector("#h2");
let img = document.querySelector("#img");
let Itog = document.querySelector("#Itog");
let letters = document.querySelector("#letters");
let usedLetters = [];
userLetter.select();
cypher.innerHTML = "*".repeat(secretWord.length);
// for(let k=0;k<10000000000000000;k++){
// 	let randomNumber=Math.random();
// 	if (randomNumber>0.999999999999999) {
// 		console.log(randomNumber)
// 	}
// }
okButton.onclick = function (event) {
	event.preventDefault();
	userLetter.select();
	let letter = userLetter.value;
	letter=letter.toLowerCase();
	if (!usedLetters.includes(letter)){
		usedLetters.push(letter);
	}
	letters.innerHTML = usedLetters;
	userLetter.value = ""
	if (secretWord.includes(letter)) {
		// нью сафер нужен для создания ногвого шифра.
		let newCypher = "";
		// for это цикл.i=номер буквы. "i<secretWord.length"-пока номер буквы меньше длины секретново слово продолжать добовлять 1+.
		for (let i = 0; i < secretWord.length; i++) {
			if (secretWord[i] == letter) {
				newCypher = newCypher + letter;
			}
			else { newCypher = newCypher + cypher.innerHTML[i] }
		}
		cypher.innerHTML = newCypher;
		if (cypher.innerHTML == secretWord) {
			h2.innerHTML = "ты выиграл"
			okButton.disabled = true;
		}
	}
	else {
		imgNumber = imgNumber - 1;
		img.src = "snowman" + imgNumber + ".jpg";
		if (imgNumber == 0) {
			okButton.disabled = true;
			h2.innerHTML = "ты проиграл"
			Itog.innerHTML = "Секретное слово: " + secretWord;

		}
	}

}
newButton.onclick = function (event) {
	event.preventDefault();
	userLetter.select();
	secretWord = words[Math.floor(Math.random() * words.length)];
	cypher.innerHTML = "*".repeat(secretWord.length);
	h2.innerHTML = ""
	imgNumber = 7;
	img.src = "snowman" + imgNumber + ".jpg";
	letters.innerHTML = "";
	okButton.disabled = false;
	usedLetters = [];
	Itog.innerHTML = "";
}

