

var Champions = ["AATROX","AHRI","AKALI","ALISTAR","AMUMU","ANIVIA","ANNIE","APHELIOS","ASHE","AURELION SOL","AZIR","BARD","BLITZCRANK","BRAND","BRAUM","CAITLYN","CAMILLE","CASSIOPEIA","CHO GATH","CORKI","DARIUS","DIANA","DR MUNDO","DRAVEN","EKKO","ELISE","EVELYNN","EZREAL","FIDDLESTICKS","FIORA","FIZZ","GALIO","GANGPLANK","GAREN","GNAR","GRAGAS","GRAVES","HECARIM","HEIMERDINGER","ILLAOI","IRELIA","IVERN","JANNA","JARVAN IV","JAX","JAYCE","JHIN","JINX","KAI SA","KALISTA","KARMA","KARTHUS","KASSADIN","KATARINA","KAYLE","KAYN","KENNEN","KHA ZIX","KINDRED","KLED","KOG MAW","LEBLANC","LEE SIN","LEONA","LILLIA","LISSANDRA","LUCIAN","LULU","LUX","MALPHITE","MALZAHAR","MAOKAI","MASTER YI","MISS FORTUNE","MORDEKAISER","MORGANA","NAMI","NASUS","NAUTILUS","NEEKO","NIDALEE","NOCTURNE","NUNU AND WILLUMP","OLAF","ORIANNA","ORNN","PANTHEON","POPPY","PYKE","QIYANA","QUINN","RAKAN","RAMMUS","REK SAI","RELL","RENEKTON","RENGAR","RIVEN","RUMBLE","RYZE","SAMIRA","SEJUANI","SENNA","SERAPHINE","SETT","SHACO","SHEN","SHYVANA","SINGED","SION","SIVIR","SKARNER","SONA","SORAKA","SWAIN","SYLAS","SYNDRA","TAHM KENCH","TALIYAH","TALON","TARIC","TEEMO","THRESH","TRISTANA","TRUNDLE","TRYNDAMERE","TWISTED FATE","TWITCH","UDYR","URGOT","VARUS","VAYNE","VEIGAR","VEL KOZ","VI","VIKTOR","VLADIMIR","VOLIBEAR","WARWICK","WUKONG","XAYAH","XERATH","XIN ZHAO","YASUO","YONE","YORICK","YUUMI","ZAC","ZED","ZIGGS","ZILEAN","ZOE","ZYRA"];
//Array with possible words

var WordToGuess = Champions[Math.floor(Math.random()*Champions.length)];
//Random word from array = word to guess

var LettersToGuess = WordToGuess.split('');
//Word to guess split into array of letters

var CurrentLetters = [];
//Array of letters showing current right and unknown letters

var CurrentWord = "";
//Actual state of the word to guess (with space to isolate letters)

function ChangeCurrentWord() {
    CurrentWord = "";
    for (x=0;x<CurrentLetters.length;x++){
        CurrentWord = CurrentWord + CurrentLetters[x] + " ";
    }
}
//Function to update Current Word as Current Letters change

var WrongLetters = [];
//Letters previously guessed but incorrect

var Wrong = "";
//Wrong letters, for displaying purposes

function ChangeWrong(){
    Wrong = "";
    for (x=0; x<WrongLetters.length;x++){
        Wrong = Wrong + WrongLetters[x] + " ";
    }
}

//Below is the code that makes the game work
for (x=0; x<LettersToGuess.length; x++){
    if (LettersToGuess[x] == " "){
        CurrentLetters.push (" ");
    }
    else {
        CurrentLetters.push ("_");
    }
}
//Create starting point: current letters are unknown, all replaced by underscores.

ChangeCurrentWord();
//Update Current state of guess to starting point

document.getElementById("RightLetters").innerHTML = "The word is : " + CurrentWord;
//Display number of letters to guess


console.log(CurrentWord);
console.log(LettersToGuess);
//debugging

document.getElementById("try").addEventListener("click", () =>{
//create click function to check letter currently being guessed  
    if (WordToGuess.includes(document.getElementById("InputText").value.toUpperCase())){
    //When the word has the letter the player guessed
        for (i = 0; i < LettersToGuess.length; i++){ 
            if (LettersToGuess[i] === document.getElementById("InputText").value.toUpperCase()) {  
                CurrentLetters[i] = document.getElementById("InputText").value.toUpperCase();
                ChangeCurrentWord();
                
            }
            // add newly guessed letter to current state of guessed word
        };
        console.log(CurrentWord);
        console.log(CurrentLetters);
        console.log(LettersToGuess);
        //debugging
        document.getElementById("RightLetters").innerHTML = CurrentWord;
        // update state of word to guess
          
    }

    else {
    // if the word doesn't have the guessed letter
        WrongLetters.push(document.getElementById("InputText").value.toUpperCase());
        // add guessed letter to list of mistakes
        ChangeWrong();
        //update list of mistakes
        document.getElementById("WrongLetters").innerHTML = "You already tried : " + Wrong;
        // update list of mistakes shown on screen

        if (WrongLetters.length == 6) {
            alert("You lose!");
        }
        //display an image according to number of wrong tries and alert lose when lost
    }

    for (i = 0; i < LettersToGuess.length; i++) {
		if (CurrentLetters[i] !== LettersToGuess[i]) {
            break;
        }
        else {
            alert("You win!");
        }
	}  
    //DOESNT WORK: win if one letter correct. Check if won (if any letter doesn't match, no loop. if last letter matches, win.)

});
// Need to add hangman, message when succeeded, message when losing, update readme, add colors and images