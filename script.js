// Generates GAME BOARD
function displayGame() {
    let board = document.getElementById("userAttempts");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.classList.add(`wordRow`, `row${i}`)
    
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = `letterBox`
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}
displayGame()

let error = document.getElementById("errorMsg")
let numberOfAttempts = 0
let currentLetterBoxIndex = 0
let letters = 1

let rowIndex = 0
// let outputRow = document.querySelector(`.row${rowIndex}`)
function selectNextLine() {
	outputRow = document.querySelector(`.row${rowIndex}`)
	rowIndex++;
	return outputRow
}

// Retrieves all div.letterBox as a NodeList
let output = document.querySelectorAll(".letterBox");
// let outputRow = document.querySelector(`.row${rowIndex}`)
// console.log(outputRow.childNodes) // Returns NodeList of first row due to rowIndex = 0
// console.log(outputRow.childNodes[currentLetterBoxIndex]) // Returns first letterbox in row
// KEYBOARD FUNCTION - MODIFIED FROM PREVIOUS LAB
let keys = document.getElementsByClassName("key");
for (let keyElement of keys) {
	let key = keyElement.textContent;
	function handleClick() {
		switch (key) {
		case "DEL":
			// let p = document.querySelector(`#letter${[letterIndex]} p`);
			// output[currentLetterBoxIndex].removeAttribute(id)
			let pNodeList = document.querySelectorAll(`.letterBox p`);
			pNodeList[pNodeList.length - 1].remove();
			currentLetterBoxIndex--;
			userArr.pop()
			console.log(userArr)
			console.log(currentLetterBoxIndex)
			break;
		default:
			if (currentLetterBoxIndex > 4) {
				break;
			} else {
				// function updateLetterBox
				output[currentLetterBoxIndex].id = `letter${currentLetterBoxIndex}`
				const p = document.createElement("p")
				p.textContent = key
				// outputRow.childNodes[currentLetterBoxIndex].appendChild(p)
				output[currentLetterBoxIndex].appendChild(p)
				currentLetterBoxIndex++
				userArr.push(key)
				console.log(userArr, currentLetterBoxIndex)
			}
		}
	}
	keyElement.addEventListener("click", handleClick)
}

// Retrieves word from wordlist and splits into array
// const selectedWord = validWords[Math.floor(Math.random() * validWords.length)]
// Generates word to Guess and puts it in array
const chosenWord = "AFTER"
const chosenArray = chosenWord.split("")
console.log(chosenWord)
console.log(chosenArray)

let userArr = []
// let userWord = userArr.join("").toUpperCase()
// let userArrUpperCase = userWord.split("")

// Gets the check button 
const checkWord = document.getElementById("guess")
checkWord.addEventListener("click", matchWord)

function matchWord() {
	// Error checks
	if (userArr.length < 5) {
		error.textContent = "Word must be 5 letters long"
		return
	}
	let userWord = userArr.join("")
	console.log(userWord)
	if (!validWords.includes(userWord)) {
		// Maybe change to display a message under input field
		error.textContent = "Invalid word"
		return
	}
	error.textContent = ""
	// FOR LOOP TO CHECK LETTERS
	for (let i = 0; i < userArr.length; i++) {
		// LOGIC check for word / letter
						if (chosenArray[i] === userArr[i]) { // OR	if (chosenWordArr.indexOf(clickedLetters[i]) >= 0 {  
							document.getElementById(`letter${i}`).classList.add("rightPlace")
							console.log("GREEN")
						} else if (chosenArray.indexOf(userArr[i]) >= 0) { // OR } else if (chosenWordArr.indexOf(clickedLetters[i]) == i) {
							document.getElementById(`letter${i}`).classList.add("wrongPlace")
							console.log("YELLOW")
						} else {
							document.getElementById(`letter${i}`).classList.add("notFound")
							console.log("GREY")
						}
					}

	// // Resets Array for next Guess
	// userArr = []
	// userWord = 0
	// userArrUpperCase = []

	// Checks end game
	if (userWord == chosenWord) {
		alert("Awesome!")
		return
	} else {
		console.log(numberOfAttempts)
		numberOfAttempts++;
		if (numberOfAttempts === 6) {
			// Maybe add a counter somewhere
			alert(`Better luck next time! The word was ${chosenWord}`)
		} else {
			// alert(`${6 - numberOfAttempts} chances left`)
		}
	}
	console.log(numberOfAttempts)

	// Removes IDs from first previous Guess
	for (let i = 0; i < outputRow.childNodes.length; i++) {
		outputRow.childNodes[i].removeAttribute("id")
	}
	// outputRow.childNodes.length
	// Move to next line
 	selectNextLine()

}
				
								
								
								
								
								
// setAttribute removes and adds at the same time
// GALITS CODE
function onKeyInput() {
	letters = guesses[guessCounter].querySelectorAll(".letter");
	
	if (letterCounter.length > 4) {
		alert("invalid word");
	} else {
		let div = document.querySelectorAll(".letter");
		selectedDiv = div[letterCounter];
		let p = document.createElement("p");
		p.textContent = clickedLetter[letterCounter];
		selectedDiv.appendChild(p);
		++letterCounter;
	}
}

// PSEUDOCODE
// USER ENTERS WORD
// each letter is a div
// letter from keyboard pushes into empty array
// 5 letters .join to combine word
// CHECK BUTTON TURNS WORD TO UPPERCASE
// SPLIT BOTH selectedWord and userWord to arrays
// if statement to see if in the word or not
// if userArray[i] found in selectedArray:
// nested loop in exact spot, add .green spot
// if found in another spot, add .yellow
// else add .grey to letter and keyboard letter
// if statement to check if word is correct -
// minus counter