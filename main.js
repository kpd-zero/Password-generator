let uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
let lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbolsArray = ['~', '\'', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '\\', '/', ':', ';', '\"', '<', '>', ',', '.', '?'];
let password = '';
let passwordLength = 0;
let uppercaseIncluded = true; 
let lowercaseIncluded = true;
let numbersIncluded = true;
let symbolsIncluded = true;
let arraysIncludedCheck = [];//an array with arrays corresponding to if they are included or not
let arrCount = 0;
let arrayList = [];
let passwordButton = document.getElementById('password-button');
let copyButton = document.getElementById('copy-button');
let documentPassword = document.getElementById('password');


const setValues = () => {
    passwordLength = document.getElementById("password-length").value;
    if (document.getElementById('lowercase').checked) {
        lowercaseIncluded = true;
    } else {
        lowercaseIncluded = false;
    }
    if (document.getElementById('uppercase').checked) {
        uppercaseIncluded = true;
    } else {
        uppercaseIncluded = false;
    }
    if (document.getElementById('numbers').checked) {
        numbersIncluded = true;
    } else {
        numbersIncluded = false;
    }
    if (document.getElementById('symbols').checked) {
        symbolsIncluded = true;
    } else {
        symbolsIncluded = false;
    }
    arraysIncludedCheck = [
        [uppercaseIncluded, uppercaseArray],
        [lowercaseIncluded, lowercaseArray],
        [numbersIncluded, numbersArray],
        [symbolsIncluded, symbolsArray],
    ]
}

const checkArraysIncluded = () => {
    arrCount = 0;
    //makes an arrays of arrays which are included in a password
    for (let i = 0; i < 4; i++){
        if(arraysIncludedCheck[i][0] == true){
            arrayList[arrCount] = arraysIncludedCheck[i][1];
            arrCount++;
        }
    }
    if (arrCount === 0) {
        alert("No sets of symbols included. Please, include at least one.");
    }
}

const generatePassword = () => {
    password = "";//resets passwword
    //generates password by first choosing a random array and then choosing a random element of an array
    for (let i = 0; i < passwordLength; i++) {
        //random array
        let randArray = arrayList[Math.floor(Math.random() * arrCount)];
        //random character from that array
        let randArrayChar = randArray[Math.floor(Math.random() * randArray.length)];
        //checks if a new character is the same as the previous
        if ((password.length > 0) && (randArrayChar === password[password.length-1])){
            do {
                randArrayChar = randArray[Math.floor(Math.random() * randArray.length)];
            } while (randArrayChar === password[password.length-1])
        }

        password = password + randArrayChar;
    }
}

const setPassword = () => {
    setValues();
    checkArraysIncluded();
    generatePassword();
    removeClassCopied();
    documentPassword.textContent = password;
}

const removeClassCopied = () => {
    documentPassword.classList.remove("copied");
}


const copyPassword = () => {
    let elementText = documentPassword.textContent;
    navigator.clipboard.writeText(elementText);
    documentPassword.classList.add("copied");
    setTimeout(removeClassCopied, 1000);
}

passwordButton.addEventListener('click', setPassword);
copyButton.addEventListener('click', copyPassword);