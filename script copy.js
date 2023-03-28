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

// Retrieves all div.letterBox as a NodeList
let output = document.querySelectorAll(".letterBox");

let currentLetterBoxIndex = 0
function updateLetterBox(key) {
	const p = document.createElement("p")
	p.textContent = key
	output[currentLetterBoxIndex].appendChild(p)
	currentLetterBoxIndex++
}
// KEYBOARD FUNCTION
let keys = document.getElementsByClassName("key");
for (let keyElement of keys) {
	let key = keyElement.textContent;
	function handleClick() {
		switch (key) {
		case "␡":
		// let p = document.querySelector(`#letter${[letterIndex]} p`);
		let pNodeList = document.querySelectorAll(`.letterBox p`);
		pNodeList[pNodeList.length - 1].remove();
		currentLetterBoxIndex--;
		userArr.pop()
		console.log(userArr)
		console.log(currentLetterBoxIndex)
		break;
		case '␡ all':
			for (i = 0; i < currentLetterBoxIndex; i++) {
				let pNodeList = document.querySelectorAll(`.letterBox p`);
				pNodeList[i].remove()
				currentLetterBoxIndex--;
				userArr.pop()
			}
			default:
				if (currentLetterBoxIndex > 4) {
					break;
				} else {
					// function updateLetterBox
					const p = document.createElement("p")
					p.textContent = key
					output[currentLetterBoxIndex].appendChild(p)
					currentLetterBoxIndex++
					userArr.push(key)
					console.log(userArr)
					console.log(currentLetterBoxIndex)
				}
			}}
	keyElement.addEventListener("click", handleClick)
}


// Generates word to Guess and puts it in array
const chosenWord = "ARRAY"
const chosenArray = chosenWord.split("")
console.log(chosenWord)
console.log(chosenArray)

let userArr = []
let userWord = userArr.join()

// Gets the check button 
const checkWord = document.getElementById("guess")
checkWord.addEventListener("click", matchWord)

// retrieves word from wordlist and splits into array
// const selectedWord = validWords[Math.floor(Math.random() * validWords.length)]


function matchWord() {
	// Error checks
	const userWord = userInput.value.toUpperCase()
	const characterCheck = /^[a-zA-Z]+$/.test(userWord)
	if (userWord.length != 5) {
		// Maybe change to display a message under input field
		alert("Not enough letters!")
		userInput.value = ""
		return
	}
	if (!validWords.includes(userWord)) {
		// Maybe change to display a message under input field
		alert("Invalid Word!")
		userInput.value = ""
		return
	}
	
	
	const userArray = userWord.split("")
	// checks userWord against selectedWord
	// const userArray = userWord.split("")
	// console.log(userArray)
	const div = document.createElement("div")
	div.classList.add("letterColour")
	
	
	// FOR LOOP TO CHECK LETTERS
	for (let i = 0; i < 5; i++) {
		// LOGIC check for word / letter
		// for (let i = 0; i < clickedLetters.length; i++) {
			// 	if (chosenWordArr.indexOf(clickedLetters[i]) >= 0 {  
				// 		let div = document.getElementById(`${letter${i}}`)
				// 		div.setAttribute("class", "rightLetter")
				
				// 	} else if (chosenWordArr.indexOf(clickedLetters[i]) == i) {
					// 		let answer = doc. get elementby id. letteri. textContent
					// 		wrongPlace
					
					// 	} else {
						// 		wrongLetter
						// 	}
						// }
						if (userArray[i] === selectedArray[i]) {
							console.log("GREEN")
						} else if (selectedArray.includes(userArray[i]) === true) {
							console.log("YELLOW")
						} else {
							console.log("GREY")
						}
					}
					
					// Checks end game
					let numberOfLives = 5
					if (userWord == chosenWord) {
						alert("Awesome!")
						return
					} else {
						console.log(numberOfLives)
						numberOfLives -= 1;
						if (numberOfLives > 0) {
							// Maybe add a counter somewhere
							alert(`${numberOfLives} chances left`)
						} else {
							alert(`Better luck next time! The word was ${chosenWord}`)
						}
					}
					
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


								// function input() {
								// 	let string = userInput.value.split("")
								//     // console.log(string.length)
								//     if (string.length == 0) {
								// 		userMsg.textContent = "Use only lower case characters"
								//     } else {
								//         for (let i = 0; i < string.length; i++) {
								//             if (string[i] == string[i].toLowerCase()) {
								// 				userMsg.textContent = "Use only lower case characters"
								//             } else {
								// 				userMsg.textContent = "Contains invalid characters"
								//             }   
								// 		}}
								// 	}