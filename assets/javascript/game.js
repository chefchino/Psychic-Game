const letter = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var cpick ;
var wins = 0;
var loses = 0;
var guessLeft = 9;
var counter = 0;
var guessed =[];
var userPick ;


function reset(){
    cpick = letter[Math.floor(Math.random() *letter.length)];
    guessLeft =9;
    guessed =[];
    $("#guessed").empty;
} 

function startGame (){
   

    cpick = letter[Math.floor(Math.random() *letter.length)];
    console.log("cpick", cpick);
    
    document.addEventListener("keypress", (event) => {

        let userPick = String.fromCharCode(event.keyCode);
      
        console.log("userpick", userPick);

        if (cpick === userPick){
            wins++;
            console.log("userc",userPick == cpick);
            alert("YOU GOT IT!");
            document.getElementById("wins").textContent = wins;
            reset();
            
        }
        else { guessLeft--; guessed.push(userPick);
            document.getElementById("guessLeft").textContent = guessLeft;
            document.getElementById("guessed").textContent =guessed;
         
        }
           
        console.log(guessed);
            
        
        if (guessLeft === counter){
            loses++;
            alert("NOPE");
            reset();
        }
        document.getElementById("loses").textContent = loses;

        console.log("wins", wins);
        console.log("loses", loses);
        console.log("guessleft", guessLeft);
        // console.log("guessed", guessed[""]);
        console.log("cpick1", cpick);
    })

    
    

}
startGame();