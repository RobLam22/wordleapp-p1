// Generates GAME BOARD
function displayGame() {
    let board = document.getElementById("userAttempts");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.classList.add(`wordRow`)
		row.id = `row${i}`
    
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

selectNextLine()

function selectNextLine() {
	outputRow = document.getElementById(`row${[numberOfAttempts]}`)
	// rowIndex++;
	return outputRow
}

// KEYBOARD FUNCTION - MODIFIED FROM PREVIOUS LAB
let keys = document.getElementsByClassName("key");
for (let keyElement of keys) {
	let key = keyElement.textContent;
	function handleClick() {
		switch (key) {
		case "DEL":
			let p = document.querySelector(`#letter${[currentLetterBoxIndex - 1]} p`)
			p.remove()
			// let pNodeList = document.querySelectorAll(`.letterBox p`);
			// outputRow[pNodeList.length - 1].remove();
			currentLetterBoxIndex--;
			userArr.pop()
			console.log(userArr, currentLetterBoxIndex)
			break;
		default:
			if (currentLetterBoxIndex > 4) {
				break;
			} else {
				// function updateLetterBox
				outputRow.childNodes[currentLetterBoxIndex].id = `letter${currentLetterBoxIndex}`
				const p = document.createElement("p")
				p.textContent = key
				// outputRow.childNodes[currentLetterBoxIndex].appendChild(p)
				outputRow.childNodes[currentLetterBoxIndex].appendChild(p)
				currentLetterBoxIndex++
				userArr.push(key)
				console.log(userArr, currentLetterBoxIndex, p.textContent)
			}
		}
	}
	keyElement.addEventListener("click", handleClick)
}

// Retrieves word from wordlist and splits into array
const chosenWord = validWords[Math.floor(Math.random() * validWords.length)]
// const chosenWord = "BROOD"
// Generates word to Guess and puts it in array
const chosenArray = chosenWord.split("")

let userArr = []

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

	// For Loop to check position of letters and remove .ids
	for (let i = 0; i < userArr.length; i++) {
		let div = outputRow.childNodes[i]
		// LOGIC check for word / letter
		if (chosenArray[i] === userArr[i]) { // OR	if (chosenWordArr.indexOf(clickedLetters[i]) >= 0 {  
			document.getElementById(`letter${[i]}`).classList.add("rightPlace")
			changeKeyColour(userArr[i], div);
			outputRow.childNodes[i].removeAttribute("id")
		} else if (chosenArray.indexOf(userArr[i]) >= 0) { // OR } else if (chosenWordArr.indexOf(clickedLetters[i]) == i) {
			document.getElementById(`letter${[i]}`).classList.add("wrongPlace")
			changeKeyColour(userArr[i], div);
			outputRow.childNodes[i].removeAttribute("id")
		} else {
			document.getElementById(`letter${[i]}`).classList.add("notFound")
			changeKeyColour(userArr[i], div);
			outputRow.childNodes[i].removeAttribute("id")
		}
	}

	// Checks end game
	if (userWord == chosenWord) {
		errorMsg.textContent = "Winner winner chicken dinner"
		return
	} else {
		numberOfAttempts++;
		if (numberOfAttempts === 6) {
			// Maybe add a counter somewhere
			alert(`Better luck next time! The word was ${chosenWord}`)
		// } else {
			// alert(`${6 - numberOfAttempts} chances left`)
		}
	}

	// Resets Array for next Guess
	userArr = []
	currentLetterBoxIndex = 0

	// Move to next line
 	selectNextLine()
	
}

// Dynmically add IDs to keys
let keyButtons = document.getElementsByClassName("key")
for (let i = 0; i < keyButtons.length; i++) {
	keyButtons[i].id = keyButtons[i].textContent
}
// Keyboard colour functionality
function changeKeyColour(key, div) {
	let keyToChange = document.getElementById(key);
	if (div.classList.contains("notFound")) { 
		keyToChange.classList.add("notFound");
	  } else if (div.classList.contains("wrongPlace")) {
		keyToChange.classList.add("wrongPlace");
	  } else {
		keyToChange.classList.add("rightPlace");
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