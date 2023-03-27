function autoTab(field1, field2) {
	if (document.getElementById(field1).value.length === 1) {
		document.getElementById(field2).focus();
		}
}
const selectedWord = validWords[Math.floor(Math.random() * validWords.length)]
console.log(selectedWord)

// const wordAttempt = document.getElementById("userGuess")
// wordAttempt.addEventListener("input", )

const checkWord = document.getElementById("guess")
checkWord.addEventListener("onclick", matchWord)

const firstLetter = document.getElementById("letter1")
firstLetter.addEventListener("input", logValue)
const secondLetter = document.getElementById("letter2")
secondLetter.addEventListener("input", logValue)
const thirdLetter = document.getElementById("letter3")
thirdLetter.addEventListener("input", logValue)
const fourthLetter = document.getElementById("letter4")
fourthLetter.addEventListener("input", logValue)
const fifthLetter = document.getElementById("letter5")
fifthLetter.addEventListener("input", logValue)

function logValue() {
	console.log(this.value.toUpperCase())
	let letter = this.value.toUpperCase()
	return letter
}
function matchWord() {
console.log(firstLetter)
}



// user.addEventListener("onkeyup", autoTab) 