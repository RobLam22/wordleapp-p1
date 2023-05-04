let titleArr = ["G","U","E","S","S"]
let colours = ["wrongPlace", "rightPlace", "notFound"]
let error = document.getElementById("errorMsg")
let numberOfAttempts = 0
let currentLetterBoxIndex = 0
let title = document.getElementById("titleWord")
let resetButton = document.createElement("button")
let score = 0

// Dynmically add IDs to keys for functionality
let keyButtons = document.querySelectorAll(".key")
for (let i = 0; i < keyButtons.length; i++) {
	keyButtons[i].id = keyButtons[i].textContent
}

// Retrieves word from wordlist and splits into array
let chosenWord = validWords[Math.floor(Math.random() * validWords.length)]
// let chosenWord = "BROOD"
// Generates word to Guess and puts it in array
let chosenArray = chosenWord.split("")

let userArr = []

// Gets the check button 
const checkWord = document.getElementById("guess")
checkWord.addEventListener("click", matchWord)
checkWord.addEventListener("click", colourChange)



// Generates Title
function displayTitle() {
	let board = document.getElementById("title");
	
    for (let i = 0; i < 1; i++) {
		let row = document.createElement("div")
        row.classList.add(`wordRow`,`wordTitle`)
		row.id = `titleWord`
		
        for (let j = 0; j < 5; j++) {
			let box = document.createElement("div")
            box.classList.add(`letterBox`, `titleBox`) 
            row.appendChild(box)
        }
		
        board.appendChild(row)
    }
	
	let titleRow = document.querySelector(".wordTitle")
	for (let i = 0; i < titleRow.childNodes.length; i++) {
		let p = document.createElement("p")
		p.textContent = titleArr[i]
		titleRow.childNodes[i].classList.add(`${colours[(Math.floor(Math.random() * colours.length))]}`)
		titleRow.childNodes[i].appendChild(p)
	}
}
displayTitle()

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

// 
selectNextLine()
function selectNextLine() {
	outputRow = document.getElementById(`row${[numberOfAttempts]}`)
	// rowIndex++;
	return outputRow
}

// KEYBOARD FUNCTION - MODIFIED FROM PREVIOUS LAB
let keys = document.querySelectorAll(".key");
for (let keyElement of keys) {
	let key = keyElement.textContent;
	keyElement.addEventListener("click", () => handleClick(key));
  }
  
  function handleClick(key) {
	switch (key) {
	  case "DEL":
		let p = document.querySelector(`#letter${[currentLetterBoxIndex - 1]} p`);
		p.remove();
		currentLetterBoxIndex--;
		userArr.pop();
		// console.log(userArr, currentLetterBoxIndex)
		break;
	  default:
		colourChange();
		if (currentLetterBoxIndex > 4) {
		  break;
		} else {
		  // function updateLetterBox
		  outputRow.childNodes[
			currentLetterBoxIndex
		  ].id = `letter${currentLetterBoxIndex}`;
		  const p = document.createElement("p");
		  p.textContent = key;
		  // outputRow.childNodes[currentLetterBoxIndex].appendChild(p)
		  outputRow.childNodes[currentLetterBoxIndex].appendChild(p);
		  currentLetterBoxIndex++;
		  userArr.push(key);
		  // console.log(userArr, currentLetterBoxIndex, p.textContent)
		}
	}
  }

// function deleteIntro() { 
// 	let intros = document.querySelectorAll(".intros")
// 	// Removes Intro
// 	for (let i = 0; i < intros.length; i++) {
// 		// for (let i of intros) {
// 		// console.log(i)
// 		intros[i].remove()
// 	}
// 	// intros.remove()
// 	// intros[0].remove()
// }

function matchWord() {
	// Deletes Intro lines
	// if (numberOfAttempts < 1) {
	// deleteIntro()
	// }

	// Error checks
	if (userArr.length < 5) {
		error.textContent = "Word must be 5 letters long"
		return
	}
	let userWord = userArr.join("")
	// console.log(userWord)
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
		score++
		scoreCounterAdd() 
		playAgain()
		return
	} else {
		numberOfAttempts++;
		if (numberOfAttempts === 6) {
			errorMsg.textContent = (`Better luck next time! The word was ${chosenWord}`)
			scoreCounterReset() 
			tryAgain()
		// } else {
			// alert(`${6 - numberOfAttempts} chances left`)
		}
	}

	// Resets Array for next Guess
	userArr = []
	currentLetterBoxIndex = 00000

	// Move to next line
 	selectNextLine()
	
}

function tryAgain() {
	resetButton.textContent = "TRY AGAIN"
	resetButton.classList.add("key")
	resetButton.id = "tryAgain"
	// resetButton.setAttribute("onclick", "window.location.href='https://roblam22.github.io/wordleapp-p1/';")
	let keyboardFirstRow = document.getElementById("keyboard-cont")
	keyboardFirstRow.insertAdjacentElement("afterbegin", resetButton)
	resetButton.addEventListener("click", reset)
}

function playAgain() {
	resetButton.textContent = "KEEP GOING!"
	resetButton.classList.add("key")
	resetButton.id = "tryAgain"
	// resetButton.setAttribute("onclick", "window.location.href='https://roblam22.github.io/wordleapp-p1/';")
	let keyboardFirstRow = document.getElementById("keyboard-cont")
	keyboardFirstRow.insertAdjacentElement("afterbegin", resetButton)
	resetButton.addEventListener("click", reset)
}

// Keyboard colour functionality
function changeKeyColour(key, div) {
	let keyToChange = document.getElementById(key);
 	if (div.classList.contains("rightPlace")) {
	  keyToChange.classList.add("rightPlace")
	  keyToChange.classList.remove("wrongPlace");
	} else if (div.classList.contains("wrongPlace")) {
		if (keyToChange.classList.contains("rightPlace")) {
			
		} else {
			keyToChange.classList.add("wrongPlace");
		}
	} else {
		keyToChange.classList.add("notFound");
	}
}

function reset() {
	let pNodeList = document.querySelectorAll(`.letterBox p`);
	for (let i = 5; i < pNodeList.length; i++) {
		pNodeList[i].remove()
	}
	let letterboxes = document.querySelectorAll(`.letterBox`);
	for (let i = 5; i < letterboxes.length; i++) {
		letterboxes[i].classList.remove("notFound")
		letterboxes[i].classList.remove("rightPlace")
		letterboxes[i].classList.remove("wrongPlace")
	}
	let keyReset = document.querySelectorAll(`.key`);
	for (let i = 0; i < keyReset.length; i++) {
		keyReset[i].classList.remove("notFound")
		keyReset[i].classList.remove("rightPlace")
		keyReset[i].classList.remove("wrongPlace")
	}
	resetButton.remove()
	error.textContent = ""
	numberOfAttempts = 0
	currentLetterBoxIndex = 0
	userArr = []
	chosenWord = validWords[Math.floor(Math.random() * validWords.length)]
	chosenArray = []
	chosenArray = chosenWord.split("")
	selectNextLine()
}

function scoreCounterAdd() {
	let titleScore = document.querySelectorAll(`.titleBox`)
	for (let i = 0; i < titleScore.length; i++) {
		titleScore[i].childNodes[0].textContent = `${score}`
	}
	// let scoreIndicator = titleScore[titleScore.length - 1]
	// scoreIndicator.childNodes[0].textContent = `${score}`
}
function scoreCounterReset() {
	score = 0
	let titleScore = document.querySelectorAll(`.titleBox`)
	for (let i = 0; i < titleScore.length; i++) {
		titleScore[i].childNodes[0].textContent = `${score}`
	}
	// let scoreIndicator = titleScore[titleScore.length - 1]
	// scoreIndicator.childNodes[0].textContent = `${score}`
}

function colourChange() {
	let titleLetters = document.querySelectorAll(`.titleBox`)
	for (let i = 0; i < titleLetters.length; i++) {
			// titleLetters[i].classList.remove("notFound")
			titleLetters[i].classList.remove("notFound", "rightPlace", "wrongPlace")
			titleLetters[i].classList.add(`${colours[(Math.floor(Math.random() * colours.length))]}`)
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