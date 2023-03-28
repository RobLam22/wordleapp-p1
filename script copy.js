// function displayGame() {
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
// displayGame()

// retrieves word from wordlist and splits into array
// const selectedWord = validWords[Math.floor(Math.random() * validWords.length)]
const selectedWord = "ARRAY"
const selectedArray = selectedWord.split("")
console.log(selectedWord)
console.log(selectedArray)

const checkWord = document.getElementById("guess")
checkWord.addEventListener("click", matchWord)

let numberOfLives = 5

function matchWord() {
	// test word
	const userWord = "ADIEU"
	// const userWord = document.getElementById("userGuess")
	// const userArray = userWord.value.toUpperCase().split("")
	if (userWord.length != 5) {
		// Maybe change to display a message under input field
		alert("Not enough letters!")
		return
	}
	if (!validWords.includes(userWord)) {
		// Maybe change to display a message under input field
		alert("Invalid Word!")
		return
	}
	// const userArray = userWord.split("")
	// console.log(userArray)
	const div = document.createElement("div")
	div.classList.add("letterColour")

	// for (let i = 0; i < 5; i++) {
	// 	// for (let j = 0; j < 5; j++) {
	// 		if (selectedArray.includes(userArray[i]))
	// 		console.log("ding")
	// 	// }
	// }
	
	// Checks end game
	if (userWord == selectedWord) {
		alert("Awesome!")
		return
	} else {
		console.log(numberOfLives)
		numberOfLives -= 1;
		if (numberOfLives > 0) {
			// Maybe add a counter somewhere
			alert(`${numberOfLives} chances left`)
		} else {
			alert(`Better luck next time! The word was ${selectedWord}`)
		}
	}

}

let output = document.getElementById("userGuess");
       let keys = document.getElementsByClassName("key");
       for (let keyElement of keys) {
           let key = keyElement.textContent;
           keyElement.addEventListener("click", function() {
               switch (key) {
                   case "␡":
                       output.value = output.value.slice(0, output.value.length-1);
                       break;
                   case '␡ all':
                       output.value = '';
                       break;
                   default:
                       output.value += key;
               }
           });
       }

// PSEUDOCODE
// USER ENTERS WORD
// CHECK BUTTON TURNS WORD TO UPPERCASE
// SPLIT BOTH selectedWord and userWord to arrays
// if statement to see if in the word or not
// if userArray[i] found in selectedArray:
// nested loop in exact spot, add .green spot
// if found in another spot, add .yellow
// else add .grey to letter and keyboard letter
// if statement to check if word is correct -
// minus counter