// Assignment code here

const lowerCasesArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCasesArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


function generatePassword() {
 
  let howLong = window.prompt('Please type how long your password you want between 8 to 128 characters.')
    if (howLong <8 || howLong === null || howLong>128){
      window.alert("You need to provide a valid number! Please try again")
      return generatePassword();
    }
  
    console.log(howLong)

  
  const Lower = window.confirm("Do you want to include lowercases? If don't, click 'Cancel' button.");
  const Upper = window.confirm("Do you want to include uppercases? If don't, click 'Cancel' button.")
  const Numbers = window.confirm("Do you want to include numbers? If don't, click 'Cancel' button.")
  const Specials = window.confirm("Do you want to include special characters? If don't, click 'Cancel' button.")


  const typesCount = Lower + Upper + Numbers + Specials;
  if (typesCount === 0) {
    window.alert("You need to provide at least one elements! Please try again")
    return generatePassword();
  }

  console.log(typesCount)

  let emptyPasswordArray = ['']
  if (Lower) {
    emptyPasswordArray = emptyPasswordArray.concat(lowerCasesArray)};
  if (Upper) {
    emptyPasswordArray = emptyPasswordArray.concat(upperCasesArray)};
  if (Numbers) {
    emptyPasswordArray = emptyPasswordArray.concat(numbersArray)};
  if (Specials) {
    emptyPasswordArray = emptyPasswordArray.concat(specialCharacterArray)};

  function shuffleArray(array){
    for(var i =array.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [array[i],array[j]]=[array[j],array[i]];
    }
  }

  shuffleArray(emptyPasswordArray)

  console.log(emptyPasswordArray)

  let buildPassword = []
  console.log(buildPassword);

  for (var i = 1; i < howLong; i ++) {
    const finalPasswords = emptyPasswordArray[Math.floor(Math.random() * howLong )]
    buildPassword.push(finalPasswords)
  }
  return buildPassword.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
