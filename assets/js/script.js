/*//create array of words
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
alert("Good Job! The secret word was " + word);*/


/*document.getElementById("button").addEventListener('click', () => {
switch (new letter()) {
    case  "A":
        lettersInput = "A";
        console.log("A");
        break;
    case  "B":
        lettersInput = "B";
        console.log("B");
        break;          
    }

});*/
[...document.getElementsByTagName("button")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      // calling the methods
      // this.id will be the id of the clicked button
      // there is a method in the object by same name, which will be trigger
      obj[this.id]();
    })
  })

var obj = {
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