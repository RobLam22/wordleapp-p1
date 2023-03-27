// function initBoard() {
//     let board = document.getElementById("game-board");

//     for (let i = 0; i < 5; i++) {
//         let row = document.createElement("div")
//         row.className = "letter-row"
        
//         for (let j = 0; j < 5; j++) {
//             let box = document.createElement("div")
//             box.className = "letter-box"
//             row.appendChild(box)
//         }

//         board.appendChild(row)
//     }
// }

// initBoard()

const selectedWord = validWords[Math.floor(Math.random() * validWords.length)]
const splitWord = selectedWord.split("")
console.log(selectedWord)
console.log(splitWord)

const userWord = document.getElementById("userGuess")
// userWord.addEventListener("input", retrieveGuess)

const checkWord = document.getElementById("guess")
checkWord.addEventListener("click", matchWord)

// function retrieveGuess() {
// 	let word = userWord.value
// 	console.log(word)
// 	return word
// }

function matchWord() {
	console.log(userWord.value.toUpperCase())
	console.log("TEST")
}

// USER ENTERS WORD
// CHECK BUTTON TURNS WORD TO UPPERCASE
// SPLIT BOTH selectedWord and userWord to arrays
// if statement to see if in the word or not
// 