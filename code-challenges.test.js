// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

//const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe("decode", () => {
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        let secretCodeWord1 = "Lackadaisical"
        let secretCodeWord2 = "Gobbledygook"
        let secretCodeWord3 = "Eccentric"
    expect(decode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(decode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(decode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ReferenceError: decode is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// one parameter, a string
// returning new string with same length
// create empty string for new string?
// swap letter for number, using .replace
// or use .includes if possible on strings
// return the new string


    // FIRST ATTEMPT

const decode = (string) => {
    if (string.includes("a") &&
    string.includes("e") &&
    string.includes("i") &&
    string.includes("o")) {
 let newString = string.replace("a", 4)
        .replace("e", 3)
        .replace("i", 1)
        .replace("o", 0)
        return newString
    }
}

    // SECOND ATTEMPT

const decode = (string) => {
    let newString = " "
    newString = string
    .replaceAll('a', '4')
    .replaceAll('e', '3')
    .replaceAll('i', '1')
    .replaceAll('o', '0')
    return newString
}

    // THIRD ATTEMPT

    const decode = (string) => {
    return string.replace(/[a]/g, '4')
                 .replace(/[e]/g, '3')
                 .replace(/[i]/g, '1')
                 .replace(/[o]/g, '0')
}

    // FOURTH ATTEMPT

    const decode = (string1, string2, string3) => {
    let getStrings = (string1, string2, string3)
    newString = getStrings.replace(/[a]/g, '4')
                      .replace(/[e]/g, '3')
                      .replace(/[i]/g, '1')
                      .replace(/[o]/g, '0')
                      return newString

    // NOTES ABOUT PROBLEM #1
    // First attempt: Worked but only on the first occurrence. At first, I used .replace only, and receieved "L4ckadaisical", which meant it only changed the first occurrence of 'a'. Refactored and used .replaceAll. The letters in "Lackadaisical" were replaced for all occurences, but then it just stopped reading beyond the first word in the code, error: Expected: "3cc3ntr1c" Received: "Ecc3ntr1c"
    // Tried again using regex, using the 'g'/global flag to try to catch all occurrences but got same issue of only reading the first line of the code then not proceeding. The letters are being replaced in first code word but no other code words are being read. I believe the issue is Javascript cannot return multiple values, so will maybe need to wrap the values in an object? 




// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// input 1 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
// input2 = "a"
// input3 = "e"

describe("wordsArr", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        let fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        let letterA = "a"
        let letterE = "e"
      expect(wordsArr(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(wordsArr(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

  // ReferenceError: wordsArr is not defined

  // b) Create the function that makes the test pass.

  // Pseudocode
  // create function that takes in an array of words and a string, and returns an array of the words containing the string
  // two parameters, array and letter/string
  // tried to use .includes but appears array.includes does not allow you to search for a fraction of an item, only whole items
  // need to iterate through array, search each value/item for the letter
  // tried .filter to return all of the array elements that contain the letter

    // FIRST ATTEMPT
    
const wordsArr = (array, string) => {
    let newArray = array.filter(element => element.includes(string))
    return newArray
}


    // SECOND ATTEMPT

const wordsArr = (array, letter) => {
    const newArray = []
    for (let i = 0; i < array.length; i++)
    if (array[i].includes(letter)) {
    return newArray.push(array[i])
  }
}

    // THIRD ATTEMPT

const wordsArr = (array, letter) => {
       var sublist = []
       var word
    for (let i = 0; i < array.length; i++) {
       word = array[i]
    if (word.indexOf(letter) > -1) sublist.push(word) 
    return sublist
    }
  }

    // GLUTTON FOR PUNISHMENT ATTEMPT LOL

    const wordsArr = (array, string1, string2) => {
    if (array.find(element => {
    if (element.includes(string1 || string2)) {
    return element
  }


    // NOTES ON PROBLEM #2
    
// Tried this a few ways and could not get it to pass! 
// last error:  - Expected  - 1
//     + Received  + 0

//     Array [
//       "Mango",
//   -   "Apricot",
//       "Peach",
//     ]
// Moving on and will come back and try refactoring again




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        const hand4 = [7, 2, 7, 2, 7]
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
  })

  //  ReferenceError: fullHouse is not defined

  //A full house is exactly one pair and one three of a kind.

    // b) Create the function that makes the test pass.

    // Pseudocode:
    // create a function that takes in an array of 5 numbers and determines whether the numbers have one pair of the smae number and three of the same number
    // one parameter, array
    // returning a boolean value
    // most likely use a for loop and conditional statement
    // use /length to iterate
    // tried .slice but test failed with "expected true received false"
    // refactored and switched the return values, same error but opposite
    // 

        // FIRST ATTEMPT

    const fullHouse = (array) => {
        const copy = array.slice();
        for(let i = 0; i < array.length; ){
           const el = copy.splice(i, 1)[0];
           if(copy.includes(el)){
              copy.splice(copy.indexOf(el), 1);
              if(copy.includes(el)){
                 return false;
              }
           }else{
              i++;
           }
        };
        return true;
     };

    
    // SECOND ATTEMPT

    // Tried another method found online using an empty variable to hold the count of each value
    // used for loop to iterate through the array
    // created index for object values 
    // created variable for values 
    // created conditional for values to evaluate the values against the full house numbers 
    // return true or false 

     const fullHouse = (array) => {
        let countObj = {}
        for(let x of array){
          countObj[x] = (countObj[x] || 0) + 1;
        }
        let vals = Object.values(countObj);
        if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
          return true;
        }
        return false;
      }


