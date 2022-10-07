let uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
let lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbolsArray = ['~', '\'', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '\\', '/', ':', ';', '\"', '<', '>', ',', '.', '?'];
let password = '';



let passwordButton = document.getElementById('password-button');

// let lowercaseIncluded = document.getElementById('lowercase').checked;
// let uppercaseIncluded = document.getElementById('uppercase').checked;
// let numbersIncluded = document.getElementById('numbers').checked;
// let symbolsIncluded = document.getElementById('symbols').checked;


let passwordLength = 15;
let uppercaseIncluded = true; 
let lowercaseIncluded = true;
let numbersIncluded = true;
let symbolsIncluded = true;



//let allIncludedCharacters = [];


//an array with arrays corresponding to is they are included or not
let arraysIncludedCheck = [
    [uppercaseIncluded, uppercaseArray],
    [lowercaseIncluded, lowercaseArray],
    [numbersIncluded, numbersArray],
    [symbolsIncluded, symbolsArray],
]


let arrCount = 0;
let arrayList = [];

//makes an arrays of arrays which are included in a password
for (let i = 0; i < 4; i++){
    if(arraysIncludedCheck[i][0] == true){
        arrayList[arrCount] = arraysIncludedCheck[i][1];
        arrCount++;
    }
}


//generates password by first choosing a random array and then choosing a random element of an array
for (let i = 0; i < passwordLength; i++) {
    //random array
    let randArray = arrayList[Math.floor(Math.random() * arrCount)];
    //random character from that array
    let randArrayChar = randArray[Math.floor(Math.random() * randArray.length)];
    //checks if a new character is the same as the previous
    if ((password.length > 0) && (randArrayChar === password[password.length-1])){
        console.log(randArrayChar + "   " + password.length);
        do {
            randArrayChar = randArray[Math.floor(Math.random() * randArray.length)];
        } while (randArrayChar === password[password.length-1])
    }

    password = password + randArrayChar;



    // if ((password.length > 0) && (password[i] === password[i-1])){
    //     do {
    //         password[i] 
    //         let randArray = arrayList[Math.floor(Math.random() * arrCount)];
    //         console.log(Math.floor(Math.random() * arrCount));
    //         console.log(randArray);
    //         password = password + randArray[Math.floor(Math.random() * randArray.length)];
    //     }while(password[i] === password[i-1]);
    // }
}



// for (let i = 0; i < 4; i++){
//     if(arraysIncludedCheck[i][0] == true){
//         allIncludedCharacters = allIncludedCharacters.concat(arraysIncludedCheck[i][1]);
//     }
// }


// for (let i = 0; i < passwordLength; i++){
//     let randomFromAllIncludedChars = Math.floor(Math.random() * allIncludedCharacters.length);
//      password = password + allIncludedCharacters[randomFromAllIncludedChars];
// }


console.log(password);
let documentPassword = document.getElementById('password');
documentPassword.textContent = password;




