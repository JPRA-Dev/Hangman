/* [...document.getElementsByTagName("button")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      // calling the methods
      // this.id will be the id of the clicked button
      // there is a method in the object by same name, which will be trigger
      letter[this.id]();
    })
  })

var letter = {
    A: function() {
        console.log('A')
    },
    B: function() {
        console.log('B')
    },
    C: function() {
        console.log('C')
    },
    D: function() {
        console.log('D')
    },
    E: function() {
        console.log('E')
    },
    F: function() {
        console.log('F')
    },
    G: function() {
        console.log('G')
    },
    H: function() {
        console.log('H')
    },
    I: function() {
        console.log('I')
    },
    J: function() {
        console.log('J')
    },
    K: function() {
        console.log('K')
    },
    L: function() {
        console.log('L')
    },
    M: function() {
        console.log('M')
    },
    N: function() {
        console.log('N')
    },
    O: function() {
        console.log('O')
    },
    P: function() {
        console.log('P')
    },
    Q: function() {
        console.log('Q')
    },
    R: function() {
        console.log('R')
    },
    S: function() {
        console.log('S')
    },
    T: function() {
        console.log('T')
    },
    U: function() {
        console.log('U')
    },
    V: function() {
        console.log('V')
    },
    W: function() {
        console.log('W')
    },
    X: function() {
        console.log('X')
    },
    Y: function() {
        console.log('Y')
    },
    Z: function() {
        console.log('Z')
    }
}
 */


//*************************************** CODE FOR THE IMAGES *****************************************************//


let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");
let image5 = document.getElementById("img5");
let image6 = document.getElementById("img6");
let image7 = document.getElementById("img7");



image1.style.display = 'block';


//*************************************** CODE FOR INSTRUCTIONS BUTTON *****************************************************//


let instructions = document.getElementById("instructions");
instructions.style.display = 'none'

document.getElementById("instructionsButton").addEventListener("click", () =>{
    if (instructions.style.display == 'none') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
});


//*************************************** MAIN CODE *****************************************************//


//Array with Web Dev possible words
var words = ["GITHUB", "JAVASCRIPT", "HTML", "CSS"];


var wordToGuess = words[Math.floor(Math.random()*words.length)];
//Random word from array = word to guess
console.log(wordToGuess);

var lettersToGuess = wordToGuess.split('');
//Word to guess split into array of letters

var currentLetters = [];
//Array of letters showing current right and unknown letters

var currentWord = "";
//Actual state of the word to guess (with space to isolate letters)

function changeCurrentWord() {
    currentWord = "";
    for (x=0;x<currentLetters.length;x++){
        currentWord = currentWord + currentLetters[x] + " ";
    }
}
//Function to update Current Word as Current Letters change

var wrongLetters = [];
//Letters previously guessed but incorrect

var wrong = "";
//Wrong letters, for displaying purposes

function changeWrong(){
    wrong = "";
    for (x=0; x<wrongLetters.length;x++){
        wrong = wrong + wrongLetters[x] + " ";
    }
}







//*************************************** CODE THAT MAKES THE GAME WORK *****************************************************//



for (x=0; x<lettersToGuess.length; x++){
    if (lettersToGuess[x] == " "){
        currentLetters.push (" ");
    }
    else {
        currentLetters.push ("_");
    }
}
//Create starting point: current letters are unknown, all replaced by underscores.

changeCurrentWord();
//Update Current state of guess to starting point

document.getElementById("RightLetters").innerHTML = "The word is : " + currentWord;
//Display number of letters to guess


//debugging
console.log(currentWord);
console.log(lettersToGuess);

//function to update the number of letters left to guess
function lettersRemainingToGuess(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

//let lettersRemainingToGuess = lettersToGuess.length - changeCurrentWord();
console.log(lettersRemainingToGuess(currentLetters, "_"));

document.getElementById("try").addEventListener("click", () =>{
//create click function to check letter currently being guessed  
    if (wordToGuess.includes(document.getElementById("InputText").value.toUpperCase())){
    //When the word has the letter the player guessed
        for (i = 0; i < lettersToGuess.length; i++){ 
            if (lettersToGuess[i] === document.getElementById("InputText").value.toUpperCase()) {  
                currentLetters[i] = document.getElementById("InputText").value.toUpperCase();
                changeCurrentWord();
                
            }
            // add newly guessed letter to current state of guessed word
        };
        
        //debugging
        console.log(currentWord);
        console.log(lettersToGuess.length);
        console.log(lettersRemainingToGuess(currentLetters, "_"));
        console.log(currentLetters);
        console.log(lettersToGuess);

        if (lettersRemainingToGuess(currentLetters, "_") == lettersToGuess.length) {
            alert("Please choose a letter first");

        } else if (lettersRemainingToGuess(currentLetters, "_") > 0) {
            alert("Well done! Only " + lettersRemainingToGuess(currentLetters, "_") + " letters to go!");
        
        } else {
            alert("Well done! You guessed all the letters!");
            location.reload();
        }
        //debugging
        document.getElementById("RightLetters").innerHTML = currentWord;
        // update state of word to guess
          
    }

    else {
    // if the word doesn't have the guessed letter
        wrongLetters.push(document.getElementById("InputText").value.toUpperCase());
        // add guessed letter to list of mistakes
        changeWrong();
        //update list of mistakes
        document.getElementById("WrongLetters").innerHTML = "You already tried : " + wrong;
        // update list of mistakes shown on screen
        if (wrongLetters.length == 1) {
            image1.style.display = 'none';
            image2.style.display = 'block';
        } else if (wrongLetters.length == 2) {
            image2.style.display = 'none';
            image3.style.display = 'block';
        } else if (wrongLetters.length == 3) {
            image3.style.display = 'none';
            image4.style.display = 'block';
        } else if (wrongLetters.length == 4) {
            image4.style.display = 'none';
            image5.style.display = 'block';
        } else if (wrongLetters.length == 5) {
            image5.style.display = 'none';
            image6.style.display = 'block';
        } else {
            image6.style.display = 'none';
            image7.style.display = 'block';
            alert("GAME OVER");
            location.reload();
        }
        //display an image according to number of wrong tries and alert lose when lost
    }
});

//*************************************** CODE FOR HINTS BUTTON *****************************************************//

let hintCss = document.getElementById("CSS");
let hintJavascript = document.getElementById("JAVASCRIPT");
let hintHtml = document.getElementById("HTML");
let hintGithub = document.getElementById("GITHUB");
hintCss.style.display = "none";
hintJavascript.style.display = "none";
hintHtml.style.display = "none";
hintGithub.style.display = "none";
console.log(wordToGuess);

document.getElementById("hintButton").addEventListener("click", () =>{
    if ((hintCss.style.display == "none") && (hintJavascript.style.display == "none") && (hintHtml.style.display == "none") && (hintGithub.style.display == "none")) {
        switch (wordToGuess) {
            case "CSS":
                hintCss.style.display = "block";
                hintJavascript.style.display = "none";
                hintHtml.style.display = "none";
                hintGithub.style.display = "none";
                break;
            case "JAVASCRIPT":
                hintCss.style.display = "none";
                hintJavascript.style.display = "block";
                hintHtml.style.display = "none";
                hintGithub.style.display = "none";
                break;
            case "HTML":
                hintCss.style.display = "none";
                hintJavascript.style.display = "none";
                hintHtml.style.display = "block";
                hintGithub.style.display = "none";
                break;
            case "GITHUB":
                hintCss.style.display = "none";
                hintJavascript.style.display = "none";
                hintHtml.style.display = "none";
                hintGithub.style.display = "block";
                break;
            default:
                hintCss.style.display = "none";
                hintJavascript.style.display = "none";
                hintHtml.style.display = "none";
                hintGithub.style.display = "none";
                break;
        }
    } else {
        hintCss.style.display = "none";
        hintJavascript.style.display = "none";
        hintHtml.style.display = "none";
        hintGithub.style.display = "none";
    }
   
});
// Need to add hangman, message when succeeded, message when losing, update readme, add colors and images