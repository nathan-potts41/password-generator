var integer = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '&', '?', '/', '=', '+'];
var allChars = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {

    var getPasswordLength = function () {
        var pwdLength = parseInt(prompt("How long would you like your password to be in length?"));
        console.log(pwdLength);
        if (pwdLength < 8) {
            //const parsed = parseInt(x, base);
            alert("Password can't be less than 8 characters.");
            return getPasswordLength();
        }
        if (pwdLength > 128) {
            alert("Password can't be more than 128 characters.");
            return getPasswordLength();
        }
        if (isNaN(pwdLength)) {
            alert('Password Length must be provided as a number!');
        }
        return pwdLength
    }

    var passwordLength = getPasswordLength()
    console.log(passwordLength)


    var getPasswordAllChars = function () {
        var pwdLowerCase = confirm("Would you like to include lowercase letters?");
        if (pwdLowerCase === true)
            allChars = allChars.concat(lowercase);
        // console.log(pwdLowerCase);
        // console.log(allChars);

        var pwdUpperCase = confirm("Would you like to include uppercase letters?");

        if (pwdUpperCase === true)
            allChars = allChars.concat(uppercase);
        // console.log(pwdUpperCase);
        // console.log(allChars);

        var pwdInteger = confirm("Would you like to include numbers?");
        if (pwdInteger === true)
            allChars = allChars.concat(integer);
        // console.log(pwdInteger);
        // console.log(allChars);

        var pwdSpecialChars = confirm("Would you like to include special characters?");
        if (pwdSpecialChars === true)
            allChars = allChars.concat(special);
        // console.log(pwdSpecialChars);
        // console.log(allChars);
    }

    getPasswordAllChars();
    console.log(allChars);

    // Create a Math.random function to generate random numbers
    // allChar[0 - (allChar.length - 1)]

    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * Math.floor(allChars.length - 1));
        var fetchStuff = allChars[randomNumber];
        password = password + fetchStuff;
    }

    console.log(password)

    passwordText.value = password;
    //console.log('We dun generated a password');

    allChars = [];
}


generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button 
