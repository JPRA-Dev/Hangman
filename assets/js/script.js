//create array of words
var words = ["javascript", "html", "github", "google"]

//pick a ramdom word
var ramdomWord = words[Math.floor(Math.ramdom() * words.length)];

//show how many letters are in the word
var answerArray = [];
for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
}

//how many letters are left
var remainingLetters = word.length;


//MAIN CODE//

while (remainingLetters > 0) {
    //show the progress
    alert (answerArray.join(" "));

    //get guess
    var guess = prompt("Guess a letter, or click cancel to give up and stop playing.")

    //if the guess is blank
    if (guess == null) {
        break;
    
    //if the guess is more than one letter or no letters
    } else if (guess.length !== 1) {
        alert("Please enter one letter at a time");
    // see if the letter is in the array
    } else {
        for (var j = 0; j < word.length; j++) {
            //if the letter they guesses is in the word
            if (word[j] === guess) {
                answerArray[j] = guess;
                //subtract one letter from the remaining letters
                remainingLetters--;
                }
            }
        }
    }

//let player know the secret word
alert(answerArray.join(" "));

//congratulate
alert("Good Job! The secret word was " + word);
