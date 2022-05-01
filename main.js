import fetch from "node-fetch"

const middleLetter = "E" // Replace with today's middle letter
const allLetters = ["M", "O", "L", "W", "N", "B", ...middleLetter] // replace with today's surrounding letters

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const foundWords = []

const apiUrl = "https://api.datamuse.com/words?"

const pattern = `sp=*${middleLetter}*-${alphabet
    .filter(letter => !allLetters.includes(letter))
    .join("")}`

fetch(apiUrl + pattern).then(async res => {
    const response = await res.json()
    for (let word of response) {
        if (word.word.length > 3 && !word.word.includes("-")) {
            foundWords.push(word)
        }
    }
    console.log(`Found ${foundWords.length} words:`)
    console.log(foundWords.map(word => word.word).sort())
})


